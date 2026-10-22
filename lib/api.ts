import {basePlans} from './content';

export type PublicConfig = {
  whatsapp: string | null;
  whatsappMessage: string;
  trialHours: number;
  androidUrl: string | null;
  windowsUrl: string | null;
  plans: typeof basePlans;
};

export const fallbackConfig: PublicConfig = {
  whatsapp: null,
  whatsappMessage: 'Olá! Quero conhecer o Ayastream.',
  trialHours: 2,
  androidUrl: null,
  windowsUrl: null,
  plans: basePlans,
};

export async function getPublicConfig(): Promise<PublicConfig> {
  const api = process.env.NEXT_PUBLIC_API_URL?.replace(/\u005c\u002f$/, '');
  if (!api) return fallbackConfig;
  try {
    const response = await fetch(`${api}/v1/public/config`, {next: {revalidate: 60}});
    if (!response.ok) return fallbackConfig;
    const data = await response.json();
    return {...fallbackConfig, ...data, plans: data.plans?.length ? data.plans : basePlans};
  } catch { return fallbackConfig; }
}
