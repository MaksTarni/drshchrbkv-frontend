// lib/api.js

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  process.env.STRAPI_URL ||
  "";

// убираем слэш в конце
function normalizeBaseUrl(url) {
  return String(url || "").replace(/\/+$/, "");
}

async function safeJson(res) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}

export function getStrapiBaseUrl() {
  return normalizeBaseUrl(STRAPI_URL);
}

export function getMediaUrl(media) {
  const base = getStrapiBaseUrl();
  const url = media?.url || media?.data?.attributes?.url; // на всякий
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return base ? `${base}${url}` : url;
}

export async function fetchAPI(path) {
  const base = getStrapiBaseUrl();

  if (!base) {
    console.error(
      "[Strapi] Base URL is missing. Set NEXT_PUBLIC_STRAPI_URL in Vercel."
    );
    return null;
  }

  const url = `${base}${path}`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      const body = await safeJson(res);
      console.error("[Strapi] Request failed:", res.status, url, body);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("[Strapi] Fetch error:", url, err);
    return null;
  }
}

// Single type: site-setting
export async function getSiteSettings() {
  const json = await fetchAPI("/api/site-setting");
  return json?.data || null;
}

// Collection: companies
export async function getCompanies() {
  // v5: populate=* ок, и sort по order
  const json = await fetchAPI("/api/companies?populate=*&sort=order:asc");
  return json?.data || [];
}