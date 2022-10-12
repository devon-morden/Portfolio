const medScrn = window.matchMedia('min-width: 600px');
const smScrn = window.matchMedia('max-width: 559px')

if (medScrn) {
  document.getElementById('main-nav-details').open = true;
}

if (medScrn) {
  document.getElementById('work-experience-details').open = true;
}

if (medScrn) {
  document.getElementById('education-details').open = true;
}
