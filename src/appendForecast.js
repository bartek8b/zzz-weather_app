const divs = document.querySelectorAll('main > div');
const tempUnitToggle = document.getElementById('temp-unit-toggle-box');
const windUnitToggle = document.getElementById('wind-unit-toggle-box');

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
    if (div.classList.contains('conditions')) {
      conditions(data, div);
    } else {
      for (let i = 1; i <= 6; i++) {
        if (div.classList.contains(`date-${i}`)) {
          const index = i - 1;
          future(data.future, div, index);
        }
      }
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
  img.style.height = '60%';

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
  sunriseSpan.appendChild(document.createElement('br'));
  sunriseSpan.appendChild(document.createTextNode(' ' + sunrise));
  div.appendChild(sunriseSpan);

  div.appendChild(document.createElement('br'));
  div.appendChild(document.createElement('br'));

  const sunsetSpan = document.createElement('span');
  const sunsetIcon = document.createElement('img');
  sunsetIcon.alt = 'sunset';
  const sunsetIconSrc = await import('./assets/info_icons/sunset.svg');
  sunsetIcon.src = sunsetIconSrc.default;
  sunsetSpan.appendChild(sunsetIcon);
  sunsetSpan.appendChild(document.createElement('br'));
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
  return `${Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}`;
}

async function conditions(data, div) {
  // Temperatue
  const tempSpan = document.createElement('span');
  div.appendChild(tempSpan);
  const tempIconScr = await import('./assets/info_icons/thermometer.svg');
  const tempIcon = document.createElement('img');
  tempIcon.alt = 'temperature';
  tempIcon.src = tempIconScr.default;
  tempSpan.appendChild(tempIcon);
  tempSpan.appendChild(document.createElement('br'));
  const tempValue = document.createElement('span');
  // Fill based on toggle state
  tempSpan.appendChild(tempValue);
  const tempUnit = document.createElement('span');
  // Fill based on toggle state
  tempSpan.appendChild(tempUnit);

  div.appendChild(document.createElement('br'));

  // Wind speed
  const windSpan = document.createElement('span');
  div.appendChild(windSpan);
  const windIconScr = await import('./assets/info_icons/wind_speed.svg');
  const windIcon = document.createElement('img');
  windIcon.alt = 'wind speed';
  windIcon.src = windIconScr.default;
  windSpan.appendChild(windIcon);
  windSpan.appendChild(document.createElement('br'));
  const windValue = document.createElement('span');
  // Fill based on toggle state
  windSpan.appendChild(windValue);
  const windUnit = document.createElement('span');
  // Fill based on toggle state
  windSpan.appendChild(windUnit);

  div.appendChild(document.createElement('br'));

  // Humidity
  const humiditySpan = document.createElement('span');
  div.appendChild(humiditySpan);
  const humidityIconScr = await import('./assets/info_icons/droplet.svg');
  const humidityIcon = document.createElement('img');
  humidityIcon.alt = 'humidity';
  humidityIcon.src = humidityIconScr.default;
  humiditySpan.appendChild(humidityIcon);
  humiditySpan.appendChild(document.createElement('br'));
  humiditySpan.appendChild(
    document.createTextNode(`${Math.round(data.humidity)}%`),
  );

  div.appendChild(document.createElement('br'));

  // Pressure
  const pressureSpan = document.createElement('span');
  div.appendChild(pressureSpan);
  const pressureconScr = await import('./assets/info_icons/arrow-down.svg');
  const pressureIcon = document.createElement('img');
  pressureIcon.alt = 'pressure';
  pressureIcon.src = pressureconScr.default;
  pressureSpan.appendChild(pressureIcon);
  pressureSpan.appendChild(document.createElement('br'));
  pressureSpan.appendChild(document.createTextNode(`${data.pressure} hPa`));

  // Checking toggle state
  if (!tempUnitToggle.checked) {
    tempValue.textContent = Math.round(data.temperature);
    tempUnit.textContent = ' °C';
  } else if (tempUnitToggle.checked) {
    tempValue.textContent = Math.round((data.temperature * 9) / 5 + 32);
    tempUnit.textContent = ' °F';
  }

  if (!windUnitToggle.checked) {
    windValue.textContent = Math.round(data.wind);
    windUnit.textContent = ' km/h';
  } else if (windUnitToggle.checked) {
    windValue.textContent = Math.round(data.wind * 0.621371);
    windUnit.textContent = ' mph';
  }
}

async function future(futureData, div, index) {
  // Get data from weather.future array
  const date = new Date(futureData[index].day);
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

  div.appendChild(document.createElement('br'));
  div.appendChild(document.createElement('br'));

  const weatherIcon = futureData[index].icon;
  const weatherIconSrc = await import(
    `./assets/weather_icons/${weatherIcon}.svg`
  );
  const img = document.createElement('img');
  img.style.height = '20%';
  img.style.width = '20%';
  img.alt = weatherIcon;
  img.src = weatherIconSrc.default;
  div.appendChild(img);

  div.appendChild(document.createElement('br'));

  const tempSpan = document.createElement('span');
  div.appendChild(tempSpan);
  const tempIcon = document.createElement('img');
  const tempIconScr = await import('./assets/info_icons/thermometer.svg');
  tempIcon.alt = 'temperature';
  tempIcon.src = tempIconScr.default;
  tempSpan.appendChild(tempIcon);
  const tempValue = document.createElement('span');
  tempSpan.appendChild(tempValue);
  const tempUnit = document.createElement('span');
  tempSpan.appendChild(tempUnit);

  div.appendChild(document.createElement('br'));

  const windSpan = document.createElement('span');
  div.appendChild(windSpan);
  const windIcon = document.createElement('img');
  const windIconScr = await import('./assets/info_icons/wind_speed.svg');
  windIcon.alt = 'wind speed';
  windIcon.src = windIconScr.default;
  windSpan.appendChild(windIcon);
  const windValue = document.createElement('span');
  windSpan.appendChild(windValue);
  const windUnit = document.createElement('span');
  windSpan.appendChild(windUnit);

  // Checking toggle state
  if (!tempUnitToggle.checked) {
    tempValue.textContent = ' ' + Math.round(futureData[index].temperature);
    tempUnit.textContent = ' °C';
  } else if (tempUnitToggle.checked) {
    tempValue.textContent = ' ' + Math.round((futureData[index].temperature * 9) / 5 + 32);
    tempUnit.textContent = ' °F';
  }

  if (!windUnitToggle.checked) {
    windValue.textContent = ' ' + Math.round(futureData[index].wind);
    windUnit.textContent = ' km/h';
  } else if (windUnitToggle.checked) {
    windValue.textContent = ' ' + Math.round(futureData[index].wind * 0.621371);
    windUnit.textContent = ' mph';
  }
}
