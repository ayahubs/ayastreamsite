import type {ReactNode} from 'react';
import {PageHero} from './page-hero';
export function LegalPage({title,children}:{title:string;children:ReactNode}){return <><PageHero variant="legal" eyebrow="INFORMAÇÕES LEGAIS" title={title}>Última atualização: 21 de outubro de 2026.</PageHero><article className="section container legal-copy">{children}<aside>Este documento deve ser revisado com os dados jurídicos da empresa e pelo responsável legal antes da publicação.</aside></article></>}
