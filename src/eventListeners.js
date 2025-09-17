import { fetchData } from './fetchData';
import { clearItems } from './appendInfo';

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
    // Here goes showLoader()
    const weather = await fetchData(userInput);
    console.log(weather);
    clearItems();
    // Here goes appendForecast()
    locationInput.value = '';
  } catch (error) {
    clearItems();
    // Here goes showError()
    console.error(error);
  }
}

export function setListeners() {
  searchBtn.addEventListener('click', getWeather);

  locationInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      getWeather(e);
    }
  });
}
