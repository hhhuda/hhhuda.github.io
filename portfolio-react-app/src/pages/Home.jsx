// import React from 'react'
// import {HiArrowNarrowRight} from 'react-icons/hi'

// const Home = () => {
//   return (
//     <div name='home' className='w-full h-screen bg-[#233342]'>
//         { /* container */ }
//         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
//             <p className='text-pink-600'>Hello, my name is</p>
//             <h1 className='font-navbar sm:text-9xl font-bold tracking-wider text-[#ccd6f6]'>Huda Mahmood</h1>
//             <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
//             <p className='text-[#889260] py-4 max-w-[700px]'>I'm a third-year university student pursuing a Bachelor of Science (Computer Science) / Arts with a passion for creating. </p>
//             <div>
//                 <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
//                 {/* adding group to both the button and arrow make it so the rotate occurs when you hover over the button, not just the arrow */}
//                 <span className='group-hover:rotate-90 duration-300'>
//                     <HiArrowNarrowRight className='ml-3'/>
//                 </span>
//                 </button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Home

import React from "react";
import Hero from "../components/portfolio/Hero";
import WhatIDo from "../components/portfolio/WhatIDo";
import Work from "../components/portfolio/Work";
import Contact from "../components/portfolio/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhatIDo />
      <Work />
      <Contact />
    </div>
  );
}