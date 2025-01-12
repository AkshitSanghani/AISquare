function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function loadHTMLComponent(component, elementId) {
    fetch(component)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

window.onload = function() {
    loadHTMLComponent('components/header.html', 'header');
    loadHTMLComponent('components/body/body.html', 'body');
    loadHTMLComponent('components/footer.html', 'footer');
};

// Function to reveal headers one by one on scroll
// Function to handle the appearance and disappearance of headers on scroll
document.addEventListener('scroll', () => {
    const header1 = document.getElementById('header-1');
    const header2 = document.getElementById('header-2');
    const triggerPoint = window.innerHeight * 0.7; // Trigger point for showing headers
    
    // Get positions of headers relative to the viewport
    const header1Top = header1.getBoundingClientRect().top;
    const header2Top = header2.getBoundingClientRect().top;

    // Check if header1 is within the trigger point
    if (header1Top < triggerPoint) {
        header1.classList.add('visible');
    } else {
        header1.classList.remove('visible'); // Hide when scrolled up
    }

    // Check if header2 is within the trigger point
    if (header2Top < triggerPoint) {
        header2.classList.add('visible');
    } else {
        header2.classList.remove('visible'); // Hide when scrolled up
    }
});

