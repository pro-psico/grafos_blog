// Marcar el link activo según la página actual
document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath) {
        link.classList.add("active");
        }
    });

    // Año actual en el footer
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        const year = new Date().getFullYear();
        yearSpan.textContent = year;
    }

    // Menú móvil
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        });
    }
});
