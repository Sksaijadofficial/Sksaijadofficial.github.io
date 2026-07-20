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