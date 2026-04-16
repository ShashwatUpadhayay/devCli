'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { user, token, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.refresh();
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-linear-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950 min-h-screen">
      <main className="flex flex-col items-center justify-center gap-8 text-center px-6 max-w-2xl">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-zinc-900 dark:text-white">
            JWT Auth
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A minimal and interactive authentication demo with Next.js
          </p>
        </div>

        {token && user ? (
          // Authenticated state
          <div className="w-full max-w-sm bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 border border-zinc-200 dark:border-zinc-800">
            <div className="mb-6">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Logged in as</p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{user.name || user.email}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/dashboard"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition text-center"
              >
                Go to Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          // Unauthenticated state
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Link
              href="/login"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition text-center"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-6 py-3 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-medium rounded-lg transition text-center"
            >
              Sign Up
            </Link>
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 w-full max-w-sm text-left">
          <p className="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-3">Features</p>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">✓</span>
              <span>JWT token management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">✓</span>
              <span>Protected routes with automatic redirect</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">✓</span>
              <span>Auth context & hooks for easy integration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">✓</span>
              <span>Persistent authentication with localStorage</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
