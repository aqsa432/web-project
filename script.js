document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.getElementById('navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function() {
        // Toggle the display of the navbar-collapse element
        if (navbarCollapse.style.display === 'block') {
            navbarCollapse.style.display = 'none';
        } else {
            navbarCollapse.style.display = 'block';
        }
    });

    // Close the navbar when a nav-link is clicked (for small screens)
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navbarCollapse.style.display = 'none';
            }
        });
    });

    // Close the navbar when clicking outside of it (for small screens)
    document.addEventListener('click', function(event) {
        var isClickInsideNavbar = navbarToggler.contains(event.target) || navbarCollapse.contains(event.target);
        if (!isClickInsideNavbar && window.innerWidth <= 768) {
            navbarCollapse.style.display = 'none';
        }
    });

    // Adjust the navbar when the window is resized
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbarCollapse.style.display = 'block';
        } else {
            navbarCollapse.style.display = 'none';
        }
    });
});

$(document).ready(function(){
    $('.carousel-item').addClass('animated fadeIn');
  });

  

function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}


$(document).ready(function(){
$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
    $("#back-to-top").fadeIn();
    } else {
    $("#back-to-top").fadeOut();
    }
});

$("#back-to-top").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 500);
});
});

function shuffleImages(category) {
    var $container = $('#imageContainer');
    var $images = $container.find('.col-md-4');

    // Randomize the order of images
    $images.sort(function () {
        return Math.random() - 0.5;
    });

    // Remove existing images
    $container.empty();

    // Append the shuffled images back to the container
    $container.append($images);

    // Update the images based on the selected category (you may need to implement your logic here)
    // For now, we'll just show all images
    $container.find('img').show();
}

// Animate the contact form and social media icons

const contactForm = document.querySelector('.contact-us');
const socialMediaIcons = document.querySelectorAll('.contact-us .social-media a');

window.addEventListener('load', function() {
  // Animate the contact form
  contactForm.classList.add('animated', 'fadeIn');

  // Animate the social media icons
  socialMediaIcons.forEach(function(icon) {
    icon.classList.add('animated', 'fadeIn');
  });
});
