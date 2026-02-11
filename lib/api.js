// frontend/lib/api.js

const RAW = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

function normalizeBase(url) {
  const trimmed = String(url).trim().replace(/\/+$/, "");
  return trimmed.endsWith("/api") ? trimmed : `${trimmed}/api`;
}

export const STRAPI_API_URL = normalizeBase(RAW);
export const STRAPI_BASE_URL = STRAPI_API_URL.replace(/\/api$/, "");

export async function fetchAPI(endpoint, options = {}) {
  const ep = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${STRAPI_API_URL}${ep}`;

  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi error ${res.status} on ${url}. ${text}`);
  }
  return res.json();
}

// Blocks -> plain text
export function blocksToText(blocks) {
  if (!blocks) return "";
  if (typeof blocks === "string") return blocks;
  if (!Array.isArray(blocks)) return "";

  const lines = [];
  for (const b of blocks) {
    if (Array.isArray(b?.children)) {
      const line = b.children
        .map((c) => (typeof c?.text === "string" ? c.text : ""))
        .join("");
      if (line.trim()) lines.push(line);
    }
  }
  return lines.join("\n");
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

// media url (v4/v5)
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
   Queries
   ========================= */

export async function getSiteSetting() {
  const res = await fetchAPI("/site-setting");
  return normalizeSingle(res);
}

export async function getHeroes() {
  const res = await fetchAPI("/heroes?pagination[pageSize]=100&sort=createdAt:asc");
  return normalizeCollection(res);
}

// 2 FRAMES ONLY
function companyPopulate2Frames() {
  return "populate[0]=leftImage&populate[1]=rightImage";
}

export async function getCompanies() {
  const q =
    "/companies?sort=order:asc&pagination[pageSize]=100&" + companyPopulate2Frames();
  const res = await fetchAPI(q);
  return normalizeCollection(res);
}

export async function getCompanyBySlug(slug) {
  const s = encodeURIComponent(String(slug || "").trim());
  if (!s) return null;

  const q =
    `/companies?filters[slug][$eq]=${s}&pagination[pageSize]=1&` +
    companyPopulate2Frames();

  const res = await fetchAPI(q);
  const list = normalizeCollection(res);
  return list[0] || null;
}

export async function getAllCompanySlugs() {
  const res = await fetchAPI("/companies?fields[0]=slug&pagination[pageSize]=200");
  const list = normalizeCollection(res);

  return list
    .map((c) => (c?.slug ? String(c.slug).trim() : ""))
    .filter(Boolean)
    .map((slug) => ({ slug }));
}

export async function getCourse() {
  try {
    const res = await fetchAPI("/course?populate[0]=coverImage");
    return normalizeSingle(res);
  } catch {
    return null;
  }
}

export async function getCraftItems() {
  try {
    const res = await fetchAPI(
      "/craft-items?sort=order:asc&pagination[pageSize]=50&populate[0]=image"
    );
    return normalizeCollection(res);
  } catch {
    return [];
  }
}