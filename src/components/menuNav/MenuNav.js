import React from 'react'
import { Link } from 'react-router-dom'

import './MenuNav.css'
function MenuNev() {
  return (
    <nav className='menu-nav padding center'>
      <ul>
        <Link to="/breackfast" className='link menu-link' >Breackfast </Link> 
        <Link to="/lunch" className='link menu-link' >Lunch</Link>
        <Link to="/dinner" className='link menu-link' >Dinner</Link>
      </ul>
    </nav>
  )
}

export default MenuNev
