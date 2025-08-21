'use client'

import Link from 'next/link'
import { TrendingUp, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">StartupScope</span>
            </Link>
            
            <div className="hidden md:flex ml-10 space-x-8">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                发现项目
              </Link>
              <Link href="/trending" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                热门趋势
              </Link>
              <Link href="/analysis" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                市场分析
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                定价方案
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
            >
              登录
            </Link>
            <Link
              href="/signup"
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              免费开始
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              发现项目
            </Link>
            <Link href="/trending" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              热门趋势
            </Link>
            <Link href="/analysis" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              市场分析
            </Link>
            <Link href="/pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              定价方案
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}