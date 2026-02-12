// frontend/pages/index.js
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProjectsGrid from "../components/ProjectsGrid";

import {
  getSiteSettings,
  getCompanies,
  getHero,
  getCourse,
  getCraftItems,
} from "../lib/api";

export default function Home({ settings, hero, companies, course, craftItems, error }) {
  const accent = settings?.accentColor || "#FDFF45";

  if (error) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
        <h1>Frontend is running ✅</h1>
        <pre style={{ whiteSpace: "pre-wrap" }}>{error}</pre>
      </main>
    );
  }

  return (
    <div style={{ "--color-highlight": accent }}>
      <Header settings={settings} />
      <Hero hero={hero} accent={accent} />
      <ProjectsGrid
        settings={settings}
        companies={companies}
        course={course}
        craftItems={craftItems}
      />
      <Footer settings={settings} />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const [settings, hero, companies, course, craftItems] = await Promise.all([
      getSiteSettings(),
      getHero(),
      getCompanies(),
      getCourse(),
      getCraftItems(),
    ]);

    return {
      props: {
        settings,
        hero,
        companies,
        course,
        craftItems,
        error: null,
      },
    };
  } catch (e) {
    return {
      props: {
        settings: null,
        hero: null,
        companies: [],
        course: null,
        craftItems: [],
        error: String(e?.message || e),
      },
    };
  }
}