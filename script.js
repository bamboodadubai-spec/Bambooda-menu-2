document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner-image");
    const stickyHeader = document.querySelector(".sticky-header");

    if (!banner) return;

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY > 120;

        banner.classList.toggle("is-shrunk", scrolled);

        if (stickyHeader) {
            stickyHeader.classList.toggle("show", scrolled);
        }
    });
});
