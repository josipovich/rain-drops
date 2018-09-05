// forecast weather
export const showForecastDetails = value => ({
  type: 'SHOW_FORECAST_DETAILS',
  value
})

export const selectLegendType = legendType => ({
  type: 'SELECT_LEGEND_TYPE',
  legendType
})

export const selectForecast = forecast => ({
  type: 'SELECT_FORECAST',
  forecast
})

export const saveForecasts = forecast => ({
  type: 'SAVE_FORECASTS_WEATHER_DATA',
  forecast
})


// current weather
export const setCityName = cityName => {
  console.log("action.val", cityName)

  return {  
    type: 'SET_CITY_NAME',
    cityName
  }
}

export const saveCurrent = current => ({
  type: 'SET_CURRENT_WEATHER_DATA',
  current
})