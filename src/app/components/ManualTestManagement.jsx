'use client'

import { useState } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

export function ManualTestManagement() {
  const [activeFeature, setActiveFeature] = useState('centralized')

  const features = [
    {
      id: 'centralized',
      title: 'Centralized Control',
      description: 'Centralized Test Case Repository: ZeuZ allows teams to store and organize manual test cases in a centralized location for easy access and management.'
    },
    {
      id: 'collaboration',
      title: 'Enhanced Collaboration',
      description: 'Enable seamless collaboration between team members with real-time updates and shared test case management.'
    },
    {
      id: 'efficiency',
      title: 'Increased Efficiency',
      description: 'Streamline your testing process with automated workflows and efficient test case organization.'
    },
    {
      id: 'insights',
      title: 'Comprehensive Insights',
      description: 'Gain valuable insights into your testing process with detailed analytics and reporting.'
    }
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-gray-600 mb-2">
                Your Complete Solution for Effortless
              </h2>
              <h3 className="text-4xl font-bold text-gray-900">
                Manual Test Management
              </h3>
            </div>

            <div className="space-y-4">
              {features.map((feature) => (
                <FeatureItem
                  key={feature.id}
                  isActive={activeFeature === feature.id}
                  title={feature.title}
                  description={feature.description}
                  onClick={() => setActiveFeature(feature.id)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gray-800 h-8 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <DashboardBlock color="bg-gray-700" label="TITLE" />
                  <DashboardBlock color="bg-blue-500" label="FOLDER" />
                  <DashboardBlock color="bg-slate-600" label="FEATURE" />
                  <DashboardBlock color="bg-teal-500" label="AUTOMATABILITY" />
                  <DashboardBlock color="bg-orange-500" label="STATUS" />
                  <DashboardBlock color="bg-red-500" label="PRIORITY" />
                  <DashboardBlock color="bg-yellow-600" label="LABEL" />
                  <DashboardBlock color="bg-purple-500" label="DEPENDENCY" />
                  <DashboardBlock color="bg-blue-400" label="VERSION" className="col-span-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ isActive, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer rounded-xl p-6 transition-all duration-300
        ${isActive ? 'bg-purple-100' : 'bg-gray-50 hover:bg-gray-100'}
      `}
    >
      <h4 className={`
        text-lg font-semibold mb-2
        ${isActive ? 'text-purple-900' : 'text-gray-900'}
      `}>
        {title}
      </h4>
      {isActive && (
        <p className="text-purple-700 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

FeatureItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

function DashboardBlock({ color, label, className = '' }) {
  return (
    <div className={`${className} rounded-lg overflow-hidden`}>
      <div className={`${color} text-white text-center py-3 text-sm font-medium`}>
        {label}
      </div>
    </div>
  )
}

DashboardBlock.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
}

