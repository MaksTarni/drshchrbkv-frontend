// frontend/components/ProjectsGrid.js
import CourseSection from "@/components/CourseSection";
import CompanySection from "@/components/CompanySection";
import CraftGrid from "@/components/CraftGrid";

export default function ProjectsGrid({ settings, course, companies, craftItems }) {
  const title = (settings?.projectsTitle || "").trim();
  const subtitle = (settings?.projectsSubtitle || "").trim();

  return (
    <section id="projects" className="projects">
      {/* только заголовок секции — в frame (нужен padding) */}
      {(title || subtitle) ? (
        <div className="frame">
          <div className="projects-meta">
            {title ? <div className="figma-text">{title}</div> : null}
            {subtitle ? (
              <div className="figma-text figma-text--secondary">{subtitle}</div>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* дальше — секции со своим “canvas” (абсолюты как в Figma) */}
      <CourseSection course={course} settings={settings} />

      {Array.isArray(companies) && companies.length > 0
        ? companies.map((c) => (
            <CompanySection key={c.id || c.documentId} company={c} />
          ))
        : null}

      <CraftGrid items={craftItems} settings={settings} />
    </section>
  );
}