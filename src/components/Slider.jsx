import React from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'

function Slider({slides}) {
  return (
    <div className='gallery'>
    <h1>Gallery</h1>
    <div>
        {SliderData.map((slide, index) => {
            return (
                <Image src={slide.imageUrl} 
                width='1440' 
                height='600' 
                objectFit='cover' />
            )
        })}
    </div>
    </div>
  )
}

export default Slider