import { fetchData } from './fetchData';
import { clearItems, appendLoader, appendErrorInfo } from './appendInfo';
import { appendForecast } from './appendForecast';

const form = document.getElementById('form');
const locationInput = document.getElementById('location');
const searchBtn = document.getElementById('search-btn');

async function getWeather(e) {
  e.preventDefault();

  const userInput = locationInput.value;

  if (!form.reportValidity()) {
    return;
  }

  try {
    clearItems();
    appendLoader();
    const weather = await fetchData(userInput);
    console.log(weather);
    clearItems();
    appendForecast(weather);
    locationInput.value = '';
  } catch (error) {
    clearItems();
    appendErrorInfo();
    console.error(error);
  }
}

export function searchListeners() {
  searchBtn.addEventListener('click', getWeather);

  locationInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      getWeather(e);
    }
  });
}
