'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, token, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !token) {
      router.push('/login');
    }
  }, [token, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-zinc-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-zinc-600 dark:text-zinc-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!token) {
    return null;
  }

  return <>{children}</>;
}
