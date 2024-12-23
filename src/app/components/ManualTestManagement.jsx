'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const features = [
  {
    id: 'centralized',
    title: 'Centralized Control',
    description: 'Centralized Test Case Repository: ZeuZ allows teams to store and organize manual test cases in a centralized location for easy access and management.',
    image: '/m1.png'
  },
  {
    id: 'collaboration',
    title: 'Enhanced Collaboration',
    description: 'Detailed Test Case Design: Enables the creation of detailed manual test cases with steps, expected results, and attachments to ensure thorough test coverage.',
    image: '/m2.png'
  },
  {
    id: 'efficiency',
    title: 'Increased Efficiency',
    description: 'Customizable Test Plans: Allows users to build and manage custom test plans, assign test cases to specific testers, and track progress.',
    image: '/m3.png'
  },
  {
    id: 'insights',
    title: 'Comprehensive Insights',
    description: 'Real-Time Test Execution Monitoring: Provides real-time tracking and reporting of manual test execution, with comprehensive logs and metrics to measure performance.',
    image: '/m4.png'
  }
]

export function ManualTestManagement() {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="px-10 mb-10">
        <p className="text-gray-600 mb-3">Your Complete Solution for Effortless</p>
        <h2 className="text-3xl font-bold">Manual Test Management</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Features List */}
        <div className="relative">
          {/* Purple Highlight Bar - Animated */}
          <div 
            className={cn("absolute left-4 w-2 rounded-lg bg-purple-100 transition-all duration-300 ease-in-out", )}
            style={{
              top: `${features.findIndex(f => f.id === activeFeature.id) * 20}%`,
              height: '132px'
            }}
          />

          {/* Feature Buttons */}
          <div className="space-y-4 pl-8">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={cn(
                  "w-[448px] text-left px-6 rounded-lg transition-all duration-300",
                  "hover:bg-purple-50",
                  activeFeature.id === feature.id ? "bg-purple-100 h-[132px]" : "bg-gray-100 h-[52px]"
                )}
              >
                <h3 className="text-sm">{feature.title}</h3>
                {activeFeature.id === feature.id && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Preview */}
        <div className="relative rounded-2xl px-4 pt-2 min-h-[400px]">
          <div className="bg-white rounded-lg overflow-hidden">
            
            {/* Image Container */}
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={activeFeature.image}
                alt={`${activeFeature.title} interface preview`}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



