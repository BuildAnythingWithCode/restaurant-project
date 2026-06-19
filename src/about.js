export const aboutLoader = function () {
  const aboutText = document.createElement('p');
  document.querySelector('#content').appendChild(aboutText);
  aboutText.style.color = 'purple';
  aboutText.textContent = 'I am the About tab.';
};

export const aboutBtn = document.querySelector('#about');
