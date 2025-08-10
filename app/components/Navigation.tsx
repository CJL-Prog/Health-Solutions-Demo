'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [cartCount] = useState(3)
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold text-sm">
              HEALTH SOLUTIONS
            </div>
          </Link>
          
          {/* Nav Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded transition">
              Home
            </Link>
            <Link href="/products" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded transition">
              Peptides
            </Link>
            <Link href="/hrt" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded transition">
              HRT
            </Link>
            <Link href="/how-it-works" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded transition">
              How It Works
            </Link>
            <Link href="/research" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded transition">
              Research
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded transition">
              About
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded transition">
              Contact
            </Link>
          </div>
          
          {/* Cart & Account */}
          <div className="flex items-center space-x-3">
            <Link href="/cart" className="relative p-2">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/account" className="border border-blue-600 text-blue-600 px-3 py-1.5 rounded hover:bg-blue-50 text-sm font-medium transition">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}