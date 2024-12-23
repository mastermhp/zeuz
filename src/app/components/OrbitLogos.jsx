import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function OrbitLogos() {
  const logos = [
    { src: "/slack.png?height=40&width=40", alt: "Slack", className: "top-[52px] left-[215px]", size: 40 },
    { src: "/github.png?height=45&width=45", alt: "GitHub", className: "top-[117px] left-[370px]", size: 45 },
    { src: "/firebase.png?height=42&width=42", alt: "Firebase", className: "top-[344px] left-[485px]", size: 42 },
    { src: "/azure.png?height=44&width=44", alt: "JetBrains", className: "top-[266px] left-[250px]", size: 44 },
    { src: "/google.png?height=40&width=40", alt: "Google", className: "top-[35%] right-[14%]", size: 40 },
    { src: "/discord.png?height=50&width=50", alt: "Discord", className: "top-[271px] right-[25%] rounded-full", bgColor: 'bg-[#171dbd]', size: 50 },
    { src: "/eye.png?height=46&width=46", alt: "AWS", className: "top-[141px] left-[70px]", size: 46 },
    { src: "/circleci.png?height=42&width=42", alt: "CircleCI", className: "top-[405px] left-[155px]", size: 42},
    { src: "/jenkins.png?height=44&width=44", alt: "Jenkins", className: "top-[71px] left-[1300px]", size: 44 },
    { src: "/arr.png?height=44&width=44", alt: "arr", className: "top-[363px] left-[1237px]", bgColor: 'bg-transparent', size: 44 },
    { src: "/amazon.png?height=44&width=44", alt: "arr", className: "top-[455px] left-[990px]", bgColor: 'bg-transparent', size: 44 },
    { src: "/bitbucket.png?height=44&width=44", alt: "arr", className: "top-[525px] left-[500px]", bgColor: 'bg-transparent', size: 44 },
  ]

  return (
    <section className="relative  min-h-[600px] bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden">
      <div className="absolute inset-0">
        {/* Orbit circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[1233px] h-[1233px] top-[-526px] border-[2px] border-[#FFBDE3] rounded-full" />
          <div className="absolute w-[943px] h-[943px] top-[-378px] border-[2px] border-[#FFBDE3] rounded-full" />
          <div className="absolute w-[631px] h-[643px] top-[-228px] border-[2px] border-[#FFBDE3] rounded-full" />
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
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div 
      style={{
        width: '510px',
        height: '259px'
      }}
      className="relative container mx-auto px-4 py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="w-[510px] h-[70px] text-[32px] font-bold text-[#1A1A1A] leading-tight">
            Seamlessly integrate with a wide range of tools and platforms.
          </h2>
          <p style={{fontWeight: '400px'}} className="text-[#666666] text-[18px]">
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

