// 'use client'
import Link from 'next/link'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg"
                alt="ZeuZ Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavItem text="Products" />
            <NavItem text="Features" />
            <NavItem text="Resources" />
            <NavItem text="Company" />
            <Link href="/plan" className="text-gray-600 hover:text-gray-900">
              Plan
            </Link>
          </div>

          <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
            Request Free Demo
          </Button>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ text }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
        {text}
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  )
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired
}

