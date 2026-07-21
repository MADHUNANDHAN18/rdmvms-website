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

// ============================================
// ABOUT SECTION INDEX  — SCROLL ANIMATIONS + COUNT UP
// ============================================

// ===== COUNT UP FUNCTION =====
function countUp(element, target, duration, suffix) {
    let start = 0;
    let isK = target === '10K';
    let endVal = isK ? 10000 : parseInt(target);
    let increment = endVal / (duration / 16);

    let timer = setInterval(function () {
        start += increment;
        if (start >= endVal) {
            start = endVal;
            clearInterval(timer);
        }
        if (isK) {
            element.textContent = Math.floor(start / 1000) + 'K+';
        } else if (suffix === '+') {
            element.textContent = Math.floor(start) + '+';
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}
// ===== INTERSECTION OBSERVER =====
const aboutSection = document.querySelector('.about-section');

if (aboutSection) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {

                // Animate left side
                const aboutLeft = document.querySelector('.about-left');
                if (aboutLeft) {
                    aboutLeft.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
                    aboutLeft.style.opacity = '1';
                    aboutLeft.style.transform = 'translateX(0)';
                }

                // Animate right side
                const aboutRight = document.querySelector('.about-right');
                if (aboutRight) {
                    aboutRight.style.transition = 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s';
                    aboutRight.style.opacity = '1';
                    aboutRight.style.transform = 'translateX(0)';
                }

                // Count up stats
                setTimeout(function () {
                    const statNums = document.querySelectorAll('.about-stat-num');
                    if (statNums[0]) countUp(statNums[0], '49', 1500, '+');
                    if (statNums[1]) countUp(statNums[1], '2', 1000, '');
                    if (statNums[2]) countUp(statNums[2], '10K', 1500, '');
                }, 400);

                // Animate button
                const aboutBtn = document.querySelector('.about-btn');
                if (aboutBtn) {
                    setTimeout(function () {
                        aboutBtn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        aboutBtn.style.opacity = '1';
                        aboutBtn.style.transform = 'translateY(0)';
                    }, 600);
                }

                // Run only once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);
}

// ============================================
// EC SKILLS SECTION INDEX — SCROLL ANIMATIONS
// ============================================

const ecsSection = document.querySelector('.ecs-section');

if (ecsSection) {
    const ecsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {

                // Animate header
                const ecsHeader = document.querySelector('.ecs-header');
                if (ecsHeader) {
                    ecsHeader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    ecsHeader.style.opacity = '1';
                    ecsHeader.style.transform = 'translateY(0)';
                }

                // Staggered cards
                const ecsCards = document.querySelectorAll('.ecs-card');
                ecsCards.forEach(function (card, index) {
                    setTimeout(function () {
                        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 200 + (index * 150));
                });

                // Button
                const ecsBtn = document.querySelector('.ecs-btn-wrap');
                if (ecsBtn) {
                    setTimeout(function () {
                        ecsBtn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        ecsBtn.style.opacity = '1';
                        ecsBtn.style.transform = 'translateY(0)';
                    }, 700);
                }

                // Run once
                ecsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    ecsObserver.observe(ecsSection);
}
// ============================================
// FACILITIES SECTION — SCROLL ANIMATIONS
// ============================================

const facSection = document.querySelector('.fac-section');

if (facSection) {
    const facObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {

                // Animate header
                const facHeader = document.querySelector('.fac-header');
                if (facHeader) {
                    facHeader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    facHeader.style.opacity = '1';
                    facHeader.style.transform = 'translateY(0)';
                }

                // Staggered cards
                const facCards = document.querySelectorAll('.fac-card');
                facCards.forEach(function (card, index) {
                    setTimeout(function () {
                        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 200 + (index * 150));
                });

                // Button
                const facBtn = document.querySelector('.fac-btn-wrap');
                if (facBtn) {
                    setTimeout(function () {
                        facBtn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        facBtn.style.opacity = '1';
                        facBtn.style.transform = 'translateY(0)';
                    }, 700);
                }

                // Run once
                facObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    facObserver.observe(facSection);
}