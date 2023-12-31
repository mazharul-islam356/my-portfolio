/* eslint-disable react/no-unknown-property */
import './skills.css'

import { useEffect } from 'react'

const Skills = () => {
 
   useEffect(()=>{

    const scrollProgress = document.getElementById('scroll-progress');
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});
       
    let number = document.getElementById('number');
    let counter = 0;
    setInterval(() => {
    if (counter === 90) {
    clearInterval;
    } else {
    counter += 1;
    number.innerHTML = `${counter}%`;
    }
    }, 30);

},[])

// css
   useEffect(()=>{
       
    let number = document.getElementById('number2');
    let counter = 0;
    setInterval(() => {
    if (counter === 85) {
    clearInterval;
    } else {
    counter += 1;
    number.innerHTML = `${counter}%`;
    }
    }, 30);

},[])
   
    return (

        

        
        <div className="mt-20">
            
<h1 className="text-2xl font-semibold text-center">Skills</h1>
            <div className="grid text-center mt-4 grid-cols-5 justify-center items-center justify-items-center">
            <div id="scroll-progress"></div>

            {/* progress bar html */}
            <div className="skills">
            <div className="outer ">
                <div className="inner">
               <img className='w-8 mr-4' src="https://i.ibb.co/hLh5xrL/html-5.png" alt="" />
            <div id="number"></div>
                </div>
            </div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
<defs>
<linearGradient id="GradientColor">
<stop offset="0%" stop-color="#DA22FF" />
<stop offset="100%" stop-color="#9733EE"/>
</linearGradient>
</defs>
<circle className='circle' cx="80" cy="80" r="70" stroke-linecap="round" />
</svg>
            </div>


            {/* progress bar css */}
            <div className="skills">
            <div className="outer ">
                <div className="inner">
               <img className='w-8 mr-4' src="https://i.ibb.co/QKyqh1R/css.png" alt="" />

            <div id="number2"></div>

                </div>
            </div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
<defs>
<linearGradient id="GradientColor">
<stop offset="0%" stop-color="#DA22FF" />
<stop offset="100%" stop-color="#9733EE"/>
</linearGradient>
</defs>
<circle className='circle2' cx="80" cy="80" r="70" stroke-linecap="round" />
</svg>
            </div>


            
            <p className="text-xl">Tailwind</p>
            <p className="text-xl">React</p>
            <p className="text-xl">Next js</p>
            </div>
            <div className="text-xl font-bold">TODO: Design and codind skills add</div>
        </div>
    );
};

export default Skills;