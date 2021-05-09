const menu = document.querySelector(".icon-menu");
const modal = document.querySelector(".menu_mobile");
const close = document.querySelector(".icon-close");


menu.addEventListener("click", () => {
    modal.classList.toggle("modal-display");
    menu.classList.toggle("display-block");
    close.classList.toggle("display-block");
});

close.addEventListener("click", () => {
    modal.classList.toggle("modal-display");
    menu.classList.toggle("display-block");
    close.classList.toggle("display-block");
});