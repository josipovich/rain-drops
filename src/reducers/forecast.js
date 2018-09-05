
const forecast = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_FORECAST_DETAIL':
            return { ...state, ...{ showForecastDetail: action.value }}
        case 'SELECT_LEGEND_TYPE':
            return { ...state, ...{ selectedLegendType: action.legendType }}
        case 'SELECT_FORECAST':
            return { ...state, ...{ selectedForecast: action.forecast }}
        case 'SAVE_FORECASTS_WEATHER_DATA':
            return { ...state, ...{ forecasts: action.forecast }}
        default:
            return state
    }
}

export default forecast
