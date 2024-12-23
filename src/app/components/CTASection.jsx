// import { Button } from '@/components/ui/button'

// export function CTASection() {
//   return (
//     <div className="bg-purple-600 py-16">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
//         <h2 className="text-3xl font-bold mb-6">
//           Take Advantage of our
//           <br />
//           Free Demo Today
//         </h2>
//         <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
//           Request Free Demo →
//         </Button>
//       </div>
//     </div>
//   )
// }
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <div className="container mx-auto px-16 py-8">
      {/* Relative container for proper background layering */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg.png" // Replace with your image path
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#B721FF] to-[#7A1BFF] opacity-80"></div> */}

        {/* Content */}
        <div className="relative z-10 p-8 flex justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
            Take Advantage of our FREE Demo Today.
          </h2>
          <Link
            href=""
            className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <span className="flex items-center">
              Request Free Demo
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
