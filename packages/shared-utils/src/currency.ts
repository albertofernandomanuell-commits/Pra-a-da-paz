export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  timestamp: Date;
}

export const DEFAULT_CURRENCY = 'AOA';

export const SUPPORTED_CURRENCIES = {
  AOA: {
    code: 'AOA',
    symbol: 'Kz',
    name: 'Kwanza Angolano',
    country: 'Angola',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'Dólar Americano',
    country: 'USA',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    country: 'Europa',
  },
  NGN: {
    code: 'NGN',
    symbol: '₦',
    name: 'Naira Nigeriana',
    country: 'Nigéria',
  },
  GHS: {
    code: 'GHS',
    symbol: '₵',
    name: 'Cedi Ganês',
    country: 'Gana',
  },
  ZAR: {
    code: 'ZAR',
    symbol: 'R',
    name: 'Rand Sul-africano',
    country: 'África do Sul',
  },
  KES: {
    code: 'KES',
    symbol: 'KSh',
    name: 'Xelim Queniano',
    country: 'Quénia',
  },
  ZWL: {
    code: 'ZWL',
    symbol: '$',
    name: 'Dólar Zimbabuano',
    country: 'Zimbabué',
  },
};

// Taxas de câmbio estimadas (atualizar via API real)
export const ESTIMATED_RATES: Record<string, number> = {
  'AOA_USD': 0.0012,
  'USD_AOA': 833.33,
  'AOA_EUR': 0.0011,
  'EUR_AOA': 909.09,
  'AOA_ZAR': 0.022,
  'ZAR_AOA': 45.45,
  'AOA_NGN': 0.99,
  'NGN_AOA': 1.01,
};

export const convertCurrency = (
  amount: number,
  from: string,
  to: string,
  rates?: Record<string, number>
): number => {
  if (from === to) return amount;

  const rateKey = `${from}_${to}`;
  const rate = rates?.[rateKey] || ESTIMATED_RATES[rateKey];

  if (!rate) {
    console.warn(`Conversion rate not found for ${rateKey}`);
    return amount;
  }

  return Math.round(amount * rate * 100) / 100;
};

export const suggestLocalCurrency = (country: string = 'Angola'): string => {
  const currencyMap: Record<string, string> = {
    Angola: 'AOA',
    Nigeria: 'NGN',
    'South Africa': 'ZAR',
    Ghana: 'GHS',
    Kenya: 'KES',
    Zimbabwe: 'ZWL',
  };

  return currencyMap[country] || 'AOA';
};
