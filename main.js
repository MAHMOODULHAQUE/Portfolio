                 /* TOGGLE ICON NAVBAR*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

               /*SCROLL SECTION ACTIVE LINK*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let  top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


                /*STICKY NAVBAR*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

                /*REMOVE TOGGLE ICON & NAVBAR*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

                           /*SCROLL REVEAL*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});

                           /*TYPED JS*/
                  
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'web Designer','UI/UX Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});







document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form refresh

    // Collect form data
    const fullName = document.getElementById("fullName").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const emailSubject = document.getElementById("emailSubject").value;
    const message = document.getElementById("message").value;

    // Send form data using EmailJS
    emailjs.send("service_ifd705i", "template_2ju6xcl", {
        full_name: fullName,
        email_address: emailAddress,
        mobile_number: mobileNumber,
        email_subject: emailSubject,
        message: message
    }).then(function(response) {
        document.getElementById("responseMessage").innerHTML =
            '<p class="success-message">Message sent successfully!</p>';
        document.getElementById("contact-form").reset();
    }, function(error) {
        document.getElementById("responseMessage").innerHTML =
            '<p class="error-message">Failed to send message. Please try again later.</p>';
        console.error("EmailJS Error:", error);
    });
});