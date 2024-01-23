
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { TbMoodHappyFilled } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHourglassOutline } from "react-icons/io5";



const FunFacts = () => {
    const [counterOn, setCounterOn] = useState(false)

    return (
        <div className='my-8 border p-6 rounded-lg shadow-sm mt-20'>
            <h2 className='text-2xl font-semibold text-center'>Fun Facts</h2>


            <div className='grid grid-cols-3 mt-16 justify-center items-center '>
                <div className='flex flex-col justify-center items-center gap-1'>
                <TbMoodHappyFilled  className='text-2xl text-center'/>
                    <h1 className='text-2xl'>Happy Clints</h1>
                    <h1 className="text-3xl font-semibold  lg:leading-normal leading-7 text-[#101010]">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp start={0} end={4} duration={2} delay={0} />
                                }+
                            </ScrollTrigger>
                        </h1>
                </div>

                <div className='flex flex-col justify-center items-center gap-1'>
                <GoProjectRoadmap  className='text-2xl text-center font-bold'/>
                    <h1 className='text-2xl'>Completed projects</h1>
                    <h1 className="text-3xl font-semibold  lg:leading-normal leading-7 text-[#101010]">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp start={0} end={20} duration={2} delay={0} />
                                }+
                            </ScrollTrigger>
                        </h1>
                </div>

                <div className='flex flex-col justify-center items-center gap-1'>
                <IoHourglassOutline  className='text-2xl text-center'/>
                    <h1 className='text-2xl'>Working hour</h1>
                    <h1 className="text-3xl font-semibold  lg:leading-normal leading-7 text-[#101010]">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp start={0} end={165} duration={2} delay={0} />
                                }+
                            </ScrollTrigger>
                        </h1>
                </div>
            </div>
        </div>
    )
}

export default FunFacts;