
import React from 'react'
import { Navbar } from './components/Navbar'
import {Hero} from './components/Hero'
import { HeadLine } from './components/HeadLine'
import {Food} from './components/Food'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadLine/>
      <Food/>
    </div>
  )
}

export default App
