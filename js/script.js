// Typing Animation

const text = [
    "Flutter Developer",
    "Mobile App Developer",
    "Firebase Expert",
    "UI/UX Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 100);
    }

})();


// Scroll Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(
    ".card,.project-card,.timeline-item"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// Navbar Background Change

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        nav.style.boxShadow = "none";
    }

});