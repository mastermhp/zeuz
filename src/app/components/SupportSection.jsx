import { Clock, Users, BookOpen, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SupportSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 px-8">
            <h2 className="text-[32px] font-bold text-[#1A1A1A]">
              Support & Training
            </h2>
            <p className="text-[#666666] text-lg leading-relaxed">
              ZeuZ test automation tool offers a comprehensive support system to
              ensure users can effectively utilize its robust features. This
              support is designed to address a variety of needs, from
              troubleshooting to enhancing user knowledge, making sure that
              teams can maintain a seamless testing process. Clients can choose
              from different tiers of support, each with customized pricing
              plans to best fit their specific requirements.
            </p>
            <Button className="bg-[#ED2C92] hover:bg-[#D81B60] text-white rounded-[8px] p-6 inline-flex items-center gap-2 transition-all">
              Learn more
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid gap-6 ">
            {/* {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start w-[391px] h-[77px] gap-6 px-6 bg-white rounded-lg shadow-md hover:shadow-md transition-shadow"
              >
                <div className="p-1 rounded-lg">
                  <feature.icon className="w-6 h-6 text-[#E91E63]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm text-[#1A1A1A]">{feature.title}</h3>
                  <p className="text-[#666666] text-xs leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))} */}
            <div className="flex ml-36 w-[391px] h-[77px] gap-6 px-3 bg-white rounded-lg shadow-md hover:shadow-md transition-shadow">
              <div className="">
                <img
                  src="/24:7.gif"
                  alt="Animated GIF"
                  width="100"
                  height="100"
                />

                {/* <Clock className="w-6 h-6 text-[#E91E63]" /> */}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm text-[#1A1A1A]">
                  24/7 Technical Support
                </h3>
                <p className="text-[#666666] text-xs leading-relaxed">
                  Access to round-the-clock assistance over Discord Channel to
                  resolve any technical issues or queries
                </p>
              </div>
            </div>

            <div className="flex ml-16 w-[391px] h-[77px] gap-6 px-6 bg-white rounded-lg shadow-md hover:shadow-md transition-shadow">
              <div className="">
                <img
                  src="/support.gif"
                  alt="Animated GIF"
                  width="100"
                  height="100"
                />

                {/* <Clock className="w-6 h-6 text-[#E91E63]" /> */}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm text-[#1A1A1A]">
                  Dedicated Support Team
                </h3>
                <p className="text-[#666666] text-xs leading-relaxed">
                  A specialized team focused on providing personalized help for
                  complex issues.
                </p>
              </div>
            </div>
            <div className="flex ml-28 w-[391px] h-[77px] gap-6 px-6 bg-white rounded-lg shadow-md hover:shadow-md transition-shadow">
            <div className="">
                <img
                  src="/ckb.gif"
                  alt="Animated GIF"
                  width="100"
                  height="100"
                />

                {/* <Clock className="w-6 h-6 text-[#E91E63]" /> */}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm text-[#1A1A1A]">
                  Comprehensive Knowledge Base
                </h3>
                <p className="text-[#666666] text-xs leading-relaxed">
                  An extensive library of resources, including FAQs,
                  documentation, and troubleshooting guides.
                </p>
              </div>
            </div>
            <div className="flex w-[391px] h-[77px] gap-6 px-6 bg-white rounded-lg shadow-md hover:shadow-md transition-shadow">
            <div className="">
                <img
                  src="/upd.gif"
                  alt="Animated GIF"
                  width="100"
                  height="100"
                />

                {/* <Clock className="w-6 h-6 text-[#E91E63]" /> */}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm text-[#1A1A1A]">
                  Regular Updates and Patches
                </h3>
                <p className="text-[#666666] text-xs leading-relaxed">
                  Ongoing improvements and bug fixes to keep the tool updated
                  and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
