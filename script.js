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
    // ⭐ STAR RATING SYSTEM
    // ==========================================

    const ratingStars = document.querySelectorAll("#ratingStars button");
    const ratingText = document.getElementById("ratingText");
    const submitRating = document.getElementById("submitRating");
    const averageRating = document.getElementById("averageRating");
    const ratingCount = document.getElementById("ratingCount");

    let selectedRating = 0;

    const ratingMessages = {
        1: "😞 Very Poor",
        2: "😕 Poor",
        3: "🙂 Good",
        4: "😊 Very Good",
        5: "🤩 Excellent!"
    };


    // Load saved ratings
    function loadRatings() {

        const savedRatings =
            JSON.parse(localStorage.getItem("skSaijadRatings")) || [];

        if (savedRatings.length > 0) {

            const total = savedRatings.reduce(
                function (sum, rating) {
                    return sum + rating;
                },
                0
            );

            const average = total / savedRatings.length;

            if (averageRating) {
                averageRating.textContent = average.toFixed(1);
            }

            if (ratingCount) {
                ratingCount.textContent = savedRatings.length;
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


    // Select Star
    ratingStars.forEach(function (star) {

        star.addEventListener("click", function () {

            selectedRating = Number(
                this.getAttribute("data-rating")
            );

            ratingStars.forEach(function (item) {

                const value = Number(
                    item.getAttribute("data-rating")
                );

                if (value <= selectedRating) {
                    item.classList.add("selected");
                } else {
                    item.classList.remove("selected");
                }

            });

            if (ratingText) {
                ratingText.textContent =
                    ratingMessages[selectedRating];
            }

        });

    });


    // Submit Rating
    if (submitRating) {

        submitRating.addEventListener("click", function () {

            if (selectedRating === 0) {

                alert("⭐ Please select a star rating first.");

                return;
            }

            const alreadyRated =
                localStorage.getItem("skSaijadUserRated");

            if (alreadyRated === "yes") {

                alert("🙏 You have already submitted your rating.");

                return;
            }


            const savedRatings =
                JSON.parse(
                    localStorage.getItem("skSaijadRatings")
                ) || [];


            savedRatings.push(selectedRating);


            localStorage.setItem(
                "skSaijadRatings",
                JSON.stringify(savedRatings)
            );


            localStorage.setItem(
                "skSaijadUserRated",
                "yes"
            );


            loadRatings();


            alert(
                "❤️ Thank you for rating Sk Saijad Official!"
            );

        });

    }


    // Load rating on website opening
    if (
        ratingStars.length > 0 &&
        averageRating &&
        ratingCount
    ) {
        loadRatings();
    }


    // ==========================================
    // 👋 Website Loaded
    // ==========================================

    console.log("Website Loaded Successfully");

});

