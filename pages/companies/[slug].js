// frontend/pages/companies/[slug].js
import Header from "@/components/Header";
import {
  blocksToText,
  getAllCompanySlugs,
  getCompanyBySlug,
  getSiteSetting,
  getMediaUrl,
} from "@/lib/api";

export async function getStaticPaths() {
  const slugs = await getAllCompanySlugs().catch(() => []);
  return {
    paths: slugs.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const safe = async (fn, fallback) => {
    try {
      return await fn();
    } catch {
      return fallback;
    }
  };

  const [settings, company] = await Promise.all([
    safe(getSiteSetting, null),
    safe(() => getCompanyBySlug(params.slug), null),
  ]);

  if (!company) return { notFound: true };

  return { props: { settings, company }, revalidate: 60 };
}

export default function CompanyPage({ settings, company }) {
  const title = (company.title || company.name || "").trim();
  const subtitle = (company.subtitle || "").trim();
  const detail = blocksToText(company.detail);

  const left = getMediaUrl(company.leftImage);
  const right = getMediaUrl(company.rightImage);

  return (
    <>
      <Header settings={settings} />
      <main style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="frame">
          {title ? <h1 className="figma-header">{title}</h1> : null}
          {subtitle ? <div className="figma-text figma-text--secondary">{subtitle}</div> : null}

          {(left || right) ? (
            <div
              style={{
                marginTop: 30,
                display: "grid",
                gap: 20,
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              {left ? <img src={left} alt={(company.leftAlt || "").trim()} style={{ width: "100%" }} /> : null}
              {right ? <img src={right} alt={(company.rightAlt || "").trim()} style={{ width: "100%" }} /> : null}
            </div>
          ) : null}

          {detail ? (
            <div style={{ marginTop: 30, whiteSpace: "pre-line" }} className="figma-text">
              {detail}
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}