import React from 'react'
import Banner from '../components/home/banner/Banner'
import About from '../components/home/about/About'
import Contect from '../components/home/contect/Contect'
import Demo from '../components/home/demo/Demo'
import Transformations from '../components/home/transformation/Transformations'
import Image from '../components/home/imgas/Image'
import Doctors from '../components/home/doctors/Doctors'
import Time from '../components/home/time/Time'
import Product from '../components/home/product/Product'
import Promotions from '../components/home/promotions/Promotions'
import Meida from '../components/home/meida/Meida'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Contect/>
      <About/>
      <Demo/>
      <Transformations/>
      <Image/>
      <Doctors/>
      <Time/>
      <Product/>
      <Promotions/>
      <Meida/>
    </div>
  )
}

export default Home
