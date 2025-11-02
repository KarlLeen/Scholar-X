'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = [1, 2, 3, '...', totalPages]

  return (
    <div className="flex items-center gap-6 bg-sidebar-light dark:bg-[#2a2a2e] rounded-full px-4 py-4">
      <button 
        className="w-5 h-5 flex items-center justify-center"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-5 h-5 text-trustblue-900 dark:text-white rotate-180 scale-y-[-1]" />
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          className={`text-base leading-5 ${
            page === currentPage 
              ? 'text-trustblue-900 dark:text-white font-normal' 
              : 'text-trustblue-900/50 dark:text-white/50 font-normal'
          }`}
        >
          {page}
        </button>
      ))}

      <button 
        className="w-5 h-5 flex items-center justify-center"
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-5 h-5 text-trustblue-900 dark:text-white" />
      </button>
    </div>
  )
}

