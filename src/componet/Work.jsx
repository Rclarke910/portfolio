import React from 'react'
import hobbs from '../assets/hobbs.png'
import klassickicks from '../assets/klassic-kicks.png'
import fitkit from '../assets/fitkit.png'
import realdeal from '../assets/realdeal.png'

const Work = () => {
  return (
    <div name = 'work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] pb-16'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>Check out some of my personal projects</p>
            </div>
   {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 ' >
                {/* Grid Item */}

                <div style = {{backgroundImage: `url(${hobbs})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>

                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://calm-puffpuff-49e84e.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Rclarke910/Hobbs-cafe.git" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg'>Code </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style = {{backgroundImage: `url(${klassickicks})`}} className='shadow-lg shadow-[#040c16] group container rouded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://lively-praline-d09356.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Rclarke910/KlassicKicks.git" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg'>Code </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style = {{backgroundImage: `url(${fitkit})`}} className='shadow-lg shadow-[#040c16] group container rouded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://sage-meringue-df08b9.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Rclarke910/fitness.git" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg'>Code </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style = {{backgroundImage: `url(${realdeal})`}} className='shadow-lg shadow-[#040c16] group container rouded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://relaxed-lolly-621db3.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Rclarke910/real-estate-app.git" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg'>Code </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work