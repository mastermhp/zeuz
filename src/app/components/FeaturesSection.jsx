import PropTypes from "prop-types";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import BrandsLogoScroll from "./BrandsLogoScroll";

export function FeaturesSection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="container mx-auto px-4 py-16">
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
        <div className="space-y-8">
          {/* Headings */}
          <div className="space-y-4">
            <h2 className="text-purple-600 font-medium">Why ZeuZ is Unique</h2>
            <h1 className="text-4xl font-bold leading-tight">
              The game-changer in test automation.
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-lg">
            ZeuZ brings together deep industry insights and cutting-edge technology to deliver a test automation platform designed for the demands of today's software landscape.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="text-green-500" />
                <span>AI-Driven Simplicity</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" />
                <span>Comprehensive Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" />
                <span>Adaptability and Scalability</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" />
                <span>Expert Professional Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" />
                <span>Seamless Integration</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="text-green-500" />
                <span>Robust Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" />
                <span>User-Centric Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" />
                <span>Cost Efficiency and ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" />
                <span>All-in-One Powerhouse</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="group" variant="outline">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Platform Interface Image */}
        <div className="relative">
          <Image
            src="/placeholder.svg"
            alt="ZeuZ Platform Interface"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Trusted Brands */}
      <BrandsLogoScroll />
    </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="relative bg-gradient-to-r from-purple-600 to-purple-500 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              {/* Content */}
              <div className="text-white space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  ZeuZ AI: Intelligent
                  <br />
                  Test Optimization
                </h2>

                <ul className="space-y-4">
                  <ListItem>
                    Leverage AI to prioritize, generate, and execute test cases
                  </ListItem>
                  <ListItem>Significantly reduce testing time</ListItem>
                  <ListItem>Enhancing coverage and accuracy</ListItem>
                </ul>

                <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full mt-4">
                  Learn more →
                </Button>
              </div>

              {/* Robot Image */}
              <div className="relative flex justify-end">
                <Image
                  src="/placeholder.svg"
                  alt="AI Robot Assistant"
                  width={400}
                  height={400}
                  className="w-auto h-auto max-w-[80%] lg:max-w-[90%] drop-shadow-2xl"
                  priority
                />
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

        <section className="py-24 bg-gradient-to-br from-purple-50/30 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-[32px] font-bold text-gray-900 mb-4">
                We Solve Challenges & Complexity in Modern Testing
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                ZeuZ provides innovative solutions that use Machine Learning and
                Artificial Intelligence to streamline complex workflows with
                flexibility and agility.
              </p>
            </div>

            {/* Top Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <FeatureCard
                title="Test Management Coverage"
                description="Create, assign, and track tasks with deadlines, priorities, and dependencies for effective project planning and execution."
                imageSrc="/placeholder.svg"
              />
              <FeatureCard
                title="Version Comparison"
                description="Foster collaboration and communication among team members with chat."
                imageSrc="/placeholder.svg"
              />
              <FeatureCard
                title="Kanban View"
                description="Monitor project performance metrics, track progress against goals, and generate project status reports for stakeholders."
                imageSrc="/placeholder.svg"
              />
            </div>

            {/* Bottom Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-8">
                <BottomFeatureCard
                  title="Complete Project Management"
                  description="Allocate resources, manage workloads, and schedule tasks and milestones to optimize resource utilization and project timelines."
                  imageSrc="/placeholder.svg"
                />
              </div>
              <div className="space-y-8">
                <BottomFeatureCard
                  title="Integration with third-party tools"
                  description="Integrate with popular productivity tools and services such as G Suite, Jira, and Slack for seamless workflow integration."
                  imageSrc="/placeholder.svg"
                  imageClassName="h-[200px] object-contain"
                />
                <div>
                  <h3 className="font-medium text-[18px] mb-4">
                    All in One Platform
                  </h3>
                  <div className="bg-white rounded-xl p-6">
                    <div className="grid grid-cols-5 gap-4">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center"
                        >
                          <Image
                            src="/placeholder.svg"
                            alt={`Platform ${i + 1}`}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-2.5">
                Learn more →
              </Button>
            </div>
          </div>
        </section>
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
