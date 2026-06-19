export const homeLoader = function () {
  const homeText = document.createElement('p');
  document.querySelector('#content').appendChild(homeText);
  homeText.style.color = 'yellow';
  homeText.textContent = 'I am the Home tab.';
};

export const homeBtn = document.querySelector('#home');
