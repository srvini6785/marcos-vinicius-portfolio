import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const root = path.dirname(fileURLToPath(import.meta.url));
const parsedPort = Number.parseInt(process.env.PORT || '3000', 10);
const port = Number.isFinite(parsedPort) ? parsedPort : 3000;
const app = express();

app.disable('x-powered-by');

app.get('/api/discord/profile', (_request, response) => {
  response.set('Cache-Control', 'no-store');
  response.json({
    userId: '1391275957121192037',
    username: 'nlyny',
    displayName: null,
    avatar: null,
    status: null,
    activity: null,
    updatedAt: null,
    connection: 'unavailable',
  });
});

app.use('/assets', express.static(path.join(root, 'assets'), { dotfiles: 'deny' }));

const publicPages = new Set(['index.html', 'svr.html', 'projetos.html', 'sistemas.html', 'contato.html']);
app.get('/', (_request, response) => response.sendFile(path.join(root, 'index.html')));
app.get('/:page', (request, response, next) => {
  if (!publicPages.has(request.params.page)) return next();
  response.sendFile(path.join(root, request.params.page));
});
app.use((_request, response) => response.sendStatus(404));

const server = app.listen(port, () => {
  console.log(`[portfolio] Local preview listening on port ${port}.`);
  console.log('[portfolio] Discord presence is served by the deployed Pages Function.');
});

process.on('SIGINT', () => server.close(() => process.exit(0)));
process.on('SIGTERM', () => server.close(() => process.exit(0)));
