import React, { useState, useEffect, useRef } from 'react'
import { calculateTimeLeft, ITimeLeft } from '../utils'

interface IProps {
  date: number
}

const SimpleCountdown: React.FC<IProps> = ({ date }) => {
  const initialTimeLeft = calculateTimeLeft(date)

  const [timeLeft, setTimeLeft] = useState<ITimeLeft | null>(initialTimeLeft)
  const timer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date))
    }, 1000)

    // Cleaning up the timer when unmounting
    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current)
      }
    }
  }, [date])

  let isValidDate = true
  let isValidFutureDate = true

  if (timeLeft === null) isValidDate = false
  if (timeLeft?.seconds === undefined) isValidFutureDate = false

  return (
    <div className='countdown'>
      <h3 className='header'>Simple Countdown</h3>
      {!isValidDate && <div>Pass in a valid date props</div>}
      {!isValidFutureDate && (
        <div>
          Time up, let's pass a future date to procrastinate more{' '}
          <span role='img' aria-label='sunglass-emoji'>
            😎
          </span>
        </div>
      )}
      {isValidDate && isValidFutureDate && (
        <div>
          {timeLeft?.days} days, {timeLeft?.hours} hours, {timeLeft?.minutes}{' '}
          minutes, {timeLeft?.seconds} seconds
        </div>
      )}
    </div>
  )
}

export default SimpleCountdown
