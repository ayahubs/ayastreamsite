import type {Metadata} from 'next';
import {PageHero} from '@/components/page-hero';
import {faqs} from '@/lib/content';
export const metadata:Metadata={title:'Dúvidas frequentes'};
export default function Page(){return <><PageHero variant="faq" eyebrow="CENTRAL DE DÚVIDAS" title="Respostas diretas para você começar.">Encontre informações sobre teste, aplicativos, planos e funcionamento.</PageHero><section className="section container narrow-content"><div className="faq-list">{faqs.map(i=><details key={i.q}><summary>{i.q}<span>+</span></summary><p>{i.a}</p></details>)}</div></section></>}
