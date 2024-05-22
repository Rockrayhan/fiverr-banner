// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Select all the slides
    const slides = document.querySelectorAll('.hero-background');
    // Start with the first slide
    let currentSlide = 0;
    // Get the total number of slides
    const totalSlides = slides.length;

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            // Add 'active' class to the current slide and remove it from others
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    // Function to show the next slide
    function nextSlide() {
        // Move to the next slide, or go back to the first slide if at the end
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Automatically change the slide every 5 seconds (5000 milliseconds)
    setInterval(nextSlide, 2000);

    // Initially show the first slide
    showSlide(currentSlide);
});
