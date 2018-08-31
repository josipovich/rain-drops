export default (str) => {
  if (typeof str !== 'string') {
    throw Error('Feed me string')
  } else if (!str) {
    return ''
  } else {
    return str
      .split(' ')
      .map(s => {
        if (s.length === 1 ) {
            return s.toUpperCase()
        } else {
            const first = s.split('')[0].toUpperCase()
            const rest = s.substr(1, s.length).toLowerCase()
            return first + rest
        }     
      })
      .join(' ')
  }
}
