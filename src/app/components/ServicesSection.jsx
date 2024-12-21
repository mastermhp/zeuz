import { Button } from '@/components/ui/button'
import { Code, Settings, Shield, Users, Zap } from 'lucide-react'
import PropTypes from 'prop-types'

export function ServicesSection() {
  return (
    <div className="bg-purple-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Expert Professional Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Code className="w-8 h-8" />}
            title="Technical Consulting"
            description="Expert guidance on test automation strategy and implementation"
          />
          <ServiceCard
            icon={<Users className="w-8 h-8" />}
            title="Training Programs"
            description="Comprehensive training for your team on ZeuZ platform"
          />
          <ServiceCard
            icon={<Shield className="w-8 h-8" />}
            title="Testing Services"
            description="End-to-end testing solutions for your applications"
          />
          <ServiceCard
            icon={<Settings className="w-8 h-8" />}
            title="Custom Solutions"
            description="Tailored solutions for your specific testing needs"
          />
          <ServiceCard
            icon={<Zap className="w-8 h-8" />}
            title="Implementation Support"
            description="Full support during platform implementation"
          />
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
            Contact Us →
          </Button>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 space-y-4">
      <div className="text-purple-600">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

