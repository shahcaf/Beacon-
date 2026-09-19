document.addEventListener('DOMContentLoaded', () => {
    
    // --- Render Bento Grid ---
    const bentoContainer = document.getElementById('bento-grid-container');
    if (bentoContainer) {
        FEATURES.forEach((feature, index) => {
            const delay = (index % 4) + 1;
            const card = document.createElement('div');
            card.className = `bento-card reveal reveal-delay-${delay}`;
            card.innerHTML = `
                <div class="bento-icon">${feature.icon}</div>
                <h3>${feature.title}</h3>
                <p>${feature.desc}</p>
            `;
            bentoContainer.appendChild(card);
        });
    }

    // --- Render Command Center ---
    const commandsList = document.getElementById('commands-list');
    const searchInput = document.getElementById('command-search');
    const filterContainer = document.getElementById('command-filters');

    function renderCommands(filterCategory = 'All', searchQuery = '') {
        if (!commandsList) return;
        commandsList.innerHTML = '';
        
        let filtered = COMMANDS;
        
        if (filterCategory !== 'All') {
            filtered = filtered.filter(c => c.category === filterCategory);
        }
        
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(c => c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q));
        }

        if (filtered.length === 0) {
            commandsList.innerHTML = '<p style="text-align:center; padding: 2rem; color: var(--text-secondary);">No commands found.</p>';
            return;
        }

        filtered.forEach(cmd => {
            const div = document.createElement('div');
            div.className = 'command-item reveal';
            div.innerHTML = `
                <div>
                    <div class="command-name">${cmd.name}</div>
                    <div class="command-desc">${cmd.desc}</div>
                </div>
                <div class="command-meta">
                    <span class="command-category">${cmd.category}</span>
                    <br/>
                    Perm: ${cmd.permission}
                </div>
            `;
            commandsList.appendChild(div);
        });
        
        // Small delay to trigger reveals
        setTimeout(() => {
            document.querySelectorAll('.command-item.reveal').forEach(el => el.classList.add('active'));
        }, 50);
    }

    if (commandsList && filterContainer) {
        const categories = ['All', ...new Set(COMMANDS.map(c => c.category))];
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${cat === 'All' ? 'active' : ''}`;
            btn.innerText = cat;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderCommands(cat, searchInput.value);
            });
            filterContainer.appendChild(btn);
        });

        searchInput.addEventListener('input', (e) => {
            const activeFilter = document.querySelector('.filter-btn.active').innerText;
            renderCommands(activeFilter, e.target.value);
        });

        renderCommands(); // initial render
    }

    // --- Render FAQ ---
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        FAQ.forEach(item => {
            const faqDiv = document.createElement('div');
            faqDiv.className = 'faq-item reveal';
            faqDiv.innerHTML = `
                <button class="faq-question">
                    ${item.question}
                    <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <div class="faq-answer">
                    <p>${item.answer}</p>
                </div>
            `;
            faqContainer.appendChild(faqDiv);

            const btn = faqDiv.querySelector('.faq-question');
            btn.addEventListener('click', () => {
                faqDiv.classList.toggle('active');
                const answer = faqDiv.querySelector('.faq-answer');
                if (faqDiv.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = null;
                }
            });
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Propagate URLs from CONFIG ---
    document.querySelectorAll('.invite-url').forEach(el => el.href = SITE_CONFIG.botInviteUrl);
    document.querySelectorAll('.discord-url').forEach(el => el.href = SITE_CONFIG.discordUrl);
    document.querySelectorAll('.bot-name-text').forEach(el => el.innerText = SITE_CONFIG.botName);

});
