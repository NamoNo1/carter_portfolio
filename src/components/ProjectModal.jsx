import { useEffect, useRef } from "react";

function ModalGallery({ images, stack }) {
  if (!images?.length) return null;

  const figures = images.map((img) => (
    <figure key={img.src} className="project-thumb">
      <img src={img.src} alt={img.alt} width="1200" height="675" loading="lazy" decoding="async" />
    </figure>
  ));

  return (
    <div className="project-modal-media">
      {stack ? <div className="project-thumbs-stack">{figures}</div> : figures[0]}
    </div>
  );
}

export default function ProjectModal({ open, title, images, stack, children, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="project-modal"
      className="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="project-modal-backdrop"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="project-modal-panel">
        <button
          ref={closeRef}
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="ปิด"
        >
          ×
        </button>
        <h2 id="project-modal-title" className="project-modal-title">
          {title}
        </h2>
        <div className="project-modal-body">
          <ModalGallery images={images} stack={stack} />
          <div className="project-card-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
