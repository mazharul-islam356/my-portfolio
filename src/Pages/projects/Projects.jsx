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
            <p className='text-white mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
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

{/* slide 02 */}
    

         <SwiperSlide className="">
          <div className='body'>
            <div className='containers'>
            <div className='cards bg-[#57c4ac]'>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
            </p>
            <h2 className='font-semibold text-xl'>Card 01</h2>
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
            <h2 className='font-semibold text-xl'>Card 01</h2>
            </div>
            </div>
            
            </div>   
        </SwiperSlide>

{/* slide 09 */}

<SwiperSlide className="">
          <div className='body'>
            <div className='containers'>
            <div className='cards bg-[#B67352]'>
            <div className='imgBx'>
            <img src="https://i.ibb.co/NxL2rNL/1709994928514.jpg" alt="" />
            </div>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, doloremque?
            </p>
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