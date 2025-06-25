document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.slide-up, .slide-left, .slide-right, .pop-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translate(0, 0) scale(1)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => {
            observer.observe(el);
        });
    };
    
    animateOnScroll();
});