"use strict";

var toggleSwitch = document.querySelector('input[type="checkbox"]');
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var nav = document.getElementById('nav');
var toggleIcon = document.getElementById('toggle-icon');
var textBox = document.getElementById('text-box');

var imageMode = function imageMode(mode) {
  image1.src = "img/undraw_proud_coder_".concat(mode, ".svg");
  image2.src = "img/undraw_feeling_proud_".concat(mode, ".svg");
  image3.src = "img/undraw_conceptual_idea_".concat(mode, ".svg");
}; // Dark Mode Style


var darkMode = function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Blackbeard Mode';
  toggleIcon.children[1].classList.remove('fa-sun');
  toggleIcon.children[1].classList.add('fa-moon');
  imageMode('dark');
}; // Light Mode Style


var lightMode = function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Ace Mode';
  toggleIcon.children[1].classList.remove('fa-moon');
  toggleIcon.children[1].classList.add('fa-sun');
  imageMode('light');
}; // apply mode


var applyMode = function applyMode(mode) {
  if (mode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}; // Switch Theme Dynamically


var switchTheme = function switchTheme(event) {
  applyMode(event.target.checked ? 'dark' : 'light');
};

var loadSavedMode = function loadSavedMode() {
  var mode = localStorage.getItem('theme') || 'light';

  if (mode === 'dark') {
    toggleSwitch.checked = true;
  } else {
    toggleSwitch.checked = false;
  }

  applyMode(mode);
}; // Event Listeners


toggleSwitch.addEventListener('change', switchTheme); // on Load

loadSavedMode();