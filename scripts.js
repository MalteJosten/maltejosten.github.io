lightModeIcon = document.querySelector("link#icon-light-mode");
darkModeIcon = document.querySelector("link#icon-dark-mode");

matcher = window.matchMedia("(prefers-color-scheme: dark)");
matcher.addListener(onUpdate);
onUpdate();

function onUpdate() {
    if (matcher.matches) {
        lightModeIcon.remove();
        document.head.append(darkModeIcon);
    } else {
        darkModeIcon.remove();
        document.head.append(lightModeIcon);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-link");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
});
