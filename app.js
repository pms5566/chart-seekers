document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Drawer Toggles
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const drawerClose = document.querySelector('.drawer-close');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    const openDrawer = () => {
        mobileDrawer.classList.add('open');
        drawerBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        mobileDrawer.classList.remove('open');
        drawerBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    };

    if (menuToggle) menuToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
    
    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // 2. Solutions Tab System
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-tab');

            // Remove active class from buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and target tab item
            button.classList.add('active');
            const targetContent = document.getElementById(targetTabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // 3. FAQ Accordion Panels
    const accordionQuestions = document.querySelectorAll('.faq-question');

    accordionQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const accordionItem = question.parentElement;
            const answer = accordionItem.querySelector('.faq-answer');
            const isOpen = accordionItem.classList.contains('open');

            // Close other accordions for clean UX (accordion behavior)
            document.querySelectorAll('.faq-accordion-item').forEach(item => {
                item.classList.remove('open');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });

            // If it wasn't open, open it
            if (!isOpen) {
                accordionItem.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 4. Recent Engagements Carousel Scroll
    const engagementsGrid = document.getElementById('engagementsGrid');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    if (engagementsGrid && btnPrev && btnNext) {
        const scrollAmount = 320; // Width of a card + gap

        btnNext.addEventListener('click', () => {
            engagementsGrid.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        btnPrev.addEventListener('click', () => {
            engagementsGrid.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});
