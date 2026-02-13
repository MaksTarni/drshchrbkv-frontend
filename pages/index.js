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

      <div className="page-layout" style={{ "--color-highlight": accent }}>
        <Hero hero={hero} accent={accent} settings={settings} />

        <section id="projects" className="projects section">
          <div className="frame">
            <div className="projects-meta">
              <span className="figma-text">
                {settings?.projectsTitle || "professional projects"}
              </span>
              <span className="figma-text figma-text--secondary">
                {" "}
                {settings?.projectsSubtitle || "2021 — present"}
              </span>
            </div>
          </div>

          {/* ✅ СНАЧАЛА компании */}
          {Array.isArray(companies) &&
            companies.map((c) => (
              <CompanySection key={c?.id || c?.documentId} company={c} />
            ))}

          {/* ✅ ПОТОМ course */}
          <CourseSection course={course} />
        </section>

        <CraftGrid items={craftItems} />

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