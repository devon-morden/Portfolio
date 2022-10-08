/*initialize variables for each article & button*/
const rootCauseAnalysis = document.getElementById('content-root-cause-analysis');
const rootCauseAnalysisBtn = document.getElementById('btn-root-cause-analysis');

const uxDesign = document.getElementById('content-ux-design');
const uxDesignBtn = document.getElementById('btn-ux-design');

const projectManagement = document.getElementById('content-project-management');
const projectManagementBtn = document.getElementById('btn-project-management');

const webDesign = document.getElementById('content-web-design');
const webDesignBtn = document.getElementById('btn-web-design');

const marketing = document.getElementById('content-marketing');
const marketingBtn = document.getElementById('btn-marketing');

const instructionalDesign = document.getElementById('content-instructional-design');
const instructionalDesignBtn = document.getElementById('btn-instructional-design');

const content = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('.button');

/*shows content when button is clicked*/
function showContent(element, btn){
  content.forEach((element) => {
    element.style.display = 'none';
    });
  buttons.forEach((button) => {
    button.classList.remove('current-button');
  });
  element.style.display = 'block';
  if (element.style.display === 'block') {
    btn.setAttribute('class', 'current-button');
  } 
};

