'use client';
import {FormEvent, useState} from 'react';
import {CheckCircle2, Loader2} from 'lucide-react';
import type {PlanKey} from '@/lib/content';

type Props = {defaultPlan?: string; whatsapp: string | null; message: string};
const normalizePlan = (value?: string): PlanKey => ({monthly:'MONTHLY',quarterly:'QUARTERLY',yearly:'YEARLY',trial:'TRIAL'}[value || ''] as PlanKey) || 'TRIAL';

export function LeadForm({defaultPlan, whatsapp, message}: Props) {
  const [status, setStatus] = useState<'idle'|'loading'|'done'|'error'>('idle');
  const [leadId, setLeadId] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('loading');
    const form = new FormData(event.currentTarget);
    if (form.get('website')) return setStatus('done');
    const payload = {name: form.get('name'), phone: form.get('phone'), email: form.get('email') || undefined, plan: form.get('plan'), device: form.get('device'), source: 'website', privacyAccepted: form.get('privacy') === 'on'};
    try {
      const api = process.env.NEXT_PUBLIC_API_URL?.replace(/\u005c\u002f$/, '');
      if (!api) throw new Error('API não configurada');
      const response = await fetch(`${api}/v1/sales/leads`, {method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(payload)});
      if (!response.ok) throw new Error('Falha no envio');
      const data = await response.json(); setLeadId(data.reference); setStatus('done');
      if (whatsapp) {
        const digits = whatsapp.replace(/\D/g, '');
        const text = `${message}\nReferência: ${data.reference}\nPlano: ${String(payload.plan)}`;
        window.setTimeout(() => window.open(`https://wa.me/${digits}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer'), 450);
      }
    } catch { setStatus('error'); }
  }
  if (status === 'done') return <div className="form-success"><CheckCircle2/><h2>Solicitação recebida!</h2><p>Sua referência é <strong>{leadId || 'registrada'}</strong>. {whatsapp ? 'Abrimos o WhatsApp para continuar o atendimento.' : 'Nossa equipe entrará em contato.'}</p></div>;
  return <form className="lead-form" onSubmit={submit}><div className="field-row"><label>Nome completo<input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Como podemos chamar você?"/></label><label>WhatsApp<input name="phone" required minLength={10} maxLength={20} inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000"/></label></div><div className="field-row"><label>E-mail <small>(opcional)</small><input name="email" type="email" maxLength={160} autoComplete="email" placeholder="voce@email.com"/></label><label>Dispositivo principal<select name="device" required defaultValue=""><option value="" disabled>Selecione</option><option>Android</option><option>Windows</option><option>Android TV</option><option>Outro</option></select></label></div><label>Interesse<select name="plan" defaultValue={normalizePlan(defaultPlan)}><option value="TRIAL">Teste grátis</option><option value="MONTHLY">Plano mensal — R$ 25</option><option value="QUARTERLY">Plano trimestral — R$ 60</option><option value="YEARLY">Plano anual — R$ 210</option></select></label><label className="hidden-field" aria-hidden="true">Não preencha<input name="website" tabIndex={-1} autoComplete="off"/></label><label className="check"><input name="privacy" type="checkbox" required/><span>Li e aceito a <a href="/privacidade" target="_blank">Política de Privacidade</a> e autorizo contato sobre esta solicitação.</span></label>{status === 'error' && <p className="form-error">Não foi possível enviar agora. Verifique sua conexão e tente novamente.</p>}<button className="button full" disabled={status === 'loading'}>{status === 'loading' ? <><Loader2 className="spin"/> Enviando...</> : 'Solicitar atendimento'}</button><p className="form-note">A solicitação não gera cobrança automática. O teste depende de disponibilidade e aprovação.</p></form>;
}
