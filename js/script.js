/* =========================
TYPING ANIMATION
========================= */

const words = [

    "Flutter Developer",
    "Mobile App Developer",
    "Firebase Expert",
    "REST API Integration Specialist",
    "Freelancer"

];

let wordIndex = 0;
let charIndex = 0;

function typeEffect() {

    const typingElement =
        document.getElementById("typing");

    const currentWord =
        words[wordIndex];

    typingElement.textContent =
        currentWord.substring(
            0,
            charIndex + 1
        );

    charIndex++;

    if (charIndex === currentWord.length) {

        setTimeout(() => {

            eraseEffect();

        }, 1500);

    } else {

        setTimeout(typeEffect, 100);
    }
}

function eraseEffect() {

    const typingElement =
        document.getElementById("typing");

    const currentWord =
        words[wordIndex];

    typingElement.textContent =
        currentWord.substring(
            0,
            charIndex - 1
        );

    charIndex--;

    if (charIndex === 0) {

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;
        }

        setTimeout(typeEffect, 200);

    } else {

        setTimeout(eraseEffect, 50);
    }
}

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (words.length) {

            setTimeout(typeEffect, 500);
        }
    }
);


/* =========================
NAVBAR SHADOW ON SCROLL
========================= */

window.addEventListener(
    "scroll",
    function () {

        const nav =
            document.querySelector("nav");

        if (window.scrollY > 50) {

            nav.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.4)";

        } else {

            nav.style.boxShadow = "none";
        }
    }
);


/* =========================
SCROLL REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(

        ".skill-card, .project-card, .timeline-item, .stat"

    );

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );
                }
            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* =========================
SMOOTH SCROLL
========================= */

document
    .querySelectorAll('a[href^="#"]')

    .forEach(anchor => {

        anchor.addEventListener(
            "click",

            function (e) {

                e.preventDefault();

                document
                    .querySelector(

                        this.getAttribute("href")

                    )

                    .scrollIntoView({

                        behavior: "smooth"

                    });

            }

        );

    });


/* =========================
CONTACT FORM
========================= */

const form =
    document.getElementById(
        "contact-form"
    );

if (form) {

    form.addEventListener(

        "submit",

        function (e) {

            e.preventDefault();

            alert(
                "Thanks for reaching out! I'll get back to you soon."
            );

            form.reset();
        }

    );
}


/* =========================
PROJECT SHOWCASE SLIDER
========================= */

const projectImages = [

    "assets/projects/brikol.png",

    "assets/projects/estate.png",

    "assets/projects/tennis.png",

    "assets/projects/snapcart.png"

];

let currentImage = 0;

function createHeroSlider() {

    const profile =
        document.querySelector(
            ".profile-wrapper img"
        );

    if (!profile) return;

    setInterval(() => {

        currentImage++;

        if (
            currentImage >=
            projectImages.length
        ) {

            currentImage = 0;
        }

    }, 4000);
}

createHeroSlider();


/* =========================
COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(
        ".stat h3"
    );

const speed = 200;

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            parseInt(
                counter.innerText
            );

        if (isNaN(target)) return;

        const count =
            +counter.getAttribute(
                "data-count"
            ) || 0;

        const increment =
            target / speed;

        if (count < target) {

            counter.setAttribute(
                "data-count",
                Math.ceil(
                    count + increment
                )
            );

            counter.innerText =
                Math.ceil(
                    count + increment
                );

            setTimeout(
                updateCounter,
                10
            );

        } else {

            counter.innerText =
                target;
        }
    };

    updateCounter();

});


/* =========================
BACK TO TOP BUTTON
========================= */

const backToTop =
    document.createElement("button");

backToTop.innerHTML =
    "↑";

backToTop.id =
    "backToTop";

document.body.appendChild(
    backToTop
);

backToTop.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#22c55e;
color:white;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener(
    "scroll",

    () => {

        if (
            window.scrollY > 400
        ) {

            backToTop.style.display =
                "block";

        } else {

            backToTop.style.display =
                "none";
        }
    }

);

backToTop.addEventListener(
    "click",

    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"
        });

    }

);