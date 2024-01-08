import React from 'react'
import Hero from "../components/hero/Hero"
import { Outlet } from 'react-router-dom'
import Menu from '../components/menu/Menu'
import About from '../components/about/About'

function Home() {
  return (
    <div>
      {/* <Hero />
      <Outlet />
      <Menu /> */}
      <About />
    </div>
  )
}

export default Home
