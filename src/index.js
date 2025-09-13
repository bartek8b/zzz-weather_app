import './modern-normalize.css';
import './style.css';

async function fetchData(location) {
  const apiKey = 'YXSUVQ3DB4TJWPLWYEPNXTRC2';
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?iconSet=icons2&key=${apiKey}`,
    );
    if (!response.ok) {
      throw new Error('Could not fetch data');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData('głowaczów');
