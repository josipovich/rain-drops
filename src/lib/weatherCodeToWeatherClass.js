export default code => {
    code += '' 
    // info taken from https://openweathermap.org/weather-conditions 
    if (code[0] === '2') return 'thunderstorm'
    else if (code[0] === '3') return 'drizzle'
    else if (code[0] === '5') return 'rain'
    else if (code[0] === '6') return 'snow'
    else if (code[0] === '7') return 'atmosphere'
    else if (code === '800') return 'clear'
    else if (code[0] === '8') return 'clouds'
    else return 'snow'
}
