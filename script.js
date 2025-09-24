// Navbar Section Code:-
const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");

if (bar) {
    bar.addEventListener("click", () => {
    nav.classList.toggle("active");
    });
}

// // Gallery Section Code:-
let mainImg = document.querySelector("#main-img");
let smallImg = document.querySelectorAll(".small-img-group img");

smallImg.forEach((img) => {
    img.addEventListener("click", () => {
        mainImg.src = img.src;
    });
});

// ==============================
// Reusable Animation Functions
// ==============================

// Animate elements with one class
function animateOnScroll(elements, className, options = { threshold: 0.2 }, stagger = 0) {
  if (!elements) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add(className);
        }, index * stagger);
        obs.unobserve(entry.target); // run once
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
}

// Alternate animations (left/right)
function animateAlternate(elements, leftClass, rightClass, options = { threshold: 0.2 }) {
  if (!elements) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(index % 2 === 0 ? leftClass : rightClass);
        obs.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
}

// ==============================
// Header Animation
// ==============================
window.addEventListener("load", () => {
  const logo = document.querySelector("#header .logo");
  const navItems = document.querySelectorAll("#navbar li");
  const mobile = document.querySelector("#mobile");

  if (logo) logo.classList.add("show-down");

  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show-up");
    }, index * 150);
  });

  setTimeout(() => {
    if (mobile) mobile.classList.add("show-right");
  }, navItems.length * 150 + 200);
});

// ==============================
// Features & Products
// ==============================
animateOnScroll(document.querySelectorAll(".fe-box"), "show", { threshold: 0.2 }, 150);
animateOnScroll(document.querySelectorAll(".pro"), "show", { threshold: 0.2 }, 150);

// ==============================
// Banner Section
// ==============================
animateOnScroll([document.querySelector("#banner")], "show", { threshold: 0.3 });

// ==============================
// Service Banners (#sm-banner)
// ==============================
animateAlternate(document.querySelectorAll("#sm-banner .banner-box"), "show-left", "show-right");

// ==============================
// Text Banners (#banner3)
// ==============================
animateOnScroll(document.querySelectorAll("#banner3 .banner-box"), "show-up", { threshold: 0.2 }, 200);


// product link Code:-
let prod = document.querySelectorAll(".pro");

    prod.forEach((product) => {
        product.addEventListener("click", () => {
            window.location.href = "sproduct.html";
        });
    });



//Home Hero btn link with shop page (Script):-
let btn = document.querySelector(".shop");

btn.addEventListener("click",() =>{
    window.location.href = "shop.html";
});
