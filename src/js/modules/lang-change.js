import {arrayEN} from "./en-array.js";
import {arrayRU} from "./ru-array.js";
import {arrayUA} from "./ua-array.js";

export function changeLanguage() {
  const appliedLang = ['en', 'ua', 'ru'];
  const langButtons = [...document.querySelectorAll('.header__lang__item')];

  const langObj = {
    "en": arrayEN,
    "ru": arrayRU,
    "ua": arrayUA,
  };

  changePageLang();

  langButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      let target = event.target.dataset.id;
      window.localStorage.setItem('lang', target);
      location.href = `${window.location.pathname}#${window.localStorage.getItem('lang')}`;
      location.reload();
    })
  })



  function changePageLang() {
    let hash = window.location.hash.substr(1);

    if (!appliedLang.includes(hash)) {
      location.href = `${window.location.pathname}#en`;
      location.reload();
    }

    window.localStorage.setItem('lang', hash);
    document.querySelector('title').innerText = langObj[hash]['title'];

    for (let key in langObj[hash]) {
      if (document.querySelector(`.lng-${key}`)) {
        const keysArray = [...document.querySelectorAll(`.lng-${key}`)];
        keysArray.forEach(element => {
          element.innerText = langObj[hash][key];
        })
      }
    }
  }
}