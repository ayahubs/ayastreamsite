import Link from 'next/link';
import {Check} from 'lucide-react';
import type {PublicConfig} from '@/lib/api';

export function Plans({config, compact = false}: {config: PublicConfig; compact?: boolean}) { return <div className="plan-grid">{config.plans.map(plan => <article className={`plan-card ${plan.key === 'YEARLY' ? 'featured' : ''}`} key={plan.key}>{plan.badge && <span className="plan-badge">{plan.badge}</span>}<p className="plan-name">{plan.name}</p><div className="price"><sup>R$</sup><strong>{plan.price}</strong><span>{plan.suffix}</span></div><p>{plan.description}</p><ul><li><Check/>Aplicativo Android e Windows</li><li><Check/>Suporte para configuração</li><li><Check/>Experiência completa do player</li>{!compact && <li><Check/>Atendimento pelo WhatsApp</li>}</ul><Link className="button full" href={`/teste-gratis?plano=${plan.key.toLowerCase()}`}>Escolher {plan.name}</Link></article>)}</div>; }
