// frontend/pages/companies/[slug].js
import Link from "next/link";
import { getAllCompanySlugs, getSiteSetting } from "@/lib/api";

export async function getStaticPaths() {
  const slugs = await getAllCompanySlugs().catch(() => []);
  return {
    paths: slugs.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  // нам не нужен company-контент — это заглушка
  const settings = await getSiteSetting().catch(() => null);

  // если slug вообще не существует — можно всё равно показывать заглушку
  return {
    props: {
      settings,
      slug: params?.slug || "",
    },
    revalidate: 60,
  };
}

export default function ComingSoonPage({ settings }) {
  const email = settings?.contactEmail || "dar.shcherbakova@gmail.com";
  const linkedin = settings?.linkedinUrl || "#";

  return (
    <main style={{ padding: "30px 20px" }}>
      <div style={{ marginBottom: 40 }}>
        <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
          back
        </Link>
      </div>

      <div style={{ fontFamily: "Times New Roman, serif", fontSize: 64, lineHeight: "64px", marginTop: 220 }}>
        coming soon
      </div>

      <div style={{ position: "fixed", left: 20, bottom: 30, fontSize: 14 }}>
        <div>{email}</div>
        <div>
          <a href={linkedin} target="_blank" rel="noreferrer" style={{ color: "#000" }}>
            linkedin
          </a>
        </div>
      </div>
    </main>
  );
}