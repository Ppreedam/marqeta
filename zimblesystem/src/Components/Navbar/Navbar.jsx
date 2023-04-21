import { useState } from "react";
import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function LandingPageNavbar() {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  return (
    <div className={style.container}>
      <nav className={style.main_nav}>
        {/* navbar logo part */}
        <div className={style.logo}>
          <Link to="/">
            <h2>
              <span>Z</span>imble
              <span>S</span>ystem
            </h2>
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
            <Link to="/solutions">
              <li>Solutions</li>
            </Link>
            <Link to="/developers">
              <li>Developers</li>
            </Link>
            <Link to="/resources">
              <li>Resources</li>
            </Link>
            <Link to="/company">
              <li>Company</li>
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
