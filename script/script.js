const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const navLinks = document.querySelectorAll('.nav-link');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./Styles/img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "./Styles/img/icons/nav-open.svg";
    }
};
navLinks.forEach(link => {
    link.onclick = () => {
        nav.classList.remove('open');
        navBtnImg.src = "./Styles/img/icons/nav-open.svg";
    };
});
AOS.init();