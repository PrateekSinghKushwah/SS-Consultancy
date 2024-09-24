// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation check
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            // Simulate form submission (can replace with AJAX if needed)
            formStatus.style.display = 'block';  // Show success message
            formStatus.textContent = 'Your message has been sent!';
            
            // Clear the form
            form.reset();

            // Hide the success message after a delay
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 3000);
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});


// script.js

// Rotating Testimonials
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        // Hide all testimonials
        testimonials.forEach(testimonial => testimonial.style.display = 'none');
        
        // Show the next testimonial
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }

    // Initialize: Show first testimonial
    testimonials[currentTestimonial].style.display = 'block';

    // Rotate testimonials every 5 seconds
    setInterval(showNextTestimonial, 5000);
});
