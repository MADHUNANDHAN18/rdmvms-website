// ============================================
// HERO SECTION — SLIDER + ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ===== IMAGE SLIDER =====
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const heroRight = document.querySelector('.hero-right');
    let currentSlide = 0;
    let sliderInterval;

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    }

    function startSlider() {
        sliderInterval = setInterval(nextSlide, 4000);
    }

    function stopSlider() {
        clearInterval(sliderInterval);
    }

    // Dot click
    dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
            stopSlider();
            goToSlide(index);
            startSlider();
        });
    });

    // Pause on hover
    if (heroRight) {
        heroRight.addEventListener('mouseenter', stopSlider);
        heroRight.addEventListener('mouseleave', startSlider);
    }

    // Start slider
    startSlider();

    // ===== HERO ANIMATIONS =====
    const animationItems = [
        { selector: '.hero-logo',     class: 'animate-fade-down',  delay: 0    },
        { selector: '.hero-name-main',class: 'animate-slide-left', delay: 100  },
        { selector: '.hero-location', class: 'animate-fade-in',    delay: 200  },
        { selector: '.hero-quote',    class: 'animate-fade-in',    delay: 300  },
        { selector: '.hero-tagline',  class: 'animate-fade-up',    delay: 400  },
        { selector: '.hero-divider',  class: 'animate-fade-up',    delay: 450  },
        { selector: '.hero-small',    class: 'animate-fade-up',    delay: 500  },
        { selector: '.hero-heading',  class: 'animate-slide-left', delay: 600  },
        { selector: '.hero-cta',      class: 'animate-fade-in',    delay: 900  },
        { selector: '.hero-right',    class: 'animate-fade-in',    delay: 200  },
    ];

    // Feature items staggered
    const features = document.querySelectorAll('.hero-feature');
    features.forEach(function (feature, index) {
        feature.style.opacity = '0';
        feature.style.transform = 'scale(0.8)';
        setTimeout(function () {
            feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            feature.style.opacity = '1';
            feature.style.transform = 'scale(1)';
        }, 700 + (index * 120));
    });

    // Run animations
    animationItems.forEach(function (item) {
        const el = document.querySelector(item.selector);
        if (!el) return;
        el.style.opacity = '0';
        setTimeout(function () {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'none';
        }, item.delay);
    });

});