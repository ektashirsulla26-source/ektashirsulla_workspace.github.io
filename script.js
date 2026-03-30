// Typing effect
const roles = ["Data Analyst", "Machine Learning Enthusiast", "Data Scientist"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
    current = roles[i];

    document.querySelector(".typing").textContent =
        current.substring(0, j);

    if (!deleting) {
        j++;
        if (j > current.length) {
            deleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        j--;
        if (j === 0) {
            deleting = false;
            i = (i + 1) % roles.length;
        }
    }

    setTimeout(type, deleting ? 50 : 100);
}
type();

// Scroll animation
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});
