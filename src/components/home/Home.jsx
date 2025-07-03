import React from 'react'
import Header from '../partials/Header'
import MarqueeBanner from '../partials/MarqueeBanner'
import Hero from '../pages/home/Hero'
import TopProduct from '../product/TopProduct'
import TrendingProduct from '../product/TrendingProduct'
import About from '../pages/home/About'
import FitnessServices from '../pages/home/FitnessServices'

const Home = () => {
  return (
    <>
    <MarqueeBanner />
    <Header />
    {/* <Hero /> */}
    <TopProduct />
    <About />
    <TrendingProduct />
    <FitnessServices />
    </>
  )
}

export default Home