// pages/index.js
import { getSiteSettings, getCompanies, getMediaUrl } from "../lib/api";

export default function Home({ settings, companies, error }) {
  if (error) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
        <h1 style={{ fontSize: 18, marginBottom: 12 }}>Frontend is running ✅</h1>
        <pre style={{ whiteSpace: "pre-wrap" }}>{error}</pre>
        <p style={{ marginTop: 12, opacity: 0.7 }}>
          Проверь в Vercel: Project → Settings → Environment Variables
          <br />
          <b>NEXT_PUBLIC_STRAPI_URL</b> = https://cms.drshchrbkv.com
        </p>
      </main>
    );
  }

  const accent = settings?.accentColor || "#FDFF45";

  return (
    <div style={{ "--color-highlight": accent }}>
      {/* Минимальный вывод, чтобы точно видеть контент.
          Потом можно вернуть твои компоненты Header/Hero/Projects/Footer. */}
      <main style={{ padding: 40, fontFamily: '"Times New Roman", serif', color: "#161616" }}>
        <section id="index" style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 48, lineHeight: "48px", letterSpacing: "-1px" }}>
            {settings?.metaTitle || "Site settings are not loaded"}
          </div>
          <div style={{ marginTop: 16, maxWidth: 680, fontSize: 16, lineHeight: "20px" }}>
            {settings?.metaDescription || ""}
          </div>
        </section>

        <section id="projects" style={{ marginBottom: 60 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Inter, system-ui, sans-serif" }}>
            <div>{settings?.projectsMetaLeft || "professional projects"}</div>
            <div>{settings?.projectsMetaRight || ""}</div>
          </div>

          <div style={{ height: 1, background: "#E5E5E5", margin: "16px 0 32px" }} />

          {companies?.length ? (
            companies.map((c) => {
              const left = getMediaUrl(c.leftImage);
              const right = getMediaUrl(c.rightImage);

              return (
                <article key={c.id} style={{ marginBottom: 46 }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{c.title}</div>
                  <div style={{ opacity: 0.8, marginBottom: 14, fontFamily: "Inter, system-ui, sans-serif" }}>
                    {c.subtitle}
                  </div>

                  <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                    {left ? (
                      <img
                        src={left}
                        alt={c.leftAlt || ""}
                        style={{ width: 320, height: "auto", display: "block" }}
                      />
                    ) : null}
                    {right ? (
                      <img
                        src={right}
                        alt={c.rightAlt || ""}
                        style={{ width: 320, height: "auto", display: "block" }}
                      />
                    ) : null}
                  </div>
                </article>
              );
            })
          ) : (
            <p style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              Companies empty (нет опубликованных записей или запрос не проходит).
            </p>
          )}
        </section>

        <section id="info" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
          <div>{settings?.contactEmail || "dar.shcherbakova@gmail.com"}</div>
          <div style={{ marginTop: 8 }}>
            {settings?.linkedinUrl ? (
              <a href={settings.linkedinUrl} target="_blank" rel="noreferrer">
                linkedin
              </a>
            ) : (
              <span>linkedin</span>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const [settings, companies] = await Promise.all([getSiteSettings(), getCompanies()]);

    if (!settings) {
      return {
        props: {
          settings: null,
          companies: companies || [],
          error:
            "No site-setting data from Strapi.\n" +
            "1) Strapi должен быть доступен\n" +
            "2) site-setting должен быть Published\n" +
            "3) NEXT_PUBLIC_STRAPI_URL должен быть задан",
        },
      };
    }

    return { props: { settings, companies: companies || [], error: null } };
  } catch (e) {
    return {
      props: {
        settings: null,
        companies: [],
        error: `SSR error:\n${String(e?.message || e)}`,
      },
    };
  }
}