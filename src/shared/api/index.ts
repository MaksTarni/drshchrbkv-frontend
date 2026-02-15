// frontend/lib/api.js

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  process.env.STRAPI_URL ||
  'http://localhost:1337';

function joinUrl(base: string, path: string) {
  if (!path) return base;
  if (path.startsWith('http')) return path;
  return `${base.replace(/\/$/, '')}${path.startsWith('/') ? '' : '/'}${path}`;
}

async function fetchJSON(path: string) {
  const url = joinUrl(STRAPI_URL, path);

  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Strapi ${res.status} ${res.statusText}\n${url}\n${text}`);
  }

  return res.json();
}

// helper: fetchJSON but returns null on 404 (used for fallback endpoints)
async function fetchJSONOrNullOn404(path: string) {
  const url = joinUrl(STRAPI_URL, path);

  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
  });

  if (res.status === 404) return null;

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Strapi ${res.status} ${res.statusText}\n${url}\n${text}`);
  }

  return res.json();
}

// Поддержка разных форматов media (Strapi v5/v4)
export function getMediaUrl(media: any) {
  if (!media) return null;

  // v5 populated media (часто просто объект с url)
  if (typeof media === 'object' && media.url)
    return joinUrl(STRAPI_URL, media.url);

  // v4 media { data: { attributes: { url } } }
  const url = media?.data?.attributes?.url;
  if (url) return joinUrl(STRAPI_URL, url);

  return null;
}

// SINGLE TYPE: site-setting
export async function getSiteSettings() {
  const json = await fetchJSON('/api/site-setting');
  return json?.data || null;
}

// COLLECTION: companies (frameA/frameB.image)
export async function getCompanies() {
  const json = await fetchJSON(
    '/api/companies?sort=order:asc&populate[frameA][populate]=image&populate[frameB][populate]=image',
  );
  return json?.data || [];
}

// HERO: сначала пробуем single type /api/hero, если 404 — fallback на коллекцию /api/heroes
export async function getHero() {
  // 1) Single type (Strapi): /api/hero
  const single = await fetchJSONOrNullOn404('/api/hero');
  if (single?.data) return single.data;

  // 2) Collection type fallback: /api/heroes
  const json = await fetchJSON(
    '/api/heroes?pagination[pageSize]=1&sort=createdAt:desc',
  );
  const arr = json?.data || [];
  return arr[0] || null;
}

// SINGLE TYPE: course (courseFrame.image)
export async function getCourse() {
  const json = await fetchJSON(
    '/api/course?populate[courseFrame][populate]=image',
  );
  return json?.data || null;
}

// COLLECTION: craft-items (sort by order)
export async function getCraftItems() {
  const json = await fetchJSON('/api/craft-items?sort=order:asc&populate=*');
  return json?.data || [];
}
