import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen'>
        <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* Image */}
                <div>
                    {/* heading */}
                    {/* just commited */}
                    <h1 data-aos="fade-up" className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]'>Stream High-Quality Anime Anytime on Ani<span className='text-[#F86401]'>Flix</span></h1>
                    {/* para */}
                    <p className='text-gray-700'>Enjoy unlimited access to your favorite anime in stunning quality. From classics to trending series, watch anytime, anywhere, and immerse yourself in the ultimate anime experience!</p>
                    {/* playstore and app store images */}
                    <div className='flex mt-8 mb-8 items-center space-x-4'>
                        <Image src={"/images/play.png"} alt='Play store' width={150} height={150} className='object-contain'/>
                        <Image src={"/images/app.png"} alt='App store' width={150} height={150} className='object-contain'/>
                    </div>
                </div>
                {/* text */}
                <div data-aos="fade-up" data-aos-delay="200" className='hidden lg:block'>
                   <Image src={"/images/1a.png"} alt='hero'width={500} height={500}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero