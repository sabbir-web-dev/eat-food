import React from 'react'
import Hero from "../components/hero/Hero"
import { Outlet } from 'react-router-dom'
import Menu from '../components/menu/Menu'
import About from '../components/about/About'
import Footer from './../components/footer/Footer';
import MenuNev from '../components/menuNav/MenuNav'




function Home() {
  return (
    <div>
      {/* <Hero />
      <Outlet /> */}
      <MenuNev />
      <Menu />
      {/* <About />
      <Footer /> */}
    </div>
  )
}

export default Home
