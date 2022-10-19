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

// details popup window

const workfiles = [
  {
    id: 'One',
    img: {
      src: './Worksection Pics/snap1.png',
      alt: 'First Project demo',
    },
    title: 'Tonic',
    type: ['CANOPY', 'Back End', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: [
      'HTML',
      'CSS',
      'Ruby and Rails',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
  {
    id: 'Two',
    img: {
      src: './Worksection Pics/snap2.png',
      alt: 'Second Project demo',
    },
    title: 'Multi-Post Stories',
    type: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
  {
    id: 'Three',
    img: {
      src: './Worksection Pics/snap3.png',
      alt: 'Third Project demo',
    },
    title: 'Facebook 360',
    type: ['CANOPY', 'BACKEND DEV', '2015'],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'github',
      'bootstrap',
    ],
  },
  {
    id: 'Four',
    img: {
      src: './Worksection Pics/snap4.png',
      alt: 'Fourth Project demo',
    },
    title: 'Uber Navigation',
    type: ['UBER', 'Lead Developer', '2018'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: [
      'HTML',
      'Ruby on Rails',
      'CSS',
      'Javascript',
      'github',
      'bootstrap',
    ],
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
          <li>${files.technologies[3]}</li>
          <li>${files.technologies[4]}</li>
          <li>${files.technologies[5]}</li>
        </ul>
        <hr>
        <div class="pop-button">
          <button href="">See Live</button>
          <button href="">See Source</button>
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
