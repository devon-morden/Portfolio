const left = document.getElementById('left-chevron');

const right = document.getElementById('right-chevron');

const projects = document.querySelectorAll('.project');

// const inactiveSlide = inactiveSlides[i];

function nextSlide() {
  console.log('I heard that!');
  //get rid of project-visible
  //add project-hidden
  //show next section
  // for (let project of projects) { 
  //   console.log('start of for statement')
  //   var activeSlide = project.classList.contains('project-visible');
  //   console.log(project)
  //   if (activeSlide) {
  //     console.log('start of if statement')
  //     project.classList.remove('project-visible');
  //     project.classList.add('project-hidden')
  //     projects.item(+1).classList.remove('project-hidden');
  //     projects.item(+1).classList.add('project-visible');
  //     console.log(projects.item(+1));
  //   }
  // };
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    console.log(project);
    if (project.classList.contains('project-visible')) {
      project.classList.remove('project-visible');
      project.classList.add('project-hidden');
      projects[i+1].classList.add('project-visible');
      projects[i+1].classList.remove('project-hidden');
      return;
    }
  }
}

function prevSlide() {
  console.log("Je l'ai entendu!");
}