// frontend/pages/companies/[slug].js
import Link from "next/link";

export default function CompanyComingSoon() {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 40 }}>
        <Link href="/" style={{ textDecoration: "none", color: "#161616" }}>
          back
        </Link>
      </div>

      <h1 style={{ margin: 0 }}>coming soon</h1>

      <div style={{ marginTop: 40 }}>
        <div>dar.shcherbakova@gmail.com</div>
        <div>linkedin</div>
      </div>
    </div>
  );
}

// чтобы Next не пытался генерить пути и не ходил в API
export async function getStaticPaths() {
  return { paths: [], fallback: false };
}

export async function getStaticProps() {
  return { props: {} };
}