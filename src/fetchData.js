export async function fetchData(location) {
  const apiKey = 'YXSUVQ3DB4TJWPLWYEPNXTRC2';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?iconSet=icons2&unitGroup=metric&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Could not fetch data');
    }
    const data = await response.json();
    console.log(data);
    // Return filtered data
    return {
      address: data.resolvedAddress,
      day: data.days[0].datetime,
      icon: data.currentConditions.icon,
      humidity: data.currentConditions.humidity,
      pressure: data.currentConditions.pressure,
      sunrise: data.currentConditions.sunrise,
      sunset: data.currentConditions.sunset,
      temperature: data.currentConditions.temp,
      wind: data.currentConditions.windspeed,
      //Future forecast
      future: data.days.slice(1, 7).map((day) => ({
        day: day.datetime,
        icon: day.icon,
        temperature: day.temp,
        pressure: day.pressure,
        wind: day.windspeed,
      })),
    };
  } catch (error) {
    console.error(error);
  }
}
