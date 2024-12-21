import { Button } from '@/components/ui/button'
import { Globe, Smartphone, Monitor, Database, Radio, BarChart3, Workflow } from 'lucide-react'
import PropTypes from 'prop-types'

export function HeroSection() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow-sm">
            <div className="p-1 bg-pink-100 rounded-full">
              <Workflow className="w-4 h-4 text-pink-500" />
            </div>
            <span className="text-sm">
              Seamlessly integrated
              <span className="text-gray-500 ml-1">with ai platform</span>
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              AI-Powered
            </span>
            <br />
            <span className="text-gray-800 mt-4 block">
              No-code Automation
              <br />
              Platform for Everyone
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-8 text-gray-600 my-12">
            <PlatformIcon Icon={Globe} label="Web" />
            <PlatformIcon Icon={Smartphone} label="Mobile" />
            <PlatformIcon Icon={Monitor} label="Desktop" />
            <PlatformIcon Icon={Workflow} label="API" />
            <PlatformIcon Icon={BarChart3} label="Performance" />
            <PlatformIcon Icon={Database} label="Database" />
            <PlatformIcon Icon={Radio} label="IOT" />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
              Request Free Demo →
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Watch video ▶
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <Stat number="1" label="Automated tests run" />
            <Stat number="1" label="Year's in market" />
            <Stat number="1" label="Cross Platforms" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PlatformIcon({ Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className="w-6 h-6" />
      <span className="text-sm">{label}</span>
    </div>
  )
}

PlatformIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired
}

function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-gray-800">{number}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  )
}

Stat.propTypes = {
  number: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

