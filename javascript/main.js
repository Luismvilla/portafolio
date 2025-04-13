const toggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.link');
const skillsBar = document.querySelectorAll('.skill-bar div');
const card = document.querySelector('.card');

toggle.addEventListener('click', e => {
    toggle.classList.toggle('active');
    headerNav.classList.toggle('active');
})

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        toggle.classList.remove('active');
        headerNav.classList.remove('active');
    })
})

card.addEventListener('mouseenter', () => {
    skillsBar.forEach(bar => {
        bar.classList.remove('animar')
        void bar.offsetWidth; // Trigger reflow
        bar.classList.add('animar')
    })
})

card.addEventListener('mouseleaver', () => {
    skillsBar.forEach(bar =>bar.classList.remove('animar'))
})