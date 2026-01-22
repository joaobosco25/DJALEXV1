/*
 * DJ ALEX - INTERACTIVE SCRIPTS
 */

// ============ CONFIG & STATE ============
const galleryImages = [
    "images/logo.jpeg",
    "images/foto 1.jpeg",
    "images/foto 2.jpeg",
    "images/foto 3.jpeg",
    "images/elvis.jpeg"
];

let currentSlide = 0;
let autoPlayInterval = null;

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initCarousel();
    initRevealAnimations();
    initParticles();
    initHeartbeat();
});

// ============ HEADER EFFECT ============
function initHeader() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ============ MOBILE MENU ============
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.nav-link, .nav-cta');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
        
        // Animate hamburger
        const spans = toggle.querySelectorAll('span');
        if (menu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.transform = 'none';
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            const spans = toggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.transform = 'none';
        });
    });
}

// ============ CAROUSEL ============
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!track) return;

    // Create slides
    galleryImages.forEach((src, i) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${i === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${src}" alt="Show ${i + 1}" loading="lazy">`;
        track.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
        updateCarousel();
        resetAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % galleryImages.length;
        updateCarousel();
        resetAutoPlay();
    });

    startAutoPlay();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function goToSlide(i) {
    currentSlide = i;
    updateCarousel();
    resetAutoPlay();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % galleryImages.length;
        updateCarousel();
    }, 5000);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// ============ REVEAL ON SCROLL ============
function initRevealAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============ PARTICLES (MANTIDO E OTIMIZADO) ============
function initParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;

    const count = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.style.position = 'absolute';
        p.style.width = Math.random() * 3 + 1 + 'px';
        p.style.height = p.style.width;
        p.style.background = ['#00FFFF', '#FF00FF', '#FFFF00'][i % 3];
        p.style.borderRadius = '50%';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.opacity = Math.random() * 0.5;
        p.style.filter = 'blur(1px)';
        
        const duration = Math.random() * 15 + 10;
        p.animate([
            { transform: 'translate(0, 0)' },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` },
            { transform: 'translate(0, 0)' }
        ], {
            duration: duration * 1000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });

        container.appendChild(p);
    }
}

// ============ HEARTBEAT ============
function initHeartbeat() {
    const audio = document.getElementById('heartbeatAudio');
    if (!audio) return;

    const playHeartbeat = () => {
        audio.currentTime = 0;
        audio.volume = 0.2;
        audio.play().catch(() => {});
    };

    // Play on first interaction and then on specific elements
    document.addEventListener('click', playHeartbeat, { once: true });
    
    document.querySelectorAll('.btn-main, .nav-cta, .stat-item').forEach(el => {
        el.addEventListener('mouseenter', playHeartbeat);
    });
}
