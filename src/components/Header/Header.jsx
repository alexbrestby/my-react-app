import './Header.sass'
import { useState } from 'react'

const Header = () => {
  const [now, SetNow] = useState(new Date());
  setInterval(() => SetNow(new Date()), 1000);

  return (
    <header>
      <p>Time now: <span>{now.toLocaleTimeString()}</span></p>
    </header>
  )

}

export default Header