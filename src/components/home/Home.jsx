import React from 'react'
import TopProduct from '../product/TopProduct'
import TrendingProduct from '../product/TrendingProduct'
import About from '../pages/home/About'
import FitnessServices from '../pages/home/FitnessServices'
import NewsletterSubscribe from '../pages/others/NewsletterSubscribe'


const Home = () => {
  return (
    <>
   
    {/* <BottomNav /> */}
    {/* <Hero /> */}
    <TopProduct />
    <About />
    <TrendingProduct />
    <FitnessServices />
    <NewsletterSubscribe />
  
    </>
  )
}

export default Home