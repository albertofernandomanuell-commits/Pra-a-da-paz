# Arquitetura - Praça da Paz

## Visão Geral

Praça da Paz utiliza uma arquitetura moderna baseada em:

- **Frontend**: Next.js 14 (React)
- **Mobile**: Flutter
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **Real-time**: Supabase Realtime
- **Storage**: Supabase Storage

## Camadas

### 1. Apresentação (Frontend)

```
Web (Next.js) → Pages → Components → Hooks → API Client
```

#### Tecnologias
- **Next.js 14**: App Router, Server Components
- **React 18**: Hooks, Context API
- **Tailwind CSS**: Styling
- **Zustand**: State Management
- **React Hook Form**: Form Handling
- **SWR**: Data Fetching

### 2. API Layer

```
Next.js API Routes → Supabase Client → Supabase Backend
```

#### Endpoints
- `/api/auth/*` - Autenticação
- `/api/users/*` - Perfis de usuário
- `/api/services/*` - Serviços
- `/api/orders/*` - Pedidos
- `/api/chat/*` - Mensagens

### 3. Backend (Supabase)

```
Supabase → PostgreSQL + Edge Functions → Real-time Subscriptions
```

#### Componentes
- **PostgreSQL**: Banco de dados relacional
- **Auth**: Supabase Auth (JWT)
- **Real-time**: Websockets
- **Storage**: S3-compatible
- **Edge Functions**: Lógica serverless

### 4. Banco de Dados

```
Users → Professional Profiles
      → Services
      → Orders
      → Chat Messages
      → Reviews
      → Feed Posts
```

## Fluxos Principais

### Autenticação

```
User → Login Form → API → Supabase Auth → JWT Token → Store → Protected Routes
```

### Contratar Serviço

```
Cliente Busca → Visualiza Profissional → Envia Proposta → Chat → Confirmação → Ordem Criada
```

### Publicar Serviço

```
Profissional → Preenche Formulário → Upload Imagens → Publica → Apareça em Buscas
```

## Padrões de Código

### Componentes React

```typescript
// app/components/Button.tsx
'use client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-brand-gold rounded hover:bg-brand-gold-dark transition"
    >
      {children}
    </button>
  );
}
```

### Hooks Customizados

```typescript
// hooks/useUser.ts
import useSWR from 'swr';

export function useUser() {
  const { data, error } = useSWR('/api/users/me');
  return {
    user: data,
    loading: !error && !data,
    error,
  };
}
```

### API Routes

```typescript
// api/services/route.ts
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  const { data, error } = await supabase.from('services').select('*');
  return Response.json({ data, error });
}
```

## Segurança

### Autenticação
- Supabase Auth com JWT
- Refresh tokens
- CORS configurado

### Autorização
- Row Level Security (RLS) em PostgreSQL
- Verificação de permissions em API routes

### Dados Sensíveis
- Variáveis de ambiente
- Secrets em .env.local
- Service Role Key apenas no servidor

## Performance

### Frontend
- Image optimization (Next.js)
- Code splitting
- Lazy loading
- Caching com SWR

### Backend
- Índices em PostgreSQL
- Pagination
- Query optimization
- Connection pooling

## Escalabilidade

- Supabase gerencia infraestrutura
- Auto-scaling de funciones
- CDN global
- Replicação de banco de dados
