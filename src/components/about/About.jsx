import "./about.css"
import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/John-Cv.pdf'

const About = () => {
    return (
        <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>
        <div className="about_container container grid"> <img src={AboutImg} alt="#" className="about_img" />
        <div className="about_data"></div>
        </div>
        </section>
    );
};

export default About;