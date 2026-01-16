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
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    slower: 1.2,
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
