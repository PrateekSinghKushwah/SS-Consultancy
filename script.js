
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active'); // Hide all testimonials
            dots[i].classList.remove('active'); // Remove active class from dots
        });
        testimonials[index].classList.add('active'); // Show the current testimonial
        dots[index].classList.add('active'); // Set the active class for the current dot
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length; // Loop to the next testimonial
        showTestimonial(currentIndex);
    }

    // Auto slide every 5 seconds
    let autoSlide = setInterval(nextTestimonial, 5000);

    // Dot navigation click event
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlide); // Stop auto-slide when manually clicked
            currentIndex = i;
            showTestimonial(currentIndex);
            autoSlide = setInterval(nextTestimonial, 5000); // Restart auto-slide
        });
    });

    // Initialize by showing the first testimonial
    showTestimonial(currentIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    function validateName() {
        const nameError = document.getElementById('name-error');
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validateMessage() {
        const messageError = document.getElementById('message-error');
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter a message.';
            return false;
        } else {
            messageError.textContent = '';
            return true;
        }
    }

    // Validate each field on input
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    // Validate form on submission
    form.addEventListener('submit', function(event) {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            alert('Form submitted successfully!');
        }
    });
});


