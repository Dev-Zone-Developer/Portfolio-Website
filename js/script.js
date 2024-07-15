// Code created By Dev Zone Developer
/* =============== Menu Icons Navbar =============== */
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/* =============== Scroll section active link =============== */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* =============== Sticky NavBar =============== */
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100).togglemenu();


    /* =============== remove menu icon navbar when click nvbar link (scroll) =============== */
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/* =============== Swipper =============== */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Get the width of the window's content area
//   var screenWidth = window.innerWidth;
//   var screenheight = window.innerHeight;

//   // Display the width in an alert box
//   alert("The width of your screen is: " + screenWidth + " pixels and Height is " + screenheight);



/* =============== Dark Light Mode =============== */
let darkmodeIcon = document.querySelector('#darkMode-icon');
darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

/* =============== Scroll Reveal =============== */
ScrollReveal({
    //  reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-box, .contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {
    origin: 'right'
});


/* =============== WhatsApp Api =============== */
function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const emailSubject = document.getElementById('email-subject').value;
    const message = document.getElementById('message').value;

    // Construct the WhatsApp message
    const whatsappMessage =
        `*Full Name:* ${fullname}\n` +
        `*Email:* ${email}\n` +
        `*Number:* ${number}\n` +
        `*Email Subject:* ${emailSubject}\n` +
        `*Message:* ${message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp API URL
    const whatsappURL = `https://wa.me/+923436544231?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
}







// Progress Button Animation 
function animateProgress(element, start, end, duration) {
    let startTime = null;

    function animationStep(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let percentage = Math.min((progress / duration) * 100, 100);
        let value = start + (end - start) * (percentage / 100);

        element.style.setProperty('--i', `${value}%`);
        const span = element.querySelector('span');
        if (span) {
            span.textContent = `${Math.round(value)}%`;
        }

        if (percentage < 100) {
            requestAnimationFrame(animationStep);
        }
    }

    // Reset the animation start time and initiate the animation
    function startAnimation() {
        startTime = null;
        requestAnimationFrame(animationStep);
    }

    startAnimation(); // Start the animation
}

// Select the target element
const target = document.querySelector('.progresscircle');

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressElements = document.querySelectorAll('.progresscircle');
            progressElements.forEach(element => {
                const targetValue = parseInt(element.getAttribute('data-target'), 10);
                animateProgress(element, 0, targetValue, 5000); // animate from 0% to target% over 5000ms (5 seconds)
            });
            // Optionally, you can unobserve the element if you only want to animate once
            // observer.unobserve(entry.target);
        } else {
            console.log('Element is not in view:', entry.target);
        }
    });
}, {
    threshold: 0.1 // Adjust threshold as needed (0 to 1)
});

// Start observing the target element
if (target) {
    observer.observe(target);
}
// Code created By Dev Zone Developer
