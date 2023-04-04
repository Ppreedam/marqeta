import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Pepsi from '../../Components/Pepsi/Pepsi'
import CardPosScroll from '../../Components/CardPosscroll/CardPosScroll'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Pepsi/>
        <CardPosScroll/>
    </div>
  )
}

export default Home