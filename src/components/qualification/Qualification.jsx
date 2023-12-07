import { useState } from "react";
import "./qualification.css";

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
const toggleTab = (index)=> {

setToggleState(index);

}

  return (
    <section className="qualification__section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={
            toggleTab === 1 ? 
            "qualification__button  qualification__active" 
            :"qualification__button"
            }
            onClick={()=>toggleTab(1)}
            >

            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={
            toggleTab === 2 ? 
            "qualification__button  qualification__active" 
            :"qualification__button"
            }
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                <div></div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                <div></div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2021 - Present
                </div>
              </div>
            </div>

          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI Expert</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                <div></div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calender">
                  <i className="bx bx-calendar"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Qualification;
