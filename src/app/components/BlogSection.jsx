import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const blogs = [
  {
    image: "/blog1.png?height=250&width=450",
    tag: "zAI",
    date: "May 9, 2023",
    title: "Revolutionize testing with zAI: AI-powered test case tool backed by GPT-4o"
  },
  {
    image: "/blog2.png?height=250&width=450",
    tag: "Multi-Platform Testing",
    date: "February 14, 2023",
    title: "Ensuring Comprehensive Coverage with ZeuZ Multi-Platform Testing"
  },
  {
    image: "/blog3.png?height=250&width=450",
    tag: "UI Testing",
    date: "September 18, 2023",
    title: "Automated UI Testing with ZeuZ: Ensuring Consistent User Experience"
  }
]

export default function BlogSection() {
  return (
    <section className="py-16 px-32 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-12">Blogs</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    {blog.tag}
                  </span>
                  <span className="text-sm text-muted-foreground">{blog.date}</span>
                </div>
                <h3 className="font-semibold text-lg group-hover:text-purple-600 transition-colors">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" className="bg-[#ED2C92] text-white rounded-[8px]">
            View all
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

