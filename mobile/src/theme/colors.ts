import { useColorScheme } from 'react-native';

export type AppColors = {
  background: string;
  surface: string;
  surface2: string;
  border: string;
  text: string;
  mutedText: string;
  primary: string;
  onPrimary: string;
  success: string;
  danger: string;
  info: string;
};

export const lightColors: AppColors = {
  background: '#f3f4f6',
  surface: '#ffffff',
  surface2: '#f8fafc',
  border: '#e5e7eb',
  text: '#111827',
  mutedText: '#6b7280',
  primary: '#2563eb',
  onPrimary: '#ffffff',
  success: '#16a34a',
  danger: '#ef4444',
  info: '#0891b2',
};

export const darkColors: AppColors = {
  background: '#071422',
  surface: '#0b1c2e',
  surface2: '#102a43',
  border: '#12324c',
  text: '#e2e8f0',
  mutedText: '#94a3b8',
  primary: '#00bcd4',
  onPrimary: '#06202a',
  success: '#22c55e',
  danger: '#ef4444',
  info: '#38bdf8',
};

export function useAppColors() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkColors : lightColors;
}

