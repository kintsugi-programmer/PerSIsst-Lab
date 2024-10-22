import Hero from "@/components/Hero";
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      {/*<div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
             <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={Reviews}
                direction="right"
                speed="slow"
      />
            </div> 
        </div>
    </div>*/}
    </main>
  );
}
const Reviews = [
  {
    quote:
      'My experience at the Persisst Lab has not only deepened my understanding of web development but also fostered meaningful connections with a supportive team and a wise, humble professor. They encourage creativity and collaboration, helping me grow more reliable than focused solely on perfectionism.',
    name: 'Siddhant Bali',
    title: 'B.Tech. CSD 2026 Batch',
  },
  {
    quote:
      'I joined Persist when it was just an idea, and I’ve seen the dedication and innovation that fuel the lab. What stands out most is the professor’s unwavering support. Her mentorship was crucial when I struggled and helped me a lot during project. Every project is a chance to learn and grow through trial and success.',
    name: 'Vinay Kumar Dubey',
    title: 'B.Tech. CSD 2026 Batch',
  },
  {
    quote:
      'I joined PerSIsst Lab to design the website, helping to realize the lab’s vision through a digital platform. Working closely with the professor and team, I shaped how their groundbreaking research is presented. This experience has allowed me to learn and refine my skills while creating a user-friendly site that reflects the lab\'s mission and values.',
    name: 'Daksh',
    title: 'B.Tech. CSD 2026 Batch',
  },
  

];
