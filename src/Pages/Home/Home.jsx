import './home.css'

const Home = () => {
    return (
        <div>
            
            <div className="grid lg:grid-cols-2 w-10/12 mx-auto h-screen items-center justify-evenly justify-items-center font-sans">
            
                <div className='flex gap-10'>

                  {/* icon */}
                  <div className=''>
                    <div><iframe className='w-16' src="https://lottie.host/embed/2d74bdbc-a611-42d8-9125-e5bfb131b392/PtDZYazcaC.json"></iframe></div>


                    <div><iframe className='w-14 relative bottom-16 left-1' src="https://lottie.host/embed/c7ebf29d-3f3b-4624-a58e-5df52e77cd4f/R5aaSnZpjC.json"></iframe></div>

                    <div><iframe className='w-10 relative bottom-32 left-2.5' src="https://lottie.host/embed/adb77681-b995-4209-ade7-c983c0cbfec5/S6QCkO4TMO.json"></iframe></div>

                  </div>



                <div className=''>  
                 
                 <h2 className="text-5xl mb-0.5 mt-12">I am <span className="font-semibold">Mazharul Islam</span></h2>
                     <h3 className="text-2xl w-full mx-auto">_____________Frontend developer</h3>
                     <p className="w-[35rem] text-xl mt-4 mb-6 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, neque!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ducimus.</p>
                     <button className="btn btn-outline  btn-ghost">Download CV</button>
 
                 </div>
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
      <img className='rounded-full w-48 h-48 ' src="https://i.ibb.co/55vQG7W/mazhar.jpg" alt="logo" />
    </div>
  </div>
</section>
            </div>

        </div>
    );
};

export default Home;