// src/index.js
import './styles.css';
import {
  greeting,
  image,
  test,
  heading,
  paragraph,
  loadStuff,
  bannerMain,
} from './greeting.js';
import odinImage from './odin.png';
import banner from './resto.jpg';

image.src = odinImage;
bannerMain.src = banner;

loadStuff();
