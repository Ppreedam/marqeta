import React from 'react'
import "./pepsi.css"

const Pepsi = () => {
  return (
    <div className='card'>
        <div className='circle'></div>
        <div className='content'>
            <h2>Your card</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda quas adipisci perferendis ducimus totam debitis? Cumque laudantium minima velit accusamus aliquam saepe error, quod impedit nobis quidem molestias vitae!</p>
            <a href="#">swipe Now</a>
        </div>
        <img style={{height:"350px",width:"300px"}} src="https://images.ctfassets.net/wqi8u1luxsv0/62jNoALn2y9m5RorvvcZZP/6c800cb705d2179586819e4eb1bd918d/GlobalCTA_Image.png" alt="" />
    </div>
  )
}

export default Pepsi