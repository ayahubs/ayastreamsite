# Ayastream Site

Site comercial do Ayastream, separado dos aplicativos Android/Windows e integrado à API existente.

## Desenvolvimento

1. Copie `.env.example` para `.env.local` e ajuste as URLs.
2. Execute `npm install`.
3. Execute `npm run dev`.

## EasyPanel

- Build method: Dockerfile
- Porta: `3000`
- Variáveis de build e runtime:
  - `NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br`
  - `NEXT_PUBLIC_API_URL=https://url-da-api`

O container expõe `/api/health` para health check.

## Integração comercial

Preços, WhatsApp, duração do teste e downloads são gerenciados em `/admin/config` na API. Leads enviados pelo site aparecem em `/admin/leads`.

Antes da publicação, configure os dados jurídicos, links definitivos e solicite revisão profissional dos textos legais.
