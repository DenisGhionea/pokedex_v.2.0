// React Stuff
import React from 'react'
import { Link } from 'react-router-dom';

// CSS
import '../../CSS/Pages/notFound.css'

// Media
import snorlax from '../../Media/snorlax_404.png'

function NotFound() {
  return (
    <div className="content404">
    <p>Hi! I'm Snorlax. I fell asleep on your path, sorry for that 😅...</p>
      <Link to='/'>
        <img src={snorlax} alt="Snorlax" />
      </Link>
    <p>⬆️ Click on me to move me away. ⬆️</p>
    </div>
  )
}

export default NotFound;