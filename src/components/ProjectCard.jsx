export default function ProjectCard({ project, onOpen }) {
  const { title, previewId, tag, year, teaser, withThumb, stack, gallery } = project;

  const classNames = [
    "card",
    "project-card",
    "project-card--compact",
    withThumb ? "project-card--with-thumb" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(project, e.currentTarget);
    }
  };

  return (
    <article
      className={classNames}
      tabIndex={0}
      role="button"
      aria-labelledby={previewId}
      onClick={(e) => onOpen(project, e.currentTarget)}
      onKeyDown={onKeyDown}
    >
      {withThumb && gallery.length > 0 && (
        <div className="project-card-media">
          {stack ? (
            <div className="project-thumbs-stack">
              {gallery.map((img) => (
                <figure key={img.src} className="project-thumb">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width="1200"
                    height="675"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          ) : (
            <figure className="project-thumb">
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                width="1200"
                height="675"
                loading="lazy"
                decoding="async"
              />
            </figure>
          )}
        </div>
      )}
      <div className="project-card-preview">
        <div className="project-meta">
          <span className="project-tag">{tag}</span>
          <time dateTime={year}>{year}</time>
        </div>
        <h3 className="project-preview-title" id={previewId}>
          {title}
        </h3>
        <p className="project-teaser">{teaser}</p>
        <span className="project-card-hint">คลิกการ์ดเพื่ออ่านรายละเอียด</span>
      </div>
    </article>
  );
}
