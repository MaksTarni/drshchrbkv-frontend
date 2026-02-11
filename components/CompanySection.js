// frontend/components/CompanySection.js
import Link from "next/link";
import { getMediaUrl } from "@/lib/api";

function splitTag(v) {
  const s = (v || "").trim();
  if (!s) return { accent: "", sub: "" };
  const parts = s.split("|").map((x) => x.trim()).filter(Boolean);
  if (parts.length === 1) return { accent: parts[0], sub: "" };
  return { accent: parts[0], sub: parts.slice(1).join(" ") };
}

export default function CompanySection({ company }) {
  if (!company) return null;

  const title = (company.title || company.name || "").trim();
  const subtitle = (company.subtitle || "").trim();

  const variant = (company.variant || company.slug || "emex")
    .toString()
    .toLowerCase();

  const slug = (company.slug || "").trim();
  const href = slug ? `/companies/${slug}` : null;

  const leftImg = getMediaUrl(company.leftImage);
  const rightImg = getMediaUrl(company.rightImage);

  const tagA = splitTag(company.tagA);
  const tagB = splitTag(company.tagB);

  const TitleBlock = (
    <div className="company-title">
      <div className="figma-header">{title}</div>
      <div className="figma-text figma-text--secondary">{subtitle}</div>
    </div>
  );

  return (
    <section className={`company company--${variant}`}>
      <div className="canvas company-layer">
        {href ? (
          <Link href={href} legacyBehavior>
            <a style={{ color: "inherit", textDecoration: "none" }}>{TitleBlock}</a>
          </Link>
        ) : (
          TitleBlock
        )}

        <div className="company-meta company-meta--top">
          <div className="company-meta-row">
            {tagA.accent ? <div className="figma-text">{tagA.accent}</div> : null}
            {tagA.sub ? (
              <div className="figma-text figma-text--secondary">{tagA.sub}</div>
            ) : null}
          </div>
        </div>

        <div className="company-meta company-meta--bottom">
          <div className="company-meta-row">
            {tagB.accent ? <div className="figma-text">{tagB.accent}</div> : null}
            {tagB.sub ? (
              <div className="figma-text figma-text--secondary">{tagB.sub}</div>
            ) : null}
          </div>
        </div>

        <div className="company-frame company-frame--left">
          {leftImg ? (
            href ? (
              <Link href={href} legacyBehavior>
                <a><img src={leftImg} alt={(company.leftAlt || "").trim()} /></a>
              </Link>
            ) : (
              <img src={leftImg} alt={(company.leftAlt || "").trim()} />
            )
          ) : null}
        </div>

        <div className="company-frame company-frame--right">
          {rightImg ? (
            href ? (
              <Link href={href} legacyBehavior>
                <a><img src={rightImg} alt={(company.rightAlt || "").trim()} /></a>
              </Link>
            ) : (
              <img src={rightImg} alt={(company.rightAlt || "").trim()} />
            )
          ) : null}
        </div>
      </div>
    </section>
  );
}