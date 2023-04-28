import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl'>Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2' >
                <Image src='https://live.staticflickr.com/65535/52854143010_cf241139f1_n.jpg' alt='mountain'
                layout='responsive' 
                width='677'
                height='451'
                />
            </div>
            <div className='w-full h-full'>
                <Image src='https://live.staticflickr.com/65535/52853930099_16767b4a88_n.jpg' alt='valley'
                layout='responsive' 
                width='215'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image src="https://live.staticflickr.com/65535/52853172562_853f49b9df_n.jpg" alt='valley'
                layout='responsive' 
                width='215'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image src="https://live.staticflickr.com/65535/52854143055_ac4c3a6fa5_n.jpg" alt='valley'
                layout='responsive' 
                width='215'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image src='https://live.staticflickr.com/65535/52853930099_16767b4a88_n.jpg' alt='valley'
                layout='responsive' 
                width='215'
                height='217'
                objectFit='cover'
                />
            </div>
        </div>
    </div>
  )
}

export default Portfolio
