// imported all the required components and external library
import React, { useEffect, useRef, useState } from "react";
import Style from "./Contact.module.css";
import { FaAddressCard, FaMobileAlt, FaTelegramPlane } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import Tilt from "react-parallax-tilt";

/* Contact Us Page */
const ContactUs = () => {
  // state to store the country code
  const [countryCode, setCountryCode] = useState();
  // useEffect(() => {
  //   console.log(countryCode);
  // }, [countryCode]);
  /* useref is used to store the form value */
  const form = useRef();

  /* This funcion is used to send the mail with the help of EmailJs */
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_pqnlkqn",
//         "template_i7d9vvq",
//         form.current,
//         "g88TS7f-p9tbpIj0o"
//       )
//       .then(
//         (result) => {
//           // console.log(result.text);
//           // console.log("message sent");
//           alert("Message Sent")
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };
  return (
    // main container of this page
    <div className={Style.ContactUs}>
      {/* contact us section */}
      <div className={Style.ContactUs_contact}>
        {/* address section */}
        <h2>Let's connect</h2>
        <Tilt>
          <div className={Style.ContactUs_mobile}>
            <FaMobileAlt className={Style.ContactUs_mobileIcon} />
            <div>
              <h3 className={Style.contactDetails}>USA : +0 (000) 000-0000</h3>
              <h3 className={Style.contactDetails}>USA : +0 (000) 000-000</h3>
              <h3 className={Style.contactDetails}>
                India : +00 (000) 000-0000
              </h3>
            </div>
          </div>
        </Tilt>
        <Tilt>
          <div className={Style.ContactUs_mail}>
            <IoIosMailOpen className={Style.ContactUs_mailIcon} />
            <div>
              <h3 className={Style.contactDetails}>
                Information : info@Zimblesystem.com
              </h3>
              <h3 className={Style.contactDetails}>
                Sales : sales@Zimblesystem.com
              </h3>
            </div>
          </div>
        </Tilt>
        <Tilt>
          <div className={Style.ContactUs_address}>
            <FaAddressCard className={Style.ContactUs_addressIcon} />
            <div>
              <h3 className={Style.contactDetails}>
                UK : 00 N Cold nd, abc 0000, gawanivas, abc
              </h3>
              <h3 className={Style.contactDetails}>
                India : Delhi chandani Choak, Sector-000, Up, Mumbai,843381
              </h3>
            </div>
          </div>
        </Tilt>
      </div>
      {/* form where taking input from user */}
      <div className={Style.form}>
        <form ref={form} className={Style.ContactUs_form}>
          <input
            className={Style.ContactUs_input}
            type="text"
            placeholder="Please Enter YourName"
            name="user_name"
          />
          <input
            className={Style.ContactUs_input}
            type="text"
            placeholder="Please Enter Your Company Name"
            name="user_company"
          />
          <input
            className={Style.ContactUs_input}
            type="email"
            placeholder="Please Enter Your Email"
            name="user_email"
          />
          <input
            className={Style.ContactUs_input}
            type="number"
            placeholder="Please Enter Your Mobile number"
            name="user_number"
          />
          <textarea
            name="message"
            className={Style.ContactUs_textArea}
            placeholder="Please Type Your Message"
          />
          {/* button to send email */}
          <button className={Style.ContactUs_submit}>
            <FaTelegramPlane className={Style.ContactUs_submitBtn} />
            <p>Send Message</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
