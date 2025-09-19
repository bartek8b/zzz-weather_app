const divs = document.querySelectorAll('main > div');

export function appendForecast(data) {
  divs.forEach((div) => {
    if (div.classList.contains('address')) {
      address(data, div);
    }
    if (div.classList.contains('icon')) {
      weatherIcon(data, div);
    }
    if (div.classList.contains('date-0')) {
      date(data, div);
    }
    if (div.classList.contains('day-length')) {
      dayLength(data, div);
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

async function date(data, div) {
  const src = await import('./assets/info_icons/calendar.svg');
  const icon = document.createElement('img');
  icon.alt = 'date';
  icon.src = src.default;
  div.appendChild(icon);

  div.appendChild(document.createElement('br'));

  getDateAndDay(data.day, div);
}

function getDateAndDay(dateString, div) {
  const dateSpan = document.createElement('span');
  dateSpan.textContent = dateString;
  div.appendChild(dateSpan);

  div.appendChild(document.createElement('br'));

  const date = new Date(dateString);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = days[date.getDay()];

  const daySpan = document.createElement('span');
  daySpan.textContent = day;
  div.appendChild(daySpan);
}

async function dayLength(data, div) {
  const sunrise = data.sunrise.split(':').slice(0, 2).join(':');
  const sunset = data.sunset.split(':').slice(0, 2).join(':');

  const sunriseSpan = document.createElement('span');
  const sunriseIcon = document.createElement('img');
  sunriseIcon.alt = 'sunrise';
  const sunriseIconSrc = await import('./assets/info_icons/sunrise.svg');
  sunriseIcon.src = sunriseIconSrc.default;
  sunriseSpan.appendChild(sunriseIcon);
  sunriseSpan.appendChild(document.createTextNode(' ' + sunrise));
  div.appendChild(sunriseSpan);

  div.appendChild(document.createElement('br'));

  const sunsetSpan = document.createElement('span');
  const sunsetIcon = document.createElement('img');
  sunsetIcon.alt = 'sunset';
  const sunsetIconSrc = await import('./assets/info_icons/sunset.svg');
  sunsetIcon.src = sunsetIconSrc.default;
  sunsetSpan.appendChild(sunsetIcon);
  sunsetSpan.appendChild(document.createTextNode(' ' + sunset));
  div.appendChild(sunsetSpan);

  div.appendChild(document.createElement('br'));
  div.appendChild(document.createElement('br'));

  const dayLength = getDayLength(getMinutes(sunset) - getMinutes(sunrise));

  const dayLengthSpan = document.createElement('span');
  dayLengthSpan.textContent = `Day lenght: ${dayLength}`;
  div.appendChild(dayLengthSpan);
}

function getMinutes(time) {
  const array = time.split(':');
  const minutes = Number(array[0]) * 60 + Number(array[1]);
  return minutes;
}

function getDayLength(minutes) {
  return `${Math.floor(minutes / 60)}:${(minutes % 60).toString().padStart(2, '0')}`;
}
