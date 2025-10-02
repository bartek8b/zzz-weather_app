import { searchListeners } from './processData';
import { togglesListeners, retrieveStorage } from './togglesHandler';
import loading from './assets/info_icons/refresh-ccw.svg';

function appendWelcome() {
  const divs = document.querySelectorAll('main > div');
  const input = document.getElementById('location');

  divs.forEach((div) => {
    const img = document.createElement('img');
    img.src = loading;
    div.appendChild(img);
  });

  input.focus();
}

export function init() {
  retrieveStorage();
  searchListeners();
  togglesListeners();
  appendWelcome();
}
