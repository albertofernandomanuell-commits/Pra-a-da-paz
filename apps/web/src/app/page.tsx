'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-gold via-brand-white to-brand-gold-light dark:from-brand-black dark:via-brand-black-light dark:to-brand-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="text-2xl font-bold text-brand-black dark:text-brand-gold">
          🕌 Praça da Paz
        </div>
        <div className="flex gap-4">
          <Link
            href="/auth/login"
            className="px-6 py-2 rounded-lg text-brand-black hover:bg-brand-gold-light transition"
          >
            Entrar
          </Link>
          <Link
            href="/auth/signup"
            className="px-6 py-2 rounded-lg bg-brand-black text-white hover:bg-brand-black-light transition"
          >
            Cadastro
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-black dark:text-brand-white">
          A Praça Digital de Serviços da África
        </h1>
        <p className="text-xl md:text-2xl text-brand-black-light dark:text-gray-400 mb-8 max-w-2xl">
          Conecte-se com profissionais locais, compartilhe seus serviços e descubra oportunidades
          na sua cidade.
        </p>
        <div className="flex gap-4">
          <Link
            href="/auth/signup"
            className="px-8 py-3 bg-brand-black text-white rounded-lg font-semibold hover:bg-brand-black-light transition flex items-center gap-2"
          >
            Comece Agora <ArrowRight size={20} />
          </Link>
          <Link
            href="#features"
            className="px-8 py-3 border-2 border-brand-black rounded-lg font-semibold hover:bg-brand-black hover:text-white transition dark:border-brand-gold dark:hover:bg-brand-gold dark:hover:text-brand-black"
          >
            Saiba Mais
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-16 text-brand-black dark:text-brand-white">
          Por que Praça da Paz?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: MapPin, title: 'Localmente Focado', desc: 'Encontre profissionais perto de você' },
            { icon: Users, title: 'Comunidade Real', desc: 'Conexões autênticas na sua cidade' },
            { icon: Shield, title: 'Verificado', desc: 'Identidade verificada para confiança' },
            { icon: Sparkles, title: 'Oportunidades', desc: 'Descubra trabalho e serviços locais' },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="p-6 bg-white dark:bg-brand-black-light rounded-xl shadow-lg hover:shadow-xl transition">
                <Icon className="w-12 h-12 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-brand-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Pronto para Conectar?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de profissionais e clientes em toda a África.
        </p>
        <Link
          href="/auth/signup"
          className="inline-block px-8 py-3 bg-brand-gold text-brand-black rounded-lg font-semibold hover:bg-brand-gold-light transition"
        >
          Cadastre-se Gratuitamente
        </Link>
      </section>
    </div>
  );
}
