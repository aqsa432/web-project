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

function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}