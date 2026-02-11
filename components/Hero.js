// frontend/components/Hero.js
export default function Hero({ hero, accent }) {
  const title = hero?.title || "";
  const highlight =
    // description в Strapi у тебя blocks — на фронте проще поддержать string fallback
    (typeof hero?.description === "string" ? hero.description : "") || "";

  const bg = hero?.highlightColor || accent || "#FDFF45";

  return (
    <section id="index" className="hero">
      {/* nav лежит в Header, тут только hero */}
      <div className="hero-grid">
        <div className="hero-top-left">{title}</div>

        {/* пустые ячейки сетки, чтобы повторить структуру figma */}
        <div className="hero-top-right" />

        <div className="hero-mid-left" />
        <div className="hero-mid-right" />

        {/* нижний левый блок с желтым фоном */}
        <div className="hero-bottom-left">
          <div className="hero-yellow" style={{ background: bg }}>
            <div className="hero-yellow-text">{highlight}</div>
          </div>
        </div>

        <div className="hero-bottom-right" />
      </div>
    </section>
  );
}