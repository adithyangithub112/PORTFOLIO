document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.createElement('div');
    navContainer.innerHTML = `
        <nav class="cyber-nav">
            <div class="nav-logo">
                <a href="index.html">&lt;ADITHYAN /&gt;</a>
            </div>
            <ul class="nav-links">
                <li><a href="index.html" class="nav-link" data-page="home">HOME</a></li>
                <li><a href="about.html" class="nav-link" data-page="about">ABOUT</a></li>
                <li><a href="skills.html" class="nav-link" data-page="skills">SKILLS</a></li>
                <li><a href="projects.html" class="nav-link" data-page="projects">PROJECTS</a></li>
                <li><a href="contact.html" class="nav-link" data-page="contact">CONTACT</a></li>
            </ul>
        </nav>
    `;

    document.body.prepend(navContainer);

    // Highlight current page
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "home";
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        if (link.dataset.page === currentPage || (currentPage === "" && link.dataset.page === "home")) {
            link.classList.add('active');
        }
    });
});
