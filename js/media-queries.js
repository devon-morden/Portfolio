const medScrnPlus = window.matchMedia('(min-width: 600px)');
const smScrn = window.matchMedia('(max-width: 559px)');
const mainNavDisclosureWidget = document.getElementById('main-nav-disclosure-widget');

if (smScrn) {
  mainNavDisclosureWidget.removeAttribute("open","");
};

/* function testScreen(media) {
  if(media.matches) {
    mainNavDisclosureWidget.removeAttribute("open", "")
  };
); */
/* 
if (medScrnPlus) {
  mainNavDisclosureWidget.setAttribute("open", "")
}; */

if (medScrnPlus) {
  document.getElementById('work-experience-details').open = true;
};

if (medScrnPlus) {
  document.getElementById('education-details').open = true;
}
