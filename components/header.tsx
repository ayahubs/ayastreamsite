'use client';
import Link from 'next/link';
import Image from 'next/image';
import {Menu, X} from 'lucide-react';
import {useState} from 'react';
import {navigation} from '@/lib/content';

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell">
    <Link className="brand" href="/" aria-label="Ayastream início"><Image src="/brand/icon.png" width={42} height={42} alt=""/><span>AYASTREAM</span></Link>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Navegação principal">{navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="button button-small" href="/teste-gratis">Teste grátis</Link></nav>
    <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X/> : <Menu/>}</button>
  </div></header>;
}
