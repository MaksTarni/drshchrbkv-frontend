// frontend/pages/index.js
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CompanySection from "../components/CompanySection";
import CourseSection from "../components/CourseSection";
import CraftGrid from "../components/CraftGrid";

import {
  getSiteSettings,
  getCompanies,
  getHero,
  getCourse,
  getCraftItems,
} from "../lib/api";

export default function Home({
  settings,
  hero,
  companies,
  course,
  craftItems,
  error,
}) {
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

      {/* projects */}
      <section id="projects" className="projects section">
        {/* Meta line (оставляем в frame только это) */}
        <div className="frame">
          <div className="projects-meta">
            <div className="figma-text">
              {settings?.projectsMetaLeft || "professional projects"}
            </div>
            <div className="figma-text figma-text--secondary">
              {settings?.projectsMetaRight || ""}
            </div>
          </div>
        </div>

        {/* Companies / Course / Craft — каждая секция сама задаёт padding/top по Figma */}
        {(companies || []).map((c) => (
          <CompanySection key={c.id} company={c} />
        ))}

        <CourseSection course={course} />

        <CraftGrid items={craftItems} />
      </section>

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