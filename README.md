# Mandacaru Engenharia Construtiva — Site Portátil

Esta é uma versão **independente, estática e pronta para GitHub** da landing page institucional da Mandacaru. Ela não utiliza autenticação, armazenamento, banco de dados, serviços de deploy, SDKs ou variáveis de ambiente proprietárias.

O projeto usa React, TypeScript e Vite. Todo o conteúdo institucional fica centralizado em [`src/content/siteContent.ts`](src/content/siteContent.ts), e os arquivos de imagem ficam em [`public/media`](public/media). Assim, o site pode ser hospedado como conteúdo estático em GitHub Pages, Netlify, Vercel, Cloudflare Pages, Hostinger, AWS S3/CloudFront ou qualquer servidor web.

## Executar localmente

| Etapa | Comando |
| --- | --- |
| Instalar dependências | `npm install` |
| Iniciar ambiente local | `npm run dev` |
| Conferir tipos | `npm run check` |
| Gerar versão de produção | `npm run build` |
| Pré-visualizar a versão gerada | `npm run preview` |

> Requer Node.js 20 ou superior.

## Publicar no GitHub

Crie um repositório vazio no GitHub e execute os comandos abaixo dentro desta pasta.

```bash
git init
git add .
git commit -m "Versão independente da landing page Mandacaru"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/mandacaru-engenharia-site.git
git push -u origin main
```

O workflow em [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) publica automaticamente no GitHub Pages após cada `push` para `main`. No GitHub, acesse **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação.

## Hospedagem externa

| Plataforma | Configuração |
| --- | --- |
| GitHub Pages | Build: `npm run build`; pasta publicada: `dist` |
| Netlify | Build: `npm run build`; diretório: `dist` |
| Vercel | Framework: Vite; build: `npm run build`; saída: `dist` |
| Cloudflare Pages | Build: `npm run build`; diretório: `dist` |
| Servidor próprio | Envie o conteúdo de `dist/` para a pasta pública do servidor web |

## Conteúdo e imagens

Altere textos, links, artigos, números institucionais e dados de obras em `src/content/siteContent.ts`. As imagens estão em `public/media` e são referenciadas por caminhos locais. Para trocar uma imagem, copie o novo arquivo para essa pasta e ajuste o caminho no arquivo de conteúdo.

As capas oficiais dos dois artigos e os logos disponíveis dos clientes foram incorporados como arquivos locais em `public/media`. O wordmark **ICON REALTY** permanece textual para preservar sua legibilidade.

## Persistência futura sem dependências proprietárias

Esta distribuição é deliberadamente estática: a versão publicada é o conteúdo versionado no Git. Para permitir que uma equipe não técnica edite artigos e cases, conecte `siteContent.ts` a um CMS open source como **Strapi**, **Directus** ou **Payload**, ou a uma API REST própria com PostgreSQL. A estrutura de conteúdo atual foi isolada justamente para tornar essa troca direta.

Consulte [`docs/PERSISTENCE.md`](docs/PERSISTENCE.md) para um modelo de integração externo.

## Licenciamento

O código é distribuído sob a licença MIT, conforme [`LICENSE`](LICENSE). Fotografias, logotipos, marcas e textos institucionais são materiais da Mandacaru e permanecem sob os direitos do titular, conforme [`ASSET-LICENSE.md`](ASSET-LICENSE.md).
