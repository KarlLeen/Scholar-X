'use client'

import { ReactNode } from 'react'
import { SidebarProvider } from '@/contexts/SidebarContext'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  )
}

