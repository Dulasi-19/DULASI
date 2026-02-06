// Intersection Observer for scroll reveal
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Initial Hero activation after loader
window.addEventListener('load', function () {
    setTimeout(() => {
        const aboutEl = document.getElementById('about');
        if (aboutEl) {
            aboutEl.querySelectorAll('.reveal').forEach(el => {
                el.classList.add('active');
            });
        }
    }, 3500);
});

// For static version, form submission might just show an alert or mimic success
const contactForm = document.getElementById('contactForm');
const successPopup = document.getElementById('successPopup');
const popupContent = document.getElementById('popupContent');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // UI State: Loading
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        btnLoader.classList.remove('hidden');

        // Simulate network delay
        setTimeout(() => {
            // UI State: Success
            showPopup();
            contactForm.reset();

            // UI State: Reset
            submitBtn.disabled = false;
            btnText.textContent = 'Send Message';
            btnLoader.classList.add('hidden');
        }, 1500);
    });
}

function showPopup() {
    if (successPopup && popupContent) {
        successPopup.classList.remove('opacity-0', 'pointer-events-none');
        popupContent.classList.remove('scale-90');
        popupContent.classList.add('scale-100');
    }
}

function closePopup() {
    if (successPopup && popupContent) {
        successPopup.classList.add('opacity-0', 'pointer-events-none');
        popupContent.classList.add('scale-90');
        popupContent.classList.remove('scale-100');
    }
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

function toggleMenu() {
    mobileMenu.classList.toggle('-translate-y-full');
    mobileMenu.classList.toggle('translate-y-0');

    // Animate hamburger to X
    bar1.classList.toggle('rotate-45');
    bar1.classList.toggle('translate-y-2');
    bar2.classList.toggle('opacity-0');
    bar3.classList.toggle('-rotate-45');
    bar3.classList.toggle('-translate-y-2');

    // Prevent body scroll
    document.body.classList.toggle('overflow-hidden');
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('translate-y-0')) {
            toggleMenu();
        }
    });
});

// Loader script from components/loader.blade.php
window.addEventListener('load', function () {
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
        }, 3000);
    }
});
