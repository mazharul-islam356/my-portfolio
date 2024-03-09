import './home.css'
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
    return (
        <div>
            
            <div className="lg:grid lg:grid-cols-2   w-10/12 mx-auto flex flex-col-reverse items-center justify-evenly justify-items-center font-sans">
            
                <div className='flex lg:flex-row flex-col-reverse lg:gap-56 lg:mt-12 mt-4'>

                  {/* icon */}
                  <div className='mt-16 relative lg:left-[5.5rem] grid lg:grid-cols-1 grid-cols-3 justify-center'>
                    <div><iframe className='w-16' src="https://lottie.host/embed/2d74bdbc-a611-42d8-9125-e5bfb131b392/PtDZYazcaC.json"></iframe></div>


                    <div><iframe className='w-14 relative lg:bottom-16 left-1' src="https://lottie.host/embed/c7ebf29d-3f3b-4624-a58e-5df52e77cd4f/R5aaSnZpjC.json"></iframe></div>

                    <div><iframe className='w-10 relative lg:bottom-32 left-2.5' src="https://lottie.host/embed/adb77681-b995-4209-ade7-c983c0cbfec5/S6QCkO4TMO.json"></iframe></div>

                  </div>



                <div className='lg:mt-12'>  
                 
                 <h2 className="text-5xl mb-0.5 mt-12">I am <span className="font-semibold">Mazharul Islam</span></h2>
                     {/* <h3 className="text-2xl w-full mx-auto">_____________Frontend developer</h3> */}

                     <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Frontend web developer',
        500, // wait 1s before replacing "Mice" with "Hamsters"
        'Full stack developer',
        500,
        'Mearn stack developer',
        500,
        'Jounior Web developer',
        500
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
                     <p className="max-w-[35rem] lg:w-[35rem] text-xl mt-4 mb-6 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, neque!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ducimus.</p>
                     
                     <button className="btn btn-outline  btn-ghost">Download CV</button>
                     <button className="btn btn-outline  btn-ghost ml-6">Contact Now</button>
 
                 </div>
                </div>


                
<section className="main-container">
    <div className="main lg:ml-24 mb-2">
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
    <div className="center-logo">
    <div className="absolute -top-10 left-10 w-36 h-36 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob">
              </div>
              {/* <div className="absolute top-6 -left-20 w-16 h-16 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div> */}
              <div className="absolute bottom-16 -left-16 w-28 h-28 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>

              <div className="absolute hidden md:block top-40 right-6  w-36 h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>

              <div className="absolute hidden md:block top-20 left-28 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>








      <img className='rounded-full relative w-[11rem] mb-3' src="https://i.ibb.co/xYQFJr6/Untitled-1.png" alt="logo" />
      {/* <iframe src="https://lottie.host/embed/99f9bbc8-09bb-4aba-98ce-6b2188aec6fd/LQVzsWhUMm.json"></iframe> */}
    </div>
  </div>
</section>
            </div>

        </div>
    );
};

export default Home;