import './home.css'
const Home = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/ThFKHm4/gg.jpg')] bg-no-repeat">
            
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
        <img src="https://i.ibb.co/JjzqBQ0/html-5-1.png" alt="web design icon" />
      </div>
      <div className="icon-block">
        <img src="https://i.ibb.co/JFgxHJW/css-3.png" alt="game design icon" />
      </div>
      <div className="icon-block">
        <img src="https://i.ibb.co/djKctCZ/tailwind-css-256x154.png" alt="game dev icon" />
      </div>
      <div className="icon-block">
        <img src="https://i.ibb.co/CH2mfhW/javascript-js-512x512.png" alt="js" />
      </div>
    </div>
    <div className="circle1">
      <div className="icon-block-f">
        <img src="https://i.ibb.co/sRLTwWW/file-type-firebase-187x256.png" alt="firebase" />
      </div>
      <div className="icon-block">
        <img src="https://i.ibb.co/DwdnMTd/node-228x256.png" alt="nodejs" />
      </div>
      <div className="icon-block">
        <img src="https://i.ibb.co/1Q0L0YR/mongodb-original-wordmark-505x512.png" alt="mongodb" />
      </div>
      <div className="icon-block">
        <img src="https://i.ibb.co/Bg7T9Kv/file-type-reactjs-256x228.png" alt="react" />
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