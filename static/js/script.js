document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typed.js for creative resume descriptions
    const typedEl = document.querySelector('#typed-output');
    if (typedEl) {
        const options = {
            strings: [
                "Project Manager in Aerospace & Defence.",
                "Driving $5M+ in Revenue.",
                "Executing complex New Product Developments.",
                "Bridging Engineering & Business."
            ],
            typeSpeed: 40,
            backSpeed: 25,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        };

        const typed = new Typed('#typed-output', options);
    }
});
