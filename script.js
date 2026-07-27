// Sk Saijad Official Website

console.log("Welcome to Sk Saijad Official");

window.onload = function () {
    document.body.style.scrollBehavior = "smooth";
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Welcome Message
setTimeout(function(){
    console.log("Website Loaded Successfully");
},1000);
document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to Sk Saijad Official");

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
};

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}