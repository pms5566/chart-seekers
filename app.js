document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Drawer
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

    // 2. Portal Card Tabs Mockup
    const loginTabs = document.querySelectorAll('.login-tab');
    loginTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            loginTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // 3. Interactive Solutions Accordion Stack
    const solutionCards = document.querySelectorAll('.solution-accordion-card');

    solutionCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all accordion cards
            solutionCards.forEach(c => {
                c.classList.remove('active');
                const body = c.querySelector('.card-body');
                if (body) body.style.maxHeight = null;
            });

            // Make the clicked one active and animate height
            card.classList.add('active');
            const body = card.querySelector('.card-body');
            if (body) {
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });

    // Initialize the active card's max-height on load
    const activeSolutionCard = document.querySelector('.solution-accordion-card.active');
    if (activeSolutionCard) {
        const body = activeSolutionCard.querySelector('.card-body');
        if (body) {
            body.style.maxHeight = body.scrollHeight + 'px';
        }
    }

    // 4. Position Sizing & Risk Calculator
    const inputCapital = document.getElementById('inputCapital');
    const inputRisk = document.getElementById('inputRisk');
    const inputStopLoss = document.getElementById('inputStopLoss');

    const dispCapital = document.getElementById('dispCapital');
    const dispRisk = document.getElementById('dispRisk');
    const dispStopLoss = document.getElementById('dispStopLoss');

    const valCapitalRisk = document.getElementById('valCapitalRisk');
    const valPosSize = document.getElementById('valPosSize');

    const formatCurrency = (num) => {
        return '$' + parseFloat(num).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    const calculateRisk = () => {
        const capital = parseFloat(inputCapital.value);
        const riskPercent = parseFloat(inputRisk.value);
        const stopLossPercent = parseFloat(inputStopLoss.value);

        // Update displays
        dispCapital.textContent = '$' + capital.toLocaleString();
        dispRisk.textContent = riskPercent + '%';
        dispStopLoss.textContent = stopLossPercent + '%';

        // Calculations
        const capitalAtRisk = capital * (riskPercent / 100);
        const positionSize = capitalAtRisk / (stopLossPercent / 100);

        // Output formatting
        valCapitalRisk.textContent = formatCurrency(capitalAtRisk);
        valPosSize.textContent = formatCurrency(positionSize);
    };

    if (inputCapital && inputRisk && inputStopLoss) {
        inputCapital.addEventListener('input', calculateRisk);
        inputRisk.addEventListener('input', calculateRisk);
        inputStopLoss.addEventListener('input', calculateRisk);

        // Run initial calculation
        calculateRisk();
    }

    // 5. FAQ Accordion Panels
    const accordionQuestions = document.querySelectorAll('.faq-question');

    accordionQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const accordionItem = question.parentElement;
            const answer = accordionItem.querySelector('.faq-answer');
            const isOpen = accordionItem.classList.contains('open');

            // Close other accordions
            document.querySelectorAll('.faq-accordion-item').forEach(item => {
                item.classList.remove('open');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Open if closed
            if (!isOpen) {
                accordionItem.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
