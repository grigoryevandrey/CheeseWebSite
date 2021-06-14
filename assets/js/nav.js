const showNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-menu');
    const closeBtn = document.querySelector('.close');

    burger.addEventListener('click', () => {
        nav.classList.remove('notDisplayMob');
    });

    closeBtn.addEventListener('click', () => {
        nav.classList.add('notDisplayMob');
    })
}

showNav();

