const rootCauseAnalysis = document.getElementById('content-root-cause-analysis');

const uxDesign = document.getElementById('content-ux-design');

const projectManagement = document.getElementById('content-project-management');

const webDesign = document.getElementById('content-web-design');

const marketing = document.getElementById('content-marketing');

const instructionalDesign = document.getElementById('content-instructional-design');

const showContent = function(target){
  target.addEventListener('click', () => {
    document.getElementsByClassName('content').style.display = none;
    target.style.display = block;
  })
}