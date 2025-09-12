import './modern-normalize.css';
import './style.css';

async function fetchData(location) {
  const apiKey = 'YXSUVQ3DB4TJWPLWYEPNXTRC2';
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData('głowaczów');
