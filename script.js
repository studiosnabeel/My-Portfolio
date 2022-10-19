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

const projectData = [
  {
    id: 'p-1',
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
    id: 'p-2',
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
    id: 'p-3',
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
    id: 'p-4',
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
