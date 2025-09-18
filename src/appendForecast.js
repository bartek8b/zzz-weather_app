const divs = document.querySelectorAll('main > div');

export function appendForecast(data) {
  divs.forEach((div) => {
    if (div.classList.contains('address')) {
      address(data, div);
    }
    if (div.classList.contains('icon')) {
      weatherIcon(data, div);
    }
  });
}

async function address(data, div) {
  const src = await import('./assets/info_icons/map-pin.svg');
  const icon = document.createElement('img');
  icon.alt = 'address';
  icon.src = src.default;
  div.appendChild(icon);

  div.appendChild(document.createElement('br'));

  const span = document.createElement('span');
  span.textContent = capitalizeAddress(data.address);
  div.appendChild(span);
}

function capitalizeAddress(address) {
  return address
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function weatherIcon(data, div) {
  const icon = data.icon;
  const src = await import(`./assets/weather_icons/${icon}.svg`);

  const img = document.createElement('img');
  img.alt = icon;
  img.src = src.default;
  img.style.width = '70%';

  div.appendChild(img);
}
