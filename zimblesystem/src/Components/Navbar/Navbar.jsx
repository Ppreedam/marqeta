import { useState } from "react";
import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "./CloudSystem (3) (1).png"

function LandingPageNavbar() {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  return (
    <div className={style.container}>
      <nav className={style.main_nav}>
        {/* navbar logo part */}
        <div className={style.logo}>
          <Link to="/">
            <img style={{height:"60px" , width:"75px", borderRadius:"5px"}} src={logo} alt="" />
          </Link>
          
        </div>
        {/* 2nd menu part */}
        <div
          className={
            showMediaIcon
              ? style.menu_link + " " + style.mobile_menu_link
              : style.menu_link
          }
        >
          <ul>
            <Link to="/platform">
              <li>Platform</li>
            </Link>
            <Link to="/Products">
              <li>Products</li>
            </Link>
            <Link to="/aboutus">
              <li>AboutUs</li>
            </Link>
          </ul>
        </div>
        {/* 3rd social media links */}
        <div className={style.social_media}>
          {/* hemberger menu start */}
          <div className={style.social_media_desktop}>
              {/* <Link to="/login">
                <button className={style.login}>LogIn</button>
              </Link> */}
              <Link to="/contactus">
                <button className={style.contactus}>Contact Us</button>
              </Link>            
          </div>
          <div className={style.hamburger_menu}>
            <a onClick={() => setShowMediaIcon(!showMediaIcon)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LandingPageNavbar;
