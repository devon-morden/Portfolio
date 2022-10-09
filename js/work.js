const left = document.getElementById('left-chevron');

const right = document.getElementById('right-chevron');

const projects = document.querySelectorAll('.project');

// const inactiveSlide = inactiveSlides[i];

function nextSlide() {
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
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    console.log(project);
    if (project.classList.contains('project-visible')) {
      project.classList.remove('project-visible');
      project.classList.add('project-hidden');
      projects[i-1].classList.add('project-visible');
      projects[i-1].classList.remove('project-hidden');
      return;
    }
  }
}