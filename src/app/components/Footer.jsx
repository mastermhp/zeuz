import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const productLinks = [
    { title: 'All Features', href: '#' },
    { title: 'Professional Services', href: '#' },
    { title: 'ZeuZ tool License', href: '#' },
  ]

  const companyLinks = [
    { title: 'About Us', href: '#' },
    { title: 'Events', href: '#' },
    { title: 'Career', href: '#' },
  ]

  const resourceLinks = [
    { title: 'Case Studies', href: '#' },
    { title: 'Documentation', href: '#' },
    { title: 'Community', href: '#' },
    { title: 'Support & Training', href: '#' },
    { title: 'Blogs', href: '#' },
    { title: 'Testimonial', href: '#' },
    { title: 'FAQs', href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-br from-pink-50 to-purple-100">
      <div className="max-w-[80%] mx-auto px-4 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-6">
            <Image
              src="/logoft.png?height=40&width=120"
              alt="ZeuZ Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              ZeuZ, our flagship tool, enhances testing efficiency and quality. We deliver top-tier automation solutions globally.
            </p>
            <div className="text-gray-600">info@zeuz.ai</div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900 pointer-events-none">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 text-sm pointer-events-none">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 text-sm pointer-events-none">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 text-sm pointer-events-none">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                Subscribe to our newsletter and receive a selection of cool articles.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 pr-24 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="absolute right-0 top-0 bottom-0 px-2 m-1 rounded-lg bg-transparent hover:bg-[#E91E63] text-[#E91E63] hover:text-white border-2 border-[#E91E63] transition-all duration-300 ease-in-out overflow-hidden group cursor-pointer">
                  <span className="relative z-10 text-xs font-bold">SUBSCRIBE</span>
                  <span className="absolute left-0 top-0 bottom-0 w-0 bg-[#E91E63] -z-10 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © 2025, All Rights Reserved
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm pointer-events-none">
                Terms of use
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm pointer-events-none">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

