export default function (angle) {
  const directions = 8
  const degree = 360 / directions
  angle = angle + degree/2

  if (angle >= 0 * degree && angle < 1 * degree) return "North"
  if (angle >= 1 * degree && angle < 2 * degree) return "North-East"
  if (angle >= 2 * degree && angle < 3 * degree) return "East"
  if (angle >= 3 * degree && angle < 4 * degree) return "South-East"
  if (angle >= 4 * degree && angle < 5 * degree) return "South"
  if (angle >= 5 * degree && angle < 6 * degree) return "South-West"
  if (angle >= 6 * degree && angle < 7 * degree) return "West"
  if (angle >= 7 * degree && angle < 8 * degree) return "North-West"
  return "North"
}
