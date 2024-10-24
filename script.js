function openTab(tabName) {
    // Get all elements with class "tab-content"
    const tabContents = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-links');

    // Hide all tab contents
    tabContents.forEach(content => {
        content.classList.remove('active-tab'); // Hide content
    });

    // Remove active-link class from all tab links
    tabLinks.forEach(link => {
        link.classList.remove('active-link'); // Remove active class
    });

    // Show the selected tab content
    document.getElementById(tabName + '-section').classList.add('active-tab'); // Show content

    // Add active class to the clicked link
    document.querySelector(`.tab-links[onclick="openTab('${tabName}')"]`).classList.add('active-link');
}


// Optionally, you could also add smooth scrolling to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

