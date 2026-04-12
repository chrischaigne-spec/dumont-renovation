import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

const redis = Redis.fromEnv();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'esprit2026';

export async function GET(request: NextRequest) {
  const pwd = request.nextUrl.searchParams.get('pwd');
  if (pwd !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const prospects = await redis.smembers('prospects') as string[];

    const clicks = await Promise.all(
      prospects.map(async (prospect) => {
        const raw = await redis.lrange(`clicks:${prospect}`, 0, -1) as string[];
        const entries = raw.map((r) => {
          if (typeof r === 'string') {
            try { return JSON.parse(r); } catch { return { t: r }; }
          }
          return r;
        });
        return {
          prospect,
          total: entries.length,
          lastClick: entries[0]?.t || null,
          clicks: entries,
        };
      })
    );

    clicks.sort((a, b) => {
      if (!a.lastClick) return 1;
      if (!b.lastClick) return -1;
      return new Date(b.lastClick).getTime() - new Date(a.lastClick).getTime();
    });

    return NextResponse.json(clicks);
  } catch (e) {
    return NextResponse.json({ error: 'Redis not configured' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const pwd = request.nextUrl.searchParams.get('pwd');
  if (pwd !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const prospect = request.nextUrl.searchParams.get('prospect');
  if (!prospect) {
    return NextResponse.json({ error: 'Missing prospect parameter' }, { status: 400 });
  }

  try {
    const id = prospect.toLowerCase().trim();
    await redis.del(`clicks:${id}`);
    await redis.srem('prospects', id);
    return NextResponse.json({ ok: true, deleted: id });
  } catch (e) {
    return NextResponse.json({ error: 'Redis error' }, { status: 500 });
  }
}
