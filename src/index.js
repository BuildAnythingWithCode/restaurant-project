// src/index.js
import './styles.css';
import odinImage from './odin.png';
import banner from './resto.jpg';
import { homeLoader, homeBtn } from './home.js';
import { menuLoader, menuBtn } from './menu.js';
import { aboutLoader, aboutBtn } from './about.js';
import {
  greeting,
  image,
  test,
  heading,
  paragraph,
  loadStuff,
  bannerMain,
  contentSection,
} from './greeting.js';

console.log(greeting);

image.src = odinImage;
bannerMain.src = banner;

loadStuff();
loadStuff();

const clearContent = () => {
  const content = document.querySelector('#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

homeBtn.addEventListener('click', function () {
  clearContent();
  homeLoader();
});

menuBtn.addEventListener('click', function () {
  clearContent();
  menuLoader();
});

aboutBtn.addEventListener('click', function () {
  clearContent();
  aboutLoader();
});
