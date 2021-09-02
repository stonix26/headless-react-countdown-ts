import { ITimeLeft } from '../utils'

export interface ICountdownProps {
  timeLeft?: ITimeLeft | null
  isValidDate: boolean
  isValidFutureDate: boolean
}
