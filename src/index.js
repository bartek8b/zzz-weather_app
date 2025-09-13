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
    // Return Promise with filtered data
    return {
      address: data.resolvedAddress,
      day: data.days[0].datetime,
      icon: data.currentConditions.icon,
      temperature: data.currentConditions.temp,
      wind: data.currentConditions.windspeed,
      sunrise: data.currentConditions.sunrise,
      sunset: data.currentConditions.sunset,
      future: data.days.slice(1, 8).map((day) => ({
        day: day.datetime,
        icon: day.icon,
        temperature: day.temp,
      })),
    };
  } catch (error) {
    console.error(error);
  }
}

fetchData('ahlbeck').then((weather) => console.log(weather));
