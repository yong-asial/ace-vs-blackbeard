const toggleSwitch = document.querySelector('input[type="checkbox"]');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

const imageMode = (mode) => {
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
};

// Dark Mode Style
const darkMode = () => {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Blackbeard Mode';
  toggleIcon.children[1].classList.remove('fa-sun');
  toggleIcon.children[1].classList.add('fa-moon');
  imageMode('dark');
};

// Light Mode Style
const lightMode = () => {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Ace Mode';
  toggleIcon.children[1].classList.remove('fa-moon');
  toggleIcon.children[1].classList.add('fa-sun');
  imageMode('light');
}

// apply mode
const applyMode = (mode) => {
  if (mode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
};

// Switch Theme Dynamically
const switchTheme = (event) => {
  applyMode(event.target.checked ? 'dark' : 'light');
};

const loadSavedMode = () => {
  const mode = localStorage.getItem('theme') || 'light';
  if (mode === 'dark') {
    toggleSwitch.checked = true;
  } else {
    toggleSwitch.checked = false;
  }
  applyMode(mode);
};

// Event Listeners
toggleSwitch.addEventListener('change', switchTheme);

// on Load
loadSavedMode();