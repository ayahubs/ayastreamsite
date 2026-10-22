import Image from 'next/image';
import {Check, ChevronRight, Clock3, Film, ListVideo, Play, Radio, Search, Tv} from 'lucide-react';

const Poster = ({tone='red'}:{tone?:'red'|'blue'|'gold'}) => <span className={`ui-poster poster-${tone}`}><Film/><i/></span>;

export function ScreenGallery({compact=false}:{compact?:boolean}) {
  return <section className={compact?'screens compact':'screens'} aria-label="Telas do aplicativo Ayastream">
    <article className="screen-shot screen-home"><div className="screen-bar"><Image src="/brand/icon.png" width={34} height={34} alt=""/><i/></div><div className="screen-stage"><small>SUA MÍDIA. SEU JEITO.</small><h3>Seu conteúdo.<br/>Em um só lugar.</h3><div className="screen-menu"><span><Tv/>TV ao vivo</span><span><Play/>Filmes</span><span><ListVideo/>Séries</span></div><b>Adicionar lista</b></div><footer><strong>Tela inicial</strong><em>Organize tudo em um só lugar</em></footer></article>
    <article className="screen-shot screen-catalog"><div className="screen-tabs"><span>TV ao vivo</span><strong>Filmes</strong><span>Séries</span></div><div className="screen-search"><Search/>Buscar filme...</div><h4>Lançamentos <ChevronRight/></h4><div className="screen-posters"><Poster tone="red"/><Poster tone="blue"/><Poster tone="gold"/></div><footer><strong>Catálogo organizado</strong><em>Encontre por categorias</em></footer></article>
    <article className="screen-shot screen-live"><div className="live-visual"><Radio/><span>AO VIVO</span><h3>Programação em tempo real</h3><button><Play fill="currentColor"/> Assistir agora</button></div><div className="schedule"><p><Clock3/><span><b>Agora</b> Programa em exibição</span></p><p><Clock3/><span><b>A seguir</b> Próximo programa</span></p></div><footer><strong>TV ao vivo</strong><em>Veja agora e a seguir</em></footer></article>
    <article className="screen-shot screen-series"><div className="series-head"><Poster tone="blue"/><div><small>SÉRIE</small><h3>Sua próxima história</h3><p>Temporadas e episódios organizados.</p><button><Play fill="currentColor"/> Continuar</button></div></div><div className="episode-row"><span><Check/>T1 · E1</span><span>T1 · E2</span><span>T1 · E3</span></div><footer><strong>Continue de onde parou</strong><em>Progresso salvo por episódio</em></footer></article>
  </section>;
}
