// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu for three-dot section
document.getElementById('three-dots').addEventListener('click', function() {
    document.querySelector('.nav ul').classList.toggle('show');
});
