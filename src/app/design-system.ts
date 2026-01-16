export const colors = {
  green: {
    900: '#2D4A2D',
    800: '#3A5A3A',
    700: '#4A6A4A',
    600: '#5A7A5A',
    500: '#6B8E6B',
    400: '#7A9A7A',
    300: '#8FA88F',
    200: '#9FB59F',
    100: '#B5C5B5',
  },
  neutral: {
    900: '#1A1A1A',
    800: '#2D2D2D',
    700: '#5A6F5A',
    600: '#6B7F6B',
    500: '#8A9A8A',
    100: '#F8FAF7',
    50: '#FAFBFA',
  },
  gradients: {
    greenLight: 'from-[#6B8E6B] to-[#8FA88F]',
    greenDark: 'from-[#5A7A5A] to-[#6B8E6B]',
    greenButton: 'from-[#6B8E6B] to-[#7A9A7A]',
    background: 'from-[#F8FAF7]/95 via-[#E8F0E8]/90 to-[#D5E5D5]/85',
    sectionGreen: 'from-[#7A9A7A] via-[#8FA88F] to-[#9FB59F]',
    ctaGreen: 'from-[#8FA88F] via-[#7A9A7A] to-[#6B8E6B]',
    footerDark: 'from-[#2D4A2D] via-[#3A5A3A] to-[#4A6A4A]',
  },
};

export const typography = {
  fonts: {
    headline: 'var(--font-headline)',
    body: 'var(--font-body)',
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export const animation = {
  easing: [0.22, 1, 0.36, 1],
  easingBounce: [0.34, 1.56, 0.64, 1],
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    slower: 1.2,
    dramatic: 1.8,
  },
};

export const spacing = {
  section: {
    paddingY: 'py-24 md:py-32',
    paddingX: 'px-6',
    maxWidth: 'max-w-7xl',
  },
  card: {
    padding: 'p-8 md:p-10',
    borderRadius: 'rounded-[32px]',
  },
};

export const glassmorphism = {
  light: {
    background: 'rgba(248, 250, 247, 0.7)',
    backdropBlur: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    shadow: '0 8px 32px rgba(45, 74, 45, 0.1)',
  },
  medium: {
    background: 'rgba(248, 250, 247, 0.85)',
    backdropBlur: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    shadow: '0 12px 40px rgba(45, 74, 45, 0.15)',
  },
  dark: {
    background: 'rgba(45, 74, 45, 0.6)',
    backdropBlur: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    shadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.5)',
    backdropBlur: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    shadow: '0 4px 24px rgba(45, 74, 45, 0.08)',
    hoverShadow: '0 8px 32px rgba(45, 74, 45, 0.12)',
  },
  icon: {
    background: 'rgba(255, 255, 255, 0.4)',
    hoverBackground: 'rgba(255, 255, 255, 0.6)',
    backdropBlur: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
  },
};
