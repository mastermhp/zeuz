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
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="w-full pt-24 pb-16 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="relative container mx-auto px-4">
        {/* Left Badge */}
        <div className="absolute mt-40 mx-14">
          <div className="inline-flex items-center rounded-full bg-pink-50 px-4 py-3">
            <div className="mr-2 rounded-full bg-pink-200 p-1">
              <svg
                className="h-4 w-4 text-pink-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-sm font-bold text-gray-600">
              Seamlessly integrated
              <span className="block -mt-1 text-xs text-gray-400">
                with all platform
              </span>
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
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
        <div className="flex justify-center gap-4 mb-16">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Request Free Demo →
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-pink-500 text-pink-500 font-medium hover:bg-pink-50 transition-colors"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch video
          </Link>
        </div>

        {/* Right Badge */}
        <div className="absolute top-80 right-10 mx-14">
          <div class="relative p-[2px] rounded-full bg-gradient-to-r from-white to-teal-300">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-300 to-white px-4 py-4">
              <div className="mr-1 rounded-full bg-white p-2">
                <svg
                  className="h-4 w-4 text-teal-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-600">
                Write tests quickly
                <span className="block -mt-1 text-xs text-gray-400">
                  No-Code, AI powered
                </span>
              </span>
            </div>
          </div>
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
