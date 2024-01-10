import React from 'react'
import Hero from "../components/hero/Hero"
import Menu from '../components/menu/Menu'
import About from '../components/about/About'
import Footer from './../components/footer/Footer';
import MenuNev from '../components/menuNav/MenuNav'
import Navber from '../components/navber/Navber';




function Home() {
  return (
    <div>
      <Navber/>
      <div className='nav-cover' />
      <Hero />
      <MenuNev />
      <Menu />
      <About /> 
      <Footer /> 
    </div>
  )
}

export default Home
