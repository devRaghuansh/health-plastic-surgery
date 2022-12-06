import React from 'react'
import Banner from '../components/home/banner/Banner'
import About from '../components/home/about/About'
import Contect from '../components/home/contect/Contect'
import Demo from '../components/home/demo/Demo'
import Transformations from '../components/home/transformation/Transformations'
import Image from '../components/home/imgas/Image'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Contect/>
      <About/>
      <Demo/>
      <Transformations/>
      <Image/>
    </div>
  )
}

export default Home
