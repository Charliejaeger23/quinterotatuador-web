'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  return (
    <div className="flex min-h-screen">
      {session?.user?.role === 'admin' && (
        <aside className="w-64 bg-gray-900 text-white p-4">
          <nav className="space-y-2">
            <Link href="/admin" className="block hover:underline">Dashboard</Link>
          </nav>
        </aside>
      )}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
