import Navbar from '../../Components/Navbar/Navbar'
import React from 'react'
import styles from './ContactUs.module.css'
import ContactUs2 from './ContactUs2'

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.parallax}>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57594.47612802117!2d85.46709012134818!3d26.58218560441128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf0d7d039429d%3A0x25381a43016ecd04!2sSitamarhi%2C%20Bihar!5e0!3m2!1sen!2sin!4v1682066156707!5m2!1sen!2sin" style={{width:"800px"}}></iframe> */}
      </div>

      <div style={{ height: "800px", backgroundcolor: "red", fontsize: "36px" }}>
        
        <ContactUs2/>
      
        
      </div>
    </div>
  )
}

export default ContactUs