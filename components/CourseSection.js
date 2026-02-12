// frontend/components/CourseSection.js
import { getMediaUrl } from "../lib/api";

export default function CourseSection({ course }) {
  if (!course) return null;

  const metaLeft = course.metaLeft || "courses";
  const metaRight = course.metaRight || "";
  const title = course.title || "";
  const subtitle = course.subtitle || "";

  const frameUrl = getMediaUrl(course?.courseFrame?.image);

  return (
    <section className="course-grid" aria-label="course">
      {/* row 1 (20px): meta */}
      <div className="course-meta">
        <div className="figma-text">{metaLeft}</div>
        <div className="figma-text figma-text--secondary">{metaRight}</div>
      </div>

      {/* row 2 (84px): spacer */}
      <div className="course-spacer" />

      {/* row 3 (71px): title + subtitle */}
      <div className="course-titleblock">
        <div className="figma-header">{title}</div>
        <div className="figma-text figma-text--secondary">{subtitle}</div>
      </div>

      {/* row 4 (600px): frame */}
      <div className="course-frame">
        {frameUrl ? <img src={frameUrl} alt="Course frame" /> : null}
      </div>

      {/* row 5 (25px): bottom line */}
      <div className="course-line" />
    </section>
  );
}