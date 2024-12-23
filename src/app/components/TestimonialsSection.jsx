"use client";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    img: "tst1.png",
    name: "Shawn Nykyforuk",
    title: "Manager, Software Quality Assurance",
    company: "GeoSoftware",
    companyLogo: "/tst1c.png?height=40&width=120",
    content:
      "My experience with Automation Solutions has been strong from the start of the vendor assessment process building my trust along the way. Their communication and professionalism were one of the key areas that attracted me to their team and product.",
  },
  {
    img: "tst2.png",
    name: "Neil P.",
    title: "President",
    company: "NVP Software",
    companyLogo: "/tst2c.png?height=40&width=120",
    content:
      "NVP Software Solutions is in the business of evaluating Testing Life Cycles and managing large test projects. As such our main interest is in the ability to report progress and ensure stakeholders are kept informed of testing progress.",
  },
  {
    img: "tst3.png",
    name: "Samantha White",
    title: "Lead Software Developer",
    company: "Tech Solutions",
    companyLogo: "/tst3c.png?height=40&width=120",
    content:
      "As a Lead Software Developer, I rely on effective tools to ensure the quality and performance of our applications. ZeuZ Automation has been instrumental in streamlining our testing processes, allowing us to identify and address bugs quickly and effectively.",
  },
  {
    img: "tst1.png",
    name: "Shawn Nykyforuk",
    title: "Manager, Software Quality Assurance",
    company: "GeoSoftware",
    companyLogo: "/tst1c.png?height=40&width=120",
    content:
      "My experience with Automation Solutions has been strong from the start of the vendor assessment process building my trust along the way. Their communication and professionalism were one of the key areas that attracted me to their team and product.",
  },
  {
    img: "tst2.png",
    name: "Neil P.",
    title: "President",
    company: "NVP Software",
    companyLogo: "/tst2c.png?height=40&width=120",
    content:
      "NVP Software Solutions is in the business of evaluating Testing Life Cycles and managing large test projects. As such our main interest is in the ability to report progress and ensure stakeholders are kept informed of testing progress.",
  },
  {
    img: "tst3.png",
    name: "Samantha White",
    title: "Lead Software Developer",
    company: "Tech Solutions",
    companyLogo: "/tst3c.png?height=40&width=120",
    content:
      "As a Lead Software Developer, I rely on effective tools to ensure the quality and performance of our applications. ZeuZ Automation has been instrumental in streamlining our testing processes, allowing us to identify and address bugs quickly and effectively.",
  },
];

export default function TestimonialsSection() {
  const [api, setApi] = useState();
  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold max-w-xl">
            Read the testimonials and take a look at our clients success stories
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={scrollPrev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={testimonial.img}
                          alt={`${testimonial.img} img`}
                          className="rounded-full w-10 h-10"
                        />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                      <img
                        src={testimonial.companyLogo}
                        alt={`${testimonial.company} logo`}
                        className="h-10"
                      />
                    </div>

                    <p className="text-muted-foreground">
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>

        <div className="flex justify-center text-center mt-8">
          <Link
            href=""
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
            variant="secondary"
            className="flex justify-center items-center bg-[#ED2C92] hover:border-[#3a1d67] text-white rounded-[8px]"
          >
            <span className="flex justify-center items-center">
              See all testimonials
              <ArrowRight className="w-4 h-7" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
