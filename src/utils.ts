// To check the date, we are using date-fns library
import isValid from 'date-fns/isValid'

export interface ITimeLeft {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

// This function calculate the time remaining from the date and also check whether the date is a valid future date
export const calculateTimeLeft = (date: number) => {
  // Check valid date, if not valid, then return null
  if (!isValid(date)) return null

  // Get the difference between current date and date props
  const difference: number = Number(new Date(date)) - Number(new Date())

  let timeLeft: ITimeLeft = {}

  // If there is no difference, return empty object. i.e., the date is not a future date
  if (difference > 0) {
    // If there is a difference, then calculate days, hours, minutes, and seconds
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  // Return the timeLeft object
  return timeLeft
}
