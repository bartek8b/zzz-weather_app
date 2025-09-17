import loading from './assets/info_icons/refresh-ccw.svg';

const gridItems = document.querySelectorAll('main > div');

export function clearItems() {
  gridItems.forEach((item) => (item.textContent = ''));
}

export function appendLoader() {
  gridItems.forEach((item) => {
    const img = document.createElement('img');
    img.src = loading;
    img.classList.add('spin');
    item.appendChild(img);
  });
}
