'use client'

import { Search, Bell, MessageSquare, Filter } from 'lucide-react'
import { useSidebar } from '@/contexts/SidebarContext'

export default function TopBar() {
  const { sidebarWidth } = useSidebar()
  
  return (
    <div 
      className="fixed top-0 right-0 h-[72px] bg-background-light dark:bg-background-dark border-b border-border-light dark:border-white/10 z-40 overflow-x-hidden transition-all duration-200"
      style={{ left: `${sidebarWidth}px` }}
    >
      {/* Centered Container */}
      <div className="flex justify-center h-full">
        <div className="w-full max-w-[1600px] px-4 md:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Left Side */}
            <div className="flex items-center gap-2 md:gap-4">
              <h1 className="text-base md:text-lg font-semibold tracking-tight text-trustblue-900 dark:text-white">Publications</h1>
              <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md border border-border-light dark:border-white/40 text-sm font-medium text-trustblue-900 dark:text-white hover:bg-trustblue-900/5 dark:hover:bg-white/5 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden md:flex items-center gap-3 bg-sidebar-light dark:bg-sidebar-dark rounded-lg px-3 py-2.5 w-[200px] lg:w-[296px]">
                <Search className="w-4 h-4 text-[#8a8a8a]" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none text-sm text-[#8a8a8a] placeholder-[#8a8a8a] w-full"
                />
              </div>
              
              <div className="hidden md:block h-10 w-px bg-border-light dark:bg-white/10" />
              
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-border-light dark:border-sidebar-dark hover:bg-trustblue-900/5 dark:hover:bg-white/5 transition-colors">
                <Bell className="w-4 h-4 md:w-5 md:h-5 text-trustblue-900 dark:text-white" />
              </button>
              
              <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-lg border border-border-light dark:border-sidebar-dark hover:bg-trustblue-900/5 dark:hover:bg-white/5 transition-colors">
                <MessageSquare className="w-5 h-5 text-trustblue-900 dark:text-white" />
              </button>
              
              <button className="bg-trustblue-350 px-3 md:px-4 py-2 md:py-2.5 rounded-md text-xs md:text-sm font-bold text-white hover:bg-trustblue-350/90 transition-colors">
                <span className="hidden sm:inline">Create Publication</span>
                <span className="sm:hidden">Create</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

