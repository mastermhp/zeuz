import Image from "next/image"

export default function BrandsLogoScroll() {
  const logos = [
    // Duplicate logos to create seamless scroll effect
    ...Array(2).fill([
      {
        src: "/l1.png?height=50&width=150",
        alt: "Construction Specialties logo",
        width: 150,
        height: 50
      },
      {
        src: "/l2).png?height=50&width=120",
        alt: "SuccessKPI logo",
        width: 120,
        height: 50
      },
      {
        src: "/l3.png?height=50&width=130",
        alt: "Onloop logo",
        width: 130,
        height: 50
      },
      {
        src: "/l4.png?height=50&width=140",
        alt: "EasyFinancial logo",
        width: 140,
        height: 50
      },
      {
        src: "/l5.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l6.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l7.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l8.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l9.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l10.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l11.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l12.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l13.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l14.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l15.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l16.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l17.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l18.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l19.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l20.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l21.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l22.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
      {
        src: "/l23.png?height=50&width=110",
        alt: "TELUS logo",
        width: 110,
        height: 50
      },
    ]).flat()
  ]

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <h3 className="text-2xl font-bold whitespace-nowrap mr-12">
            Trusted brands
          </h3>
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-scroll flex items-center gap-16">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:cursor-pointer transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

