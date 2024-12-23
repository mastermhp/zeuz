import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      icon: "/ss1.gif",
      title: "Tailored QA Solutions",
      description:
        "Boost efficiency and quality with customized and scalable testing services.",
    },
    {
      icon: "/ss2.gif",
      title: "Plug & play off-shore resources",
      description:
        "Boost efficiency and quality with customized and scalable testing services.",
    },
    {
      icon: "/ss3.gif",
      title: "Flexible Models",
      description:
        "Boost efficiency and quality with customized and scalable testing services.",
    },
    {
      icon: "/ss4.gif",
      title: "Fully Managed",
      description:
        "Boost efficiency and quality with customized and scalable testing services.",
    },
    {
      icon: "/ss5.gif",
      title: "High-level Consultancy",
      description:
        "Boost efficiency and quality with customized and scalable testing services.",
    },
  ];

  return (
    <div className="bg-[#5A1CB5] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Expert Professional Services
          </h2>
          <p className="text-white/80">
            Allowing teams to focus on delivering quality results swiftly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl -mx-16 mt-6">
          <div className="lg:col-start-2 md:col-span-1 lg:col-span-1">
            <ServiceCard {...services[3]} />
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <ServiceCard {...services[4]} />
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="" className="bg-[#ED2C92] hover:border-[#3a1d67] text-white rounded-md px-6 py-2.5 inline-flex items-center gap-2 text-sm font-medium">
            <span className="flex items-center justify-center">
            Learn more
            <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg h-full">
      <div className="mb-6">
        <img src={icon} alt="" className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
