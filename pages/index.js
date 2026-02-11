// frontend/pages/index.js
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CompanySection from "../components/CompanySection";

import { getSiteSettings, getCompanies, getHero } from "../lib/api";

export default function Home({ settings, hero, companies, error }) {
  const accent = settings?.accentColor || "#FDFF45";

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

  return (
    <div style={{ "--color-highlight": accent }}>
      <Header settings={settings} />
      <Hero hero={hero} accent={accent} />

      {/* projects */}
      <section id="projects" className="projects">
        <div className="frame">
          <div className="projects-meta">
            <div className="figma-text">
              {settings?.projectsMetaLeft || "professional projects"}
            </div>
            <div className="figma-text figma-text--secondary">
              {settings?.projectsMetaRight || ""}
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--color-line)", marginTop: 16 }} />

          {(companies || []).map((c) => (
            <CompanySection key={c.id} company={c} />
          ))}
        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const [settings, hero, companies] = await Promise.all([
      getSiteSettings(),
      getHero(),
      getCompanies(),
    ]);

    if (!settings) {
      return {
        props: {
          settings: null,
          hero: null,
          companies: [],
          error:
            "No site-setting data from Strapi.\n" +
            "1) Strapi должен быть доступен\n" +
            "2) site-setting должен быть Published\n" +
            "3) NEXT_PUBLIC_STRAPI_URL должен быть задан",
        },
      };
    }

    return {
      props: {
        settings,
        hero,
        companies: companies || [],
        error: null,
      },
    };
  } catch (e) {
    return {
      props: {
        settings: null,
        hero: null,
        companies: [],
        error: `SSR error:\n${String(e?.message || e)}`,
      },
    };
  }
}