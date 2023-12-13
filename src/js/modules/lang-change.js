import {langObj} from "./lang-array.js";

export function changeLanguage() {
  let cookieVar;

  const appliedLang = ['en', 'ua', 'ru'];
  console.log(langObj);

  const langButtons = [...document.querySelectorAll('.header__lang__item')];
  console.log(langButtons)

  langButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // event.preventDefault()
      let target = event.target.dataset.id;
      cookieVar = target;

      location.href = `${window.location.pathname}#${cookieVar}`;
      location.reload();

      // console.log(cookieVar)
    })
  })
  changePageLang();

  function changePageLang() {
    let hash = window.location.hash.substr(1);
    console.log('hash '+ hash)
    if (!appliedLang.includes(hash)) {
      location.href = `${window.location.pathname}#en`;
      location.reload();
    }
    cookieVar = hash;
    document.querySelector('title').innerHTML = langObj[hash]['title'];

    for (let key in langObj[hash]) {
      if (document.querySelector(`.lng-${key}`)) {
        console.log(langObj[hash][key]);
        [...document.querySelectorAll(`.lng-${key}`)].forEach(element => {
          element.innerHTML = langObj[hash][key];
        })
      }

    }

  }
  console.log(cookieVar)
}