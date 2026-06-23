# 🌍 Praça da Paz - Super Plataforma de Serviços para África

> A maior praça digital de serviços, comunidade e oportunidades para África e Mercados Emergentes

## 🎯 Visão

Construir a plataforma de serviços locais mais confiável de África, conectando pessoas, profissionais e comunidades numa única aplicação.

A **Praça da Paz** não é apenas um marketplace de serviços. É uma praça digital onde qualquer pessoa pode:

✅ Contratar profissionais  
✅ Oferecer serviços  
✅ Publicar pedidos personalizados  
✅ Criar portfólios  
✅ Fazer networking  
✅ Descobrir oportunidades na sua cidade  

## 🌟 Conceito

Praça da Paz é uma mistura inteligente de:

- 🏪 Marketplace de Serviços
- 👥 Rede Social Local
- 💼 Plataforma de Oportunidades
- 🎨 Portfólio Profissional
- 🌐 Comunidade Digital Africana

## 🏆 Diferenciais

| Feature | Descrição |
|---------|-----------|
| ✅ **Identidade Verificada** | Documento + selfie |
| 🏅 **Reputação Real** | Avaliações públicas |
| 📝 **Negociação Transparente** | Tudo fica registado no chat |
| 👥 **Comunidade** | Feed por cidade e bairro |
| 🤝 **Suporte Humano** | Atendimento real |
| 🔧 **Serviços Flexíveis** | Físicos e digitais |
| 🎯 **Serviços Personalizados** | Criar novos serviços livremente |

## 💻 Stack Tecnológico

| Layer | Tecnologia |
|-------|-----------|
| **Frontend** | Next.js 14+ |
| **Mobile** | Flutter |
| **Backend** | Supabase + Edge Functions |
| **Database** | PostgreSQL |
| **Real-time** | Supabase Realtime |
| **Maps** | OpenStreetMap |
| **Notificações** | OneSignal |
| **Email** | Resend |
| **Storage** | Supabase Storage |

## 📁 Estrutura do Projeto

```
pra-a-da-paz/
├── apps/
│   ├── web/                 # Next.js (Web)
│   ├── mobile/              # Flutter (iOS + Android)
│   └── admin/               # Dashboard administrativo
├── packages/
│   ├── shared-ui/           # Componentes reutilizáveis
│   ├── shared-types/        # TypeScript types partilhados
│   └── shared-utils/        # Funções utilitárias
├── backend/
│   ├── supabase/            # Configuração Supabase
│   │   ├── migrations/
│   │   ├── functions/
│   │   └── seed/
│   └── api/                 # API routes (Next.js)
├── docs/                    # Documentação
└── .github/
    └── workflows/           # CI/CD GitHub Actions
```

## 🗺️ Roadmap

### 📍 Fase 1: Validação em Luanda
- MVP com features core
- Integração Supabase
- Chat básico
- Marketplace funcional

### 🇦🇴 Fase 2: Expansão Angola
- Multi-cidade
- Notificações push
- Modo offline
- Integração pagamentos

### 🌍 Fase 3: Expansão África
- Multi-idioma (Kimbundu, Swahili, Yoruba, etc)
- Multi-moeda
- Localização regional

### 🌐 Fase 4: Expansão Global
- Internacionalização completa
- Suporte múltiplas regiões

## 🎨 Design System

### Cores Principais
- **🟡 Dourado**: `#D4AF37` - Primária
- **⚫ Preto**: `#1A1A1A` - Secundária
- **🔴 Vermelho Escuro**: `#8B0000` - Accent
- **⚪ Branco**: `#FFFFFF` - Background

### Características
- Design elegante e moderno
- Animações suaves
- Modo escuro nativo
- Interface premium
- Ícones inspirados na cultura angolana

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- Flutter SDK
- Git

### Setup Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/albertofernandomanuell-commits/Pra-a-da-paz.git
cd pra-a-da-paz

# Instale dependências
npm install

# Configure .env
cp .env.example .env.local

# Inicie desenvolvimento
npm run dev
```

## 📚 Documentação

- [📖 Guia de Contribuição](./docs/CONTRIBUTING.md)
- [🏗️ Arquitetura](./docs/ARCHITECTURE.md)
- [🗄️ Database Schema](./docs/DATABASE.md)
- [🎨 Design System](./packages/shared-ui/README.md)
- [📱 Mobile Guide](./apps/mobile/README.md)

## 🛡️ Segurança & Confiança

- 🆔 Verificação de identidade (documento + selfie)
- 📱 Autenticação SMS/Email
- 🔒 Encriptação de dados sensíveis
- ⚠️ Sistema de denúncias
- 🚫 Bloqueio de utilizadores
- ⭐ Avaliação bidirecional

## 💬 Comunidade

- **Discord**: [Comunidade Praça da Paz]
- **Twitter**: [@PracaDaPaz]
- **Email**: support@pracadapaz.ao

## 📄 Licença

MIT License - Veja [LICENSE](./LICENSE) para detalhes

## 👥 Contribuidores

Ver [CONTRIBUTORS.md](./docs/CONTRIBUTORS.md)

---

**Praça da Paz**: Começa em Angola. Conquista África. Expande para o mundo. 🌍✨

