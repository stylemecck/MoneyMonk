
        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.querySelector('.menu-toggle');
            const mobileMenu = document.querySelector('.mobile-menu');

            menuToggle.addEventListener('click', function () {
                mobileMenu.classList.toggle('active');
            });
        });
        
        document.addEventListener('DOMContentLoaded', function () {
            const faqHeadings = document.querySelectorAll('.faqs-heading');

            faqHeadings.forEach(heading => {
                heading.addEventListener('click', function () {
                    // Toggle active class
                    this.classList.toggle('active');

                    // Get the next element (the content)
                    const content = this.nextElementSibling;

                    // Toggle visibility
                    if (content.style.display === 'block') {
                        content.style.display = 'none';
                    } else {
                        content.style.display = 'block';
                    }
                });
            });
        });
    