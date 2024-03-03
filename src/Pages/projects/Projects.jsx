import {Swiper,SwiperSlide} from "swiper/react";
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './project.css'


const Projects = () => {

  
    return (
        <div className="lg:mt-40 mt-10">
          <iframe className="w-32 top-[5.5rem] lg:left-[28rem] left-10 relative" src="https://lottie.host/embed/5a15d394-2bcb-493e-b70a-c2fbab655b55/6ThKMwg0XV.json"></iframe>
            <h1 className="text-2xl font-semibold text-center mb-20 lg:ml-0 ml-12">Projects</h1>
            

           

            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper lg:w-[27.5em] w-[16em]"
      >






        {/* slide 01 */}
        <SwiperSlide>

<div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50">
  <div className="absolute inset-0 bg-center dark:bg-black"></div>
  <div className="group relative m-0 flex h-full w-[40rem] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img src="https://i.ibb.co/H2FRS62/copy-writer.jpg" className="animate-fade-in block lg:h-[20rem] lg:w-full h-[17rem] w-[19em] -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-3xl font-bold text-white shadow-xl">CareerFinder</h1>
      <h1 className="text-xl text-white font-medium shadow-xl">A job seeking website</h1>
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
      <img src="https://i.ibb.co/YXX9JSc/high-paying-remote-jobs.jpg" className="animate-fade-in block lg:h-[20rem] lg:w-full h-[17rem] w-[19em] -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Eat and Exelcs</h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl">A hostel management website</h1>
    </div>
  </div>
            </div>
           
        </SwiperSlide>

{/* slide 03 */}

        <SwiperSlide>
        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50">
  <div className="absolute inset-0 bg-center dark:bg-black"></div>
  <div className="group relative m-0 flex h-full w-[40rem] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img src="https://i.ibb.co/QcPD0Cr/6bfe62d6db31abeb2528d6ec66c43afe.jpg" className="animate-fade-in block lg:h-[20rem] lg:w-full h-[17rem] w-[19em] -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Techtophia</h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl">A tech mobile website</h1>
    </div>
  </div>
            </div>
        </SwiperSlide>

{/* slide 04 */}

        <SwiperSlide>
        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50">
  <div className="absolute inset-0 bg-center dark:bg-black"></div>
  <div className="group relative m-0 flex h-full w-[40rem] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img src="https://i.ibb.co/C1gwqW8/istockphoto-1283154274-612x612.jpg" className="animate-fade-in block lg:h-[20rem] lg:w-full h-[17rem] w-[19em] -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Donation Capaign</h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl">A Donation website</h1>
    </div>
  </div>
            </div>
        </SwiperSlide>

{/* slide 05 */}

        <SwiperSlide>
        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50">
  <div className="absolute inset-0 bg-center dark:bg-black"></div>
  <div className="group relative m-0 flex h-full w-[40rem] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img src="https://i.ibb.co/98PMw24/weading.jpg" className="animate-fade-in block lg:h-[20rem] lg:w-full h-[17rem] w-[19em] -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
    </div>
  </div>
            </div>
        </SwiperSlide>

{/* slide 06 */}


        <SwiperSlide>
        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50">
  <div className="absolute inset-0 bg-center dark:bg-black"></div>
  <div className="group relative m-0 flex h-full w-[40rem] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img src="https://i.ibb.co/QcPD0Cr/6bfe62d6db31abeb2528d6ec66c43afe.jpg" className="animate-fade-in block lg:h-[20rem] lg:w-full h-[17rem] w-[19em] -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
    </div>
  </div>
            </div>
        </SwiperSlide>

{/* slide 07 */}

        <SwiperSlide>
        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50">
  <div className="absolute inset-0 bg-center dark:bg-black"></div>
  <div className="group relative m-0 flex h-full w-[40rem] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img src="https://i.ibb.co/QcPD0Cr/6bfe62d6db31abeb2528d6ec66c43afe.jpg" className="animate-fade-in block lg:h-[20rem] lg:w-full h-[17rem] w-[19em] -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
    </div>
  </div>
            </div>
        </SwiperSlide>

{/* slide 08 */}

        <SwiperSlide>
        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50">
  <div className="absolute inset-0 bg-center dark:bg-black"></div>
  <div className="group relative m-0 flex h-full w-[40rem] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img src="https://i.ibb.co/QcPD0Cr/6bfe62d6db31abeb2528d6ec66c43afe.jpg" className="animate-fade-in block lg:h-[20rem] lg:w-full h-[17rem] w-[19em] -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
    </div>
  </div>
            </div>
        </SwiperSlide>

{/* slide 09 */}

        <SwiperSlide>
        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-50">
  <div className="absolute inset-0 bg-center dark:bg-black"></div>
  <div className="group relative m-0 flex h-full w-[40rem] rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
      <img src="https://i.ibb.co/QcPD0Cr/6bfe62d6db31abeb2528d6ec66c43afe.jpg" className="animate-fade-in block lg:h-[20rem] lg:w-full h-[17rem] w-[19em] -ml-14 scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
    </div>
  </div>
            </div>
        </SwiperSlide>

        
      </Swiper>
        </div>
    );
};

export default Projects;