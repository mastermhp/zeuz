import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function TestimonialsSection() {
  return (
    <div className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Read the testimonials and take a look at
          <br />
          our client's success stories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg"
                    alt={`Client ${i + 1}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Client Name</div>
                    <div className="text-sm text-gray-500">Position, Company</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "ZeuZ has transformed our testing process. The AI-powered features and intuitive interface have significantly improved our efficiency."
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
            View All Stories →
          </Button>
        </div>
      </div>
    </div>
  )
}

