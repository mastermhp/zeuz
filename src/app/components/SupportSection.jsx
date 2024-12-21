import { Clock, Users, BookOpen, RefreshCw, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function SupportSection() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Technical Support",
      description: "Access to round-the-clock assistance over Discord Channel to resolve any technical issues or queries"
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "A specialized team focused on providing personalized help for complex issues."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Knowledge Base",
      description: "An extensive library of resources, including FAQs, documentation, and troubleshooting guides."
    },
    {
      icon: RefreshCw,
      title: "Regular Updates and Patches",
      description: "Ongoing improvements and bug fixes to keep the tool updated and secure."
    }
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-[#1A1A1A]">Support & Training</h2>
            <p className="text-[#666666] text-lg leading-relaxed">
              ZeuZ test automation tool offers a comprehensive support system to ensure users can effectively utilize its robust features. This support is designed to address a variety of needs, from troubleshooting to enhancing user knowledge, making sure that teams can maintain a seamless testing process. Clients can choose from different tiers of support, each with customized pricing plans to best fit their specific requirements.
            </p>
            <Button 
              className="bg-[#E91E63] hover:bg-[#D81B60] text-white rounded-md px-6 py-2.5 inline-flex items-center gap-2 transition-all"
            >
              Learn more
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2.5 rounded-lg bg-[#E91E63]/10">
                  <feature.icon className="w-6 h-6 text-[#E91E63]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#1A1A1A]">{feature.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

