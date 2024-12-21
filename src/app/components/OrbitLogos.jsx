import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function OrbitLogos() {
  const logos = [
    { src: "/placeholder.svg?height=40&width=40", alt: "Slack", className: "top-[15%] left-[15%]", size: 40 },
    { src: "/placeholder.svg?height=45&width=45", alt: "GitHub", className: "top-[25%] left-[30%]", size: 45 },
    { src: "/placeholder.svg?height=42&width=42", alt: "Firebase", className: "top-[20%] right-[35%]", size: 42 },
    { src: "/placeholder.svg?height=44&width=44", alt: "JetBrains", className: "top-[10%] right-[20%]", size: 44 },
    { src: "/placeholder.svg?height=40&width=40", alt: "Google", className: "top-[35%] right-[15%]", size: 40 },
    { src: "/placeholder.svg?height=48&width=48", alt: "Discord", className: "bottom-[35%] right-[25%]", size: 48, bgColor: "bg-[#5865F2]" },
    { src: "/placeholder.svg?height=46&width=46", alt: "AWS", className: "bottom-[25%] right-[35%]", size: 46, bgColor: "bg-[#232F3E]" },
    { src: "/placeholder.svg?height=42&width=42", alt: "CircleCI", className: "bottom-[20%] left-[35%]", size: 42, bgColor: "bg-[#343434]" },
    { src: "/placeholder.svg?height=44&width=44", alt: "Jenkins", className: "bottom-[35%] left-[25%]", size: 44 },
  ]

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden">
      <div className="absolute inset-0">
        {/* Orbit circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] border-[1px] border-pink-200/50 rounded-full" />
          <div className="absolute w-[600px] h-[600px] border-[1px] border-pink-200/50 rounded-full" />
          <div className="absolute w-[400px] h-[400px] border-[1px] border-pink-200/50 rounded-full" />
        </div>
        
        {/* Floating logos */}
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`absolute ${logo.className} transform -translate-x-1/2 -translate-y-1/2`}
          >
            <div className={`${logo.bgColor || 'bg-white'} p-2.5 rounded-full shadow-lg`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.size}
                height={logo.size}
                className="w-auto h-auto"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-[32px] font-bold text-[#1A1A1A] leading-tight">
            Seamlessly integrate with a wide range of tools and platforms.
          </h2>
          <p className="text-[#666666] text-lg">
            ZeuZ seamlessly integrates with a wide range of industry-standard tools, ensuring enhanced visibility and control across testing and deployment pipelines.
          </p>
          <Button 
            className="bg-[#E91E63] hover:bg-[#D81B60] text-white rounded-md px-6 py-2.5 inline-flex items-center gap-2 transition-all"
          >
            Learn more
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

