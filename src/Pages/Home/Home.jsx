import './home.css'
const Home = () => {
    return (
        <div>
            
            <div className="flex h-screen w-full items-center justify-evenly space-y-3 gap-64 justify-items-center">
                <div>
                  
                <h2 className="text-2xl w-96 mx-auto">I am <span className="font-semibold">Mazharul Islam</span></h2>
                    <h3 className="text-xl w-96 mx-auto">Frontend developer</h3>
                    <p className="w-96 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, neque!Lorem</p>
                    <button className="btn btn-outline">Download CV</button>

                </div>
                
                <section className="main-container">
  <div className="main">
    <div className="big-circle">
      <div className="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png" alt="web design icon" />
      </div>
      <div className="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png" alt="game design icon" />
      </div>
      <div className="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png" alt="game dev icon" />
      </div>
      <div className="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png" alt="ui-ux icon" />
      </div>
    </div>
    <div className="circle1">
      <div className="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/app-icon.png" alt="app icon" />
      </div>
      <div className="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/blockchain-icon.png" alt="blockchain icon" />
      </div>
      <div className="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/arvr-icon.png" alt="ar-vr icon" />
      </div>
      <div className="icon-block">
        <img src="https://www.yudiz.com/codepen/animated-portfolio/artificial-intelligence-icon.png" alt="artificial intelligence icon" />
      </div>
    </div>
    <div className="center-logo p-10">
      <img className='rounded-full w-52 h-56 ' src="https://i.ibb.co/55vQG7W/mazhar.jpg" alt="logo" />
    </div>
  </div>
</section>
            </div>

        </div>
    );
};

export default Home;