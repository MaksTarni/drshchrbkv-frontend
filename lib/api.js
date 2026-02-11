// frontend/lib/api.js

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  process.env.STRAPI_URL ||
  "http://localhost:1337";

function joinUrl(base, path) {
  if (!path) return base;
  if (path.startsWith("http")) return path;
  return `${base.replace(/\/$/, "")}${path.startsWith("/") ? "" : "/"}${path}`;
}

async function fetchJSON(path) {
  const url = joinUrl(STRAPI_URL, path);

  const res = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi ${res.status} ${res.statusText}\n${url}\n${text}`);
  }

  return res.json();
}

export function getMediaUrl(media) {
  const url = media?.url || media?.data?.attributes?.url;
  if (!url) return null;
  return joinUrl(STRAPI_URL, url);
}

// SINGLE TYPE: site-setting
export async function getSiteSettings() {
  // Strapi v4 single type: /api/site-setting
  const json = await fetchJSON("/api/site-setting");
  return json?.data || null;
}

// COLLECTION: companies
export async function getCompanies() {
  // ВАЖНО: populate=* чтобы прилетали картинки
  const json = await fetchJSON("/api/companies?sort=order:asc&populate=*");
  return json?.data || [];
}

// COLLECTION: heroes (берём 1 запись)
export async function getHero() {
  // Берём самый свежий hero. В Strapi оставляем только title/description/highlightColor
  const json = await fetchJSON("/api/heroes?pagination[pageSize]=1&sort=createdAt:desc");
  const arr = json?.data || [];
  return arr[0] || null;
}