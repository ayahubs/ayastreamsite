export type PlanKey = 'TRIAL' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY';

export const navigation = [
  {href: '/', label: 'Início'},
  {href: '/planos', label: 'Planos'},
  {href: '/aplicativos', label: 'Aplicativos'},
  {href: '/como-funciona', label: 'Como funciona'},
  {href: '/faq', label: 'Dúvidas'},
  {href: '/suporte', label: 'Suporte'},
];

export const basePlans = [
  {key: 'MONTHLY' as PlanKey, name: 'Mensal', price: 25, suffix: '/mês', description: 'Flexibilidade para começar agora.', badge: ''},
  {key: 'QUARTERLY' as PlanKey, name: 'Trimestral', price: 60, suffix: '/3 meses', description: 'Economize R$ 15 a cada trimestre.', badge: 'Mais escolhido'},
  {key: 'YEARLY' as PlanKey, name: 'Anual', price: 210, suffix: '/ano', description: 'A melhor economia para o ano inteiro.', badge: 'Melhor valor'},
];

export const faqs = [
  {q: 'O Ayastream funciona em quais aparelhos?', a: 'O aplicativo está disponível para Android e Windows. A compatibilidade final também depende do formato disponibilizado pelo fornecedor do acesso.'},
  {q: 'Como funciona o teste grátis?', a: 'Você envia a solicitação e nossa equipe confirma a disponibilidade pelo WhatsApp. A liberação não é automática e está sujeita a análise.'},
  {q: 'O aplicativo já inclui conteúdo?', a: 'Não. O Ayastream é um reprodutor. Quando contratado pelo site, o acesso é fornecido por parceiro independente e autorizado, responsável pelo catálogo e disponibilidade.'},
  {q: 'Posso continuar um episódio de onde parei?', a: 'Sim. O aplicativo registra localmente o progresso, identifica episódios assistidos e pode avançar automaticamente para o próximo episódio.'},
  {q: 'Como recebo ajuda?', a: 'Use a página de suporte ou o botão do WhatsApp. Informe o modelo do aparelho e descreva o problema sem enviar sua senha em mensagens públicas.'},
  {q: 'Quais formas de pagamento são aceitas?', a: 'As opções disponíveis são informadas pelo atendimento antes da confirmação. Nenhuma cobrança é realizada automaticamente neste site.'},
];
