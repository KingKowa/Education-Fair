const speakers = [
  {
    name: 'Sam Jonah',
    image: './images/guest-speaker.png',
    title: 'Professor- Dean Of the Faculty of Applied Science',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo voluptates magnam maxime adipisci! Alias.',
  },
  {
    name: 'Isaac Acquah',
    image: './images/guest-speaker.png',
    title: 'Professor- Dean Of the Faculty of Applied Science',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo voluptates magnam maxime adipisci! Alias.',
  },
  {
    name: 'P.Y Okyere',
    image: './images/guest-speaker.png',
    title: 'Professor- Dean Of the Faculty of Applied Science',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo voluptates magnam maxime adipisci! Alias.',
  },
  {
    name: 'Anastasia Yiadom',
    image: './images/guest-speaker.png',
    title: 'Professor- Dean Of the Faculty of Applied Science',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo voluptates magnam maxime adipisci! Alias.',
  },
  {
    name: 'Emmanuel Kyei Baffour',
    image: './images/guest-speaker.png',
    title: 'Professor- Dean Of the Faculty of Applied Science',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo voluptates magnam maxime adipisci! Alias.',
  },
  {
    name: 'Swanzy Obeng',
    image: './images/guest-speaker.png',
    title: 'Professor- Dean Of the Faculty of Applied Science',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident explicabo voluptates magnam maxime adipisci! Alias.',
  },
];

speakers.forEach((speaker) => {
  const speakerDetails = `
      <div class="speakers">
          <img class="speaker-img" src="${speaker.image}" alt="featured speaker one">
          <div class="descriptions">
              <h4>${speaker.name}</h4>
              <div class="title">${speaker.title}</div>
              <p>${speaker.description}
              </p>
          </div>
      </div>`;
  document.getElementById('guest-speakers').innerHTML += speakerDetails;
});

const hamburgerIcon = document.querySelector('.ham-icon');
const mobileMenu = document.querySelector('.mobile-nav-menu');
const mobileMenuItems = document.querySelectorAll('.mobile-nav-menu a');
hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

mobileMenuItems.forEach((event) => event.addEventListener('click', () => {
  hamburgerIcon.classList.remove('active');
  mobileMenu.classList.remove('active');
}));