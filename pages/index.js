// pages/index.js
import Head from "next/head";

import Hero from "../components/Hero";
import CompanySection from "../components/CompanySection";
import CourseSection from "../components/CourseSection";
import CraftGrid from "../components/CraftGrid";
import Footer from "../components/Footer";

import {
  getSiteSettings,
  getHero,
  getCompanies,
  getCourse,
  getCraftItems,
} from "../lib/api";

export default function HomePage({
  settings,
  hero,
  companies,
  course,
  craftItems,
}) {
  const accent = settings?.accentColor || "#FDFF45";
  const metaTitle = settings?.metaTitle || "Portfolio";
  const metaDescription = settings?.metaDescription || "";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        {metaDescription ? (
          <meta name="description" content={metaDescription} />
        ) : null}
      </Head>

      {/* глобальный акцент (используется в CSS через var(--color-highlight)) */}
      <div style={{ "--color-highlight": accent }}>
        {/* HERO (у тебя текущий Hero.js уже рисует header/nav внутри) */}
        <Hero hero={hero} settings={settings} />

        {/* PROFESSIONAL PROJECTS (companies) */}
        <section id="projects" className="projects section">
          <div className="frame">
            <div className="projects-meta">
              <div className="figma-text">
                {settings?.projectsTitle || "professional projects"}
              </div>
              <div className="figma-text figma-text--secondary">
                {settings?.projectsSubtitle || ""}
              </div>
            </div>
          </div>

          {Array.isArray(companies) &&
            companies.map((c) => (
              <CompanySection key={c?.id || c?.documentId} company={c} />
            ))}
        </section>

        {/* COURSE (в макете идёт ПОСЛЕ компаний) */}
        <CourseSection course={course} settings={settings} />

        {/* CRAFT */}
        <CraftGrid items={craftItems} settings={settings} />

        <Footer settings={settings} />
      </div>
    </>
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
        settings: settings || null,
        hero: hero || null,
        companies: companies || [],
        course: course || null,
        craftItems: craftItems || [],
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
        error: e?.message || "Failed to load data",
      },
    };
  }
}