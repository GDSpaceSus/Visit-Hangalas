let slideInterval = null;

export function initSlider() {
    clearInterval(slideInterval);

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    if (!slides.length) return;

    let current = 0;

    const show = (i) => {
        if (i < 0) i = slides.length - 1;
        if (i >= slides.length) i = 0;
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        slides[i].classList.add('active');
        dots[i]?.classList.add('active');
        current = i;
    };

    const next = () => { show(current + 1); reset(); };
    const prev = () => { show(current - 1); reset(); };
    const reset = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(next, 5000);
    };

    prevBtn?.addEventListener('click', prev);
    nextBtn?.addEventListener('click', next);
    dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); reset(); }));

    reset();
}