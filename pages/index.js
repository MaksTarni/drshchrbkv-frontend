// pages/index.js
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

import { getSiteSetting, getHeroes, getCourse, getCompanies, getCraftItems } from "@/lib/api";

export default function Home({ settings, heroes, course, companies, craftItems }) {
  const metaTitle = settings?.metaTitle || heroes?.[0]?.title || "";
  const metaDesc = settings?.metaDescription || "";

  const pageVars = {
    "--color-highlight": settings?.accentColor || "#FDFF45",
  };

  return (
    <div style={pageVars}>
      <Head>
        {metaTitle ? <title>{metaTitle}</title> : null}
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
  const safe = async (fn, fallback) => {
    try {
      return await fn();
    } catch {
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