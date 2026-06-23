export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string, countryCode = 'AO'): boolean => {
  // Angola: +244 format
  if (countryCode === 'AO') {
    const aoRegex = /^(\+244|0)9\d{8}$/;
    return aoRegex.test(phone.replace(/[\s-]/g, ''));
  }
  return true;
};

export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('A senha deve ter pelo menos 8 caracteres');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra maiúscula');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra minúscula');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('A senha deve conter pelo menos um número');
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('A senha deve conter pelo menos um caractere especial (!@#$%^&*)');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateFileSize = (fileSizeBytes: number, maxSizeMB = 10): boolean => {
  return fileSizeBytes <= maxSizeMB * 1024 * 1024;
};

export const validateImageFile = (file: File): { isValid: boolean; error?: string } => {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
  
  if (!validTypes.includes(file.type)) {
    return {
      isValid: false,
      error: 'Tipo de arquivo inválido. Use JPEG, PNG, WebP ou AVIF',
    };
  }

  if (!validateFileSize(file.size, 10)) {
    return {
      isValid: false,
      error: 'Arquivo muito grande. Máximo 10MB',
    };
  }

  return { isValid: true };
};
