import React from "react";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "https://cms.drshchrbkv.com";

function getMediaUrl(media) {
  const url = media?.url;
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

function getCompanyClass(company) {
  const v = (company?.variant || "emex").toLowerCase();
  return `company-${v}`;
}

/**
 * Tag format in Strapi: "seller hub|2025"
 * Требование: после "|" другой стиль (серый).
 */
function RenderTag({ value }) {
  if (!value) return null;

  const raw = String(value);
  const parts = raw.split("|");

  // если "|" нет — рендерим как есть
  if (parts.length < 2) return <span className="tag">{raw}</span>;

  const left = parts[0].trim();
  const right = parts.slice(1).join("|").trim(); // на случай, если "|" больше одного

  return (
    <span className="tag">
      {left} <span className="tag-sep">|</span>
      <span className="tag-secondary">{right}</span>
    </span>
  );
}

export default function CompanySection({ company }) {
  if (!company) return null;

  const title = company?.title || "";
  const subtitle = company?.subtitle || "";
  const tagA = company?.tagA || "";
  const tagB = company?.tagB || "";

  const frameAUrl = getMediaUrl(company?.frameA?.image);
  const frameBUrl = getMediaUrl(company?.frameB?.image);

  const variant = (company?.variant || "emex").toLowerCase();
  const cls = getCompanyClass(company);

  // EMEX layout
  if (variant === "emex") {
    return (
      <section className={cls} aria-label={title}>
        {/* Row 1: title + subtitle */}
        <div className="company-title-wrapper">
          {subtitle ? (
            <div className="company-subtitle">
              <div className="figma-text figma-text--secondary">{subtitle}</div>
            </div>
          ) : null}
          {title ? (
            <div className="company-title">
              <div className="figma-header">{title}</div>
            </div>
          ) : null}
        </div>

        {/* Line under title */}
        <div className="company-line-top" />

        {/* Row 2: tagA, frameA, frameB (big) */}
        {tagA ? (
          <div className="company-tag-a">
            <RenderTag value={tagA} />
          </div>
        ) : null}

        {frameAUrl ? (
          <div className="company-media company-media--emex-a">
            <img src={frameAUrl} alt={`${title} frame A`} loading="lazy" />
          </div>
        ) : null}

        {frameBUrl ? (
          <div className="company-media company-media--emex-b">
            <img src={frameBUrl} alt={`${title} frame B`} loading="lazy" />
          </div>
        ) : null}

        {/* Row 3: tagB */}
        {tagB ? (
          <div className="company-tag-b">
            <RenderTag value={tagB} />
          </div>
        ) : null}
      </section>
    );
  }

  // SBERBANK и CLOUDPAYMENTS layout
  return (
    <section className={cls} aria-label={title}>
      {/* Row 1: title и subtitle */}
      {title ? (
        <div className="company-title">
          <div className="figma-header">{title}</div>
        </div>
      ) : null}

      {subtitle ? (
        <div className="company-subtitle">
          <div className="figma-text figma-text--secondary">{subtitle}</div>
        </div>
      ) : null}

      {/* Tags для sberbank */}
      {variant === "sberbank" && tagA ? (
        <div className="company-tag-a">
          <RenderTag value={tagA} />
        </div>
      ) : null}

      {/* Media frames */}
      {frameAUrl ? (
        <div className={`company-media company-media--a`}>
          <img src={frameAUrl} alt={`${title} frame A`} loading="lazy" />
        </div>
      ) : null}

      {frameBUrl ? (
        <div className={`company-media company-media--b`}>
          <img src={frameBUrl} alt={`${title} frame B`} loading="lazy" />
        </div>
      ) : null}
    </section>
  );
}