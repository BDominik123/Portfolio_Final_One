// --- HAMBURGER MENÜ KEZELÉSE ---
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    // Navigáció ki/be csukása
    nav.classList.toggle('nav-active');
    
    // Hamburger ikon animálása (X alak)
    hamburger.classList.toggle('toggle');
});

// --- KAPCSOLAT FORM VALIDÁCIÓ ---
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Megakadályozza az oldal újratöltését
    
    // Egyszerű validáció (a HTML 'required' után egy visszajelzés)
    feedback.textContent = "Üzenet elküldve! Köszönöm a megkeresést.";
    feedback.classList.remove('hidden');
    feedback.classList.add('success');
    
    // Mezők ürítése
    contactForm.reset();
});

// --- SCROLL REVEAL (GÖRGETÉSRE MEGJELENŐ ELEMEK) ---
// Az Intersection Observer API-t használjuk a kártyák beúsztatásához
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Mikor kezdődjön az animáció
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Figyeljük a görgetést
window.addEventListener('scroll', revealElements);

// Az oldal betöltésekor is futtatjuk egyszer
window.addEventListener('load', revealElements);
