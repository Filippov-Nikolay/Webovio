let menuHeader = document.querySelector('.header-menu__wrapper')
    burgerBtn = document.querySelector('.burger-btn')
    menuHeaderLink = document.querySelectorAll('.menu__header-link');
burgerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(menuHeader.classList.toggle('header-menu__wrapper--active')) {
        document.body.style.overflow = 'hidden';
        burgerBtn.classList.add('burger-btn--active');
    } else {
        document.body.style.overflow = 'auto';
        burgerBtn.classList.remove('burger-btn--active');
    }
});
menuHeaderLink.forEach(link => {
    link.addEventListener('click', function(e) {
        if(document.body.style.overflow = 'hidden') {
            document.body.style.overflow = 'auto';
            menuHeader.classList.remove('header-menu__wrapper--active');
            burgerBtn.classList.remove('burger-btn--active');
        }
    });
});
