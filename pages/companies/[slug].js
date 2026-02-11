// frontend/pages/companies/[slug].js
import Link from "next/link";

export default function ComingSoon() {
  return (
    <main style={{ padding: 20 }}>
      <Link href="/" style={{ textDecoration: "none", color: "#161616" }}>
        back
      </Link>

      <h1 style={{ marginTop: 220, fontSize: 56, lineHeight: "56px" }}>coming soon</h1>

      <div style={{ marginTop: 220 }}>
        <div>dar.shcherbakova@gmail.com</div>
        <div style={{ marginTop: 6 }}>linkedin</div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  // всегда рендерим заглушку
  return { props: {} };
}