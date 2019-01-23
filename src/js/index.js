import "../sass/main.scss";

import TweenMax from "gsap/TweenMax";
import "./nav";

const h2 = document.querySelector(".overlay__h2");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav__wrapper");
const left = document.querySelector(".hero__container--left");
const right = document.querySelector(".hero__container--right");
const para = document.querySelector(".text__container__p");

TweenMax.to(h2, 1, {
  opacity: 1,

  x: "0",
  delay: 1
});
TweenMax.to(h2, 2, {
  opacity: 0,
  scale: 0,
  ease: Expo.easeInOut,
  delay: 3
});
TweenMax.to(overlay, 1.5, {
  height: "0",
  ease: Expo.easeInOut,
  delay: 5.5
});
TweenMax.to(nav, 2, {
  opacity: 1,
  scale: 1,
  delay: 7.5
});
TweenMax.staggerFrom(
  ".nav__wrapper ul li",
  2,
  {
    opacity: 0,
    delay: 8,
    y: 50,
    ease: Expo.easeInOut
  },
  0.3
);
TweenMax.staggerFrom(
  ".user__icons  li",
  2,
  {
    opacity: 0,
    delay: 11,
    y: 30,
    ease: Expo.easeInOut
  },
  0.3
);
TweenMax.to(left, 3, {
  opacity: 1,
  scale: 1,
  ease: Expo.easeInOut,
  x: "0",
  delay: 9
});
TweenMax.to(right, 3, {
  opacity: 1,
  scale: 1,
  ease: Expo.easeInOut,
  x: "0",
  delay: 9
});
TweenMax.staggerFrom(
  ".contact__info  a",
  1.5,
  {
    opacity: 0,
    delay: 13,
    y: 30,
    ease: Expo.easeInOut
  },
  0.3
);
TweenMax.to(para, 2, {
  opacity: 1,
  scale: 1,
  ease: Expo.easeInOut,
  delay: 15
});
