const medScrnPlus = window.matchMedia('(min-width: 600px)');
const smScrn = window.matchMedia('max-width: 559px');
const mainNavDisclosureWidget = document.querySelector('#main-nav-disclosure-widget');

if (medScrnPlus) {
  mainNavDisclosureWidget.setAttribute("open", "");
}

if (medScrnPlus) {
  document.getElementById('work-experience-details').open = true;
}

if (medScrnPlus) {
  document.getElementById('education-details').open = true;
}
