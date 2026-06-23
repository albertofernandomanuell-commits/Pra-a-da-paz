import { ServiceCategory } from 'shared-types';

export const SERVICE_CATEGORIES: Record<ServiceCategory, string> = {
  construction: 'Construção',
  electricity: 'Eletricidade',
  plumbing: 'Canalização',
  painting: 'Pintura',
  cleaning: 'Limpeza',
  gardening: 'Jardinagem',
  transport: 'Transporte',
  technology: 'Tecnologia',
  design: 'Design',
  programming: 'Programação',
  photography: 'Fotografia',
  video: 'Vídeo',
  events: 'Eventos',
  music: 'Música',
  health: 'Saúde',
  education: 'Educação',
  animals: 'Animais',
  security: 'Segurança',
  babysitting: 'Babysitting',
  catering: 'Catering',
  repairs: 'Reparações',
  consulting: 'Consultoria',
  domestic: 'Serviços Domésticos',
  other: 'Outros Serviços',
};

export const BRAND_COLORS = {
  gold: '#D4AF37',
  goldLight: '#E5C158',
  goldDark: '#B8951E',
  black: '#1A1A1A',
  blackLight: '#2A2A2A',
  red: '#8B0000',
  redLight: '#B22222',
  white: '#FFFFFF',
};

export const CURRENCY_SYMBOLS = {
  AOA: 'Kz',
  USD: '$',
  EUR: '€',
  NGN: '₦',
  GHS: '₵',
  ZAR: 'R',
  KES: 'KSh',
  ZWL: '$',
};

export const DEFAULT_RADIUS_KM = 20;
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_FILE_SIZE_MB = 10;
export const MAX_IMAGES_PER_POST = 5;
export const MIN_RATING_FOR_BADGE = 4.5;
export const MIN_COMPLETED_FOR_ELITE = 100;
