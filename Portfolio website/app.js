const menu = document.querySelector('#moble-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = docunment.querySelector('#navbar_logo');


//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const portfolioMenu = document.querySelector('#portfolio-page');
    const contactMenu = document.querySelector('#contact-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2100) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        portfolioMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;

    } else if (window.innerWidth > 960 && scrollPos < 3600) {
        portfolioMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;

    } else if (window.innerWidth > 960 && scrollPos < 3000) {
        contactMenu.classList.add('highlight');
        portfolioMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile menu

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);