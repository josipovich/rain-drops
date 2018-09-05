const current = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CITY_NAME':
            console.log('new state: ', Object.assign({}, state, { cityName: action.cityName }))
            return  Object.assign({}, state, { cityName: action.cityName })
        case 'SET_CURRENT_WEATHER_DATA':
            return { ...state, ...{ current: action.current }}
        default:
            return state
    }
}

export default current
