import loading from './assets/info_icons/refresh-ccw.svg';
import error from './assets/info_icons/x-octagon.svg';

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

export function appendErrorInfo() {
  gridItems.forEach((item) => {
    if (item.classList.contains('address')) {
      item.innerHTML = 'Something went wrong, try again';
    } else {
      const img = document.createElement('img');
      img.src = error;
      item.appendChild(img);
    }
  });
}
