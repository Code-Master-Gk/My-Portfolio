
// ====================================
//            header
// ====================================

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ====================================
//            nav manu
// ====================================

let navLinks = document.getElementById("navLinks");
let manuBtn = document.getElementById("menuBtn");
let closeBtn = document.getElementById("closeBtn");

manuBtn.addEventListener("click", function () {
    navLinks.classList.add('slider');
    manuBtn.style.display = "none";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    navLinks.classList.remove('slider');
    manuBtn.style.display = "block";
    closeBtn.style.display = "none"
});

if (window.innerWidth >= 768) {
    
}

// ====================================
//             type writer
// ====================================

var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "Programmer", "Web Designer", "UI or UX Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

// ====================================
//      About_page stats-section
// ====================================

const counters = document.querySelectorAll('.stat-number');
const duration = 2000; // 2 seconds

counters.forEach(counter => {
const target = +counter.getAttribute('data-target');
const frameRate = 20; // milliseconds per update
const totalFrames = duration / frameRate;
const increment = target / totalFrames;
let current = 0;

const updateCount = () => {
current += increment;
    if (current < target) {
        counter.innerText = Math.ceil(current);
        setTimeout(updateCount, frameRate);
    } else {
            counter.innerText = target;
    }
};

updateCount();
});


// ====================================
//              project_page
// ====================================

let cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    let cardBody = card.querySelector('.card_body');

    card.addEventListener('mouseenter', () => {
        cardBody.classList.add('slider');
    });

    card.addEventListener('mouseleave', () => {
        cardBody.classList.remove('slider');
    });
});


// Initialize AOS (Animate On Scroll) library

const filterButtons = document.querySelectorAll('.filter_buttons button');
const filterableCards = document.querySelectorAll('.filterable_card .card');

const filterCard = e => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    filterableCards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
}

// console.log(filterableCards, filterButtons);

filterButtons.forEach(button => button.addEventListener('click', filterCard));


// ====================================
//              Contact_page
// ====================================

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});


// ====================================
//            arrow button
// ====================================

let upBtn = document.querySelector(".up");
let downBtn = document.querySelector(".down");

upBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

downBtn.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

upBtn.classList.add("btnhide");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        downBtn.classList.add("btnhide");
        upBtn.classList.remove("btnhide");
    } else {
        upBtn.classList.add("btnhide");
        downBtn.classList.remove("btnhide");
    }
});
