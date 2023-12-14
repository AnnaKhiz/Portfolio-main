export function navigateLinks() {
  const headerNavElement = [...document.getElementsByClassName('nav-list')];
  let link;

  headerNavElement.forEach(menu => {
    menu.addEventListener('click', (event) => {
      event.preventDefault();
      link = event.target.dataset.navLink;

      if (link === 'github') {
        window.open(`https://github.com/AnnaKhiz?tab=repositories`)
      } else {
        switch (window.localStorage.getItem('lang')) {
          case 'en':
            return location.href = `/${link}.html#en`;
          case 'ru':
            return location.href = `/${link}.html#ru`;
          case 'ua':
            return location.href = `/${link}.html#ua`;
        }
      }
    })
  })
}