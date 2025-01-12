function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

document.addEventListener('scroll', () => {
    const header1 = document.getElementById('header-1');
    const header2 = document.getElementById('header-2');
    const triggerPoint = window.innerHeight * 0.7;
    const header1Top = header1.getBoundingClientRect().top;
    const header2Top = header2.getBoundingClientRect().top;
    if (header1Top < triggerPoint) {
        header1.classList.add('visible');
    } else {
        header1.classList.remove('visible');
    }
    if (header2Top < triggerPoint) {
        header2.classList.add('visible');
    } else {
        header2.classList.remove('visible');
    }
});