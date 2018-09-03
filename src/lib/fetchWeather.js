export default function ({city, metric = true}) {
    let base = 'https://api.openweathermap.org/data/2.5/'
        , weather = 'weather?q='
        , forecast = 'forecast?q='
        , api = `${process.env.REACT_APP_OPENWEATHER_KEY}`
        , key = `&APPID=${api}`
        , units = `&units=${metric ? 'metric' : 'imperial'}`
        , forecastUrl = base + forecast + city + units + key
        , currentUrl = base + weather + city + units + key
        , current = fetch(currentUrl).then(res => res.json()) 
          forecast = fetch(forecastUrl).then(res => res.json()) 

    return [forecast, current]
}
