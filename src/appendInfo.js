const gridItems = document.querySelectorAll('main > div');

export function clearItems() {
  gridItems.forEach((item) => (item.textContent = ''));
}

export function appendLoader() {
  gridItems.forEach((item) => {
    
  });
}
