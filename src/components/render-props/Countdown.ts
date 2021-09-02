import { useState, useEffect, useRef } from 'react'
import { calculateTimeLeft } from '../../utils'
import { ICountdownProps } from '../types'

/**
 * All logic are same as previous implementation
 * Only change is, instead of rendering a UI, we just send the render props
 */

interface IArgs {
  date: number
  children(props: ICountdownProps): JSX.Element
}

const Countdown = ({ date, children }: IArgs) => {
  const initialTimeLeft = calculateTimeLeft(date)

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft)
  const timer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date))
    }, 1000)

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

  // Instead of rendering a UI, we are returning a function through the children props
  return children({
    isValidDate,
    isValidFutureDate,
    timeLeft,
  })
}

export default Countdown
