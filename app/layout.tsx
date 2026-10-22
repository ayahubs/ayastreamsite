import type {Metadata} from 'next';
import {Inter, Space_Grotesk} from 'next/font/google';
import './globals.css';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';

const inter = Inter({subsets:['latin'], variable:'--font-body'});
const display = Space_Grotesk({subsets:['latin'], variable:'--font-display'});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ayastream.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title: {default:'Ayastream — Entretenimento do seu jeito', template:'%s | Ayastream'},
  description:'Aplicativo para Android e Windows com TV ao vivo, filmes e séries em uma experiência rápida, organizada e intuitiva.',
  openGraph:{type:'website',locale:'pt_BR',siteName:'Ayastream',title:'Ayastream — Entretenimento do seu jeito',description:'Seu conteúdo favorito em uma experiência feita para Android e Windows.',images:['/brand/og-cover.png']},
  icons:{icon:'/brand/icon.png',apple:'/brand/icon.png'},
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body className={`${inter.variable} ${display.variable}`}><Header/><main>{children}</main><Footer/></body></html>; }
