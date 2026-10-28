const TARGET_USER_ID = '866525979051819019';
const DEFAULT_USERNAME = 'nlyny';
const MAX_STALE_AGE = 8 * 60 * 1000;
const VALID_STATUSES = new Set(['online', 'idle', 'dnd', 'offline']);
const VALID_CONNECTIONS = new Set(['live', 'stale', 'waiting', 'unavailable']);

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, max-age=0',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

function emptyProfile(connection = 'waiting') {
  return {
    userId: TARGET_USER_ID,
    username: DEFAULT_USERNAME,
    displayName: null,
    avatar: null,
    status: null,
    activity: null,
    updatedAt: null,
    connection,
  };
}

function safeString(value, limit) {
  return typeof value === 'string' ? value.trim().slice(0, limit) || null : null;
}

function safeAvatar(value) {
  const avatar = safeString(value, 500);
  if (!avatar) return null;

  try {
    const url = new URL(avatar);
    if (url.protocol !== 'https:' || !['cdn.discordapp.com', 'media.discordapp.net'].includes(url.hostname)) return null;
    return url.href;
  } catch {
    return null;
  }
}

export async function onRequestGet({ env }) {
  if (!env.PROFILE_KV) return jsonResponse(emptyProfile('unavailable'));

  try {
    const profile = await env.PROFILE_KV.get('discord-profile', 'json');
    if (!profile) return jsonResponse(emptyProfile());

    const age = profile.updatedAt ? Date.now() - Date.parse(profile.updatedAt) : Number.POSITIVE_INFINITY;
    const connection = age > MAX_STALE_AGE ? 'stale' : VALID_CONNECTIONS.has(profile.connection) ? profile.connection : 'waiting';

    return jsonResponse({
      ...emptyProfile(connection),
      username: safeString(profile.username, 32) || DEFAULT_USERNAME,
      displayName: safeString(profile.displayName, 64),
      avatar: safeAvatar(profile.avatar),
      status: VALID_STATUSES.has(profile.status) ? profile.status : null,
      activity: safeString(profile.activity, 100),
      updatedAt: typeof profile.updatedAt === 'string' ? profile.updatedAt : null,
    });
  } catch {
    return jsonResponse(emptyProfile('unavailable'));
  }
}

export async function onRequestPost({ request, env }) {
  const expectedSecret = env.PROFILE_INGEST_SECRET;
  const authorization = request.headers.get('Authorization') || '';
  if (!expectedSecret || authorization !== `Bearer ${expectedSecret}`) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }
  if (!env.PROFILE_KV) return jsonResponse({ error: 'Profile storage is not configured' }, 503);

  const contentLength = Number.parseInt(request.headers.get('Content-Length') || '0', 10);
  if (Number.isFinite(contentLength) && contentLength > 4_096) {
    return jsonResponse({ error: 'Payload too large' }, 413);
  }

  let input;
  try {
    input = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON' }, 400);
  }

  if (!input || input.userId !== TARGET_USER_ID) {
    return jsonResponse({ error: 'Unexpected profile' }, 400);
  }

  const connection = VALID_CONNECTIONS.has(input.connection) ? input.connection : 'waiting';
  const profile = {
    userId: TARGET_USER_ID,
    username: safeString(input.username, 32) || DEFAULT_USERNAME,
    displayName: safeString(input.displayName, 64),
    avatar: safeAvatar(input.avatar),
    status: VALID_STATUSES.has(input.status) ? input.status : null,
    activity: safeString(input.activity, 100),
    updatedAt: new Date().toISOString(),
    connection,
  };

  try {
    await env.PROFILE_KV.put('discord-profile', JSON.stringify(profile));
    return jsonResponse({ saved: true, updatedAt: profile.updatedAt }, 202);
  } catch {
    return jsonResponse({ error: 'Could not save profile' }, 503);
  }
}
