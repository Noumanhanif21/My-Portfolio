// ======================
// TYPING EFFECT
// ======================

const words = [
    "Flutter Developer",
    "Mobile App Developer",
    "Firebase Expert",
    "Freelancer",
    "UI/UX Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let currentChar = "";

function typeEffect() {

    if (wordIndex === words.length) {
        wordIndex = 0;
    }

    currentWord = words[wordIndex];

    currentChar = currentWord.slice(
        0,
        ++charIndex
    );

    document.getElementById("typing").textContent =
        currentChar;

    if (currentChar.length === currentWord.length) {

        wordIndex++;
        charIndex = 0;

        setTimeout(typeEffect, 1500);

    } else {

        setTimeout(typeEffect, 100);
    }
}

typeEffect();


// ======================
// PROJECT IMAGE SLIDER
// ======================

const screenshots = [

    "assets/images/brikol.png",
    "assets/images/estate.png",
    "assets/images/tennis.png",
    "assets/images/snapcart.png"

];

let imageIndex = 0;

setInterval(() => {

    const image =
        document.getElementById("project-image");

    if (!image) return;

    imageIndex++;

    if (imageIndex >= screenshots.length) {
        imageIndex = 0;
    }

    image.src = screenshots[imageIndex];

}, 3000);


// ======================
// SCROLL REVEAL
// ======================

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

document
    .querySelectorAll(
        '.skill-card,.project-card,.timeline-item'
    )
    .forEach(el => {

        el.classList.add('hidden');

        observer.observe(el);

    });


// ======================
// NAVBAR SHADOW
// ======================

window.addEventListener("scroll", () => {

    const nav =
        document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.3)";

    } else {

        nav.style.boxShadow = "none";

    }

});


// ======================
// MODAL
// ======================

const modal =
    document.getElementById("projectModal");

const closeBtn =
    document.querySelector(".close");

if (closeBtn) {

    closeBtn.onclick = () => {

        modal.style.display = "none";

    };

}

window.onclick = (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

};


// ======================
// CONTACT FORM
// ======================

const form =
    document.getElementById("contact-form");

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