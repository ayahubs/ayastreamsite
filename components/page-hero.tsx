import Image from 'next/image';
import {CircleHelp, Clapperboard, Download, Headphones, Play, ShieldCheck, Sparkles} from 'lucide-react';
import type {ReactNode} from 'react';

type Variant = 'plans'|'trial'|'apps'|'guide'|'support'|'faq'|'legal';
const visuals = {
  plans: {icon: Sparkles, label: 'Escolha sua experiência', note: 'Planos flexíveis'},
  trial: {icon: Play, label: 'Teste acompanhado', note: 'Atendimento humano'},
  apps: {icon: Download, label: 'Android + Windows', note: 'Aplicativo próprio'},
  guide: {icon: Clapperboard, label: 'Do cadastro ao play', note: 'Configuração simples'},
  support: {icon: Headphones, label: 'Conte com a gente', note: 'Suporte próximo'},
  faq: {icon: CircleHelp, label: 'Tudo bem explicado', note: 'Respostas rápidas'},
  legal: {icon: ShieldCheck, label: 'Transparência', note: 'Informações legais'},
};

export function PageHero({eyebrow, title, children, variant='apps'}: {eyebrow: string; title: string; children: ReactNode; variant?: Variant}) {
  const visual=visuals[variant], Icon=visual.icon;
  return <section className={`page-hero page-hero-${variant}`}><Image className="page-hero-bg" src="/brand/cinema-hero-v2.png" alt="" fill priority sizes="100vw"/><div className="page-hero-overlay"/><div className="container page-hero-inner"><div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{children}</p></div><div className="page-hero-visual" aria-hidden="true"><div className="visual-glow"/><div className="visual-card"><span><Icon/></span><small>{visual.note}</small><strong>{visual.label}</strong><div className="visual-progress"><i/></div></div><div className="visual-play"><Play fill="currentColor"/></div></div></div></section>;
}
