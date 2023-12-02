const medScrnPlus = window.matchMedia('(min-width: 640px)');
const smScrn = window.matchMedia('(max-width: 639px)');
const mainNavDisclosureWidget = document.getElementById('main-nav-disclosure-widget');

function smScrnChng(e) {
  if (e.matches) {
    mainNavDisclosureWidget.removeAttribute("open","true")
    console.log("That's a match")
  }
};

smScrn.addEventListener("change", smScrnChng);

smScrnChng(smScrn);

function medScrnPlusChange(e) {
  if (e.matches) {
    mainNavDisclosureWidget.setAttribute("open", "true")
  }
};

medScrnPlus.addEventListener("change",medScrnPlusChange);

medScrnPlusChange(medScrnPlus);





/* 
if (medScrnPlus) {
  document.getElementById('work-experience-details').open = true;
};

if (medScrnPlus) {
  document.getElementById('education-details').open = true;
}
 */