import './services.css'

const Services = () => {
    return (
       <section className="services section">
           <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What i offer</span>
      <div className="services__container container grid">

        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">Product <br /> Designer</h3>

            </div>
            <span className="services__button">View More {" "}<i className="uil uil-arrow-right services__button-icon"></i></span>
            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam vel id ullam, consectetur esse.</p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">I develop the user interface</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Web page development</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">I create ux element interactions</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">I position your company brand</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Design and mockup of products for compainies</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">UI/UX <br /> Designer</h3>

            </div>
            <span className="services__button">View More {" "}<i className="uil uil-arrow-right services__button-icon"></i></span>
            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">UI/UX Designer</h3>
                    <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam vel id ullam, consectetur esse.</p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">I develop the user interface</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Web page development</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">I create ux element interactions</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">I position your company brand</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Design and mockup of products for compainies</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Visual <br /> Designer</h3>

            </div>
            <span className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>
            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Visual Designer</h3>
                    <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam vel id ullam, consectetur esse.</p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">I develop the user interface</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Web page development</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">I create ux element interactions</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">I position your company brand</p>
                        </li>

                        <li className="services__modal-services">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Design and mockup of products for compainies</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

      </div>
       </section>
    );
};

export default Services;