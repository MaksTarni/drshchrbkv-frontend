import { getSiteSettings, getCompanies } from "@/lib/api";

export default function Home({ settings, companies }) {
  if (!settings) {
    return <div style={{ padding: 40 }}>No site settings found</div>;
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Times New Roman, serif" }}>
      {/* HERO */}
      <section id="index" style={{ marginBottom: 80 }}>
        <h1 style={{ fontSize: 48, marginBottom: 20 }}>
          {settings.metaTitle}
        </h1>
        <p style={{ maxWidth: 600 }}>{settings.metaDescription}</p>
      </section>

      {/* PROJECTS */}
      <section style={{ marginBottom: 120 }}>
        <h2 style={{ fontSize: 28, marginBottom: 40 }}>
          {settings.projectsMetaLeft || "Projects"}
        </h2>

        {companies.length === 0 && (
          <p>No companies found in Strapi.</p>
        )}

        {companies.map((company) => {
          const leftImage =
            company.leftImage?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${company.leftImage.url}`
              : null;

          const rightImage =
            company.rightImage?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${company.rightImage.url}`
              : null;

          return (
            <div
              key={company.id}
              style={{
                marginBottom: 80,
                borderBottom: "1px solid #eee",
                paddingBottom: 40,
              }}
            >
              <h3 style={{ fontSize: 24 }}>{company.title}</h3>
              <p style={{ marginBottom: 20 }}>{company.subtitle}</p>

              <div style={{ display: "flex", gap: 40 }}>
                {leftImage && (
                  <img
                    src={leftImage}
                    alt={company.leftAlt || ""}
                    style={{ width: 250 }}
                  />
                )}

                {rightImage && (
                  <img
                    src={rightImage}
                    alt={company.rightAlt || ""}
                    style={{ width: 400 }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* CONTACT */}
      <section id="info">
        <p>{settings.contactEmail}</p>
        {settings.linkedinUrl && (
          <a href={settings.linkedinUrl} target="_blank">
            linkedin
          </a>
        )}
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const settings = await getSiteSettings();
  const companies = await getCompanies();

  return {
    props: {
      settings,
      companies,
    },
  };
}