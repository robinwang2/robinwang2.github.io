document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.snap-section[id]');
    const dots = document.querySelectorAll('.section-indicator .dot');

    if (!sections.length || !dots.length) {
        return;
    }

    const setActiveDot = (id) => {
        dots.forEach((dot) => {
            dot.classList.toggle('active', dot.dataset.section === id);
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveDot(entry.target.id);
                }
            });
        },
        {
            threshold: 0.6
        }
    );

    sections.forEach((section) => observer.observe(section));

    dots.forEach((dot) => {
        dot.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = dot.dataset.section;
            const target = document.getElementById(sectionId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveDot(sectionId);
            }
        });
    });
});
