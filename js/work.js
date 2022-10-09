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
    let i;
    // var project = projects[i];
    var activeSlide = project.classList.contains('project-visible');
    if (activeSlide) {
      project.classList.remove('project-visible');
      project.classList.add('project-hidden')
      projects.item(+1).classList.remove('project-hidden');
      projects.item(+1).classList.add('project-visible');
    }
    i++
  };
}

function prevSlide() {
  console.log("Je l'ai entendu!");
}