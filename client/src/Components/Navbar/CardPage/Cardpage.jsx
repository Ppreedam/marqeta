import React from 'react'
import Styles from "./Cardpage.module.css"
const Cardpage = () => {
  return (
    <div className={Styles.container}>
    <div className={Styles.card1}>
    <img src="./phone.png" alt=""/>
    </div>
    <div className={Styles.card}>
        <img src="card.gif" alt=""/>
        <img src="./card.gif" alt="" />
        
    </div>
       </div>
  )
}

export default Cardpage