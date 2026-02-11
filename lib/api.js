// frontend/lib/api.js
// Safe Strapi helpers for Strapi v5 (works with v4 too where possible)

const DEFAULT_CMS = "https://cms.drshchrbkv.com";

// IMPORTANT:
// В Vercel обязательно добавь NEXT_PUBLIC_STRAPI_URL = https://cms.drshchrbkv.com
// (без /api). Но даже если забудешь — сайт не упадёт.
const RAW = (process.env.NEXT_PUBLIC_STRAPI_URL || DEFAULT_CMS).trim();

function normalizeBase(url) {
  const trimmed = String(url).trim().replace(/\/+$/, "");
  if (trimmed.endsWith("/api")) return trimmed;
  return `${trimmed}/api`;
}

export const STRAPI_API_URL = normalizeBase(RAW);
export const STRAPI_BASE_URL = STRAPI_API_URL.replace(/\/api$/, "");

// универсальный fetch (НЕ бросаем ошибку, чтобы не было белого экрана)
export async function fetchAPI(endpoint, options = {}) {
  const ep = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${STRAPI_API_URL}${ep}`;

  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[Strapi]", res.status, url, text);
      return null;
    }

    return res.json();
  } catch (e) {
    console.error("[Strapi] fetch failed:", url, e);
    return null;
  }
}

// v4: {id, attributes:{...}}  v5: {id, ...fields}
export function normalizeEntity(entity) {
  if (!entity) return null;
  if (entity.attributes) return { id: entity.id, ...entity.attributes };
  return entity;
}

export function normalizeSingle(res) {
  if (!res?.data) return null;
  return normalizeEntity(res.data);
}

export function normalizeCollection(res) {
  if (!res?.data) return [];
  return Array.isArray(res.data) ? res.data.map(normalizeEntity) : [];
}

// media url (v5 direct or v4 data.attributes)
export function getMediaUrl(mediaField) {
  if (!mediaField) return null;

  const v4 = mediaField?.data?.attributes?.url;
  const v5direct = mediaField?.url;
  const v5maybe = mediaField?.data?.url;

  const url = v4 || v5direct || v5maybe;
  if (!url) return null;

  return url.startsWith("http") ? url : `${STRAPI_BASE_URL}${url}`;
}

/* =========================
   Queries (под твой проект)
   ========================= */

export async function getSiteSetting() {
  // single type: /api/site-setting
  const res = await fetchAPI("/site-setting");
  return normalizeSingle(res);
}

export async function getHeroes() {
  const res = await fetchAPI("/heroes?pagination[pageSize]=100");
  return normalizeCollection(res);
}

export async function getCourse() {
  // если single-type course нет — вернётся null, сайт не упадёт
  const res = await fetchAPI("/course?populate[0]=coverImage");
  return normalizeSingle(res);
}

export async function getCraftItems() {
  const res = await fetchAPI("/craft-items?sort=order:asc&pagination[pageSize]=100&populate[0]=image");
  return normalizeCollection(res);
}

export async function getCompanies() {
  // Strapi v5 populate правильный — через populate[0..]
  const q =
    "/companies?sort=order:asc&pagination[pageSize]=100" +
    "&populate[0]=leftImage&populate[1]=rightImage&populate[2]=deviceImage";

  const res = await fetchAPI(q);

  // если populate вдруг валится — пробуем без него
  if (!res) {
    const fallback = await fetchAPI("/companies?sort=order:asc&pagination[pageSize]=100");
    return normalizeCollection(fallback);
  }

  return normalizeCollection(res);
}

export async function getCompanyBySlug(slug) {
  const safeSlug = encodeURIComponent(slug);
  const res = await fetchAPI(`/companies?filters[slug][$eq]=${safeSlug}&pagination[pageSize]=1`);
  const items = normalizeCollection(res);
  return items[0] || null;
}

export async function getAllCompanySlugs() {
  const res = await fetchAPI("/companies?fields[0]=slug&pagination[pageSize]=100");
  const items = normalizeCollection(res);
  return items
    .filter((c) => typeof c.slug === "string" && c.slug.trim())
    .map((c) => ({ slug: c.slug }));
}