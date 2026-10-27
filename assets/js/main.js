const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('is-open', !expanded);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#copy-discord')?.addEventListener('click', async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText('@nlyny');
    button.textContent = window.portfolioI18n?.t('copied') || 'Copiado';
    window.setTimeout(() => { button.textContent = window.portfolioI18n?.t('copyDiscord') || 'Copiar @nlyny'; }, 1600);
  } catch {
    button.textContent = window.portfolioI18n?.t('copyFallback') || '@nlyny';
  }
});

async function loadDiscordPresence() {
  const card = document.querySelector('.presence');
  if (!card) return;
  const endpoint = card.dataset.endpoint;
  try {
    const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Presence endpoint unavailable');
    const data = await response.json();
    const safeText = (value, fallback = '') => typeof value === 'string' ? value.slice(0, 120) : fallback;
    const connection = ['live', 'stale', 'waiting', 'unavailable'].includes(data.connection) ? data.connection : 'unavailable';
    const status = ['online', 'idle', 'dnd', 'offline'].includes(data.status) ? data.status : null;
    const labels = { online: 'ONLINE', idle: 'AUSENTE', dnd: 'NÃO PERTURBE', offline: 'OFFLINE' };
    const statusLabel = document.querySelector('#presence-status');
    const connectionLabelKeys = { live: 'gateway_live', stale: 'gateway_stale', waiting: 'gateway_waiting', unavailable: 'gateway_unavailable' };
    const connectionLabel = document.querySelector('#discord-connection-label');
    if (connectionLabel) connectionLabel.textContent = window.portfolioI18n?.t(connectionLabelKeys[connection]) || `GATEWAY: ${connection.toUpperCase()}`;
    card.dataset.connection = connection;
    card.classList.remove('status-online', 'status-idle', 'status-dnd', 'status-offline');
    if (connection === 'live' && status) {
      statusLabel.textContent = window.portfolioI18n?.t(`status_${status}`) || labels[status];
      card.classList.add(`status-${status}`);
    } else if (connection === 'stale') {
      statusLabel.textContent = window.portfolioI18n?.t('statusStale') || 'ÚLTIMO ESTADO · BOT DESCONECTADO';
    } else if (connection === 'waiting') {
      statusLabel.textContent = window.portfolioI18n?.t('statusWaiting') || 'AGUARDANDO PRESENÇA';
    } else {
      statusLabel.textContent = window.portfolioI18n?.t('statusUnavailable') || 'STATUS INDISPONÍVEL';
    }
    document.querySelector('#discord-name').textContent = safeText(data.displayName || data.username, '@nlyny');
    document.querySelector('#discord-detail').textContent = data.username ? `@${safeText(data.username)}` : (window.portfolioI18n?.t('discordProfile') || 'Perfil do Discord');
    const activity = safeText(data.activity);
    const activityKey = connection === 'stale' ? 'activityStale'
      : connection === 'waiting' ? 'activityWaiting'
        : connection === 'unavailable' ? 'activityUnavailable'
          : status === 'offline' ? 'activityOffline' : 'activityNone';
    const activityCopy = window.portfolioI18n?.t(activityKey) || 'Nenhuma atividade compartilhada.';
    document.querySelector('#discord-activity').textContent = connection === 'live' && activity ? activity : activityCopy;
    if (typeof data.userId === 'string' && /^\d{17,20}$/.test(data.userId)) {
      const profileLink = document.querySelector('#discord-profile-link');
      profileLink.href = `https://discord.com/users/${data.userId}`;
      profileLink.hidden = false;
    }
    if (typeof data.avatar === 'string' && /^https:\/\//i.test(data.avatar)) {
      const avatar = document.querySelector('#discord-avatar');
      const image = document.createElement('img');
      image.src = data.avatar;
      image.alt = '';
      image.referrerPolicy = 'no-referrer';
      avatar.replaceChildren(image);
    }
  } catch {
    card.dataset.connection = 'unavailable';
    const connectionLabel = document.querySelector('#discord-connection-label');
    if (connectionLabel) connectionLabel.textContent = window.portfolioI18n?.t('gateway_unavailable') || 'GATEWAY: INDISPONÍVEL';
    document.querySelector('#presence-status').textContent = window.portfolioI18n?.t('statusUnavailable') || 'STATUS INDISPONÍVEL';
    document.querySelector('#discord-activity').textContent = window.portfolioI18n?.t('activityUnavailable') || 'Presença não conectada. Perfil público: @nlyny.';
  }
}
loadDiscordPresence();
window.setInterval(() => {
  if (!document.hidden) loadDiscordPresence();
}, 30_000);
const themeButton = document.querySelector('.theme-toggle');
function applyTheme(theme, persist = false) {
  const normalized = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = normalized;
  if (themeButton) {
    const nextLabel = window.portfolioI18n?.t(normalized === 'dark' ? 'themeLight' : 'themeDark') || (normalized === 'dark' ? 'Tema claro' : 'Tema escuro');
    themeButton.setAttribute('aria-label', window.portfolioI18n?.t(normalized === 'dark' ? 'themeAriaLight' : 'themeAriaDark') || `Mudar para ${nextLabel.toLowerCase()}`);
    themeButton.setAttribute('aria-pressed', String(normalized === 'light'));
    themeButton.querySelector('.theme-label').textContent = nextLabel;
    themeButton.querySelector('.theme-symbol').textContent = normalized === 'dark' ? '☼' : '☾';
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', normalized === 'dark' ? '#121212' : '#f5f3f1');
  if (persist) {
    try { localStorage.setItem('mv-portfolio-theme', normalized); } catch {  }
  }
}
applyTheme(document.documentElement.dataset.theme || 'dark');
themeButton?.addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
});

const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav [data-page]').forEach((link) => {
  if (link.dataset.page === currentPage) link.setAttribute('aria-current', 'page');
});

const revealTargets = document.querySelectorAll('.section-wrap > *, .project-row, .cap-grid article, .svr-ledger article, .work-card, .capability-detail article, .language-card, .home-project-card, .capability-grid > a, .trajectory-list li, .hero-art, .hero-stats > div, .home-svr-grid > *, .contact-links > a');
revealTargets.forEach((element, index) => {
  element.setAttribute('data-reveal', '');
  if (element.matches('.cap-grid article, .svr-ledger article, .work-card, .capability-detail article, .home-project-card, .capability-grid > a, .trajectory-list li, .hero-stats > div, .home-svr-grid > *, .contact-links > a')) {
    element.setAttribute('data-reveal-delay', String((index % 4) + 1));
  }
});
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-ready');
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}


const filterButtons = document.querySelectorAll('.project-filters [data-filter]');
const projectCards = document.querySelectorAll('[data-project-type]');
filterButtons.forEach((button) => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  let visible = 0;
  filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  projectCards.forEach((card) => {
    const show = filter === 'all' || card.dataset.projectType === filter;
    card.classList.toggle('project-hidden', !show);
    card.setAttribute('aria-hidden', String(!show));
    if (show) visible += 1;
  });
  const result = document.querySelector('#filter-result');
  if (result) {
    const countLabel = window.portfolioI18n?.t(visible === 1 ? 'filterOne' : 'filterMany') || (visible === 1 ? ' projeto exibido' : ' projetos exibidos');
    result.textContent = visible + countLabel;
  }
}));

const progressBar = document.querySelector('.reading-progress > span');
let progressQueued = false;
function updateReadingProgress() {
  if (!progressBar) return;
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percent = available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0;
  progressBar.style.transform = 'scaleX(' + (percent / 100) + ')';
  progressQueued = false;
}
function queueReadingProgress() {
  if (progressQueued) return;
  progressQueued = true;
  window.requestAnimationFrame(updateReadingProgress);
}
window.addEventListener('scroll', queueReadingProgress, { passive: true });
window.addEventListener('resize', queueReadingProgress);
updateReadingProgress();
