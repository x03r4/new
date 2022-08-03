const menuBtn = document.querySelector(".hamburger_container");
const menuWrapper = document.querySelector(".menu_wrapper");
let menuActive = () => {
    menuWrapper.classList.add("menu_active");
}
menuBtn.addEventListener('click', menuActive);

const menuBackBtn = document.querySelector(".menu_back_button");
let menuDisable = () => {
    menuWrapper.classList.remove("menu_active");
}
menuBackBtn.addEventListener('click', menuDisable);
