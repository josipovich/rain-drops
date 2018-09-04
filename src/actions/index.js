export const showForecast = text => ({
  type: 'SHOW_FORECAST_DETAILS',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}





// actions
// 
// inProgress
//      current
//      forecast 
// setWeatherData
//      forecast
//      selectedForecast
//      current
// setField 
//      showForecastDetail
//      selectedLegendType
// 
// 