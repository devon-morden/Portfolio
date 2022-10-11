const medScrn = window.matchMedia('min-width: 600px');
const smScrn = window.matchMedia('max-width: 559px')

if (medScrn) {
  document.getElementById('main-nav-details').open = true;
}

