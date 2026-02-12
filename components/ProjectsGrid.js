// frontend/components/ProjectsGrid.js
import CompanySection from "@/components/CompanySection";
import CourseSection from "@/components/CourseSection";
import CraftGrid from "@/components/CraftGrid";

export default function ProjectsGrid({ settings, companies = [], course, craftItems = [] }) {
  return (
    <section id="projects" className="projects section">
      {/* Meta line */}
      <div className="frame">
        <div className="projects-meta">
          <div className="figma-text">
            {settings?.projectsMetaLeft || "professional projects"}
          </div>
          <div className="figma-text figma-text--secondary">
            {settings?.projectsMetaRight || ""}
          </div>
        </div>
      </div>

      {(companies || []).map((c) => (
        <CompanySection key={c.id || c.documentId} company={c} />
      ))}

      <CourseSection course={course} />

      <CraftGrid items={craftItems} />
    </section>
  );
}