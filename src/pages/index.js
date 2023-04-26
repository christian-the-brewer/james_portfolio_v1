import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@component/components/Hero'
import { SliderData } from '@component/components/SliderData'
import Slider from '@component/components/Slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <Hero heading='James Rose Photography'
    message='Bringing photos into your face'/>
    <Slider slides={SliderData}/>
  </div>
  )
}
