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
      src: './Worksection Pics/dsk1.png',
      alt: 'First Project demo',
    },
    title: 'Tonic',
    type: ['CANOPY', 'Back End', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ',
    technologies: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'Two',
    img: {
      src: './Worksection Pics/dsk2.png',
      alt: 'Second Project demo',
    },
    title: 'Multi-Post Stories',
    type: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ',
    technologies: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'Three',
    img: {
      src: './desktopPics/newsnap.png',
      alt: 'Third Project demo',
    },
    title: 'Facebook 360',
    type: ['CANOPY', 'BACKEND DEV', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
    technologies: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'Four',
    img: {
      src: './Worksection Pics/dsk4.png',
      alt: 'Fourth Project demo',
    },
    title: 'Uber Navigation',
    type: ['UBER', 'Lead Developer', '2018'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    technologies: ['HTML', 'CSS', 'Javascript'],
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
          <button><a href="https://studiosnabeel.github.io/">See Live</a><img src="./Pictures/Social/icon-see-live.png"></button>
          <button><a href="https://github.com/studiosnabeel/studiosnabeel.github.io">See Source</a><img src="./Pictures/Social/icon-see-source.png"></button>
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
