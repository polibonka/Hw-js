document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img');

    const preloadImage = (img) => {
        const src = img.getAttribute('data-src');
        if (!src) return;

        img.src = src;
        img.onload = () => {
            img.classList.add('loaded'); // Додайте клас для плавного переходу
        };
    };

    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                preloadImage(img);
                observer.unobserve(img); // Припиняємо спостереження
            }
        });
    }, observerOptions);

    images.forEach((image) => {
        observer.observe(image);
    });
});
