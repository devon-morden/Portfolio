const left = document.getElementById('left-chevron');

const right = document.getElementById('right-chevron');

const projects = document.querySelectorAll('.project');

// const inactiveSlide = inactiveSlides[i];

function nextSlide() {
  console.log('I heard that!');
  //get rid of project-visible
  //add project-hidden
  //show next section
  for (let project of projects) { 
    let i=0;
    // var project = projects[i];
    var activeSlide = project.classList.contains('project-visible');
    if (activeSlide) {
      projects[i+1].classList.add('project-visible');
      project.classList.remove('project-visible');
      return
    }
    i ++
  };
}

function prevSlide() {
  console.log("Je l'ai entendu!");
}