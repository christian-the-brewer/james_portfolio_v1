import Contact from '@component/components/Contact'
import Hero from '@component/components/Hero'
import React from 'react'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact'
        message='Submit below to reach out to me.'
        />
        <Contact />
    </div>
  )
}

export default contact