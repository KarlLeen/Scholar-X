'use client'

import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import PublicationCard from '@/components/PublicationCard'
import RightSidebar from '@/components/RightSidebar'
import Pagination from '@/components/Pagination'
import Footer from '@/components/Footer'
import { useSidebar } from '@/contexts/SidebarContext'

// Sample data
const featuredPublication = {
  title: 'Supercharging Smart Contracts: ZK Coprocessors and Verifiable Compute',
  excerpt: 'Interoperability is increasingly becoming an important part of how the crypto ecosystem evolves. As more and more Layer-1s and Layer-2s become specialized, more of the value becomes siloed, solving one problem but creating another.',
  author: {
    name: 'Dylan Bane',
    avatar: '/avatar.svg'
  },
  slug: 'zk-coprocessors',
  tags: [
    { type: 'raising' as const, label: 'raising' },
    { type: 'peer-reviewed' as const, label: 'peer reviewed' },
    { type: 'preserved' as const, label: 'preserved' }
  ]
}

const publications = [
  {
    title: 'Router Protocol: Infrastructure for the Cross-Chain World',
    excerpt: 'Interoperability is increasingly becoming an important part of how the crypto ecosystem evolves.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'router-protocol',
    tags: [
      { type: 'raising' as const, label: 'raising' },
      { type: 'preserved' as const, label: 'preserved' }
    ]
  },
  {
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'smart-contracts-foundation',
    tags: [{ type: 'preserved' as const, label: 'preserved' }]
  },
  {
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'smart-contracts-trustless-2',
    tags: [{ type: 'preserved' as const, label: 'preserved' }]
  },
  {
    title: 'Rhombus Protocol: Connecting Blockchains for a Seamless Experience',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'rhombus-protocol',
    tags: [{ type: 'preserved' as const, label: 'preserved' }]
  },
  {
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'smart-contracts-trustless-3',
    tags: [
      { type: 'raising' as const, label: 'raising' },
      { type: 'preserved' as const, label: 'preserved' }
    ]
  },
  {
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'smart-contracts-trustless-4',
    tags: [
      { type: 'raising' as const, label: 'raising' },
      { type: 'peer-reviewed' as const, label: 'peer reviewed' }
    ]
  },
  {
    title: 'Rhombus Protocol: Connecting Blockchains for a Seamless Experience',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'rhombus-protocol-2',
    tags: [{ type: 'preserved' as const, label: 'preserved' }]
  },
  {
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'smart-contracts-trustless-5',
    tags: [{ type: 'preserved' as const, label: 'preserved' }]
  },
  {
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'smart-contracts-trustless-6',
    tags: [{ type: 'preserved' as const, label: 'preserved' }]
  },
  {
    title: 'Rhombus Protocol: Connecting Blockchains for a Seamless Experience',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'rhombus-protocol-3',
    tags: [{ type: 'preserved' as const, label: 'preserved' }]
  },
  {
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'smart-contracts-trustless-7',
    tags: [{ type: 'preserved' as const, label: 'preserved' }]
  },
  {
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: { name: 'Dylan Bane', avatar: '/avatar.svg' },
    slug: 'smart-contracts-trustless-8',
    tags: [{ type: 'preserved' as const, label: 'preserved' }]
  },
]

const justSubmitted = [
  { title: 'Router Protocol: Infrastructure for the Cross-Chain World', timeAgo: '1 hour ago', tags: 'Layer 2, Tokenomics' },
  { title: 'Decentralized Finance: The Future of Banking, AI and Crypto in 2035', timeAgo: '2 hours ago', tags: 'DeFi, Innovation' },
  { title: 'NFT Market Trends: What to Expect in 2026', timeAgo: '3 hours ago', tags: 'NFTs, Market Analysis' },
  { title: 'Sustainable Blockchain: Eco-Friendly Solutions, no to Carbon', timeAgo: '5 hours ago', tags: 'Sustainability, Blockchain' },
  { title: 'Smart Contracts: Revolutionizing Agreements and Machine Interfaces', timeAgo: '6 hours ago', tags: 'Smart Contracts, Tech' },
  { title: 'Web3: The New Internet Paradigm', timeAgo: '7 hours ago', tags: 'Web3, Technology' },
  { title: 'Governance Tokens: Power to the People, no to Corporations', timeAgo: '8 hours ago', tags: 'Governance, Tokens' },
  { title: 'Layer 1 vs Layer 2: Understanding the Differences', timeAgo: '9 hours ago', tags: 'Layer 1, Layer 2' },
  { title: 'Crypto Regulation: Navigating the Legal Landscape', timeAgo: '10 hours ago', tags: 'Regulation, Compliance' },
  { title: 'Tokenomics 101: Understanding the Economics Behind Cryptocurrencies', timeAgo: 'Yesterday', tags: 'Tokenomics, Education' },
]

const needsReview = [...justSubmitted]

export default function Home() {
  const { sidebarWidth } = useSidebar()
  
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div 
        className="flex-1 min-w-0 transition-all duration-200"
        style={{ marginLeft: `${sidebarWidth}px` }}
      >
        <TopBar />
        
        <main className="pt-[72px] pb-[80px]">
          {/* Content Container - centered with max width, excluding sidebar */}
          <div className="flex justify-center">
            <div className="w-full max-w-[1600px] px-4 md:px-8">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px]">
                {/* Publications Grid */}
                <div className="flex-1 max-w-[1094px]">
              {/* Recently Reviewed Header - top: 127px */}
              <h2 className="text-[8px] font-semibold uppercase tracking-wider text-trustblue-900/50 dark:text-white/50 mb-[25px] mt-[55px]">
                Recently Reviewed
              </h2>

              {/* Featured Publication */}
              <div className="mb-[40px] pb-[56px] border-b border-border-light dark:border-white/10 ml-[2px]">
                <Link href={`/publication/${featuredPublication.slug}`} className="group">
                  <h2 className="font-serif text-2xl lg:text-[32px] leading-normal text-trustblue-900 dark:text-white mb-[16px] group-hover:text-trustblue-900/80 dark:group-hover:text-white/80 transition-colors">
                    {featuredPublication.title}
                  </h2>
                </Link>
                <p className="text-sm leading-[28px] tracking-tight text-trustblue-900 dark:text-white mb-[82px] w-full max-w-[918px]">
                  {featuredPublication.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-gray-600 dark:bg-gray-400" />
                    <span className="text-xs font-medium text-trustblue-900 dark:text-white tracking-tight">
                      {featuredPublication.author.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    {featuredPublication.tags.map((tag, index) => {
                      const getTagStyles = (type: string) => {
                        switch (type) {
                          case 'raising':
                            return 'bg-trustblue-350 text-trustblue-150'
                          case 'peer-reviewed':
                            return 'bg-opengreen-600 text-opengreen-300'
                          case 'preserved':
                            return 'bg-[#6d5441] text-[#d9ccbc]'
                          default:
                            return 'bg-gray-700 text-gray-300'
                        }
                      }
                      
                      return (
                        <span
                          key={index}
                          className={`flex items-center gap-1 px-2 py-0.5 rounded-2xl text-[10px] font-medium tracking-wide ${getTagStyles(tag.type)}`}
                          style={{ boxShadow: '0px 2px 1px 0px inset rgba(0,0,0,0.1)' }}
                        >
                          {tag.label}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Publications Grid - 响应式布局 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-[128px] gap-y-12 lg:gap-y-[80px]">
                {publications.map((pub, index) => (
                  <div key={index} className={`w-full max-w-[280px] ${index < 9 && index % 3 === 2 ? '' : index < 9 ? 'border-b border-border-light dark:border-white/10 pb-[80px]' : ''}`}>
                    <PublicationCard {...pub} />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-start mt-[79px]">
                <Pagination currentPage={1} totalPages={10} />
              </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-full lg:w-[386px] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-[40px] mt-12 lg:mt-0">
                <RightSidebar 
                  justSubmitted={justSubmitted}
                  needsReview={needsReview}
                />
              </div>
            </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
