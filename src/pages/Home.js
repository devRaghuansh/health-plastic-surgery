import React from 'react'
import Banner from '../components/home/banner/Banner'
import About from '../components/home/about/About'
import Contect from '../components/home/contect/Contect'
import Demo from '../components/home/demo/Demo'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Contect/>
      <About/>
      <Demo/>
    </div>
  )
}

export default Home
