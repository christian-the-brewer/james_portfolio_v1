import Hero from '@component/components/Hero'
import Portfolio from '@component/components/Portfolio'
import React from 'react'

function work() {
  return (
    <div>
        <Hero 
        heading={'My Work'}
        message={'Photos by James for James'}
        />
        <Portfolio />
    </div>
  )
}

export default work