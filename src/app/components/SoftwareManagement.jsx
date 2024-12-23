'use client'

import { Button } from "@/components/ui/button"
import { Bot, Settings, FileText, Boxes, Clock, Users } from 'lucide-react'
import PropTypes from 'prop-types'

export function SoftwareManagement() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-purple-600 font-semibold mb-4">AI Powered</h2>
          <h3 className="text-4xl font-bold text-gray-800">
            END-END Software Management
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={<Bot className="w-6 h-6" />}
            title="AI powered & All-in-One"
            description="Feature Overview: Automate across popular web browsers like Chrome, Edge, Firefox, Safari, and Opera for unmatched testing reach."
            highlight
          />
          <FeatureCard
            icon={<Settings className="w-6 h-6" />}
            title="Project Management"
            description="ZeuZ streamlines project management with issue tracking, milestones, and collaboration tools, promoting efficient progress and organization."
            highlight
          />
          <FeatureCard
            icon={<FileText className="w-6 h-6" />}
            title="Reporting"
            description="ZeuZ provides detailed and customizable reporting options, offering insights into test execution, load performance, and overall automation effectiveness."
            highlight
          />
          <FeatureCard
            icon={<Boxes className="w-6 h-6" />}
            title="Integrations"
            description="Feature Overview: Automate across popular web browsers like Chrome, Edge, Firefox, Safari, and Opera for unmatched testing reach."
            highlight
          />
          <FeatureCard
            icon={<Clock className="w-6 h-6" />}
            title="CI/CD & Scheduling"
            description="ZeuZ integrates seamlessly with popular CI/CD tools, allowing automated tests to run as part of the software development lifecycle, ensuring continuous quality."
            highlight
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Expert professional service"
            description="ZeuZ provides expert guidance, staff augmentation, and end-to-end project management, boosting team capabilities and ensuring project success."
            highlight
          />
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#ED2C92] hover:bg-pink-600 text-white rounded-[8px]"
          >
            All Features →
          </Button>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description, variant = 'default', highlight = false }) {
  return (
    <div 
      className={`
        group relative p-6 rounded-xl transition-all duration-300 ease-in-out bg-pink-50 hover:from-purple-900 hover:to-purple-900
        hover:shadow-xl hover:scale-105
        hover:bg-gradient-to-br
        hover:text-white
        hover:cursor-pointer
      `}
    >
      <div className={`
        mb-4 inline-flex p-2 rounded-lg
        ${highlight ? 'bg-pink-50 text-pink-500' : 
          variant === 'purple' ? 'bg-purple-800 text-white' : 
          'bg-gray-100 text-gray-600'}
        group-hover:bg-white/20 group-hover:text-white
        transition-colors duration-300
      `}>
        {icon}
      </div>
      <h3 className={`
        text-lg font-semibold mb-2
        ${variant === 'purple' ? 'text-white' : 'text-gray-800'}
        group-hover:text-white
      `}>
        {title}
      </h3>
      <p className={`
        text-sm leading-relaxed
        ${variant === 'purple' ? 'text-purple-100' : 'text-gray-600'}
        group-hover:text-white/90
      `}>
        {description}
      </p>
    </div>
  )
}

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'purple']),
  highlight: PropTypes.bool
}

FeatureCard.defaultProps = {
  variant: 'default',
  highlight: false
}

