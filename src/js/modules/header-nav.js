export function navigateLinks() {
  const headerNavElement = document.getElementById('header-nav');
  let link;

  headerNavElement.addEventListener('click', (event) => {
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
}