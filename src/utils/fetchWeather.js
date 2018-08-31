export default function ({city, metric = true}) {
  let base = 'http://api.openweathermap.org/data/2.5/'
    , weather = 'weather?q='
    , forecast = 'forecast?q='
    , api = `${process.env.REACT_APP_OPENWEATHER_KEY}`
    , key = `&APPID=${api}`
    , units = `&units=${metric ? 'metric' : 'imperial'}`
    , forecastUrl = base + forecast + city + units + key
    , currentUrl = base + weather + city + units + key 
    , current = fetch(currentUrl).catch(err => console.log(err)) 
      forecast = fetch(forecastUrl).catch(err => console.log(err)) 

  return { forecast, current }
}