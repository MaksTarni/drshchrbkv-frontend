// pages/companies/[slug].js
import Link from "next/link";

export default function CompanyComingSoon() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "28px 20px 40px",
        fontFamily: '"Times New Roman", serif',
        color: "#161616",
      }}
    >
      <div style={{ marginBottom: 80 }}>
        <Link
          href="/"
          style={{
            fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
            fontSize: 14,
            color: "#161616",
            textDecoration: "none",
          }}
        >
          back
        </Link>
      </div>

      <div
        style={{
          fontSize: 64,
          lineHeight: "0.95",
          letterSpacing: "-1px",
          marginTop: 180,
          marginBottom: 24,
        }}
      >
        coming soon
      </div>

      <div
        style={{
          height: 380,
          background: "var(--color-highlight, #FDFF45)",
          marginTop: 18,
          marginBottom: 34,
        }}
      />

      <div
        style={{
          fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          fontSize: 14,
          lineHeight: "18px",
        }}
      >
        <div>dar.shcherbakova@gmail.com</div>
        <div style={{ marginTop: 6 }}>linkedin</div>
      </div>
    </main>
  );
}