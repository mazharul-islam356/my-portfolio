import { useState } from "react";
import "./header.css";

const Header = () => {
/* =============Toggle============ */

    const [Toggle,showMenu] = useState(false)

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          MAZHAR
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">

            {/* li item 01 */}
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

             {/* li item 02 */}
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

             {/* li item 03 */}
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

             {/* li item 04 */}
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>

             {/* li item 05 */}
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>

             {/* li item 06 */}
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>

            <i className="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
          </ul>

        </div>
          <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
        <i className="uil uil-apps "></i>
        </div>

        


      </nav>
    </header>
  );
};

export default Header;
