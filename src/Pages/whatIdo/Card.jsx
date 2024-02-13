import './card.css'

const Card = () => {
    return (
        <div className="grid lg:grid-cols-2 justify-center items-center justify-items-center">
          
     {/* --------------card 01------------- */}
        <div className="cards rounded-xl shadow-xl">
  
    <div href="" className="card">
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
    </div>      
  
     
    </div>

    {/* --------------card 02------------- */}
        <div className="cards rounded-xl shadow-xl">
  
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

    {/* --------------card 03------------- */}
          <div className="cards rounded-xl shadow-xl">
 
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


    {/* --------------card 04------------- */}
          <div className="cards rounded-xl shadow-xl">
  
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