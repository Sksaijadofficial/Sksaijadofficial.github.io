// ==========================================
// Sk Saijad Official Website
// Main JavaScript
// ==========================================

console.log("Welcome to Sk Saijad Official");

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 🌙 Dark / Light Mode
    // ==========================================

    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {

        // Remember previous theme
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }

        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeBtn.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                themeBtn.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }

        });
    }


    // ==========================================
    // 🔗 Smooth Scroll
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            // Ignore empty #
            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // ==========================================
    // ⬆️ Back To Top Button
    // ==========================================

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        topBtn.style.display = "none";

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }

        });

        topBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // ==========================================
    // 📱 Mobile Menu
    // ==========================================

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("active");

        });

        // Close menu after clicking a link
        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });

        });

    }


    // ==========================================
    // ❓ FAQ
    // ==========================================

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector(".faq-question");

        if (question) {

            question.addEventListener("click", function () {

                item.classList.toggle("active");

            });

        }

    });


    // ==========================================
    // 👋 Website Loaded
    // ==========================================

    console.log("Website Loaded Successfully");

});