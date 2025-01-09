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