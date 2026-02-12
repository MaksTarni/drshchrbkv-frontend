// frontend/components/CourseSection.js
import { getMediaUrl } from "../lib/api";

const DEFAULT_FRAME = {
  top: 455,
  left: 20,
  width: 1326,
  height: 600,
  zIndex: 2,
  objectFit: "cover",
};

function resolveSlot(slot, defaults) {
  if (!slot) return null;

  return {
    imageUrl: getMediaUrl(slot.image),
    top: slot.top ?? defaults.top,
    left: slot.left ?? defaults.left,
    width: slot.width ?? defaults.width,
    height: slot.height ?? defaults.height,
    zIndex: slot.zIndex ?? defaults.zIndex ?? 1,
    objectFit: slot.objectFit ?? defaults.objectFit ?? "cover",
  };
}

export default function CourseSection({ course }) {
  if (!course) return null;

  const metaLeft = course.metaLeft || "courses";
  const metaRight = course.metaRight || "";
  const title = course.title || "design mentor";
  const subtitle = course.subtitle || "";

  const frame = resolveSlot(course.courseFrame, DEFAULT_FRAME);

  return (
    <section className="course">
      <div className="course-inner">
        <div className="projects-meta">
          <div className="figma-text">{metaLeft}</div>
          <div className="figma-text figma-text--secondary">{metaRight}</div>
        </div>

        <div className="hero-intro" style={{ top: 60 }}>
          <div className="figma-header" style={{ marginBottom: 18 }}>
            {title}
          </div>
          <div className="figma-text figma-text--secondary">{subtitle}</div>
        </div>

        {/* PNG slot */}
        {frame?.imageUrl ? (
          <div
            className="frame-slot"
            style={{
              top: frame.top,
              left: frame.left,
              width: frame.width,
              height: frame.height,
              zIndex: frame.zIndex,
            }}
          >
            <img src={frame.imageUrl} alt="Course frame" style={{ objectFit: frame.objectFit }} />
          </div>
        ) : null}
      </div>
    </section>
  );
}