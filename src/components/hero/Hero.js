import React from 'react'

import './Hero.css'
import { icons } from '../../assets/ImgManaz'


function Hero() {
  const {heroS2,heroS3} = icons
  return (
    <section className='hero-wrap center padding'>
      <h1>Best food waiting for your belly</h1>
      <form action="" className='hero-from'>
        <input type="text" name="search" id="search" placeholder='Search food item' />
        <button type="submit" className='btn search-btn'>Submit</button>
      </form>
      <div className="subject-1">
        <img src={heroS2} alt="" />
      </div>
      <div className="subject-3">
        <img src={heroS3} alt="" />
      </div>
    </section>
  )
}

export default Hero