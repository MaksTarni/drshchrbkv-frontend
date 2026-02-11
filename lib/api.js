const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!STRAPI_URL) {
  throw new Error("NEXT_PUBLIC_STRAPI_URL is not defined");
}

async function fetchAPI(path) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Strapi error:", res.status);
    return null;
  }

  return res.json();
}

export async function getSiteSettings() {
  const json = await fetchAPI("/api/site-setting");
  return json?.data || null;
}

export async function getCompanies() {
  const json = await fetchAPI(
    "/api/companies?sort=order:asc"
  );

  return json?.data || [];
}