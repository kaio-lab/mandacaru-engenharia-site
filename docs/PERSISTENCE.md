# Persistência em ambiente externo

Esta cópia funciona sem backend porque o conteúdo institucional é mantido em código. Para editar dados sem um novo deploy, mantenha a mesma estrutura de `src/content/siteContent.ts` em uma API REST ou CMS externo.

| Coleção | Campos essenciais |
| --- | --- |
| `articles` | `category`, `title`, `excerpt`, `cover`, `url`, `publishedAt`, `published` |
| `projects` | `segment`, `name`, `eyebrow`, `detail`, `description`, `images`, `facts`, `published` |
| `clients` | `name`, `logo`, `wordmark`, `sortOrder`, `published` |
| `settings` | `brandLogo`, `whatsappNumber`, `linkedin`, `instagram` |

Uma implementação em qualquer serviço externo deve expor somente conteúdos publicados ao site público e restringir alterações a usuários administradores. Em seguida, substitua o import local em `src/App.tsx` por uma consulta ao endpoint escolhido, preservando um fallback local para manter a landing page disponível em caso de falha temporária da API.
