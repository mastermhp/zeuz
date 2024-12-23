// import { Button } from '@/components/ui/button'
// import { Globe, Smartphone, Monitor, Database, Radio, BarChart3, Workflow } from 'lucide-react'
// import PropTypes from 'prop-types'

// export function HeroSection() {
//   return (
//     <div className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center space-y-8">
//           <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow-sm">
//             <div className="p-1 bg-pink-100 rounded-full">
//               <Workflow className="w-4 h-4 text-pink-500" />
//             </div>
//             <span className="text-sm">
//               Seamlessly integrated
//               <span className="text-gray-500 ml-1">with ai platform</span>
//             </span>
//           </div>

//           <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">
//             <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
//               AI-Powered
//             </span>
//             <br />
//             <span className="text-gray-800 mt-4 block">
//               No-code Automation
//               <br />
//               Platform for Everyone
//             </span>
//           </h1>

//           <div className="flex flex-wrap justify-center gap-8 text-gray-600 my-12">
//             <PlatformIcon Icon={Globe} label="Web" />
//             <PlatformIcon Icon={Smartphone} label="Mobile" />
//             <PlatformIcon Icon={Monitor} label="Desktop" />
//             <PlatformIcon Icon={Workflow} label="API" />
//             <PlatformIcon Icon={BarChart3} label="Performance" />
//             <PlatformIcon Icon={Database} label="Database" />
//             <PlatformIcon Icon={Radio} label="IOT" />
//           </div>

//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
//               Request Free Demo →
//             </Button>
//             <Button size="lg" variant="outline" className="rounded-full">
//               Watch video ▶
//             </Button>
//           </div>

//           <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
//             <Stat number="1" label="Automated tests run" />
//             <Stat number="1" label="Year's in market" />
//             <Stat number="1" label="Cross Platforms" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function PlatformIcon({ Icon, label }) {
//   return (
//     <div className="flex flex-col items-center gap-2">
//       <Icon className="w-6 h-6" />
//       <span className="text-sm">{label}</span>
//     </div>
//   )
// }

// PlatformIcon.propTypes = {
//   Icon: PropTypes.elementType.isRequired,
//   label: PropTypes.string.isRequired
// }

// function Stat({ number, label }) {
//   return (
//     <div className="text-center">
//       <div className="text-4xl font-bold text-gray-800">{number}</div>
//       <div className="text-sm text-gray-600 mt-1">{label}</div>
//     </div>
//   )
// }

// Stat.propTypes = {
//   number: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired
// }

"use client";

import {
  Globe,
  Smartphone,
  Monitor,
  Database,
  Radio,
  BarChart3,
  Play,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedBadge } from "./AnimatedBadge";

export function HeroSection() {
  return (
    <div className="w-full pt-24 pb-16 bg-[#F2EAFF]">
      <div className="relative container mx-auto px-4">
        {/* Left Badge */}
        <div style={{transition: 'all .35s'}} className="absolute top-40 mx-14 hover:top-[150px]">
          <AnimatedBadge />
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7723b7] to-pink-500 bg-clip-text text-transparent">
              AI-Powered
            </span>
          </h1>
          <h2 className="text-5xl font-bold text-gray-800">
            No-code Automation
            <br />
            Platform for Everyone
          </h2>
        </div>

        {/* Platform Icons */}
        <div className="flex justify-center gap-8 mb-12">
          {[
            { icon: Globe, text: "Web" },
            { icon: Smartphone, text: "Mobile" },
            { icon: Monitor, text: "Dextop" },
            { text: "API" },
            { icon: BarChart3, text: "Performance" },
            { icon: Database, text: "Database" },
            { icon: Radio, text: "IOT" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {item.icon && <item.icon className="h-6 w-6 text-gray-600" />}
              {!item.icon && (
                <div className="h-6 w-6 text-gray-600 font-bold">API</div>
              )}
              <span className="text-sm text-gray-600">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-16 drop-shadow-2xl">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-[8px] bg-[#ED2C92] text-white font-medium hover:opacity-90 transition-opacity"
          >
            <span>Request Free Demo →</span>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-[8px] border-2 border-[#ED2C92] text-[#ED2C92] font-medium hover:text-white hover:border-[#7723b7] transition-colors"
          >
            <span className="flex">
              Watch video
              <Play className="w-4 h-6 ml-2" />
            </span>
          </Link>
        </div>

        {/* Right Badge */}
        <div style={{transition: 'all .35s'}} className="absolute top-80 right-10 mx-14 hover:top-[310px] translate-y-6">
          <div className="flex items-center gap-3 w-fit px-3 py-[12px] pr-8 rounded-full bg-gradient-to-r from-[#ABEAEA] to-[#FFFFFF] border border-[#ABEAEA] backdrop-blur-[195px]">
            <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <Image src="/sparkles.png" width={32} height={32} />
              {/* <Sparkles className="w-6 h-6 text-[#ABEAEA]" /> */}
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium">Write tests quickly</span>
              <span className="text-sm text-gray-600">No-Code, AI powered</span>
            </div>
          </div>
          {/* <div class="relative p-[2px] rounded-full bg-gradient-to-r from-white to-teal-300">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-300 to-white px-4 py-4">
              <div className="mr-1 rounded-full bg-white p-2">
                <Image
                src='/sparkles.png'
                width={32}
                height={32}
                />
              </div>
              <span className="text-sm font-bold text-gray-600">
                Write tests quickly
                <span className="block -mt-1 text-xs text-gray-400">
                  No-Code, AI powered
                </span>
              </span>
            </div>
          </div> */}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-900 mb-2">11 M</div>
            <div className="text-sm text-gray-600">Automated tests run</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-900 mb-2">11</div>
            <div className="text-sm text-gray-600">Year's in market</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-900 mb-2">7</div>
            <div className="text-sm text-gray-600">Cross Platforms</div>
          </div>
        </div>
      </div>
    </div>
  );
}
