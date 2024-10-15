"use client";
// main h- is at hero hightlight .tsc


import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";









import React from 'react'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HeroHighlight,Highlight } from '@/components/ui/h2';

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";


import { WobbleCard } from "@/components/ui/wobble-card";
import { cn } from "@/lib/utils"

const Blogs = () => {
  return (
    <div
    className="h-auto md:h-[60rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Contact Us</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our Experiences Gained from Hit-n-trials. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            
                {/* <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>
                </Link> */}
                <WobbleCardDemo/>
            
        </div>
        
        </div>
    // <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    //   {/* <BG/> */}
      
    //   {/* <BG2/> */}
    //   <h1
    //         className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
    //         >Master the art of music</h1>
    //   <BlogCard/>

      
    // </main>
  )
}





export default Blogs







const WobbleCardDemo= () =>  {
  return (
    <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2  h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >        {/* added padding py-20 .its forced */}
        <div className="max-w-md pt-10">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Pervasive Sensing & Intelligent Assistive Systems Lab
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          PerSIsst Labs,

Department of Human Centered Design, <br />
Indraprastha Institute of Information Technology Delhi (IIIT-Delhi) ,<br />

New Delhi, Delhi 110020
          </p>
        </div>
        {/* <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}

<div className="flex py-5 justify-left space-x-2">
  <Link href="https://www.linkedin.com/in/pragma-kar-9419143a/" target="_blank" style={{ pointerEvents: 'auto' }}>
    <Image
      src="/images/icons/ln.png"
      height="50"
      width="30"
      className="object-cover group-hover/card:shadow-xl"
      alt="LinkedIn"
    />
  </Link>

  <Link href="https://scholar.google.com/citations?user=WSX1ovsAAAAJ&hl=en" target="_blank" style={{ pointerEvents: 'auto' }}>
    <Image
      src="/images/icons/gs.png"
      height="50"
      width="30"
      className="object-cover group-hover/card:shadow-xl"
      alt="Google Scholar"
    />
  </Link>

  <Link href="https://iiitd.irins.org/profile/554054" target="_blank" style={{ pointerEvents: 'auto' }}>
    <Image
      src="/images/icons/id.png"
      height="50"
      width="30"
      className="object-cover group-hover/card:shadow-xl"
      alt="IRINS Profile"
    />
  </Link>

  <Link href="https://www.iiitd.ac.in/pragma" target="_blank" style={{ pointerEvents: 'auto' }}>
    <Image
      src="/images/icons/web.png"
      height="50"
      width="30"
      className="object-cover group-hover/card:shadow-xl"
      alt="Personal Website"
    />
  </Link>
</div>
      </WobbleCard>
      <div className="col-span-1 rounded-2xl overflow-hidden">
  <iframe
    className="rounded-2xl"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.827615231125!2d77.26982302618208!3d28.544900738053585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1726605696874!5m2!1sen!2sin"
    width="400"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
     
      {/* <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard> */}
    </div>
  );
}
