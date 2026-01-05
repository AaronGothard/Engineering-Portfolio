document.addEventListener("DOMContentLoaded", function () {
  const resumeLinks = document.querySelectorAll("[data-resume-download]");

  resumeLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (typeof gtag === "function") {
        gtag("event", "resume_download", {
          event_category: "engagement",
          event_label: link.getAttribute("href")
        });
      }
    });
  });
});
