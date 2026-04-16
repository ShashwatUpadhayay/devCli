'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
        {/* Header */}
        <header className="bg-white dark:bg-zinc-900 shadow">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
          {user && (
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Welcome back,</p>
                  <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">{user.name || 'User'}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-700">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-1">Email</p>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-white break-all">{user.email}</p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-1">User ID</p>
                    <p className="font-semibold text-zinc-900 dark:text-white font-mono text-sm">{user.id}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-700">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Protected Route Example</p>
                  <p className="text-zinc-900 dark:text-zinc-100">
                    This page is only accessible when authenticated. Try logging out and you'll be redirected to the login page.
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
