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

  const variant = (company?.variant || "emex").toLowerCase();
  const cls = getCompanyClass(company);

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
      {/* ===== TITLE BLOCK ===== */}
      <div className="company-title-wrapper">
        {subtitle ? (
          <div className="company-subtitle">
            <div className="figma-text figma-text--secondary">
              {subtitle}
            </div>
          </div>
        ) : null}

        {title ? (
          <div className="company-title">
            <div className="figma-header">{title}</div>
          </div>
        ) : null}
      </div>

      {/* ===== TAGS ===== */}
      {tagA ? (
        <div className="company-tag-a">
          <span className="tag">{tagA}</span>
        </div>
      ) : null}

      {tagB ? (
        <div className="company-tag-b">
          <span className="tag">{tagB}</span>
        </div>
      ) : null}

      {/* ===== MEDIA ===== */}
      {variant === "emex" ? (
        <>
          <Media
            src={frameAUrl}
            alt={`${title} frame A`}
            className="company-media--emex-a"
          />
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