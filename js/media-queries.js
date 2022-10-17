const medScrnPlus = window.matchMedia('min-width: 600px');
const smScrn = window.matchMedia('max-width: 559px')

if (medScrnPlus) {
  document.getElementById('main-nav-disclosure-widget').open = true;
}

if (medScrnPlus) {
  document.getElementById('work-experience-details').open = true;
}

if (medScrnPlus) {
  document.getElementById('education-details').open = true;
}
