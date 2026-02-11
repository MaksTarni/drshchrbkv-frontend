// frontend/pages/index.js
import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

import { getSiteSetting, getHeroes, getCourse, getCompanies, getCraftItems } from "@/lib/api";

export default function Home({ settings, heroes, course, companies, craftItems }) {
  // чтобы страница НЕ была пустой даже если Strapi временно недоступен
  const metaTitle =
    settings?.metaTitle ||
    heroes?.[0]?.title ||
    "Portfolio";

  const metaDesc =
    settings?.metaDescription ||
    "";

  const pageVars = {
    "--color-highlight": settings?.accentColor || "#FDFF45",
  };

  return (
    <div style={pageVars}>
      <Head>
        <title>{metaTitle}</title>
        {metaDesc ? <meta name="description" content={metaDesc} /> : null}
      </Head>

      <Header settings={settings} />
      <Hero heroes={heroes} settings={settings} />

      <ProjectsGrid
        settings={settings}
        course={course}
        companies={companies}
        craftItems={craftItems}
      />

      <Footer settings={settings} />
    </div>
  );
}

export async function getStaticProps() {
  // ничего не падает — в худшем случае вернём пустые данные и покажем страницу
  const safe = async (fn, fallback) => {
    try {
      const v = await fn();
      return v ?? fallback;
    } catch (e) {
      return fallback;
    }
  };

  const settings = await safe(getSiteSetting, null);
  const heroes = await safe(getHeroes, []);
  const course = await safe(getCourse, null);
  const companies = await safe(getCompanies, []);
  const craftItems = await safe(getCraftItems, []);

  return {
    props: { settings, heroes, course, companies, craftItems },
    revalidate: 30,
  };
}