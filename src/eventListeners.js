import { fetchData } from './fetchData';

const locationInput = document.getElementById('location');
const searchBtn = document.getElementById('search-btn');

async function getWeather(e) {
  e.preventDefault();
  try {
    // Here goes showLoader()
    const weather = await fetchData(locationInput.value);
    console.log(weather);
    // Here goes hideLoader() & appendForecast()
  } catch (error) {
    // Here goes hideLoader() & showError()
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
