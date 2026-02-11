// frontend/components/CourseSection.js
import { getMediaUrl } from "../lib/api";

export default function CourseSection({ course }) {
  if (!course) return null;

  const metaLeft = (course.metaLeft || "").trim();
  const metaRight = (course.metaRight || "").trim();

  const title = (course.title || "").trim();
  const subtitle = (course.subtitle || "").trim();

  const bottomLeft = (course.bottomLeft || "").trim();
  const bottomRight = (course.bottomRight || "").trim();

  const cover = getMediaUrl(course.coverImage);

  const vars = {
    "--course-height": `${Number(course.sectionHeight ?? 1100)}px`,
    "--course-meta-top": `${Number(course.metaTop ?? 220)}px`,
    "--course-title-top": `${Number(course.titleTop ?? 364)}px`,
    "--course-cover-top": `${Number(course.coverTop ?? 455)}px`,
    "--course-cover-height": `${Number(course.coverHeight ?? 600)}px`,
    "--course-bottomline-top": `${Number(course.bottomLineTop ?? 1075)}px`,
  };

  return (
    <section className="course" style={vars}>
      <div className="canvas course-layer">
        {(metaLeft || metaRight) ? (
          <div className="course-meta">
            {metaLeft ? <div className="figma-text">{metaLeft}</div> : null}
            {metaRight ? (
              <div className="figma-text figma-text--secondary">{metaRight}</div>
            ) : null}
          </div>
        ) : null}

        <div className="course-title-wrap">
          <div className="figma-header">{title}</div>
          <div className="figma-text figma-text--secondary">{subtitle}</div>
        </div>

        <div className="course-cover">
          {cover ? <img src={cover} alt={title} /> : null}
        </div>

        <div className="course-bottomline">
          <div className="course-bottomline-row">
            <div className="figma-text">{bottomLeft}</div>
            <div className="figma-text figma-text--secondary">{bottomRight}</div>
          </div>
        </div>
      </div>
    </section>
  );
}