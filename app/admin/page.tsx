'use client';

import { useState, useEffect, useCallback } from 'react';

interface Click {
  t: string;
}

interface ProspectData {
  prospect: string;
  total: number;
  lastClick: string | null;
  clicks: Click[];
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "A l'instant";
  if (minutes < 60) return `Il y a ${minutes} min`;
  if (hours < 24) return `Il y a ${hours}h`;
  if (days === 1) return 'Hier';
  return `Il y a ${days} jours`;
}

function isHot(dateStr: string | null): boolean {
  if (!dateStr) return false;
  const diff = new Date().getTime() - new Date(dateStr).getTime();
  return diff < 2 * 3600000; // moins de 2h
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<ProspectData[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (pwd: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/clicks?pwd=${encodeURIComponent(pwd)}`);
      if (res.status === 401) {
        setError('Mot de passe incorrect');
        setAuthenticated(false);
        localStorage.removeItem('admin_pwd');
        return;
      }
      const json = await res.json();
      if (json.error) {
        setError(json.error);
        return;
      }
      setData(json);
      setAuthenticated(true);
      setError('');
      localStorage.setItem('admin_pwd', pwd);
    } catch {
      setError('Erreur de connexion');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('admin_pwd');
    if (saved) {
      setPassword(saved);
      fetchData(saved);
    }
  }, [fetchData]);

  // Auto-refresh toutes les 30s
  useEffect(() => {
    if (!authenticated) return;
    const interval = setInterval(() => fetchData(password), 30000);
    return () => clearInterval(interval);
  }, [authenticated, password, fetchData]);

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
          <h1 className="text-xl font-bold text-gray-900 mb-6">Tracker — Connexion</h1>
          <form onSubmit={(e) => { e.preventDefault(); fetchData(password); }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              {loading ? '...' : 'Accéder'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const totalClicks = data.reduce((sum, p) => sum + p.total, 0);
  const hotProspects = data.filter((p) => isHot(p.lastClick));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Tracker de clics</h1>
          <button
            onClick={() => fetchData(password)}
            className="text-sm text-primary hover:underline"
          >
            Rafraichir
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-gray-900">{data.length}</div>
            <div className="text-sm text-gray-500">Prospects</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-gray-900">{totalClicks}</div>
            <div className="text-sm text-gray-500">Clics total</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-primary">{hotProspects.length}</div>
            <div className="text-sm text-gray-500">Chauds (&lt;2h)</div>
          </div>
        </div>

        {data.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-sm text-center text-gray-500">
            Aucun clic pour le moment
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Prospect</th>
                  <th className="text-center px-6 py-4 text-sm font-medium text-gray-500">Clics</th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">Dernier clic</th>
                </tr>
              </thead>
              <tbody>
                {data.map((p) => (
                  <tr key={p.prospect} className={`border-b border-gray-50 ${isHot(p.lastClick) ? 'bg-orange-50' : ''}`}>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">
                        {isHot(p.lastClick) && <span className="mr-2" title="Clic récent — appeler maintenant !">🔥</span>}
                        {p.prospect}
                      </span>
                    </td>
                    <td className="text-center px-6 py-4 text-gray-600">{p.total}</td>
                    <td className="text-right px-6 py-4 text-sm text-gray-500">
                      {p.lastClick ? timeAgo(p.lastClick) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-xs text-gray-400 text-center mt-6">
          Rafraichissement auto toutes les 30s
        </p>
      </div>
    </div>
  );
}
