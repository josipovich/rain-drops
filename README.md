## Rain Drops 

*This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

**Rain Drops** is React App that uses [OpenWeatherMap weather API](https://openweathermap.org/api) to show current weather and 5 day forecasts. For state management uses [React Easy State](https://github.com/solkimicreb/react-easy-state) and [leaflet](https://github.com/Leaflet/Leaflet) is used as a map.

Live demo can be found [here](http://rain-drops.herokuapp.com/).

![Rain Drops](http://i.imgur.com/HBPDr4Q.png)

Results are split in two groups: **current** and **forecast**.

### Current

Descibes current weather measured in the last 30-60 minutes. Shows exact time of measurement and short weather description.

### Forecast 

Forecast is similar to a calendar, but with weather and on a day level. Shows basic weather info for several days.

For each day there are 8 potential forecasts (or less, depending on what time is it in the time of query). In total there are 40 forecasts and they are for 5 or 6 days.

Clicking on a legend will highlight all forecasts measurements with that type of weather.

Clicking on a forecast measurement will show additional weather information (weather type, humidity, pressure, rain and wind).


### Setup

Starting the app: 

```
npm install
npm start
```

You'll need API key for OpenWeatherMap and you can get one for free [here](https://openweathermap.org/appid). Register API key as `REACT_APP_OPENWEATHER_KEY`.

For more info on build, deployment, passing environement variables and testing please visit [Create React App](https://github.com/facebookincubator/create-react-app).
