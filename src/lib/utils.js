/**
 * Capitalizes strings. It covers most cases except for '.a' pattern
 * @param   {String} str 
 * @returns {String} capitalized string      
 */
const capitalize = str => {
    if (typeof str !== 'string') {
        throw Error('Feed me string')
    } else if (!str) {
        return ''
    } else {
        return str
        .split(' ')
        .map(s => { 
            return s.length === 1
                ? s.toUpperCase()
                : s.split('')[0].toUpperCase() + 
                    s.substr(1, s.length).toLowerCase()
            // or more readable           
            // if (s.length === 1 ) {
            //     return s.toUpperCase()
            // } else {
            //     const first = s.split('')[0].toUpperCase()
            //     const rest = s.substr(1, s.length).toLowerCase()
            //     return first + rest
            // }
        })
        .join(' ');
    }
}


/**
 * Predicate function that checks if any of the cods is different than '200' 
 * @param   {Array} codsArr list of cods (String|Number) 
 * @returns {Boolean}      
 */
const statusOk = codsArr => {
    return !codsArr
        .map(cod => `${cod}`)
        .some(cod => cod !== '200')
} 


/**
 * Converts weather code to weather class used in css to mark ForecastItems
 * it uses info from https://openweathermap.org/weather-conditions to orginze logic.
 * Since we don't need details we use only first letter to get type of weather
 * @param   {String|Number} code weather code
 * @returns {String}      
 */
const weatherCodeToWeather = code => {
    code += '' 
    // 
    if (code[0] === '2') return 'thunderstorm' // thunderstorm
    else if (code[0] === '3') return 'drizzle' // drizzle
    else if (code[0] === '5') return 'rain' // rain
    else if (code[0] === '6') return 'snow' // snow
    else if (code[0] === '7') return 'atmosphere' // atmosphere
    else if (code === '800') return 'clear' // clear
    else if (code[0] === '8') return 'clouds' // clouds
    else return 'snow'
}


/**
 * Converts angle to world Direction
 * https://gist.github.com/basarat/4670200 
 * @param   {Number} angle 0-360 angle 
 * @returns {String} representation of world direction  
 */
const angleToDirection = angle => {
    const directions = 8
    const degree = 360 / directions
    angle = angle + degree/2    
  
    if (angle >= 0 * degree && angle < 1 * degree) return 'North'
    if (angle >= 1 * degree && angle < 2 * degree) return 'North-East'
    if (angle >= 2 * degree && angle < 3 * degree) return 'East'
    if (angle >= 3 * degree && angle < 4 * degree) return 'South-East'
    if (angle >= 4 * degree && angle < 5 * degree) return 'South'
    if (angle >= 5 * degree && angle < 6 * degree) return 'South-West'
    if (angle >= 6 * degree && angle < 7 * degree) return 'West'
    if (angle >= 7 * degree && angle < 8 * degree) return 'North-West'
    return 'North'
}


/**
 * Converts unix time (ms) to hours in 0-24 format  
 * @param   {Number} unix unix timestamp (in ms)
 * @returns {Number}   
 */
const unixToHours = unix => (new Date(unix*1000)).getHours()


/**
 * Checks if sun is on the horizon, granularity is at hours level 
 * For sunset checks less-or-equal
 * @param   {Number} time time that you want to test in hours
 * @param   {Number} sunrise time in hours
 * @param   {Number} sunset time in hours
 * @returns {Boolean}   
 */
const isDaylight = (time, sunrise, sunset) => {    
    // console.log('time:', time,'; sunrise:', sunrise,'; sunset:', sunset)
    return time > sunrise && time <= sunset 
}


export {
      angleToDirection
    , weatherCodeToWeather
    , statusOk
    , capitalize
    , unixToHours
    , isDaylight
}
