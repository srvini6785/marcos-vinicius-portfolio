# Portfólio — Marcos Vinicius

Portfólio multipágina em HTML, CSS e JavaScript. A produção fica dividida em três partes: arquivos estáticos do site, uma função de API no Cloudflare Pages e o bot Discord isolado na pasta `discord-bot`.

## Páginas

- `index.html`: apresentação e visão geral.
- `svr.html`: SVR, projeto empresarial em desenvolvimento.
- `projetos.html`: OCCDS, Android e WhatsApp.
- `sistemas.html`: linguagens, tecnologias ligadas a projetos e experiência histórica em comunidades Discord.
- `contato.html`: GitHub e perfil Discord com presença dinâmica.

## Como a presença funciona

O site consulta `GET /api/discord/profile`, atendido por uma Cloudflare Pages Function. O bot em `discord-bot/bot.js` escuta apenas as presenças do usuário configurado no servidor Discord e envia as mudanças para o mesmo endpoint com uma chave secreta. A função salva o estado no Cloudflare KV. O bot não serve páginas; o site não mantém conexão com o Gateway do Discord.

O endpoint mantém a última presença recebida. Se não houver atualização por oito minutos, a API informa que o estado está desatualizado. O Cloudflare KV é distribuído entre regiões e pode levar cerca de um minuto ou mais para propagar uma escrita. O plano gratuito do Discloud limita o bot a 100 MB, então a memória precisa ser acompanhada após a publicação.

## Publicação do site no Cloudflare Pages

1. Crie um repositório no GitHub e envie o conteúdo desta pasta. O `.gitignore` exclui `.env` e os arquivos de saída.
2. No Cloudflare, crie um projeto Pages conectado ao repositório. Use `npm run build:pages` como comando de build e `dist` como diretório de saída.
3. Em **Settings → Bindings**, adicione um namespace KV com o nome de variável `PROFILE_KV`.
4. Em **Settings → Variables and Secrets**, crie o segredo `PROFILE_INGEST_SECRET`.
5. Publique o projeto e anote o endereço `*.pages.dev`.

Use Git integration ou Wrangler para publicar. O envio de arquivos pelo botão de arrastar e soltar no painel não compila a pasta `functions`.

## Publicação do bot na Discloud

O arquivo `discord-bot/discloud.config` seleciona `bot.js` como entrada. O `.discloudignore` dentro dessa pasta exclui dependências instaladas e arquivos locais.

Para enviar o bot, abra `discord-bot`, selecione os arquivos que estão dentro dela e compacte esses arquivos em um ZIP. O `discloud.config` precisa ficar na raiz do ZIP. Não compacte a pasta `portfolio` inteira para enviar à Discloud.

Para upload por ZIP, crie `discord-bot/.env` com estas variáveis. Esse arquivo é ignorado pelo Git e não pode ser enviado ao GitHub. Ao compactar manualmente, inclua o `.env` no ZIP que será enviado diretamente à Discloud. Se publicar o bot pela integração GitHub da Discloud, configure os segredos na seção de variáveis do painel em vez de enviar `.env`.

- `DISCORD_BOT_TOKEN`: token do bot. Não coloque no HTML, JavaScript do site, GitHub ou chat.
- `DISCORD_GUILD_ID`: ID do servidor que compartilha com o bot.
- `DISCORD_USER_ID`: `1391275957121192037`.
- `DISCORD_USERNAME`: `nlyny`.
- `PROFILE_API_URL`: `https://<projeto>.pages.dev/api/discord/profile` até o domínio próprio estar pronto.
- `PROFILE_INGEST_SECRET`: o mesmo valor cadastrado como segredo no Cloudflare.

O modelo sem segredos está em `discord-bot/.env.example`. Duplique-o como `.env` e preencha o token e o segredo apenas na cópia local.

No Discord Developer Portal, habilite **Presence Intent** para o bot e convide-o ao servidor. A Discloud deve iniciar o arquivo `bot.js` com `TYPE=bot`; a presença não exige um site/API pública hospedada na Discloud.

## Domínio `nlyny.is-a.dev`

Primeiro publique o site no Cloudflare Pages e confirme que ele abre em `*.pages.dev`. Depois conecte `nlyny.is-a.dev` ao projeto Pages e siga o [guia oficial do is-a.dev para Cloudflare Pages](https://docs.is-a.dev/guides/cloudflare-pages/), incluindo o pedido de domínio com o link e uma captura do site publicado.

## Desenvolvimento local

1. Copie `.env.example` para `.env` e preencha `PORT` para o servidor local.
2. Rode `npm install`.
3. Rode `npm start` e acesse `http://localhost:3000` para visualizar as páginas.
4. Para preparar os arquivos estáticos do Cloudflare Pages, rode `npm run build:pages`.
5. Para executar o bot localmente, entre em `discord-bot`, rode `npm install`, copie `.env.example` para `.env`, preencha as variáveis e rode `npm start`.

O servidor local serve as páginas e retorna presença indisponível. A presença de produção vem da Pages Function e do bot publicado na Discloud.

## Conteúdo e estágios

A SVR é apresentada em fase de fundação, sem produtos ou serviços divulgados como disponíveis. O OCCDS é um plugin desenvolvido para rifas no WooCommerce; o site que o utilizava foi desativado. O case Android descreve uma ferramenta desktop via ADB que passou de Python/PySide6 para Java/JavaFX. O case de WhatsApp é identificado como protótipo, sem resultados de produção informados.

O portfólio destaca mais de 50 sites criados em diferentes contextos e mais de 10 sistemas empresariais completos e privados.

## Idiomas e linguagens

A interface oferece português brasileiro, inglês, espanhol, francês e alemão; a preferência fica salva no navegador. A seção de linguagens lista JavaScript, Python, Lua, TypeScript, Java, C#, C++, C, SQL, PHP, Go, Kotlin, Swift, Rust, Ruby e Bash/Shell.

## GitHub e experiência complementar

Perfil público: <https://github.com/srvini6785>.

Experiência complementar: atuação histórica como staff em mais de 30 comunidades Discord, que já não estão ativas. A estimativa de aproximadamente 15 milhões representa a soma dos tamanhos informados para essas comunidades, não pessoas únicas nem alcance atual.
