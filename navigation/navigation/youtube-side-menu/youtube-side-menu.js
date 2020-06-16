function openMenu() {
    this.nextElementSibling.classList.remove('context-menu_hidden');
    window.addEventListener('click', function closeMenus() {
        const contextMenus = document.querySelectorAll(".context-menu");
        contextMenus.forEach(menu => menu.classList.add('context-menu_hidden'));
        window.removeEventListener('click', closeMenus, true);
    }, true);
}

const headerMenuButtons = document.querySelectorAll('.header-nav__button');
headerMenuButtons.forEach(button => button.addEventListener('click', openMenu, true));

const hamburgerButton = document.querySelector('.page-header__hamburger');
const minimizedSideMenu = document.querySelector('.side-menu_minimized');
const maximizedSideMenu = document.querySelector('.side-menu_maximized');
const pageContent = document.querySelector('.page-filler');
hamburgerButton.addEventListener('click', (e) => {
    if (minimizedSideMenu.hidden) {
        minimizedSideMenu.hidden = false;
        maximizedSideMenu.hidden = true;
        pageContent.style.marginLeft = 'var(--minimized-menu-width)';
    } else {
        minimizedSideMenu.hidden = true;
        maximizedSideMenu.hidden = false;
        pageContent.style.marginLeft = 'var(--maximized-menu-width)';
    }
});
