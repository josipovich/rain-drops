export default code => {
    let color
    code += ''
    switch (true) {
        case code[0] === '2':
            color = 'thunderstorm'
            break;
        case code[0] === '3':
            color = 'drizzle'
            break;
        case code[0] === '5':
            color = 'rain'
            break;
        case code[0] === '6':
            color = 'snow'
            break;
        case code[0] === '7':
            color = 'atmosphere'
            break;
        case code === '800':
            color = 'clear'
            break;
        case code[0] === '8':
            color = 'clouds'
            break;
    }
    return color
}
