'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Phone, Lock, Eye, EyeOff, MapPin } from 'lucide-react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement signup logic
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Primeiro Nome</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
              <input
                type="text"
                name="firstName"
                placeholder="João"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 dark:border-brand-black-light rounded-lg focus:outline-none focus:border-brand-gold transition"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Último Nome</label>
            <input
              type="text"
              name="lastName"
              placeholder="Silva"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-200 dark:border-brand-black-light rounded-lg focus:outline-none focus:border-brand-gold transition"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 dark:border-brand-black-light rounded-lg focus:outline-none focus:border-brand-gold transition"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold mb-2">Telefone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
            <input
              type="tel"
              name="phone"
              placeholder="+244 9 XXXX XXXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 dark:border-brand-black-light rounded-lg focus:outline-none focus:border-brand-gold transition"
              required
            />
          </div>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-semibold mb-2">Cidade</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 dark:border-brand-black-light rounded-lg focus:outline-none focus:border-brand-gold transition"
              required
            >
              <option value="">Escolha uma cidade</option>
              <option value="Luanda">Luanda</option>
              <option value="Benguela">Benguela</option>
              <option value="Cabinda">Cabinda</option>
            </select>
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold mb-2">Senha</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-brand-gold w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-2 border-2 border-gray-200 dark:border-brand-black-light rounded-lg focus:outline-none focus:border-brand-gold transition"
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

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-semibold mb-2">Confirmar Senha</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-gray-200 dark:border-brand-black-light rounded-lg focus:outline-none focus:border-brand-gold transition"
            required
          />
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="mt-1"
            required
          />
          <span>
            Concordo com os{' '}
            <Link href="#" className="text-brand-gold hover:underline">
              Termos de Serviço
            </Link>
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-brand-black text-white rounded-lg font-semibold hover:bg-brand-black-light transition disabled:opacity-50"
        >
          {loading ? 'Cadastrando...' : 'Criar Conta'}
        </button>
      </form>

      {/* Login Link */}
      <p className="text-center text-sm">
        Já tem conta?{' '}
        <Link href="/auth/login" className="text-brand-gold hover:underline font-semibold">
          Entre aqui
        </Link>
      </p>
    </div>
  );
}
