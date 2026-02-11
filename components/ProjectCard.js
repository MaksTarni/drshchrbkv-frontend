// frontend/components/ProjectCard.js
import Link from "next/link";
import { getMediaUrl } from "@/lib/api";

// Формат tag-полей: "accent|subtitle"
function splitTag(v) {
  const s = (v || "").trim();
  if (!s) return { accent: "", sub: "" };
  const parts = s.split("|").map((x) => x.trim()).filter(Boolean);
  if (parts.length === 1) return { accent: parts[0], sub: "" };
  return { accent: parts[0], sub: parts.slice(1).join(" ") };
}

export default function ProjectCard({ company }) {
  if (!company) return null;

  const slug = (company.slug || "").trim();
  const href = slug ? `/companies/${slug}` : null;

  const title = (company.title || company.name || "").trim();
  const subtitle = (company.subtitle || "").trim();

  // 2 FRAMES ONLY
  const leftUrl = getMediaUrl(company.leftImage);
  const rightUrl = getMediaUrl(company.rightImage);

  const tagA = splitTag(company.tagA || "");
  const tagB = splitTag(company.tagB || "");

  const cls = slug ? `companyBlock companyBlock--${slug}` : "companyBlock";

  // если вообще нет контента — не рендерим
  if (!title && !subtitle && !leftUrl && !rightUrl && !tagA.accent && !tagB.accent) {
    return null;
  }

  const Body = (
    <div className="companyBlock__frame">
      {(title || subtitle) ? (
        <div className="companyBlock__title">
          {title ? <h3 className="figma-header">{title}</h3> : null}
          {subtitle ? <div className="figma-text figma-text--secondary">{subtitle}</div> : null}
        </div>
      ) : null}

      {(tagA.accent || tagA.sub) ? (
        <div className="companyTag companyTag--a">
          <div className="companyTag__row">
            {tagA.accent ? <div className="figma-text">{tagA.accent}</div> : null}
            {tagA.sub ? <div className="figma-text figma-text--secondary">{tagA.sub}</div> : null}
          </div>
        </div>
      ) : null}

      {(tagB.accent || tagB.sub) ? (
        <div className="companyTag companyTag--b">
          <div className="companyTag__row">
            {tagB.accent ? <div className="figma-text">{tagB.accent}</div> : null}
            {tagB.sub ? <div className="figma-text figma-text--secondary">{tagB.sub}</div> : null}
          </div>
        </div>
      ) : null}

      <div className="companyMedia companyMedia--left">
        {leftUrl ? <img src={leftUrl} alt={(company.leftAlt || "").trim()} /> : null}
      </div>

      <div className="companyMedia companyMedia--right">
        {rightUrl ? <img src={rightUrl} alt={(company.rightAlt || "").trim()} /> : null}
      </div>
    </div>
  );

  return (
    <section className={cls} aria-label={title || "company"}>
      {href ? (
        <Link href={href}>
          <a style={{ display: "block", color: "inherit", textDecoration: "none" }}>{Body}</a>
        </Link>
      ) : (
        Body
      )}
    </section>
  );
}