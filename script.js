/**
 * Christian Ulayan | Portfolio Scripts
 */

// 1. NAVIGATION LOGIC
// Switches between About, Resume, and Portfolio pages
function switchPage(pageId, element) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Remove active class from all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Show the selected page and set link to active
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        element.classList.add('active');
    }

    // On mobile, scroll back to the top when switching pages
    if (window.innerWidth < 900) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 2. PORTFOLIO FILTER LOGIC
// Filters project items based on category (All, Applications, Others)
function filterProjects(category, btn) {
    // Update filter button styling
    const filterBtns = document.querySelectorAll('.filter-item button');
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter project cards
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        
        if (category === 'all' || projectCategory === category) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
}

// 3. IMAGE MODAL (LIGHTBOX) LOGIC
// Opens the clicked image in a full-screen view
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");

function openModal(src) {
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = src;
        // Prevent background scrolling while modal is open
        document.body.style.overflow = "hidden";
    }
}

// Closes the modal
function closeModal() {
    if (modal) {
        modal.style.display = "none";
        // Restore background scrolling
        document.body.style.overflow = "auto";
    }
}

// Close modal if user clicks anywhere outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal if user presses 'Escape' key
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});
// Function to toggle theme
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '🌙';
    }
});