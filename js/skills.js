const rootCauseAnalysis = document.getElementById('content-root-cause-analysis');

const rootCauseAnalysisBtn = document.getElementById('btn-root-cause-analysis');

const uxDesign = document.getElementById('content-ux-design');

const projectManagement = document.getElementById('content-project-management');

const webDesign = document.getElementById('content-web-design');

const marketing = document.getElementById('content-marketing');

const instructionalDesign = document.getElementById('content-instructional-design');

/*shows content when target button is clicked*/
function showContent(text, btn){
    let elements = document.querySelectorAll('.content')
    elements.forEach((element) => {
      element.style.display = 'none';
    })
    text.style.display = 'block';
    btn.setAttribute('class', 'current-page');
  }

