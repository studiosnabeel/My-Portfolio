const burgerMenu = document.querySelector('#burgerMenu');
const crossClose = document.querySelector('#crossClose');
const menuBar = document.querySelector('#menuBar');
const menuLinks = document.querySelectorAll('.menuLinks');

burgerMenu.addEventListener('click', () => {
  menuBar.classList.toggle('open-bar');
});

crossClose.addEventListener('click', () => {
  menuBar.classList.toggle('open-bar');
});

menuLinks.forEach((item) => {
  item.addEventListener('click', () => {
    menuBar.classList.toggle('open-bar');
  });
});

// framework dropdown toggle

const framework = document.querySelector('#framework');
const frameworkMenu = document.querySelector('#framework-menu');

framework.addEventListener('click', () => {
  frameworkMenu.classList.toggle('open-framework-dropdown');
});

// skills dropdown toggle

const skills = document.querySelector('#skills');
const skillsMenu = document.querySelector('#skills-menu');

skills.addEventListener('click', () => {
  skillsMenu.classList.toggle('open-skills-dropdown');
});

// details popup window

const workfiles = [
  {
    id: 'One',
    img: {
      src: './Worksection Pics/codeeasy.PNG',
      alt: 'First Project demo',
    },
    title: 'Code Easy',
    type: ['Education', 'Front End', '2022'],
    description:
      'Code Easy is an Online teaching website created for students to learn software development. It is created using HTML CSS and Vanilla JavaScript. ',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://studiosnabeel.github.io/codeeasy/',
    source: 'https://github.com/studiosnabeel/codeeasy',
  },
  {
    id: 'Two',
    img: {
      src: './Worksection Pics/Movies.png',
      alt: 'Movie Nights Poster',
    },
    title: 'Multi-Post Stories',
    type: ['Movies', 'Front End Dev', '2022'],
    description:
      'Movie Nights is a Single page app where users can watch latest movies. Modular JavaScript was applied for this project. ',
    technologies: ['HTML', 'CSS', 'Javascript'],
    live: 'https://studiosnabeel.github.io/groupCapstone/dist/',
    source: 'https://github.com/studiosnabeel/groupCapstone',
  },
  {
    id: 'Three',
    img: {
      src: './Worksection Pics/pocketpal.PNG',
      alt: 'Pocket Pal',
    },
    title: 'PocketPal',
    type: ['Budget', 'Full Stack Dev', '2023'],
    description:
      'This Rails Full-stack app is a expenses tracking app. It supports user registration and authentication using the Devise gem.',
    technologies: ['Rails', 'Ruby', 'PostgreSQL'],
    live: 'https://mysite-g8gc.onrender.com/',
    source: 'https://github.com/studiosnabeel/budget-app',
  },
  {
    id: 'Four',
    img: {
      src: './Worksection Pics/Coutries.png',
      alt: 'Fourth Project demo',
    },
    title: 'Countries Stats',
    type: ['Stats', 'Front End Dev', '2022'],
    description:
      'This React-Redux application fetches data of Countries from an API and shows All Countries population and capitals. And it also shows details about a certain country when user clicks on it.',
    technologies: ['React', 'Redux', 'CSS'],
    live: 'https://countries-stats.netlify.app/',
    source: 'https://github.com/studiosnabeel/PopulationStats0fCountries',
  },
];

const popMain = document.querySelector('.pop-section');

function popUp() {
  workfiles.forEach((files) => {
    popMain.innerHTML += `

    <div class="pop-container" 
    files-target="${files.id}">
    <i class="fa fa-close" style="font-size:24px"></i>
    <h2>${files.title}</h2> 


    <ul class="pop-tech">
    <li class="canopy">${files.type[0]}</li>
    <li>${files.type[1]}</li>
    <li>${files.type[2]}</li>
  </ul>
  <div class="preview-img">
    <img class="pop-pic" src="${files.img.src}" alt="${files.img.alt}" />
    <div class="pop-info">
      <p>
        ${files.description}
       
      </p>
      <div class="pop-view-2">
        <ul class="pop2-lang">
          <li>${files.technologies[0]}</li>
          <li>${files.technologies[1]}</li>
          <li>${files.technologies[2]}</li>
        </ul>
        <hr>
        <div class="pop-button">
          <button><a class='pop-a' href="${files.live}">See Live</a><img src="./Pictures/Social/icon-see-live.png"></button>
          <button><a class='pop-a' href="${files.source}">See Source</a><img src="./Pictures/Social/icon-see-source.png"></button>
        </div>
      </div>
    </div>
  </div>
</div>


      `;
  });
}

popUp();

const popSection = document.querySelector('.pop-section');
const popContainer = popSection.querySelectorAll('.pop-container');

document.querySelectorAll('.work-button').forEach((project) => {
  project.onclick = () => {
    popSection.style.display = 'flex';

    const name = project.getAttribute('data-name');

    popContainer.forEach((preview) => {
      const target = preview.getAttribute('files-target');

      if (name === target) {
        preview.classList.add('active');
      }
    });
  };
});

popContainer.forEach((close) => {
  close.querySelector('.fa-close').onclick = () => {
    close.classList.remove('active');
    popSection.style.display = 'none';
  };
});

// Form Validation javascript

const form = document.querySelector('.form-js');
const email = document.querySelector('#email-js');
const error = document.querySelector('.error-js');

form.addEventListener('submit', (action) => {
  action.preventDefault();
  const mail = email.value;
  if (mail === mail.toLowerCase()) {
    form.submit();
    form.reset();
  } else {
    error.innerHTML = 'Error: Use lowercase for <br> email. Form not sent';
  }
});
