/* eslint-disable react/jsx-no-target-blank */
import {Swiper,SwiperSlide} from "swiper/react";
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './project.css'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaServer } from "react-icons/fa";



const Projects = () => {

  
    return (
       <section id="project">
         <div className="lg:mt-40 mt-10">
          <iframe className="w-32 top-[5.5rem] lg:left-[32rem] left-10 relative" src="https://lottie.host/embed/5a15d394-2bcb-493e-b70a-c2fbab655b55/6ThKMwg0XV.json"></iframe>
            <h1 className="text-2xl font-semibold text-center mb-20 lg:ml-28 ml-12">Projects</h1>

          

            <Swiper
        effect={'cards'}
        modules={[EffectCards]}
        className="mySwiper mt-40 w-[32rem] h-[30rem]"
      >






        {/* slide 01 */}
        <SwiperSlide className="shadow-none">
          <div className='body '>
            <div className='containers'>
            <div className='cards  bg-[#BBE2EC]  '>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-black mt-4'>Eat & excels is a hostel meal management website. With Its clean and minimal user interface, it helps the user to find their needs easily. It also features an admin panale.
            </p>

            <div className="grid grid-cols-3 gap-4 text-xl relative bottom-3">

            <div className="text-black">
            
         <a target="_blank" href="https://assingment-12-d89cd.web.app/">
          
            <FaExternalLinkAlt />
         </a>
          

            </div>
            <div className="text-black">
            
            <a target="_blank" href="https://github.com/mazharul-islam356/eat-and-excels-clint">


            <FaGithub />
            </a>
            

            </div>
            <div className="text-black">
            
            <a target="_blank" href="https://github.com/mazharul-islam356/eat-and-excels-server">

            <FaServer />

            </a>
            

            </div>
            </div>

            <h2 className='font-semibold text-black text-xl'>Eat & Excells</h2>
            </div>
            </div>
            
            </div>   
        </SwiperSlide>

{/* slide 02 */}
    

         <SwiperSlide className="">
          <div className='body'>
            <div className='containers'>
            <div className='cards bg-[#57c4ac]'>
            <div className='imgBx'>
            <img src="https://ibb.co/b3WY0T3" alt="" />
            </div>
            <p className='text-black'>Career Finder is a job seeker website.you can apply a job and manage your applied job on this site
            </p>
            <div className="grid grid-cols-3 gap-4 text-xl relative top-4">

            <div className="text-black">
            
         <a href="https://assingmnet-11.web.app">
          
            <FaExternalLinkAlt />
         </a>
          

            </div>
            <div className="text-black">
            
            <a href="https://github.com/mazharul-islam356/careerFinder-clint">


            <FaGithub />
            </a>
            

            </div>
            <div className="text-black">
            
            <a href="https://github.com/mazharul-islam356/careerFinder-server">

            <FaServer />

            </a>
            

            </div>
            </div>
            <h2 className='font-semibold text-xl'>CareerFinder</h2>
            </div>
            </div>
            
            </div>   
        </SwiperSlide>

{/* slide 03 */}

<SwiperSlide className="">
          <div className='body'>
            <div className='containers'>
            <div className='cards bg-[#A8CD9F]'>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
            </p>
            <div className="grid grid-cols-3 gap-4 text-xl">

            <div className="text-white">
            
         <a href="http://">
          
            <FaExternalLinkAlt />
         </a>
          

            </div>
            <div className="text-white">
            
            <a href="http://">


            <FaGithub />
            </a>
            

            </div>
            <div className="text-white">
            
            <a href="http://">

            <FaServer />

            </a>
            

            </div>
            </div>
            <h2 className='font-semibold text-xl'>Card 01</h2>
            </div>
            </div>
            
            </div>   
        </SwiperSlide>

{/* slide 04 */}

<SwiperSlide className="">
          <div className='body'>
            <div className='containers'>
            <div className='cards bg-[#cc73b5]'>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
            </p>
            <div className="grid grid-cols-3 gap-4 text-xl">

            <div className="text-white">
            
         <a href="http://">
          
            <FaExternalLinkAlt />
         </a>
          

            </div>
            <div className="text-white">
            
            <a href="http://">


            <FaGithub />
            </a>
            

            </div>
            <div className="text-white">
            
            <a href="http://">

            <FaServer />

            </a>
            

            </div>
            </div>
            <h2 className='font-semibold text-xl'>Card 01</h2>
            </div>
            </div>
            
            </div>   
        </SwiperSlide>

{/* slide 05 */}

<SwiperSlide className="">
          <div className='body'>
            <div className='containers'>
            <div className='cards bg-[#d7c873]'>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
            </p>
            <div className="grid grid-cols-3 gap-4 text-xl">

            <div className="text-white">
            
         <a href="http://">
          
            <FaExternalLinkAlt />
         </a>
          

            </div>
            <div className="text-white">
            
            <a href="http://">


            <FaGithub />
            </a>
            

            </div>
            <div className="text-white">
            
            <a href="http://">

            <FaServer />

            </a>
            

            </div>
            </div>
            <h2 className='font-semibold text-xl'>Card 01</h2>
            </div>
            </div>
            
            </div>   
        </SwiperSlide>

{/* slide 06 */}


<SwiperSlide className="">
          <div className='body'>
            <div className='containers'>
            <div className='cards bg-[#7469B6]'>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
            </p>
            <div className="grid grid-cols-3 gap-4 text-xl">

            <div className="text-white">
            
         <a href="http://">
          
            <FaExternalLinkAlt />
         </a>
          

            </div>
            <div className="text-white">
            
            <a href="http://">


            <FaGithub />
            </a>
            

            </div>
            <div className="text-white">
            
            <a href="http://">

            <FaServer />

            </a>
            

            </div>
            </div>
            <h2 className='font-semibold text-xl'>Card 01</h2>
            </div>
            </div>
            
            </div>   
        </SwiperSlide>

{/* slide 07 */}

<SwiperSlide className="">
          <div className='body'>
            <div className='containers'>
            <div className='cards bg-[#d7a07f]'>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
            </p>
            <div className="grid grid-cols-3 gap-4 text-xl">

            <div className="text-white">
            
         <a href="http://">
          
            <FaExternalLinkAlt />
         </a>
          

            </div>
            <div className="text-white">
            
            <a href="http://">


            <FaGithub />
            </a>
            

            </div>
            <div className="text-white">
            
            <a href="http://">

            <FaServer />

            </a>
            

            </div>
            </div>
            <h2 className='font-semibold text-xl'>Card 01</h2>
            </div>
            </div>
            
            </div>   
        </SwiperSlide>

{/* slide 08 */}

<SwiperSlide className="">
          <div className='body'>
            <div className='containers'>
            <div className='cards bg-[#d77779]'>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
            </p>
            <div className="grid grid-cols-3 gap-4 text-xl">

            <div className="text-white">
            
         <a href="http://">
          
            <FaExternalLinkAlt />
         </a>
          

            </div>
            <div className="text-white">
            
            <a href="http://">


            <FaGithub />
            </a>
            

            </div>
            <div className="text-white">
            
            <a href="http://">

            <FaServer />

            </a>
            

            </div>
            </div>
            <h2 className='font-semibold text-xl'>Card 01</h2>
            </div>
            </div>
            
            </div>   
        </SwiperSlide>

{/* slide 09 */}

<SwiperSlide className="">
          <div className='body'>
            <div className='containers'>
            <div className='cards bg-[#9f9d8a]'>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
            </p>
            <div className="grid grid-cols-3 gap-4 text-xl">

            <div className="text-white">
            
         <a href="http://">
          
            <FaExternalLinkAlt />
         </a>
          

            </div>
            <div className="text-white">
            
            <a href="http://">


            <FaGithub />
            </a>
            

            </div>
            <div className="text-white">
            
            <a href="http://">

            <FaServer />

            </a>
            

            </div>
            </div>
            <h2 className='font-semibold text-xl'>Card 01</h2>
            </div>
            </div>
            
            </div>   
        </SwiperSlide>

        
      </Swiper>
        </div>
       </section>
    );
};

export default Projects;