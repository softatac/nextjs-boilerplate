export function prettifySecondsLeft(secondsLeft) {
  const seconds = secondsLeft % 60
  const minutes = (secondsLeft - seconds) / 60

  return `${zeroPad2Digit(minutes)}:${zeroPad2Digit(seconds)}`
}

function zeroPad2Digit(number) {
  if (number < 10) return `0${number}`
  return `${number}`
}
