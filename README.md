# Ayastream Site

Site comercial do Ayastream, separado dos aplicativos Android/Windows e integrado à API existente.

## Desenvolvimento

1. Copie `.env.example` para `.env.local` e ajuste as URLs.
2. Execute `npm install`.
3. Execute `npm run dev`.

## EasyPanel

- Build method: Dockerfile
- Porta: `80`
- Variáveis de build e runtime:
  - `NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br`
  - `NEXT_PUBLIC_API_URL=https://url-da-api`

O container escuta em `0.0.0.0:80` e expõe `/api/health` para health check. No EasyPanel, configure o domínio para encaminhar à porta `80`.

## Integração comercial

Preços, WhatsApp, duração do teste e downloads são gerenciados em `/admin/config` na API. Leads enviados pelo site aparecem em `/admin/leads`.

Antes da publicação, configure os dados jurídicos, links definitivos e solicite revisão profissional dos textos legais.
