// Initialize scroll reveal animations using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Positioning orbiting elements
    const orbitItems = document.querySelectorAll('.orbit-item');
    const radius = window.innerWidth < 768 ? 120 : 200;
    
    orbitItems.forEach((item, index) => {
        const angle = (index / orbitItems.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        item.style.left = `calc(50% + ${x}px - ${item.offsetWidth / 2}px)`;
        item.style.top = `calc(50% + ${y}px - ${item.offsetHeight / 2}px)`;
        
        // Stagger animations
        item.style.animationDelay = `${index * 0.5}s`;
    });

    // Ecosystem connect animation
    const ecoNodes = document.querySelectorAll('.eco-node');
    const ecoRadius = window.innerWidth < 768 ? 140 : 250;
    const svgLines = document.getElementById('eco-lines');
    
    if (svgLines) {
        let linesHTML = '';
        ecoNodes.forEach((node, index) => {
            const angle = (index / ecoNodes.length) * Math.PI * 2;
            const x = Math.cos(angle) * ecoRadius;
            const y = Math.sin(angle) * ecoRadius;
            
            node.style.left = `calc(50% + ${x}px - ${node.offsetWidth / 2}px)`;
            node.style.top = `calc(50% + ${y}px - ${node.offsetHeight / 2}px)`;
            
        linesHTML += `<line x1="50%" y1="50%" x2="calc(50% + ${x}px)" y2="calc(50% + ${y}px)" stroke="rgba(230, 18, 51, 0.4)" stroke-width="2" />`;
        });
        svgLines.innerHTML = linesHTML;
    }

    // Bento Card Mouse Tracking
    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.bento-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
