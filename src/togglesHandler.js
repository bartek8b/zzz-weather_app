import { getWeatherData } from './processData';
import { appendForecast } from './appendForecast';
import { clearItems } from './appendInfo';

const tempUnit = document.getElementById('temp-unit-toggle-box');
const windUnit = document.getElementById('wind-unit-toggle-box');

function setStorage() {
  const togglesState = {
    temp: tempUnit.checked,
    wind: windUnit.checked,
  };

  const storedUnits = JSON.stringify(togglesState);
  localStorage.setItem('storedUnits', storedUnits);
}

export function retrieveStorage() {
  if (localStorage.getItem('storedUnits') === null) {
    return;
  }
  const storedUnits = JSON.parse(localStorage.getItem('storedUnits'));
  tempUnit.checked = storedUnits.temp;
  windUnit.checked = storedUnits.wind;
}

function updateUnits() {
  setStorage();
  const data = getWeatherData();
  if (data) {
    clearItems();
    appendForecast(data);
  }
}

export function togglesListeners() {
  tempUnit.addEventListener('click', updateUnits);

  windUnit.addEventListener('click', updateUnits);
}
