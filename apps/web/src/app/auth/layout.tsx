'use client';

import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-gold via-brand-white to-brand-gold-light dark:from-brand-black dark:via-brand-black-light dark:to-brand-black px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-brand-black dark:text-brand-gold">🕌</h1>
          <h2 className="text-3xl font-bold mt-4">Praça da Paz</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">A Praça Digital de Serviços</p>
        </div>
        {children}
      </div>
    </div>
  );
}
