const left = document.getElementById('left-chevron');

const right = document.getElementById('right-chevron');

const projects = document.querySelectorAll('.project');

// const inactiveSlide = inactiveSlides[i];

function nextSlide() {
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
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
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    if (project.classList.contains('project-visible')) {
      project.classList.remove('project-visible');
      project.classList.add('project-hidden');
      projects[i-1].classList.add('project-visible');
      projects[i-1].classList.remove('project-hidden');
      return;
    }
  }
}

// const detailsArticles = document.querySelectorAll('.details');

function showDetails() {
  console.log('audivi');
  for (let i = 0; i<projects.length; i++) {
    let project = projects[i];
    if (project.classList.contains('project-visible')) {
      let details = document.querySelectorAll('.details');
      details[i].classList.toggle('details-hidden');
    }
  }
}