"use strict";

// ==========================================================
// Sk Saijad Official
// PREMIUM MAIN JAVASCRIPT
// ==========================================================

console.log("🚕 Sk Saijad Official - Website Starting...");

document.addEventListener("DOMContentLoaded", function () {

    // ======================================================
    // 🌙 DARK / LIGHT MODE
    // ======================================================

    const themeBtn = document.getElementById("themeBtn");

    function applyTheme(theme) {

        if (theme === "dark") {
            document.body.classList.add("dark-mode");

            if (themeBtn) {
                themeBtn.textContent = "☀️";
                themeBtn.setAttribute(
                    "aria-label",
                    "Switch to Light Mode"
                );
            }

        } else {
            document.body.classList.remove("dark-mode");

            if (themeBtn) {
                themeBtn.textContent = "🌙";
                themeBtn.setAttribute(
                    "aria-label",
                    "Switch to Dark Mode"
                );
            }
        }
    }


    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        applyTheme("dark");
    } else {
        applyTheme("light");
    }


    if (themeBtn) {

        themeBtn.addEventListener("click", function () {

            const isDark =
                document.body.classList.contains("dark-mode");

            if (isDark) {

                applyTheme("light");
                localStorage.setItem("theme", "light");

            } else {

                applyTheme("dark");
                localStorage.setItem("theme", "dark");

            }

        });

    }


    // ======================================================
    // 📱 MOBILE MENU
    // ======================================================

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.addEventListener("click", function () {

            const isOpen =
                navMenu.classList.toggle("active");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuBtn.textContent =
                isOpen ? "✕" : "☰";

        });


        // Close menu after clicking a link

        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.textContent = "☰";

            });

        });


        // Close menu when clicking outside

        document.addEventListener("click", function (event) {

            if (
                navMenu.classList.contains("active") &&
                !navMenu.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {

                navMenu.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.textContent = "☰";
            }

        });

    }


    // ======================================================
    // 🔗 SMOOTH SCROLL
    // ======================================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target =
                document.querySelector(href);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ======================================================
    // ⬆️ BACK TO TOP
    // ======================================================

    const topBtn =
        document.getElementById("topBtn");


    if (topBtn) {

        topBtn.style.display = "none";

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 350) {

                    topBtn.style.display = "flex";

                } else {

                    topBtn.style.display = "none";

                }

            },
            { passive: true }
        );


        topBtn.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // ======================================================
    // ❓ FAQ
    // ======================================================

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {

        const question =
            item.querySelector(".faq-question");

        if (question) {

            question.addEventListener(
                "click",
                function () {

                    item.classList.toggle("active");

                }
            );

        }

    });


    // ======================================================
    // ⭐ STAR RATING SYSTEM
    // ======================================================

    const ratingStars =
        document.querySelectorAll(
            "#ratingStars button"
        );

    const ratingText =
        document.getElementById("ratingText");

    const submitRating =
        document.getElementById("submitRating");

    const averageRating =
        document.getElementById("averageRating");

    const ratingCount =
        document.getElementById("ratingCount");


    let selectedRating = 0;


    const ratingMessages = {

        1: "😞 Very Poor",

        2: "😕 Poor",

        3: "🙂 Good",

        4: "😊 Very Good",

        5: "🤩 Excellent!"

    };


    // ------------------------------------------------------
    // Load Ratings
    // ------------------------------------------------------

    function loadRatings() {

        let savedRatings = [];

        try {

            savedRatings =
                JSON.parse(
                    localStorage.getItem(
                        "skSaijadRatings"
                    )
                ) || [];

        } catch (error) {

            console.warn(
                "Could not read saved ratings."
            );

            savedRatings = [];

        }


        if (savedRatings.length > 0) {

            const total =
                savedRatings.reduce(
                    function (sum, rating) {

                        return sum + Number(rating);

                    },
                    0
                );


            const average =
                total / savedRatings.length;


            if (averageRating) {

                averageRating.textContent =
                    average.toFixed(1);

            }


            if (ratingCount) {

                ratingCount.textContent =
                    savedRatings.length;

            }

        } else {

            if (averageRating) {
                averageRating.textContent = "0.0";
            }

            if (ratingCount) {
                ratingCount.textContent = "0";
            }

        }

    }


    // ------------------------------------------------------
    // Select Star
    // ------------------------------------------------------

    ratingStars.forEach(function (star) {

        star.addEventListener(
            "click",
            function () {

                selectedRating =
                    Number(
                        this.getAttribute(
                            "data-rating"
                        )
                    );


                ratingStars.forEach(
                    function (item) {

                        const value =
                            Number(
                                item.getAttribute(
                                    "data-rating"
                                )
                            );


                        if (
                            value <= selectedRating
                        ) {

                            item.classList.add(
                                "selected"
                            );

                        } else {

                            item.classList.remove(
                                "selected"
                            );

                        }

                    }
                );


                if (ratingText) {

                    ratingText.textContent =
                        ratingMessages[
                            selectedRating
                        ];

                }

            }
        );

    });


    // ------------------------------------------------------
    // Submit Rating
    // ------------------------------------------------------

    if (submitRating) {

        submitRating.addEventListener(
            "click",
            function () {

                if (selectedRating === 0) {

                    alert(
                        "⭐ Please select a star rating first."
                    );

                    return;

                }


                const alreadyRated =
                    localStorage.getItem(
                        "skSaijadUserRated"
                    );


                if (alreadyRated === "yes") {

                    alert(
                        "🙏 You have already submitted your rating from this browser."
                    );

                    return;

                }


                let savedRatings = [];

                try {

                    savedRatings =
                        JSON.parse(
                            localStorage.getItem(
                                "skSaijadRatings"
                            )
                        ) || [];

                } catch (error) {

                    savedRatings = [];

                }


                savedRatings.push(
                    selectedRating
                );


                localStorage.setItem(
                    "skSaijadRatings",
                    JSON.stringify(
                        savedRatings
                    )
                );


                localStorage.setItem(
                    "skSaijadUserRated",
                    "yes"
                );


                loadRatings();


                submitRating.disabled = true;

                submitRating.textContent =
                    "✅ Rating Submitted";


                alert(
                    "❤️ Thank you for rating Sk Saijad Official!"
                );

            }
        );

    }


    // ------------------------------------------------------
    // Load Rating On Page Open
    // ------------------------------------------------------

    if (
        ratingStars.length > 0 &&
        averageRating &&
        ratingCount
    ) {

        loadRatings();

    }


    // ======================================================
    // 📞 PHONE / WHATSAPP SAFETY
    // ======================================================

    document
        .querySelectorAll(
            'a[target="_blank"]'
        )
        .forEach(function (link) {

            if (
                !link.hasAttribute(
                    "rel"
                )
            ) {

                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );

            }

        });


    // ======================================================
    // ✨ PAGE LOADED
    // ======================================================

    console.log(
        "✅ Sk Saijad Official Website Loaded Successfully!"
    );

});