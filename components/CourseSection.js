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
      {/* accent + subtitle row */}
      <div className="course-meta">
        <div className="figma-text">{metaLeft}</div>
        <div className="figma-text figma-text--secondary">{metaRight}</div>
      </div>

      {/* spacer row 84px (как в Figma) */}
      <div />

      {/* title + subtitle (71px) */}
      <div className="course-titleblock">
        <div className="figma-header">{title}</div>
        <div className="figma-text figma-text--secondary">{subtitle}</div>
      </div>

      {/* Frame (600px) */}
      <div className="course-frame">
        {frameUrl ? <img src={frameUrl} alt="Course frame" /> : null}
      </div>

      {/* line row (25px) */}
      <div className="course-line" />
    </section>
  );
}