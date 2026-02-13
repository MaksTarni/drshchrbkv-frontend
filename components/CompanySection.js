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

export default function CompanySection({ company }) {
  if (!company) return null;

  const title = company?.title || "";
  const subtitle = company?.subtitle || "";
  const tagA = company?.tagA || "";
  const tagB = company?.tagB || "";

  const frameAUrl = getMediaUrl(company?.frameA?.image);
  const frameBUrl = getMediaUrl(company?.frameB?.image);

  const cls = getCompanyClass(company);
  const variant = (company?.variant || "emex").toLowerCase();

  const Media = ({ src, alt, className }) => {
    if (!src) return null;
    return (
      <div className={`company-media ${className || ""}`.trim()}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
    );
  };

  return (
    <section className={cls} aria-label={title}>
      <div className="company-title">
        <div className="figma-header">{title}</div>
      </div>

      <div className="company-subtitle">
        <div className="figma-text figma-text--secondary">{subtitle}</div>
      </div>

      <div className="company-tags">
        {tagA ? <span className="tag">{tagA}</span> : null}
        {tagB ? <span className="tag">{tagB}</span> : null}
      </div>

      {variant === "emex" ? (
        <>
          {/* empty left column (Figma empty frame) */}
          <div className="company-empty company-empty--left" />

          {/* Frame A (middle small card) */}
          <Media
            src={frameAUrl}
            alt={`${title} frame A`}
            className="company-media--emex-a"
          />

          {/* empty cell under frame A (Figma empty) */}
          <div className="company-empty company-empty--emex-a-bottom" />

          {/* Frame B (big monitor) */}
          <Media
            src={frameBUrl}
            alt={`${title} frame B`}
            className="company-media--emex-b"
          />
        </>
      ) : (
        <>
          <Media
            src={frameAUrl}
            alt={`${title} frame A`}
            className="company-media--a"
          />
          <Media
            src={frameBUrl}
            alt={`${title} frame B`}
            className="company-media--b"
          />
        </>
      )}
    </section>
  );
}