// Smooth Scroll for Buttons

document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = document.getElementById(btn.dataset.scroll);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});


// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}



// Form Validation (Simple)
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("All fields are required!");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}



// Scroll-to-top Button

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}



// Simple Popup Modal
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modalBox = document.getElementById("modalBox");

if (openModal) {
    openModal.onclick = () => modalBox.style.display = "flex";
}

if (closeModal) {
    closeModal.onclick = () => modalBox.style.display = "none";
}
