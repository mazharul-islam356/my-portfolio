import "./css/home.css"
import { FaLinkedin } from "react-icons/fa6";
const Social = () => {
    return (
        
            <div className="home__social">

                <a href="https://www.linkedin.com/in/mazharul-islam-548a8b260/" 
                className="home__social-icon" target="_blank" rel="noreferrer">
                <FaLinkedin />
                </a>

                <a  href="https://www.facebook.com/rifat3569" 
                className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-facebook"></i>
                </a>

                <a target='_blank' href="https://github.com/mazharul-islam356" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
                </a>

            </div>
        
    );
};

export default Social;