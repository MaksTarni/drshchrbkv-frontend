const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!STRAPI_URL) {
  throw new Error("NEXT_PUBLIC_STRAPI_URL is not defined");
}

// универсальный fetch
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

// site settings (single type)
export async function getSiteSettings() {
  const json = await fetchAPI("/api/site-setting");
  return json?.data || null;
}

// companies (collection type)
export async function getCompanies() {
  const json = await fetchAPI(
    "/api/companies?populate[leftImage]=true&populate[rightImage]=true&populate[deviceImage]=true&sort=order:asc"
  );

  return json?.data || [];
}