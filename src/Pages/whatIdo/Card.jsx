import './card.css'

const Card = () => {
    return (
        <div className="grid lg:grid-cols-2 justify-center items-center justify-items-center">



     {/* --------------card 01------------- */}
        <div  className="cards rounded-2xl shadow-xl">
  
    <div data-aos="fade-up" href="" className="card">
      <img src="https://i.ibb.co/dktMVJZ/web-development-company-1-2022.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          
          <div className="card__header-text">
            <h3 className="card__title font-semibold">Web Development</h3>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </div>      
  
     
    </div>

    {/* --------------card 02------------- */}
        <div className="cards rounded-2xl shadow-xl">
  
    <a href="" className="card">
      <img src="https://i.ibb.co/LdbW4BQ/photo-1626785774573-4b799315345d.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          
          <div className="card__header-text">
            <h3 className="card__title font-semibold">Graphic Design</h3>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  
     
    </div>

    {/* --------------card 03------------- */}
          <div className="cards rounded-2xl shadow-xl">
 
    <a href="" className="card">
      <img src="https://i.ibb.co/44RDsJQ/media-1578d1579cf71bff5f9b7a064d.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          
          <div className="card__header-text">
            <h3 className="card__title font-semibold">Photography</h3>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
 
     
    </div>


    {/* --------------card 04------------- */}
          <div className="cards rounded-2xl shadow-xl">
  
    <a href="" className="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          
          <div className="card__header-text">
            <h3 className="card__title">Jessica Parker</h3>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
     
    </div>
        
      
   
        </div>
 
       
        
    );
};

export default Card;