import React from 'react'
import Link from 'next/link'
import { WavyBackground } from './ui/wavy-background'
import { FlipWords } from './ui/flip-words'
import Image from 'next/image'

const Hero = () => {
    const words = ["Pervasive", "Sensing", "Intelligent", "Assistive"];

  return (
    
    <div 
    className='h-auto md:h-[50rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
    >
        <WavyBackground className="max-w-4xl mx-auto pb-30">
            <div className='p-4 relative z-10 w-full text-center' >
                <p className="text-base md:text-3xl mt-4 text-white font-bold inter-var text-center">
                Innovating for Smart Living through 
                </p>

                
                {/* <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                Pervasive Systems
                
                </p> */}
                <h1 className='mt-0 md:mt-0 text-4xl md:text-7xl font-bold '><FlipWords words={words} />Systems</h1>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab develops intelligent, assistive solutions using advanced sensing to address challenges in cognition and smart living. 
                </p> 
                    
                    <div className="m-7 flex justify-center text-center">
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  <Image
              src='/images/PerSIsst_Final 1.svg'
              alt='persisst logo'
              width={25}
              height={100}
              className="mr-2"
              
              
            /> <Link href={"/Research"}>     
Explore Research </Link>
  </span>
</button>

                    </div>
            </div>
        </WavyBackground>
        
    </div>
  )
}

export default Hero


// Innovating for Smart Living through 
// Pervasive Systems

// The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab develops intelligent, assistive solutions using advanced sensing to address challenges in cognition and smart living.

// Explore Our Research

{/* <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
Innovating for Smart Living through 
</p>
<p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
Pervasive Systems
</p>
<p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab develops intelligent, assistive solutions using advanced sensing to address challenges in cognition and smart living. 
</p> */}


{/* <div className='p-4 relative z-10 w-full text-center'>
            
<h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Welcome to the future</h1>
<p className='mt-4 font-normal text-base md:text-lg text-neutral-300 mg-w-lg mx-auto'>The future is now, and it's here to stay</p>
<div>
    <Link href={"/About"}>Explore Research</Link></div>


</div> */}