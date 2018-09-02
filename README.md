## Rain Drops 

*This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

**Rain Drops** is React App that uses OpenWeatherMap weather API to show current weather and 5 day forecasts. For state management it 
uses [React Easy State](https://github.com/solkimicreb/react-easy-state) and [leaflet](https://github.com/Leaflet/Leaflet) as a map.

![Rain Drops](https://i.imgur.com/3EPwiyu.png)

Results are split in two groups: **current** and **forecast**.

**Current** descibes current weather measured in the last 30-60 minutes. Shows exact time of measurement and short weather description.

**Forecast** similar to a calendar, but with weather and on a day level. Shows basic weather info for several days in future.

Sundown period is also marked on individual forecast measeurements (according to queried city sunrise and sunset times). 

For each day there are 8 potential forecasts (or less, depending on what time is it in the time of query). In total there are 40 forecasts and they are for 5 or 6 days.


### Setup

Starting the app: 

```
npm install
npm start
```

You'll need API key for OpenWeatherMap and you can get one for free [here](https://openweathermap.org/appid). Register API key as `REACT_APP_OPENWEATHER_KEY`.

For more info on build, deployment, passing environement variables and testing please visit [Create React App](https://github.com/facebookincubator/create-react-app).
