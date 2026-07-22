// =========================
// Mobile Menu
// =========================

function toggleMenu() {
    document
        .getElementById("navLinks")
        .classList.toggle("show");
}

// =========================
// Contact Form Validation
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            let name =
                document.getElementById("name").value.trim();

            let email =
                document.querySelector(
                    'input[type="email"]'
                ).value.trim();

            if (name === "") {

                alert("Please Enter Your Name");
                return;
            }

            if (email === "") {

                alert("Please Enter Your Email");
                return;
            }

            alert("Message Sent Successfully!");

            form.reset();

        });

    }

});

// =========================
// Counter Animation
// =========================

let counters =
    document.querySelectorAll(".counter-box h2");

counters.forEach(counter => {

    let target =
        parseInt(counter.innerText);

    let count = 0;

    let updateCounter = () => {

        if (count < target) {

            count += Math.ceil(target / 100);

            counter.innerText = count + "+";

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

// =========================
// Scroll To Top Button
// =========================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.display = "none";
topBtn.style.cursor = "pointer";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// Active Navbar Link
// =========================

const links =
document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

    });

});

// =========================
// Reveal Animation
// =========================

window.addEventListener("scroll", reveal);

function reveal() {

    let cards =
        document.querySelectorAll(
            ".card, .project-card, .team-card"
        );

    cards.forEach(card => {

        let windowHeight =
            window.innerHeight;

        let elementTop =
            card.getBoundingClientRect().top;

        let visible = 100;

        if (elementTop < windowHeight - visible) {

            card.classList.add("show");

        }

    });

}

// =========================
// Welcome Message
// =========================

window.onload = function () {

    console.log(
        "Welcome to TechNova IT Company Website"
    );

};