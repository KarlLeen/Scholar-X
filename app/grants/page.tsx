'use client'

import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import GrantCard from '@/components/GrantCard'
import { useSidebar } from '@/contexts/SidebarContext'
import { Filter } from 'lucide-react'

// Sample grants data
const grants = [
  {
    id: 1,
    title: 'dydx Infrastructure Grant',
    description: 'This grant empowers teams dedicated to developing essential infrastructure for the dydx chain, stimulating cutting-edge solutions and expansion within the ecosystem.',
    amount: '$4,000,000',
    deadline: '25.12.2025',
    chanceToGetIn: '1 in 20',
    projectsIn: '1 out of 4',
    timeLeft: '2 weeks and 3 projects left',
    tags: [
      { label: 'dydx', type: 'platform' },
      { label: 'Infrastructure', type: 'category' },
      { label: '>$1M', type: 'amount' }
    ],
    image: '/assets/Rectangle1.png',
    lightImage: '/assets/light1.png',
    status: null
  },
  {
    id: 2,
    title: 'dydx User Experience Grant',
    description: 'This initiative funds innovative startups focused on enhancing user experience within the dydx ecosystem, fostering growth through unique applications and tools.',
    amount: '$6,000,000',
    deadline: '15.01.2026',
    chanceToGetIn: '1 in 15',
    projectsIn: '2 out of 5',
    timeLeft: '1 month and 5 projects left',
    tags: [
      { label: 'dydx', type: 'platform' },
      { label: 'User Experience', type: 'category' },
      { label: '>$2M', type: 'amount' }
    ],
    image: '/assets/Rectangle2.png',
    lightImage: '/assets/light2.png',
    status: null
  },
  {
    id: 3,
    title: 'Ethereum Education Initiative',
    description: 'This program supports blockchain-based educational tools aimed at enhancing learning experiences within the Ethereum environment, encouraging innovation in digital education.',
    amount: '$9,000,000',
    deadline: '01.02.2026',
    chanceToGetIn: '1 in 10',
    projectsIn: '0 out of 3',
    timeLeft: '2 months and 3 projects left',
    tags: [
      { label: 'Ethereum', type: 'platform' },
      { label: 'Education Innovation', type: 'category' },
      { label: '>$3M', type: 'amount' }
    ],
    image: '/assets/Rectangle3.png',
    lightImage: '/assets/light3.png',
    status: null,
    logo: 'eth'
  },
  {
    id: 4,
    title: 'Zcash Privacy Enhancement Fund',
    description: 'This grant enables developers to create new privacy protocols on the Zcash platform, aiming to enhance user confidentiality and data protection.',
    amount: '$3,000,000',
    deadline: '30.03.2026',
    chanceToGetIn: '1 in 12',
    projectsIn: '2 out of 4',
    timeLeft: '3 months and 4 projects left',
    tags: [
      { label: 'Zcash', type: 'platform' },
      { label: 'Privacy Technology', type: 'category' },
      { label: '>$1.5M', type: 'amount' }
    ],
    image: '/assets/Rectangle4.png',
    lightImage: '/assets/light4.png',
    status: 'applied',
    logo: 'zec'
  },
  {
    id: 5,
    title: 'Algorand Green Energy Fund',
    description: 'This initiative invests in renewable energy solutions by leveraging the Algorand blockchain, driving sustainable projects that reduce carbon footprints.',
    amount: '$10,000,000',
    deadline: '15.04.2026',
    chanceToGetIn: '1 in 8',
    projectsIn: '3 out of 5',
    timeLeft: '4 months and 5 projects left',
    tags: [
      { label: 'Algorand', type: 'platform' },
      { label: 'Sustainability', type: 'category' },
      { label: '>$5M', type: 'amount' }
    ],
    image: '/assets/Rectangle5.png',
    lightImage: '/assets/light5.png',
    status: null
  },
  {
    id: 6,
    title: 'Binance Smart Chain DeFi Fund',
    description: 'This fund supports decentralized finance projects on the Binance Smart Chain, fostering innovation in the financial sector and enhancing liquidity solutions.',
    amount: '$8,000,000',
    deadline: '20.01.2026',
    chanceToGetIn: '1 in 14',
    projectsIn: '1 out of 2',
    timeLeft: '1 month and 2 projects left',
    tags: [
      { label: 'Binance', type: 'platform' },
      { label: 'DeFi Development', type: 'category' },
      { label: '>$4M', type: 'amount' }
    ],
    image: '/assets/Rectangle6.png',
    lightImage: '/assets/light6.png',
    status: null,
    logo: 'bnb'
  },
  {
    id: 7,
    title: 'Solana NFT Marketplace Grant',
    description: 'This program promotes the development of NFT marketplaces on the Solana blockchain, encouraging artistic expression and digital ownership.',
    amount: '$5,500,000',
    deadline: '10.02.2026',
    chanceToGetIn: '1 in 9',
    projectsIn: '1 out of 3',
    timeLeft: '2 months and 3 projects left',
    tags: [
      { label: 'Solana', type: 'platform' },
      { label: 'Digital Art', type: 'category' },
      { label: '>$2.5M', type: 'amount' }
    ],
    image: '/assets/Rectangle7.png',
    lightImage: '/assets/light7.png',
    status: null,
    logo: 'sol'
  },
  {
    id: 8,
    title: 'Tezos Supply Chain Fund',
    description: 'This initiative funds tech solutions for supply chain management on the Tezos blockchain, aiming to improve transparency and efficiency.',
    amount: '$7,000,000',
    deadline: '01.03.2026',
    chanceToGetIn: '1 in 11',
    projectsIn: '2 out of 5',
    timeLeft: '3 months and 5 projects left',
    tags: [
      { label: 'Tezos', type: 'platform' },
      { label: 'Supply Chain', type: 'category' },
      { label: '>$3.5M', type: 'amount' }
    ],
    image: '/assets/Rectangle8.png',
    lightImage: '/assets/light8.png',
    status: null
  },
  {
    id: 9,
    title: 'Polkadot Interoperability Grant',
    description: 'This grant encourages the development of cross-chain interactivity tools on the Polkadot network, enhancing communication between blockchains.',
    amount: '$12,000,000',
    deadline: '15.05.2026',
    chanceToGetIn: '1 in 13',
    projectsIn: '1 out of 3',
    timeLeft: '4 months and 3 projects left',
    tags: [
      { label: 'Polkadot', type: 'platform' },
      { label: 'Interoperability', type: 'category' },
      { label: '>$6M', type: 'amount' }
    ],
    image: '/assets/Rectangle9.png',
    lightImage: '/assets/light9.png',
    status: null
  },
  {
    id: 10,
    title: 'Cardano Cybersecurity Fund',
    description: 'This initiative funds projects that develop robust cybersecurity solutions on the Cardano blockchain, enhancing the safety of decentralized applications.',
    amount: '$6,000,000',
    deadline: '15.02.2026',
    chanceToGetIn: '1 in 10',
    projectsIn: '2 out of 4',
    timeLeft: '2 months and 4 projects left',
    tags: [
      { label: 'Cardano', type: 'platform' },
      { label: 'Cybersecurity', type: 'category' },
      { label: '>$2.8M', type: 'amount' }
    ],
    image: '/assets/Rectangle10.png',
    lightImage: '/assets/light10.png',
    status: null,
    logo: 'ada'
  },
  {
    id: 11,
    title: 'Avalanche AI Initiative',
    description: 'This fund aims to boost AI-driven analytics tools within the Avalanche ecosystem, promoting data-driven decision-making in various sectors.',
    amount: '$8,500,000',
    deadline: '22.01.2026',
    chanceToGetIn: '1 in 11',
    projectsIn: '2 out of 3',
    timeLeft: '1 month and 3 projects left',
    tags: [
      { label: 'Avalanche', type: 'platform' },
      { label: 'AI & Data', type: 'category' },
      { label: '>$4M', type: 'amount' }
    ],
    image: '/assets/Rectangle11.png',
    lightImage: '/assets/light11.png',
    status: null
  },
  {
    id: 12,
    title: 'Hyperledger Health Innovation Grant',
    description: 'This initiative supports the creation of decentralized healthcare applications on the Hyperledger platform, aiming to improve patient data management and accessibility.',
    amount: '$6,500,000',
    deadline: '30.03.2026',
    chanceToGetIn: '1 in 9',
    projectsIn: '1 out of 2',
    timeLeft: '2 months and 2 projects left',
    tags: [
      { label: 'Hyperledger', type: 'platform' },
      { label: 'Healthcare Technology', type: 'category' },
      { label: '>$3M', type: 'amount' }
    ],
    image: '/assets/Rectangle12.png',
    lightImage: '/assets/light12.png',
    status: null
  }
]

export default function GrantsPage() {
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
        {/* Top Bar with Grants specific content */}
        <div 
          className="fixed top-0 right-0 h-[72px] bg-background-light dark:bg-background-dark border-b border-border-light dark:border-white/10 z-40 overflow-x-hidden transition-all duration-200"
          style={{ left: `${sidebarWidth}px` }}
        >
          <div className="flex items-center w-full h-full px-4 md:px-2">
            {/* Left Side - Figma: left 96px from window, so 24px from sidebar (96 - 72) */}
            <div className="flex items-center gap-[16px] ml-[24px]">
              <h1 className="text-[18px] font-semibold tracking-[-0.3px] text-trustblue-900 dark:text-white">Grants</h1>
              <button className="flex items-center gap-[6px] px-[8px] pr-[12px] py-[10px] rounded-[6px] border border-[#dadada] dark:border-white dark:opacity-40 text-[14px] font-medium text-trustblue-900 dark:text-white hover:bg-trustblue-900/5 dark:hover:bg-white/5 transition-all">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Middle & Right - Create Grant Button + Search + Icons */}
            <div className="flex items-center gap-4">
              {/* Create Grant Button */}
              <button className="bg-[#2563eb] px-[12px] py-[10px] rounded-[6px] text-[14px] font-bold text-white hover:bg-[#2563eb]/90 transition-colors">
                Create Grant
              </button>

              {/* Search */}
              <div className="hidden md:flex items-center gap-2 bg-[#e2e2e2] dark:bg-[#29292d] px-3 py-2 rounded-lg w-[296px]">
                <svg className="w-4 h-4 text-[#8a8a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-transparent text-[14px] text-[#8a8a8a] outline-none flex-1"
                />
              </div>

              {/* Divider */}
              <div className="hidden md:block h-[40px] w-px bg-border-light dark:bg-white/10 rotate-90" />

              {/* Bell Icon */}
              <button className="border border-[#dadada] dark:border-[#29292d] rounded-lg p-2 hover:bg-trustblue-900/5 dark:hover:bg-white/5 transition-colors">
                <svg className="w-5 h-5 text-trustblue-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* Message Icon */}
              <button className="border border-[#dadada] dark:border-[#29292d] rounded-lg p-2 hover:bg-trustblue-900/5 dark:hover:bg-white/5 transition-colors mr-8">
                <svg className="w-5 h-5 text-trustblue-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <main className="pt-[72px] pb-[80px]">
          {/* Grants Grid - Figma: starts at left: 112px from window, so 40px from sidebar (112 - 72) */}
          <div className="ml-[40px] mt-[40px]">
            <div className="grid grid-cols-3 gap-x-[65px] gap-y-[89px]">
              {grants.map((grant) => (
                <GrantCard key={grant.id} grant={grant} />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

