import Button from '../Button/Button';
import './Header.sass'
import { useState } from 'react'

const Header = () => {
  const [now, SetNow] = useState(new Date());
  const [isShowClock, setIsShowClock] = useState(false)
  const clock = setInterval(() => SetNow(new Date()), 1000);

  const toggleClock = () => {
    setIsShowClock((prev) => !prev)
    return () => clearInterval(clock)
  }

  return (
    <header>
      <div
        style={
          isShowClock ?
            { visibility: 'visible' } :
            { visibility: 'hidden' }}
        className='clock'>
        Time now:
        <span>
          {now.toLocaleTimeString()}
        </span>
      </div>
      <Button onClick={toggleClock}>clock</Button>
    </header >
  )

}

export default Header