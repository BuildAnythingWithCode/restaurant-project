export const menuLoader = function () {
  const menuText = document.createElement('p');
  document.querySelector('#content').appendChild(menuText);
  menuText.style.color = 'red';
  menuText.textContent = 'I am the Menu tab.';
};

export const menuBtn = document.querySelector('#menu');
