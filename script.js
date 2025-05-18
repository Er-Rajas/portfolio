// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project data
const projects = [
    {
        title: 'State-wise Renewable Energy Forecasting (2017–2023)',
        description: 'Forecasted renewable energy generation for Indian states using ML (Poisson Regression), achieving 81% R². Included clustering and PCA visualization.',
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'Statsmodels', 'Seaborn', 'Matplotlib'],
        link: 'https://github.com/Er-Rajas/Energy-Forecasting',
        blog: 'https://lablab.ai/event/code-craft-ai-x-dev-hackathon?utm_source=meta+ad&utm_medium=Instagram_Reels&utm_campaign=TRAE+Hackathon+-+registrations&utm_content=TRAE+Hackathon+-+static+4&utm_id=120222266241830594&utm_term=120222364509440594&fbclid=PAZXh0bgNhZW0BMABhZGlkAasdmxexIEIBpzhy5LmNNNuPQv_FpI6rtQvOo1SufF2aetT036bj9BNXstvBgYfIXLbYXyER_aem_kiuIDk12FhMd-Pmo0cR7xw'
    },
    {
        title: 'NLP-Based Spam Detection Model',
        description: 'Built a spam detection system using word embeddings (Word2Vec, GloVe). Performed text preprocessing (tokenization, stemming, lemmatization).',
        technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NLP', 'Word2Vec', 'GloVe'],
        link: 'https://github.com/Er-Rajas/spam-detection'
    },
    {
        title: 'AI-Powered News Analysis & Fake News Detection',
        description: 'Developed a fake news detection system using machine learning. Applied feature engineering to improve accuracy and efficiency.',
        technologies: ['Python', 'Machine Learning', 'Generative AI', 'APIs'],
        link: 'https://github.com/Er-Rajas/fake-news-detection'
    }
];

// Experience data
const experiences = [
    {
        title: 'Data Science Intern',
        company: 'Nova Nectar Pvt. Ltd.',
        period: '2023',
        description: 'Developed fake news detection and face recognition models using machine learning. Applied data preprocessing and feature engineering to improve model efficiency. Contributed to enhancing system reliability and automation in AI-based solutions.'
    },
    {
        title: 'Data Science Intern',
        company: 'CodTech IT Solutions',
        period: '2023',
        description: 'Conducted exploratory data analysis (EDA) on large datasets for spam detection. Implemented classification techniques using Python to improve spam identification accuracy. Analyzed data distributions and developed insights to optimize model performance.'
    }
];

// Certifications data
const certifications = [
    {
        title: 'Kaggle Competition Participant',
        issuer: 'Kaggle',
        date: '2023',
        description: 'Participated in "Catch Me If You Can" competition',
        link: 'https://kaggle.com/yourusername'
    },
    {
        title: 'LTCE Alumni Cell Coordinator',
        issuer: 'LTCE',
        date: '2023',
        description: 'Organized events, managed outreach, strengthened alumni relations'
    }
];

// Function to create project cards with terminal-like animation
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        card.innerHTML = `
            <div class="project-content">
                <h3>$ ${project.title}</h3>
                <p>> ${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>$ ${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" target="_blank" class="btn-primary">$ View Project</a>
                    ${project.blog ? `<a href="${project.blog}" target="_blank" class="btn-secondary"><i class='fas fa-book-open'></i>$ Read Blog</a>` : ''}
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
        
        // Animate card appearance
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Function to create experience timeline with terminal-like animation
function createExperienceTimeline() {
    const timeline = document.querySelector('.timeline');
    experiences.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.innerHTML = `
            <div class="timeline-content">
                <h3>$ ${exp.title}</h3>
                <h4>> ${exp.company}</h4>
                <p class="period">$ ${exp.period}</p>
                <p>> ${exp.description}</p>
            </div>
        `;
        timeline.appendChild(item);
        
        // Animate item appearance
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease-out';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Function to create certification cards with terminal-like animation
function createCertificationCards() {
    const certificationsGrid = document.querySelector('.certifications-grid');
    certifications.forEach((cert, index) => {
        const card = document.createElement('div');
        card.className = 'certification-card';
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        card.innerHTML = `
            <h3>$ ${cert.title}</h3>
            <p>> ${cert.issuer}</p>
            <p class="date">$ ${cert.date}</p>
            <p>> ${cert.description}</p>
            ${cert.link ? `<a href="${cert.link}" target="_blank" class="btn-primary">$ View Profile</a>` : ''}
        `;
        certificationsGrid.appendChild(card);
        
        // Animate card appearance
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Contact form handling with terminal-like feedback
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show terminal-like feedback
    submitButton.textContent = '$ Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.textContent = '$ Message Sent!';
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// Initialize all dynamic content
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    createExperienceTimeline();
    createCertificationCards();
});

// Dissolve effect for Iron Man quote
document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.querySelector('.quote-text');
    const heroQuote = document.querySelector('.hero-quote');
    let hasAnimated = false;

    // Show quote when page loads
    setTimeout(() => {
        heroQuote.classList.add('visible');
    }, 500);

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        if (!hasAnimated && window.scrollY > 50) {
            quoteText.classList.add('snap');
            hasAnimated = true;
            // No need to remove the class as we want the text to stay dissolved
        }
    });
}); 