import {Swiper,SwiperSlide} from "swiper/react";
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './project.css'


const Projects = () => {

  
    return (
        <div className="mt-20">
            <h1 className="text-2xl font-semibold text-center">Projects</h1>
            <div>
            Framer motion projct card
            </div>


            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {/* slide 01 */}
        <SwiperSlide>

<div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50">
  <div className="absolute inset-0 bg-center dark:bg-black"></div>
  <div className="group relative m-0 flex h-full w-[40rem] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img src="https://i.ibb.co/H2FRS62/copy-writer.jpg" className="animate-fade-in block h-[20rem] w-full -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
    </div>
  </div>
</div>
            
        </SwiperSlide>

{/* slide 02 */}
        <SwiperSlide>
           <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50">
  <div className="absolute inset-0 bg-center dark:bg-black"></div>
  <div className="group relative m-0 flex h-full w-[40rem] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img src="https://i.ibb.co/YXX9JSc/high-paying-remote-jobs.jpg" className="animate-fade-in block h-[20rem] w-full -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
    </div>
  </div>
</div>
           
        </SwiperSlide>


        <SwiperSlide>
            Slide 3
        </SwiperSlide>


        <SwiperSlide>
            Slide 4
        </SwiperSlide>


        <SwiperSlide>
            Slide 5
        </SwiperSlide>


        <SwiperSlide>
            Slide 6
        </SwiperSlide>


        <SwiperSlide>
            Slide 7
        </SwiperSlide>


        <SwiperSlide>
            Slide 8
        </SwiperSlide>


        <SwiperSlide>
            Slide 9
        </SwiperSlide>

        
      </Swiper>
        </div>
    );
};

export default Projects;