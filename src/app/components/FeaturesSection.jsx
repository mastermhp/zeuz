import PropTypes from "prop-types";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import BrandsLogoScroll from "./BrandsLogoScroll";

export function FeaturesSection() {
  const features = [
    {
      title: "Test Management Coverage",
      description:
        "Create, assign, and track tasks with deadlines, priorities, and dependencies for effective project planning and execution.",
      imgSrc: "/i1.png",
    },
    {
      title: "Version Comparison",
      description:
        "Foster collaboration and communication among team members with chat.",
      imgSrc: "/i2.png",
    },
    {
      title: "Kanban View",
      description:
        "Monitor project performance metrics, track progress against goals, and generate project status reports for stakeholders.",
      imgSrc: "/i3.png",
    },
    {
      title: "Complete Project Management",
      description:
        "Allocate resources, manage workloads, and schedule tasks and milestones to optimize resource utilization and project timelines.",
      imgSrc: "/i4.png",
    },
    {
      title: "Integration with third-party tools",
      description:
        "Integrate with popular productivity tools such as G Suite, Jira, and Slack for seamless workflow integration.",
      imgSrc: "/i5.png",
    },
    {
      title: "All in One Platform",
      description:
        "Combine all your tools and workflows in one powerful platform.",
      imgSrc: "/i6.png",
    },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="container mx-auto px-4 py-16">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-8">
              {/* Headings */}
              <div className="space-y-4">
                <h2 className="text-purple-500 font-medium">
                  Why ZeuZ is Unique
                </h2>
                <h1 className="text-4xl font-bold leading-tight">
                  The game-changer in test automation.
                </h1>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg">
                ZeuZ brings together deep industry insights and cutting-edge
                technology to deliver a test automation platform designed for
                the demands of today's software landscape.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 ">
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="text-gray-600" />
                    <span>AI-Driven Simplicity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-gray-600" />
                    <span>Comprehensive Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-gray-600" />
                    <span>Adaptability and Scalability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-gray-600" />
                    <span>Expert Professional Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-gray-600" />
                    <span>Seamless Integration</span>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="" />
                    <span>Robust Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-gray-600" />
                    <span>User-Centric Innovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-gray-600 " />
                    <span>Cost Efficiency and ROI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-gray-600" />
                    <span>All-in-One Powerhouse</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className="group px-6 py-3 border-2 border-[#FF29A4] text-[#FF29A4] "
                style={{
                  width: "169px",
                  height: "51px",
                }}
                variant="outline"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Platform Interface Image */}
            <div className="relative top-28">
              <Image
                src="/Container.png"
                alt="ZeuZ Platform Interface"
                width={600}
                height={400}
                className=""
              />
            </div>
          </div>

          {/* Trusted Brands */}
          <BrandsLogoScroll />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="relative bg-gradient-to-l from-[#944BFF] to-[#4D189C] rounded-[32px] overflow-visible">
            <div
              className="absolute"
              style={{
                width: "404px",
                height: "46px",
                top: "335.03px",
                left: "698px",
                opacity: "0.82",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #000000 0%, #276484 100%)",
                filter: "blur(17px)",
                borderRadius: "50%",
              }}
            />

            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              {/* Content */}
              <div className="text-white space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  ZeuZ AI: Intelligent
                  <br />
                  Test Optimization
                </h2>

                <ul className="space-y-6">
                  {[
                    "Leverage AI to prioritize, generate, and execute test cases",
                    "Significantly reduce testing time",
                    "Enhancing coverage and accuracy",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-white/90"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-md text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  style={{
                    width: "169px",
                    height: "51px",
                    // top: '335.03px',
                    // left: '698px',
                    // opacity: '0.82',
                    background: "#ED2C92",
                    // filter: 'blur(17px)',
                    // borderRadius: '50%'
                  }}
                  className=" hover:bg-pink-600 text-white rounded-[8px] px-6 py-3 text-lg"
                >
                  Learn more →
                </Button>
              </div>

              {/* Robot Image */}
              <div className="relative flex justify-end">
                <div className="absolute -top-96 right-0 w-[580px]">
                  <Image
                    src="/robo.png"
                    alt="AI Robot Assistant"
                    width={580}
                    height={560}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="space-y-16">
          <h2 className="text-3xl font-bold text-center">
            We Solve Challenges in Complexity in Modern Testing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border rounded-lg p-4">
                <Image
                  src="/placeholder.svg"
                  alt={`Dashboard ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div> */}

        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="mx-28 text-xl font-bold text-gray-900 sm:text-4xl">
              We Solve Challenges & Complexity in Modern Testing
            </h2>
            <p className="mt-4 mx-28 text-xl text-gray-500">
              ZeuZ provides innovative solutions that use Machine Learning and
              Artificial Intelligence to streamline complex workflows with
              flexibility and agility.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-5 max-w-7xl mx-auto">
            {/* First Row */}
            <div className="col-span-5 bg-white rounded-lg shadow-md p-6 flex flex-col items-start space-y-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {features[0].title}
              </h3>
              <p className="text-gray-600">{features[0].description}</p>
              <img
                src={features[0].imgSrc}
                alt={features[0].title}
                className="w-full rounded pt-6"
              />
            </div>
            <div className="col-span-3 bg-white rounded-lg shadow-md p-6 flex flex-col items-start space-y-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {features[1].title}
              </h3>
              <p className="text-gray-600">{features[1].description}</p>
              <img
                src={features[1].imgSrc}
                alt={features[1].title}
                className="w-full rounded pt-6"
              />
            </div>
            <div className="col-span-4 bg-white rounded-lg shadow-md p-6 flex flex-col items-start space-y-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {features[2].title}
              </h3>
              <p className="text-gray-600">{features[2].description}</p>
              <img
                src={features[2].imgSrc}
                alt={features[2].title}
                className="w-full rounded pt-12"
              />
            </div>

            {/* Second Row */}
            <div className="col-span-6 bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
              <h3 className="text-lg font-semibold text-gray-900">
                {features[3].title}
              </h3>
              <p className="text-gray-600">{features[3].description}</p>
              <img
                src={features[3].imgSrc}
                alt={features[3].title}
                className="w-full rounded"
              />
            </div>
            <div className="col-span-6">
              <div className="mb-2 bg-white rounded-lg shadow-md gap-1 p-3 flex flex-col items-start">
                <h3 className="text-md font-semibold text-gray-900">
                  {features[4].title}
                </h3>
                <p className="text-xs text-gray-600">
                  {features[4].description}
                </p>
                <img
                  src={features[4].imgSrc}
                  alt={features[4].title}
                  className="w-full rounded"
                />
              </div>
              <div className="bg-white rounded-lg shadow-md pt-3 pl-3 pr-0 flex flex-col">
                <div className="flex justify-center gap-20">
                  <div className="flex justify-center items-center ">
                    <h3 className="text-md ml-4 text-center font-semibold text-gray-900">
                      {features[5].title}
                    </h3>
                  </div>
                    <div className=""><img
                      src={features[5].imgSrc}
                      alt={features[5].title}
                      className="w-full rounded"
                    /></div>
                </div>
                {/* <div className="row-span-2">
                  <h3 className="text-md font-semibold text-gray-900">
                    {features[5].title}
                  </h3>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-1">
        <Check className="w-5 h-5" />
      </span>
      <span className="text-lg text-white/90">{children}</span>
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

function FeatureCard({ title, description, imageSrc }) {
  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="font-medium text-[18px] mb-3">{title}</h3>
      <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
        {description}
      </p>
      <div className="rounded-lg overflow-hidden bg-gray-50">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="w-full h-[200px] object-cover"
        />
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

function BottomFeatureCard({
  title,
  description,
  imageSrc,
  imageClassName = "",
}) {
  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="font-medium text-[18px] mb-3">{title}</h3>
      <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
        {description}
      </p>
      <div className="rounded-lg overflow-hidden bg-gray-50">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={300}
          className={`w-full ${imageClassName || "h-[300px] object-cover"}`}
        />
      </div>
    </div>
  );
}

BottomFeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
};
