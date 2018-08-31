## Rain Drops 

*This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

**Rain Drops** is React App that uses OpenWeatherMap weather API to show current weather and 5 day forecasts. For state management it 
uses [React Easy State](https://github.com/solkimicreb/react-easy-state) and for map pin-pointing uses [React-Leaflet](https://github.com/PaulLeCam/react-leaflet).

![Rain Drops](https://i.imgur.com/qyA07K2.png)

Results are split in two groups: **current** and **forecast**, where current descibes, well, current weather measured in the last 30-60 minutes, and forecast - which is more similar to some kind of calendar preview, but with weather info. For each day there are 8 potential forecasts (or less, depending what time is in your current day). In total weather API fetches 40 forecasts so it's split on 5 or 6 days depending on the time of the day.

### Setup

Starting the app: 

```
npm install
npm start
```

You'll need API key for OpenWeatherMap and you can get one for free [here](https://openweathermap.org/api). Just add it to `.env` file as REACT_APP_OPENWEATHER_KEY and restart the server.

For more info on build, deployment and testing please visit [Create React App](https://github.com/facebookincubator/create-react-app).


