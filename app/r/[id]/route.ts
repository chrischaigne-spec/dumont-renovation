import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

const redis = Redis.fromEnv();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id.toLowerCase().trim();

  if (id) {
    try {
      await redis.lpush(`clicks:${id}`, JSON.stringify({
        t: new Date().toISOString(),
        src: 'dumont',
      }));
      await redis.sadd('prospects', id);
    } catch (e) {
      console.error('Redis error:', e);
    }
  }

  return NextResponse.redirect(new URL('/', request.url));
}
