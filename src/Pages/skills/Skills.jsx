/* eslint-disable react/no-unknown-property */
import ScrollTrigger from 'react-scroll-trigger';
import './skills.css'

import { useState } from 'react'
import CountUp from 'react-countup';

const Skills = () => {

    const [counterOn, setCounterOn] = useState(false)

 
   
    return (

        

        
        <div className="mt-20">
            <iframe className="w-32 top-[5.8rem] lg:left-[33rem] relative" src="https://lottie.host/embed/41bb23a7-2a50-4954-b84a-da78d857cfb0/1vfKwk3vNP.json"></iframe>
<h1 className="text-3xl font-semibold text-center">Skills</h1>

   <div className='grid lg:grid-cols-2 justify-center items-center gap-20 ml-72 mt-10'>

         {/* coding skills */}
         <div>
          
          <div className="grid text-center mt-4 lg:grid-cols-2 justify-center items-center">
               
               <div id="scroll-progress">
               </div>
   
              <div className='grid grid-cols-2 gap-x-36 gap-y-4 justify-between items-center justify-items-center'>
   
            {/* progress bar html */}
            <div className="skills mr-4">
               <div className="outer ">
                   <div className="inner">
                  <img className='w-8 mr-1' src="https://i.ibb.co/JjzqBQ0/html-5-1.png" alt="" />
               <div id="number flex flex-row">
               <h1 className="font-bold  lg:leading-normal leading-7 text-[#101010]">
                               <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                   {
                                       counterOn && <CountUp start={0} end={90} duration={3} delay={0} />
                                   }%
                               </ScrollTrigger>
                           </h1>
               <p className='font-bold'>Html 5</p>
               </div>
                   </div>
               </div>
   <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
   
   {
    counterOn && 
    <svg className='absolute top-0 left-0 animate-anim duration-2500 ease-linear-in-out' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
   <defs>
   <linearGradient id="GradientColor">
   <stop offset="0%" stop-color="#DA22FF" />
   <stop offset="100%" stop-color="#9733EE"/>
   </linearGradient>
   </defs>
   <circle className='circle' cx="80" cy="80" r="70" stroke-linecap="round" />
   </svg>
                                   }
   
   </ScrollTrigger>
               </div>
               
   
   
               {/* progress bar css */}
               <div className="skills mr-4">
               <div className="outer ">
                   <div className="inner">
                  <img className='w-8 mr-1' src="https://i.ibb.co/JFgxHJW/css-3.png" alt="" />
               <div id="number">
               <h1 className="font-bold  lg:leading-normal leading-7 text-[#101010]">
                               <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                   {
                                       counterOn && <CountUp start={0} end={85} duration={3} delay={0} />
                                   }%
                               </ScrollTrigger>
                           </h1>
               <p className='font-bold'>Css 3</p>
               </div>
                   </div>
               </div>
   <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
   
   {
    counterOn && 
    <svg className='absolute top-0 left-0 animate-anim2 duration-2500 ease-linear-in-out' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
   <defs>
   <linearGradient id="GradientColor">
   <stop offset="0%" stop-color="#DA22FF" />
   <stop offset="100%" stop-color="#9733EE"/>
   </linearGradient>
   </defs>
   <circle className='circle2' cx="80" cy="80" r="70" stroke-linecap="round" />
   </svg>
                                   }
   
   </ScrollTrigger>
               </div>
   
   
   
   
               {/* progress bar react */}
               <div className="skills mr-4">
               <div className="outer ">
                   <div className="inner">
                  <img className='w-8 mr-1' src="https://i.ibb.co/N3B2kYk/science.png" alt="" />
               <div id="number">
               <h1 className="font-bold  lg:leading-normal leading-7 text-[#101010]">
                               <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                   {
                                       counterOn && <CountUp start={0} end={56} duration={3} delay={0} />
                                   }%
                               </ScrollTrigger>
                           </h1>
               <p className='font-bold'>React js</p>
   
               </div>
                   </div>
               </div>
   <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
   
   {
    counterOn && 
    <svg className='absolute top-0 left-0 animate-anim3 duration-2500 ease-linear-in-out' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
   <defs>
   <linearGradient id="GradientColor">
   <stop offset="0%" stop-color="#DA22FF" />
   <stop offset="100%" stop-color="#9733EE"/>
   </linearGradient>
   </defs>
   <circle className='circle3' cx="80" cy="80" r="70" stroke-linecap="round" />
   </svg>
                                   }
   
   </ScrollTrigger>
               </div>
   
   
               {/* progress bar mongoDB */}
               <div className="skills mr-4">
               <div className="outer ">
                   <div className="inner">
                  <img className='w-8 mr-1' src="https://i.ibb.co/dmJgfPq/database-storage.png" alt="" />
                  
               <div id="number flex flex-row">
               <h1 className="font-bold  lg:leading-normal leading-7 text-[#101010]">
                               <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                   {
                                       counterOn && <CountUp start={0} end={70} duration={3} delay={0} />
                                   }%
                               </ScrollTrigger> 
                               
                           </h1>
                           
               <p className='font-bold'>MongoDB</p>
               </div> 
                   </div>
                   
               </div>
   <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
   
        {
        counterOn && 
        <svg className='absolute top-0 left-0 animate-anim2     duration-2500 ease-linear-in-out' xmlns="http://www.w3.    org/2000/svg" version="1.1" width="160px"     height="160px">
        <defs>
        <linearGradient id="GradientColor">
        <stop offset="0%" stop-color="#DA22FF" />
        <stop offset="100%" stop-color="#9733EE"/>
        </linearGradient>
        </defs>
        <circle className='circle4' cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
            }
   
   </ScrollTrigger>
                    </div>
                </div>    
             </div>
          </div>




           {/* design skills */}
           <div>
          
           <div className="grid text-center mt-4 grid-cols-2 justify-center items-center">
                
                <div id="scroll-progress">
                </div>
    
               <div className='grid grid-cols-2 gap-x-36 gap-y-4 justify-between items-center justify-items-center'>
    
             {/* progress bar photoshop */}
             <div className="skills mr-4">
                <div className="outer ">
                    <div className="inner">
                   <img className='w-8 relative bottom-3 left-6' src="https://i.ibb.co/TgCBLVQ/photoshop.png" alt="" />
                <div id="number flex flex-row">
                <h1 className="font-bold  lg:leading-normal leading-7 text-[#101010]">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                    {
                                        counterOn && <CountUp start={0} end={60} duration={3} delay={0} />
                                    }%
                                </ScrollTrigger>
                            </h1>
                <p className='font-bold relative right-2 top-1'>Photoshop</p>
                </div>
                    </div>
                </div>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    
    {
                                        counterOn && 
                                        <svg className='absolute top-0 left-0 animate-anim duration-2500 ease-linear-in-out' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
    <defs>
    <linearGradient id="GradientColor">
    <stop offset="0%" stop-color="#DA22FF" />
    <stop offset="100%" stop-color="#9733EE"/>
    </linearGradient>
    </defs>
    <circle className='circle5' cx="80" cy="80" r="70" stroke-linecap="round" />
    </svg>
                                    }
    
    </ScrollTrigger>
                </div>
                
    
    
                {/* progress bar illustrator */}
                <div className="skills mr-4">
                <div className="outer ">
                    <div className="inner">
                   <img className='w-8 relative bottom-3 left-5' src="https://i.ibb.co/QPg5NnN/illustrator.png" alt="" />
                <div id="number">
                <h1 className="font-bold  lg:leading-normal leading-7 text-[#101010]">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                    {
                                        counterOn && <CountUp start={0} end={40} duration={3} delay={0} />
                                    }%
                                </ScrollTrigger>
                            </h1>
                <p className='font-bold relative right-2 top-1'>illustrator</p>
                </div>
                    </div>
                </div>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    
    {
                                        counterOn && 
                                        <svg className='absolute top-0 left-0 animate-anim2 duration-2500 ease-linear-in-out' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
    <defs>
    <linearGradient id="GradientColor">
    <stop offset="0%" stop-color="#DA22FF" />
    <stop offset="100%" stop-color="#9733EE"/>
    </linearGradient>
    </defs>
    <circle className='circle6' cx="80" cy="80" r="70" stroke-linecap="round" />
    </svg>
                                    }
    
    </ScrollTrigger>
                </div>
    
    
    
    
                {/* progress bar Figma */}
                <div className="skills mr-4">
                <div className="outer ">
                    <div className="inner">
                   <img className='w-8 mr-1' src="https://i.ibb.co/5nS6NzW/figma.png" alt="" />
                <div id="number">
                <h1 className="font-bold  lg:leading-normal leading-7 text-[#101010]">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                    {
                                        counterOn && <CountUp start={0} end={30} duration={3} delay={0} />
                                    }%
                                </ScrollTrigger>
                            </h1>
                <p className='font-bold'>Figma</p>
    
                </div>
                    </div>
                </div>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    
    {
                                        counterOn && 
                                        <svg className='absolute top-0 left-0 animate-anim2 duration-2500 ease-linear-in-out' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
    <defs>
    <linearGradient id="GradientColor">
    <stop offset="0%" stop-color="#DA22FF" />
    <stop offset="100%" stop-color="#9733EE"/>
    </linearGradient>
    </defs>
    <circle className='circle7' cx="80" cy="80" r="70" stroke-linecap="round" />
    </svg>
                                    }
    
    </ScrollTrigger>
                </div>
    
    
                {/* progress bar Canva */}
                <div className="skills mr-4">
                <div className="outer ">
                    <div className="inner">
                   <img className='w-8 mr-1' src="https://i.ibb.co/nbN890V/canva-icon.png" alt="" />
                   
                <div id="number flex flex-row">
                <h1 className="font-bold  lg:leading-normal leading-7 text-[#101010]">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                    {
                                        counterOn && <CountUp start={0} end={75} duration={3} delay={0} />
                                    }%
                                </ScrollTrigger> 
                                
                            </h1>
                            
                <p className='font-bold'>Canva</p>
                </div> 
                    </div>
                    
                </div>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    
    {
    counterOn && 
    <svg className='absolute top-0 left-0 animate-anim2 duration-2500 ease-linear-in-out' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
    <defs>
    <linearGradient id="GradientColor">
    <stop offset="0%" stop-color="#DA22FF" />
    <stop offset="100%" stop-color="#9733EE"/>
    </linearGradient>
    </defs>
    <circle className='circle8' cx="80" cy="80" r="70" stroke-linecap="round" />
    </svg>
                                    }
    
    </ScrollTrigger>
                </div>
    
    
               </div>
              
    
    
                
              
                </div>
           </div>


   </div>
           
        </div>
    );
};

export default Skills;