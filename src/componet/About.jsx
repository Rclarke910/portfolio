import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi im Rashawn nice to meet you! Please take a look around!</p>
                </div>
                <div>
                    <p>Since a child, I have always had a passion for technology and the world wide web. 
                        This passion is what drove me to a desire to learn how to build software and pursue
                         it as a career. I have gone threw bootcamps, online courses, books, just about 
                         every means available to me in order to learn everything i possibly could about 
                         web development and to obtain the skills needed to be a servicable developer for 
                         anything from small buisnesses to large companies,</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About