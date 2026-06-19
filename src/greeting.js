// greeting.js
export const greeting = 'Hello, Odinite!';
export const test = 'Test!';
export const heading = document.createElement('h1');
export const paragraph = document.createElement('p');
export const image = document.createElement('img');
export const bannerMain = document.createElement('img');
export const loadStuff = function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(image);
    heading.textContent = 'Welcome to the restaurant!';
    paragraph.textContent = 'We are so good.';
    document.body.appendChild(bannerMain);
    document.querySelector('#content').appendChild(heading);
    document.querySelector('#content').appendChild(paragraph);
  });
};
