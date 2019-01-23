const btn = document.querySelector(".bar__wrapper");
const navw = document.querySelector(".nav__wrapper__items");

const slider = () => {
  navw.classList.toggle("active");
};

btn.addEventListener("click", () => {
  slider();
});
