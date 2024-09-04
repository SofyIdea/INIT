const header = document.querySelector('.header');

document.querySelectorAll('button[data-scroll], a[data-scroll]').forEach((element) => {
    element.addEventListener('click', () => {
        const targetId = element.getAttribute('data-scroll');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition > 50) {header.classList.add('scrolled')} 
    else {header.classList.remove('scrolled')}
});
