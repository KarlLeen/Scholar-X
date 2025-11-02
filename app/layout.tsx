import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({ 
  weight: ['400'],
  subsets: ['latin'], 
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Scholar X - Publications',
  description: '学术出版物平台 - 连接全球学者，分享知识，推动创新',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-[#111116] text-white`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
