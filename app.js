document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Drawer Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const drawerClose = document.querySelector('.drawer-close');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    const openDrawer = () => {
        mobileDrawer.classList.add('open');
        drawerBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeDrawer = () => {
        mobileDrawer.classList.remove('open');
        drawerBackdrop.classList.remove('open');
        document.body.style.overflow = ''; // Restore background scrolling
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', openDrawer);
    }

    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }

    if (drawerBackdrop) {
        drawerBackdrop.addEventListener('click', closeDrawer);
    }

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
});
