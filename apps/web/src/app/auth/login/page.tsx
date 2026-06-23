'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement login logic
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 dark:border-brand-black-light rounded-lg focus:outline-none focus:border-brand-gold dark:focus:border-brand-gold transition"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-semibold mb-2">Senha</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border-2 border-gray-200 dark:border-brand-black-light rounded-lg focus:outline-none focus:border-brand-gold dark:focus:border-brand-gold transition"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-brand-gold"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="rounded" />
            Lembrar-me
          </label>
          <Link href="#" className="text-sm text-brand-gold hover:underline">
            Esqueci a Senha
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-brand-black text-white rounded-lg font-semibold hover:bg-brand-black-light transition disabled:opacity-50"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
        <span className="text-sm text-gray-600 dark:text-gray-400">ou</span>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>

      {/* Social Login */}
      <button className="w-full py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-brand-black-light transition">
        Entrar com Google
      </button>

      {/* Sign Up Link */}
      <p className="text-center text-sm">
        Não tem conta?{' '}
        <Link href="/auth/signup" className="text-brand-gold hover:underline font-semibold">
          Cadastre-se aqui
        </Link>
      </p>
    </div>
  );
}
