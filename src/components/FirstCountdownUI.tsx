import React from 'react'
import { ICountdownProps } from './types'

const FirstCountdownUI: React.FC<ICountdownProps> = ({
  timeLeft,
  isValidDate,
  isValidFutureDate,
}) => (
  <div className='countdown'>
    <h3 className='header'>First Countdown UI</h3>
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
        <strong className='countdown-header'>{timeLeft?.days}</strong> days,{' '}
        <strong className='countdown-header'>{timeLeft?.hours}</strong> hours,{' '}
        <strong className='countdown-header'>{timeLeft?.minutes}</strong>{' '}
        minutes,{' '}
        <strong className='countdown-header'>{timeLeft?.seconds}</strong>{' '}
        seconds
      </div>
    )}
  </div>
)

export default FirstCountdownUI
