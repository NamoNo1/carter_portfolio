(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".to-top").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  var projectModal = document.getElementById("project-modal");
  var projectModalTitle = projectModal ? projectModal.querySelector("#project-modal-title") : null;
  var projectModalBody = projectModal ? projectModal.querySelector(".project-modal-body") : null;
  var lastProjectOpener = null;

  function isProjectModalOpen() {
    return projectModal && !projectModal.hasAttribute("hidden");
  }

  function updateBodyScrollLock() {
    document.body.style.overflow = isProjectModalOpen() ? "hidden" : "";
  }

  function openProjectModal(article) {
    if (!projectModal || !projectModalBody || !projectModalTitle) return;
    if (!article || !article.matches || !article.matches("article.project-card--compact")) return;
    var targetId = article.getAttribute("data-detail-target");
    if (!targetId) return;
    var detail = document.getElementById(targetId);
    if (!detail) return;
    var inner = detail.querySelector(".project-card-body");
    if (!inner) return;

    var media = article.querySelector(".project-card-media");

    lastProjectOpener = article;
    projectModalTitle.textContent = article.getAttribute("data-project-title") || "";
    projectModalBody.innerHTML = "";
    if (media) {
      var mediaClone = media.cloneNode(true);
      mediaClone.classList.add("project-modal-media");
      projectModalBody.appendChild(mediaClone);
    }
    projectModalBody.appendChild(inner.cloneNode(true));
    projectModal.removeAttribute("hidden");
    updateBodyScrollLock();

    var closeBtn = projectModal.querySelector(".project-modal-close");
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  function closeProjectModal() {
    if (!projectModal || !projectModalBody) return;
    projectModal.setAttribute("hidden", "");
    projectModalBody.innerHTML = "";
    if (projectModalTitle) {
      projectModalTitle.textContent = "";
    }
    updateBodyScrollLock();
    if (lastProjectOpener && typeof lastProjectOpener.focus === "function") {
      lastProjectOpener.focus();
    }
    lastProjectOpener = null;
  }

  if (projectModal && projectModalBody) {
    document.querySelectorAll("article.project-card--compact").forEach(function (article) {
      article.addEventListener("click", function () {
        openProjectModal(article);
      });
      article.addEventListener("keydown", function (e) {
        if (e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault();
        openProjectModal(article);
      });
    });

    projectModal.querySelectorAll("[data-project-modal-close]").forEach(function (el) {
      el.addEventListener("click", closeProjectModal);
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (isProjectModalOpen()) {
      closeProjectModal();
    }
  });
})();
