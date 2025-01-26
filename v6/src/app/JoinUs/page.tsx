import { section } from 'framer-motion/client'
import React from 'react'
import OurTeam from '@/components/OurTeam'
import OpenPositions from '@/components/OpenPositions'
function page() {
  return (
    <section className='bg-slate-950'>
        <OpenPositions />
        <OurTeam />
    </section>
  )
}

export default page