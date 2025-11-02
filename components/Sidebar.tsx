'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  FileText, 
  DollarSign, 
  Users, 
  User,
  HelpCircle,
  Moon,
  Sun
} from 'lucide-react'
import { useSidebar } from '@/contexts/SidebarContext'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/', matchPath: '/' },
  { icon: FileText, label: 'Publications', href: '/', matchPath: '/publication' },
  { icon: DollarSign, label: 'Grants', href: '/grants', matchPath: '/grants' },
  { icon: Users, label: 'Governance', href: '/governance', matchPath: '/governance' },
]

const bottomItems = [
  { icon: User, label: 'Profile', href: '/profile', matchPath: '/profile' },
  { icon: HelpCircle, label: 'Support', href: '/support', matchPath: '/support' },
]

export default function Sidebar() {
  const { isExpanded, setIsExpanded, isDarkMode, setIsDarkMode } = useSidebar()
  const pathname = usePathname()

  // 判断当前菜单项是否处于激活状态
  const isActive = (item: typeof menuItems[0]) => {
    // Publications: 匹配首页和publication详情页
    if (item.matchPath === '/publication') {
      return pathname === '/' || pathname.startsWith('/publication')
    }
    // Dashboard: 从不激活（因为Publications使用相同的href）
    if (item.matchPath === '/' && item.href === '/') {
      return false
    }
    // 对于其他页面，检查路径是否以matchPath开头
    return pathname.startsWith(item.matchPath)
  }

  // 判断底部菜单项是否处于激活状态
  const isBottomItemActive = (item: typeof bottomItems[0]) => {
    return pathname.startsWith(item.matchPath)
  }

  return (
    <>
      {/* Overlay - 点击任何非侧边栏区域收起 */}
      {isExpanded && (
        <div 
          className="hidden md:block fixed inset-0 bg-black/20 z-40 transition-opacity duration-200"
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      <aside 
        className={`hidden md:flex fixed left-0 top-0 bottom-0 bg-background-light dark:bg-background-dark border-r border-border-light dark:border-white/10 flex-col z-50 transition-all duration-200 ${
          isExpanded ? 'w-[206px]' : 'w-[72px]'
        }`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
      {/* Logo and Title */}
      <div className="h-[64px] flex items-center px-2 mt-1">
        <Link 
          href="/" 
          className="flex items-center gap-3 w-full px-[11px]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image 
            src="/assets/logo.png" 
            alt="Scholar X Logo" 
            width={32} 
            height={32}
            className="object-contain flex-shrink-0"
          />
          {isExpanded && (
            <span className="text-trustblue-900 dark:text-white text-[14px] font-medium whitespace-nowrap">
              ScholarX
            </span>
          )}
        </Link>
      </div>

      {/* Top Navigation Items */}
      <nav className="flex-1 flex flex-col w-full px-2 mt-2">
        {menuItems.map((item, index) => {
          const active = isActive(item)
          return (
            <Link
              key={index}
              href={item.href}
              className={`h-[56px] flex items-center rounded-lg transition-colors ${
                isExpanded ? 'px-[11px] gap-[18px]' : 'justify-center'
              } ${
                active
                  ? 'bg-trustblue-900/10 dark:bg-white/10'
                  : 'hover:bg-trustblue-900/5 dark:hover:bg-white/5'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <item.icon className="w-[18px] h-[18px] text-trustblue-900 dark:text-white/90 flex-shrink-0" />
              {isExpanded && (
                <span className="text-trustblue-900 dark:text-white/90 text-[14px] whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Items */}
      <div className="flex flex-col w-full px-2">
        {bottomItems.map((item, index) => {
          const active = isBottomItemActive(item)
          return (
            <Link
              key={index}
              href={item.href}
              className={`h-[56px] flex items-center rounded-lg transition-colors ${
                isExpanded ? 'px-[11px] gap-[18px]' : 'justify-center'
              } ${
                active
                  ? 'bg-trustblue-900/10 dark:bg-white/10'
                  : 'hover:bg-trustblue-900/5 dark:hover:bg-white/5'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <item.icon className="w-[18px] h-[18px] text-trustblue-900 dark:text-white/90 flex-shrink-0" />
              {isExpanded && (
                <span className="text-trustblue-900 dark:text-white/90 text-[14px] whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </Link>
          )
        })}

        {/* Theme Toggle */}
        <div 
          className={`h-[56px] flex items-center rounded-lg transition-colors mb-2 ${
            isExpanded ? 'px-[11px] gap-[18px]' : 'justify-center'
          }`}
        >
          {isExpanded ? (
            <>
              <Moon className="w-[18px] h-[18px] text-trustblue-900 dark:text-white/90 flex-shrink-0" />
              {/* Toggle Switch */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsDarkMode(!isDarkMode)
                }}
                className="relative w-[30px] h-[18px] bg-trustblue-900/20 dark:bg-white/20 rounded-full transition-colors"
              >
                <div 
                  className={`absolute top-[1px] w-[16px] h-[16px] bg-trustblue-900 dark:bg-white rounded-full transition-transform ${
                    isDarkMode ? 'left-[1px]' : 'left-[13px]'
                  }`}
                />
              </button>
              <Sun className="w-[18px] h-[18px] text-trustblue-900 dark:text-white/90 flex-shrink-0" />
            </>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsDarkMode(!isDarkMode)
              }}
            >
              {isDarkMode ? (
                <Moon className="w-[18px] h-[18px] text-trustblue-900 dark:text-white/90" />
              ) : (
                <Sun className="w-[18px] h-[18px] text-trustblue-900 dark:text-white/90" />
              )}
            </button>
          )}
        </div>
      </div>
      </aside>
    </>
  )
}

