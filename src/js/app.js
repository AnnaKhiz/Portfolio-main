import * as flsFunctions from "./modules/functions.js";
import * as burger from "./modules/burger.js";
import * as lang from "./modules/lang-change.js";
import * as nav from "./modules/header-nav.js";
document.addEventListener('load', () => {
  if (window.localStorage.getItem('lang') === 'ru') {
    location.href = window.location.pathname + '#ru'
  }
})

flsFunctions.isWebp();
burger.burger();
nav.navigateLinks();
lang.changeLanguage();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/