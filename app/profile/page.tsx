'use client'

import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useSidebar } from '@/contexts/SidebarContext'
import { Share2, MapPin, GraduationCap, Globe, Twitter, Mail } from 'lucide-react'
import { useState } from 'react'

// 示例数据
const profileData = {
  name: 'Johnathan Matthews',
  bio: 'Dr. Matthews is a blockchain researcher focusing on decentralized consensus and cryptographic security.',
  avatar: '/assets/profile.png',
  location: 'Shanghai, China',
  institution: 'Chinese Academy of Science',
  reputation: {
    level: 'Scholar lvl.2',
    progress: 62 // percentage
  },
  tags: [
    'Infra',
    'Cross-chain',
    'Interoperability',
    'Decentralized Finance',
    'Blockchain Oracles',
    'Smart Contracts',
    'Token Bridges',
    'AI Tokens',
    'Cross-Chain Swaps'
  ]
}

const publications = [
  {
    id: 1,
    title: 'Router Protocol: Infrastructure for the Cross-Chain World',
    excerpt: 'Interoperability is increasingly becoming an important part of how the crypto ecosystem evolves.',
    author: 'Dylan Bane',
    authorAvatar: '/assets/profile.png',
    tags: ['preserved', 'raising']
  },
  {
    id: 2,
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    excerpt: 'Secure data exchange is critical for blockchain technology to reach its full potential.',
    author: 'Dylan Bane',
    authorAvatar: '/assets/profile.png',
    tags: ['preserved']
  }
]

// Articles reviewed by this user (shown to other users, not profile owner)
const reviewedArticles = [
  {
    id: 1,
    articleTitle: 'Decentralized Finance: The Future of Banking, AI and Crypto in 2035',
    articleExcerpt: 'By 2035, banks no longer act as vaults of capital but as curators of algorithms. Money itself has become intelligent — governed by smart contracts that adapt in real time to market conditions, personal risk profiles, and even emotional sentiment tracked by AI. Lending and borrowing have shifted from opaque boardrooms to transparent autonomous protocols where code enforces fairness better than any regulator ever could. In this new financial order, the line between human decision and machine execution has blurred completely: you don\'t ask for a loan anymore — your wallet negotiates one on your behalf.',
    articleAuthor: 'Dylan Bane',
    articleAuthorAvatar: '/assets/profile.png',
    articleTags: ['Cross-chain', 'DeFi', 'AI'],
    reviewComment: 'The sentence "By 2035, banks no longer act as vaults of capital but as curators of algorithms" is provocative and rhetorically elegant, but as a reviewer, I\'d argue it oversimplifies the likely evolution of financial institutions. While algorithmic governance and AI-driven decision systems will undoubtedly redefine risk assessment, credit allocation, and liquidity management, calling banks "curators" implies a degree of passivity inconsistent with their enduring systemic influence. Even in a decentralized financial landscape, banks—or their rebranded equivalents—will still wield regulatory leverage, manage hybrid infrastructures, and act as gatekeepers for compliance and trust. The metaphor works as a futurist hook but risks romanticizing automation by ignoring the messy coexistence of decentralized protocols with legacy power structures and state-level oversight that, realistically, will persist well past 2035.',
    reviewer: 'Johnathan Matthews',
    reviewerAvatar: '/assets/profile.png',
    reviewTime: '4 hours ago',
    reviewDate: 'Yesterday'
  },
  {
    id: 2,
    articleTitle: 'Decentralized Finance: The Future of Banking, AI and Crypto in 2035',
    articleExcerpt: 'By 2035, banks no longer act as vaults of capital but as curators of algorithms. Money itself has become intelligent — governed by smart contracts that adapt in real time to market conditions, personal risk profiles, and even emotional sentiment tracked by AI. Lending and borrowing have shifted from opaque boardrooms to transparent autonomous protocols where code enforces fairness better than any regulator ever could. In this new financial order, the line between human decision and machine execution has blurred completely: you don\'t ask for a loan anymore — your wallet negotiates one on your behalf.',
    articleAuthor: 'Dylan Bane',
    articleAuthorAvatar: '/assets/profile.png',
    articleTags: ['Cross-chain', 'DeFi', 'AI'],
    reviewComment: 'The sentence "By 2035, banks no longer act as vaults of capital but as curators of algorithms" is provocative and rhetorically elegant, but as a reviewer, I\'d argue it oversimplifies the likely evolution of financial institutions. While algorithmic governance and AI-driven decision systems will undoubtedly redefine risk assessment, credit allocation, and liquidity management, calling banks "curators" implies a degree of passivity inconsistent with their enduring systemic influence. Even in a decentralized financial landscape, banks—or their rebranded equivalents—will still wield regulatory leverage, manage hybrid infrastructures, and act as gatekeepers for compliance and trust. The metaphor works as a futurist hook but risks romanticizing automation by ignoring the messy coexistence of decentralized protocols with legacy power structures and state-level oversight that, realistically, will persist well past 2035.',
    reviewer: 'Johnathan Matthews',
    reviewerAvatar: '/assets/profile.png',
    reviewTime: '4 hours ago',
    reviewDate: '14.05.2025'
  }
]

// Grants history (shown to other users, not profile owner)
const grantsHistory = [
  {
    id: 1,
    title: 'Zcash Privacy Enhancement Fund',
    status: 'in progress', // or 'funded'
    fundingAmount: '$5,500,000',
    deadline: '31.12.2025',
    projectsIn: '1 out of 5',
    chanceToGetIn: '1 in 10',
    hostedBy: {
      name: 'Orange DAO',
      icon: '🟠' // Placeholder, will use icon
    },
    chain: {
      name: 'Zcash',
      icon: '⚡' // Placeholder, will use icon
    }
  },
  {
    id: 2,
    title: 'Zcash Privacy Enhancement Fund',
    status: 'funded',
    fundingAmount: '$5,500,000',
    deadline: '31.12.2025',
    projectsIn: '1 out of 5',
    chanceToGetIn: '1 in 10',
    hostedBy: {
      name: 'Orange DAO',
      icon: '🟠'
    },
    chain: {
      name: 'Zcash',
      icon: '⚡'
    }
  }
]

// Funding requests (shown to other users, not profile owner)
const fundingRequests = [
  {
    id: 1,
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    status: 'raising', // or 'funded' or 'cancelled'
    description: 'Zeroth Protocol is a zero-knowledge infrastructure layer that makes smart contracts private, scalable, and verifiable. It lets users prove actions are valid without revealing underlying data—bringing confidentiality to DeFi, identity, and DAO systems. By aggregating ZK proofs, Zeroth cuts verification costs and enables privacy as a default feature. In the spirit of "Smart Contracts: The Foundation of Trustless Systems," we\'re redefining trustless to mean provably correct, not universally exposed.',
    fundingAmount: '$2,000,000',
    researchDomain: 'ZK Architecture',
    pitchdeck: 'Yes',
    mvpDemo: 'Yes'
  },
  {
    id: 2,
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    status: 'funded',
    description: 'Zeroth Protocol is a zero-knowledge infrastructure layer that makes smart contracts private, scalable, and verifiable. It lets users prove actions are valid without revealing underlying data—bringing confidentiality to DeFi, identity, and DAO systems. By aggregating ZK proofs, Zeroth cuts verification costs and enables privacy as a default feature. In the spirit of "Smart Contracts: The Foundation of Trustless Systems," we\'re redefining trustless to mean provably correct, not universally exposed.',
    fundingAmount: '$2,000,000',
    researchDomain: 'ZK Architecture',
    pitchdeck: 'Yes',
    mvpDemo: 'Yes'
  },
  {
    id: 3,
    title: 'Smart Contracts: The Foundation of Trustless Systems',
    status: 'cancelled',
    description: 'Zeroth Protocol is a zero-knowledge infrastructure layer that makes smart contracts private, scalable, and verifiable. It lets users prove actions are valid without revealing underlying data—bringing confidentiality to DeFi, identity, and DAO systems. By aggregating ZK proofs, Zeroth cuts verification costs and enables privacy as a default feature. In the spirit of "Smart Contracts: The Foundation of Trustless Systems," we\'re redefining trustless to mean provably correct, not universally exposed.',
    fundingAmount: '$2,000,000',
    researchDomain: 'ZK Architecture',
    pitchdeck: 'Yes',
    mvpDemo: 'Yes'
  }
]

export default function ProfilePage() {
  const { sidebarWidth } = useSidebar()
  const [activeTab, setActiveTab] = useState('published')

  const tabs = [
    { id: 'published', label: 'ARTicles published' },
    { id: 'reviewed', label: 'ARTicles Reviewed' },
    { id: 'grants', label: 'grants history' },
    { id: 'funding', label: 'funding requests' }
  ]

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div 
        className="flex-1 min-w-0 transition-all duration-200"
        style={{ marginLeft: `${sidebarWidth}px` }}
      >
        {/* Top Bar */}
        <div 
          className="fixed top-0 right-0 h-[72px] bg-background-light dark:bg-background-dark border-b border-border-light dark:border-white/10 z-40 overflow-x-hidden transition-all duration-200"
          style={{ left: `${sidebarWidth}px` }}
        >
          <div className="flex items-center w-full h-full px-4 md:px-2">
            {/* Left Side */}
            <div className="flex items-center gap-[16px] ml-[24px]">
              <h1 className="text-[18px] font-semibold tracking-[-0.3px] text-trustblue-900 dark:text-white">Profile</h1>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Right Side - Search + Icons */}
            <div className="flex items-center gap-4">
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

              {/* Divider - Line 3 */}
              <div className="hidden md:block h-[40px] w-px bg-border-light dark:bg-white/10" />

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
          {/* Content Container - centered with max width */}
          <div className="flex justify-center">
            <div className="flex w-full max-w-[1656px] px-8 relative">
              {/* Left Profile Section */}
              <div className="w-[668px] px-[72px] pt-[40px] relative">
              {/* Vertical Line 4 - Separator between left and right sections */}
              <div className="absolute right-0 top-0 bottom-0 w-px bg-border-light dark:bg-white/10" />
              {/* Avatar */}
              <div className="w-[264px] h-[264px] rounded-[4px] overflow-hidden bg-gray-200 mb-[12px]">
                <Image 
                  src={profileData.avatar}
                  alt={profileData.name}
                  width={264}
                  height={264}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>

              {/* Name */}
              <h2 className="text-[18px] font-semibold text-trustblue-900 dark:text-white mb-[8px]">
                {profileData.name}
              </h2>

              {/* Bio */}
              <p className="text-[14px] leading-[22px] text-trustblue-900 dark:text-white opacity-80 mb-[24px] w-[262px]">
                {profileData.bio}
              </p>

              {/* Reputation */}
              <div className="mb-[24px] w-[262px]">
                <div className="flex items-center justify-between text-[12px] mb-[9px]">
                  <span className="text-trustblue-900 dark:text-white opacity-50">Reputation:</span>
                  <span className="text-trustblue-900 dark:text-white font-light">{profileData.reputation.level}</span>
                </div>
                <div className="w-full h-[4px] bg-[#cccccc] dark:bg-[#333333] rounded-[4px] relative">
                  <div 
                    className="absolute left-0 top-0 h-full bg-[#2563eb] rounded-[4px]"
                    style={{ width: `${profileData.reputation.progress}%` }}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-[6px] mb-[12px]">
                <MapPin className="w-4 h-4 text-trustblue-900 dark:text-white" />
                <span className="text-[12px] text-trustblue-900 dark:text-white tracking-[-0.3px]">
                  {profileData.location}
                </span>
              </div>

              {/* Institution */}
              <div className="flex items-center gap-[6px] mb-[24px]">
                <GraduationCap className="w-4 h-4 text-trustblue-900 dark:text-white" />
                <span className="text-[12px] text-trustblue-900 dark:text-white tracking-[-0.3px]">
                  {profileData.institution}
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-[8px] mb-[24px]">
                <button className="w-[24px] h-[24px] flex items-center justify-center text-trustblue-900 dark:text-white hover:opacity-70">
                  <Globe className="w-[16px] h-[16px]" />
                </button>
                <button className="w-[24px] h-[24px] flex items-center justify-center text-trustblue-900 dark:text-white hover:opacity-70">
                  <Twitter className="w-[16px] h-[16px]" />
                </button>
                <button className="w-[24px] h-[24px] flex items-center justify-center text-trustblue-900 dark:text-white hover:opacity-70">
                  <Mail className="w-[16px] h-[16px]" />
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-[8px] mb-[24px] w-[265px]">
                {profileData.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-[4px] py-[2px] bg-[#e2e2e2] dark:bg-white/10 rounded-[4px] text-[12px] text-[#8a8a8a] dark:text-white/40 tracking-[-0.3px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Profile Button */}
              <button className="flex items-center gap-[8px] px-[10px] py-[8px] rounded-[6px] border border-[#dadada] dark:border-[#2b3740] text-[14px] text-trustblue-900 dark:text-white hover:bg-trustblue-900/5 dark:hover:bg-white/5 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share Profile</span>
              </button>
            </div>

            {/* Right Content Section */}
            <div className="flex-1 pt-[40px] px-[56px]">
              {/* Tabs */}
              <div className="mb-[26px]">
                <div className="flex gap-[62px] border-b border-border-light dark:border-white/10">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-[13px] text-[12px] font-semibold uppercase tracking-[0.24px] relative ${
                        activeTab === tab.id
                          ? 'text-trustblue-900 dark:text-white'
                          : 'text-trustblue-900 dark:text-white opacity-50'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#2563eb]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              {activeTab === 'published' && publications.length > 0 ? (
                <div className="grid grid-cols-2 gap-x-[66px] gap-y-[105px]">
                  {publications.map((pub) => (
                    <div key={pub.id} className="w-[280px]">
                      <h3 className="font-serif text-[24px] leading-normal text-trustblue-900 dark:text-white mb-[14px]">
                        {pub.title}
                      </h3>
                      <p className="text-[14px] leading-[24px] tracking-[-0.3px] text-trustblue-900 dark:text-white mb-[64px]">
                        {pub.excerpt}
                      </p>
                      <div className="flex items-center gap-[12px]">
                        <div className="flex items-center gap-[6px]">
                          <div className="w-[16px] h-[16px] rounded-full overflow-hidden bg-gray-400">
                            <Image 
                              src={pub.authorAvatar}
                              alt={pub.author}
                              width={16}
                              height={16}
                              className="w-full h-full object-cover"
                              unoptimized
                            />
                          </div>
                          <span className="text-[12px] font-medium text-trustblue-900 dark:text-white tracking-[-0.3px]">
                            {pub.author}
                          </span>
                        </div>
                        {pub.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className={`px-[8px] py-[2px] rounded-[16px] text-[10px] font-medium tracking-[0.3px] shadow-[0px_2px_1px_0px_inset_rgba(255,255,255,0.1)] ${
                              tag === 'preserved'
                                ? 'bg-[#eac297] dark:bg-[#6d5441] text-[#9f6424] dark:text-[#d9ccbc]'
                                : 'bg-[#a8c1f7] dark:bg-[#2563eb] text-[#2563eb] dark:text-trustblue-150'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : activeTab === 'reviewed' && reviewedArticles.length > 0 ? (
                <div className="space-y-[42px]">
                  {reviewedArticles.map((review, index) => (
                    <div key={review.id}>
                      {/* Review Item */}
                      <div className="space-y-[18px]">
                        {/* Article Title and Date */}
                        <div className="flex items-start justify-between">
                          <h3 className="text-[16px] font-medium leading-[20px] text-trustblue-900 dark:text-white max-w-[622px]">
                            {review.articleTitle}
                          </h3>
                          <span className="text-[14px] leading-[20px] text-trustblue-900 dark:text-white opacity-40 text-right whitespace-nowrap ml-4">
                            {review.reviewDate}
                          </span>
                        </div>

                        {/* Article Author and Tags */}
                        <div className="flex items-center gap-[10px]">
                          <div className="flex items-center gap-[6px]">
                            <div className="w-[18px] h-[18px] rounded-full overflow-hidden bg-gray-400">
                              <Image 
                                src={review.articleAuthorAvatar}
                                alt={review.articleAuthor}
                                width={18}
                                height={18}
                                className="w-full h-full object-cover"
                                unoptimized
                              />
                            </div>
                            <span className="text-[14px] font-medium text-trustblue-900 dark:text-white tracking-[-0.3px]">
                              {review.articleAuthor}
                            </span>
                          </div>
                          <span className="text-[8px] text-trustblue-900 dark:text-white opacity-40">•</span>
                          {review.articleTags.map((tag, tagIndex) => (
                            <>
                              <div key={tagIndex} className="px-[4px] py-[2px] bg-[#e2e2e2] dark:bg-white/10 rounded-[4px]">
                                <span className="text-[12px] text-[#8a8a8a] dark:text-white/40 tracking-[-0.3px]">
                                  {tag}
                                </span>
                              </div>
                              {tagIndex < review.articleTags.length - 1 && (
                                <span className="text-[8px] text-trustblue-900 dark:text-white opacity-40">•</span>
                              )}
                            </>
                          ))}
                        </div>

                        {/* Article Excerpt (highlighted) */}
                        <div className="bg-[#d54747] rounded-[2px] px-[10px] py-[6px]">
                          <p className="text-[14px] leading-[22px] text-white">
                            {review.articleExcerpt}
                          </p>
                        </div>

                        {/* Review Comment */}
                        <div className="pl-[24px] relative">
                          {/* Quote Icon */}
                          <div className="absolute left-0 top-[4px] w-[18px] h-[18px]">
                            <svg viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 44V30.8C0 22.1333 2.06667 15.2 6.2 10C10.4 4.73333 16 1.33333 23 0L27.2 6.2C22.8 8.06667 19.5333 10.6 17.4 13.8C15.3333 16.9333 14.3 20.6667 14.3 25H27V44H0ZM0 0L6.2 6.2C2.06667 8.06667 -1.2 10.6 -3.26667 13.8C-5.33333 16.9333 -6.36667 20.6667 -6.36667 25H6.33333V44H-21V30.8C-21 22.1333 -18.9333 15.2 -14.8 10C-10.6 4.73333 -5 1.33333 2 0Z" fill="#343447" opacity="0.2"/>
                            </svg>
                          </div>

                          {/* Reviewer Info */}
                          <div className="flex items-center gap-[10px] mb-[10px]">
                            <div className="w-[18px] h-[18px] rounded-full overflow-hidden bg-gray-400">
                              <Image 
                                src={review.reviewerAvatar}
                                alt={review.reviewer}
                                width={18}
                                height={18}
                                className="w-full h-full object-cover"
                                unoptimized
                              />
                            </div>
                            <span className="text-[14px] font-medium text-trustblue-900 dark:text-white tracking-[-0.3px]">
                              {review.reviewer}
                            </span>
                            <span className="text-[14px] text-trustblue-900 dark:text-white opacity-40">
                              {review.reviewTime}
                            </span>
                          </div>

                          {/* Review Text */}
                          <p className="text-[14px] leading-[22px] text-trustblue-900 dark:text-white">
                            {review.reviewComment}
                          </p>
                        </div>
                      </div>

                      {/* Separator Line (except for last item) */}
                      {index < reviewedArticles.length - 1 && (
                        <div className="h-px bg-border-light dark:bg-white/10 mt-[42px]" />
                      )}
                    </div>
                  ))}
                </div>
              ) : activeTab === 'grants' && grantsHistory.length > 0 ? (
                <div className="space-y-[48px]">
                  {grantsHistory.map((grant, index) => (
                    <div key={grant.id}>
                      {/* Grant Item */}
                      <div className="space-y-[24px]">
                        {/* Title and Status Badge */}
                        <div className="flex items-start justify-between">
                          <h3 className="text-[18px] font-semibold leading-normal text-trustblue-900 dark:text-white tracking-[-0.18px]">
                            {grant.title}
                          </h3>
                          <span className={`px-[6px] py-[2px] rounded-[16px] text-[10px] font-medium tracking-[0.3px] ${
                            grant.status === 'funded'
                              ? 'bg-opengreen-400 text-opengreen-250 shadow-[0px_2px_1px_0px_inset_rgba(0,0,0,0.1)]'
                              : 'bg-[#2563eb] text-trustblue-150 shadow-[0px_2px_1px_0px_inset_rgba(0,0,0,0.1)]'
                          }`}>
                            {grant.status}
                          </span>
                        </div>

                        {/* Grant Details Grid */}
                        <div className="grid grid-cols-5 gap-x-[48px]">
                          {/* Funding Amount */}
                          <div className="space-y-[3px]">
                            <p className="text-[14px] text-trustblue-900 dark:text-white opacity-50 leading-normal">
                              Grant Funding Amount:
                            </p>
                            <p className="text-[18px] font-semibold text-trustblue-900 dark:text-white leading-normal">
                              {grant.fundingAmount}
                            </p>
                          </div>

                          {/* Deadline */}
                          <div className="space-y-[3px]">
                            <p className="text-[14px] text-trustblue-900 dark:text-white opacity-50 leading-normal">
                              Deadline:
                            </p>
                            <p className="text-[18px] font-semibold text-trustblue-900 dark:text-white leading-normal">
                              {grant.deadline}
                            </p>
                          </div>

                          {/* Projects In */}
                          <div className="space-y-[3px]">
                            <p className="text-[14px] text-trustblue-900 dark:text-white opacity-50 leading-normal">
                              Projects In:
                            </p>
                            <p className="text-[18px] font-semibold text-trustblue-900 dark:text-white leading-normal">
                              {grant.projectsIn}
                            </p>
                          </div>

                          {/* Chance to get in */}
                          <div className="space-y-[3px]">
                            <p className="text-[14px] text-trustblue-900 dark:text-white opacity-50 leading-normal">
                              Chance to get in:
                            </p>
                            <p className="text-[18px] font-semibold text-trustblue-900 dark:text-white leading-normal">
                              {grant.chanceToGetIn}
                            </p>
                          </div>

                          {/* Empty column for spacing */}
                          <div />
                        </div>

                        {/* Hosted by and Chain */}
                        <div className="flex items-start gap-[48px]">
                          {/* Hosted by */}
                          <div className="space-y-[3px]">
                            <p className="text-[14px] text-trustblue-900 dark:text-white opacity-50 leading-normal">
                              Hosted by:
                            </p>
                            <div className="flex items-center gap-[4px]">
                              <div className="w-[16px] h-[16px] rounded-full bg-orange-500 flex items-center justify-center text-[10px]">
                                {grant.hostedBy.icon}
                              </div>
                              <p className="text-[18px] font-semibold text-trustblue-900 dark:text-white leading-normal">
                                {grant.hostedBy.name}
                              </p>
                            </div>
                          </div>

                          {/* Chain */}
                          <div className="space-y-[3px]">
                            <p className="text-[14px] text-trustblue-900 dark:text-white opacity-50 leading-normal">
                              Chain:
                            </p>
                            <div className="flex items-center gap-[4px]">
                              <div className="w-[16px] h-[16px] rounded-full bg-yellow-500 flex items-center justify-center text-[10px]">
                                {grant.chain.icon}
                              </div>
                              <p className="text-[18px] font-semibold text-trustblue-900 dark:text-white leading-normal">
                                {grant.chain.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Separator Line (except for last item) */}
                      {index < grantsHistory.length - 1 && (
                        <div className="h-px bg-border-light dark:bg-white/10 mt-[48px]" />
                      )}
                    </div>
                  ))}
                </div>
              ) : activeTab === 'funding' && fundingRequests.length > 0 ? (
                <div className="space-y-[60px]">
                  {fundingRequests.map((request, index) => (
                    <div key={request.id}>
                      {/* Funding Request Item */}
                      <div className="space-y-[16px]">
                        {/* Title and Status Badge */}
                        <div className="flex items-start justify-between">
                          <h3 className="text-[18px] font-semibold leading-normal text-trustblue-900 dark:text-white tracking-[-0.18px] max-w-[526px]">
                            {request.title}
                          </h3>
                          <span className={`px-[6px] py-[2px] rounded-[16px] text-[10px] font-medium tracking-[0.3px] shadow-[0px_2px_1px_0px_inset_rgba(255,255,255,0.1)] ${
                            request.status === 'funded'
                              ? 'bg-opengreen-250 dark:bg-opengreen-400 text-opengreen-400 dark:text-opengreen-250'
                              : request.status === 'raising'
                              ? 'bg-[#a8c1f7] dark:bg-[#2563eb] text-[#2563eb] dark:text-trustblue-150'
                              : 'bg-[#f0a5a6] dark:bg-[#a12527] text-[#a12527] dark:text-[#f0a5a6]'
                          }`}>
                            {request.status}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-[14px] leading-[22px] text-trustblue-900 dark:text-white tracking-[-0.14px]">
                          {request.description}
                        </p>

                        {/* Details Row */}
                        <div className="flex items-center gap-[32px]">
                          {/* Funding Amount */}
                          <div className="flex items-center gap-[4px]">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                              <svg viewBox="0 0 14 15" fill="none" className="w-[14px] h-[14px]">
                                <path d="M7 0L8.5 5.5H14L9.5 9L11 14.5L7 11L3 14.5L4.5 9L0 5.5H5.5L7 0Z" fill="#58585c"/>
                              </svg>
                            </div>
                            <span className="text-[12px] font-medium leading-[15px] text-trustblue-900 dark:text-white">
                              <span className="text-[#58585c]">Funding Amount: </span>{request.fundingAmount}
                            </span>
                          </div>

                          {/* Research Domain */}
                          <div className="flex items-center gap-[4px]">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                              <svg viewBox="0 0 14 15" fill="none" className="w-[14px] h-[14px]">
                                <path d="M7 0L8.5 5.5H14L9.5 9L11 14.5L7 11L3 14.5L4.5 9L0 5.5H5.5L7 0Z" fill="#58585c"/>
                              </svg>
                            </div>
                            <span className="text-[12px] font-medium leading-[15px] text-trustblue-900 dark:text-white">
                              <span className="text-[#58585c]">Research Domain: </span>{request.researchDomain}
                            </span>
                          </div>

                          {/* Pitchdeck */}
                          <div className="flex items-center gap-[4px]">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                              <svg viewBox="0 0 14 15" fill="none" className="w-[14px] h-[14px]">
                                <path d="M7 0L8.5 5.5H14L9.5 9L11 14.5L7 11L3 14.5L4.5 9L0 5.5H5.5L7 0Z" fill="#58585c"/>
                              </svg>
                            </div>
                            <span className="text-[12px] font-medium leading-[15px]">
                              <span className="text-[#58585c]">Pitchdeck: </span>
                              <span className="text-trustblue-900 dark:text-white">{request.pitchdeck}</span>
                            </span>
                          </div>

                          {/* MVP/Demo */}
                          <div className="flex items-center gap-[4px]">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                              <svg viewBox="0 0 16 16" fill="none" className="w-[16px] h-[16px]">
                                <rect width="16" height="16" rx="2" fill="#58585c" opacity="0.2"/>
                              </svg>
                            </div>
                            <span className="text-[12px] font-medium leading-[15px]">
                              <span className="text-[#58585c]">MVP/Demo: </span>
                              <span className="text-trustblue-900 dark:text-white">{request.mvpDemo}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Separator Line (except for last item) */}
                      {index < fundingRequests.length - 1 && (
                        <div className="h-px bg-border-light dark:bg-white/10 mt-[60px]" />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-[100px]">
                  <div className="text-center mb-[15px]">
                    {/* Empty state document icon */}
                    <svg className="w-[57px] h-[70px] mx-auto" viewBox="0 0 57 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Background documents */}
                      <rect x="7" y="7" width="50" height="63" rx="2" fill="#343447" opacity="0.2"/>
                      <rect width="50" height="63" rx="2" fill="#343447" opacity="0.2"/>
                      {/* Lines on document */}
                      <line x1="10" y1="8" x2="37" y2="8" stroke="#343447" strokeWidth="3"/>
                      <line x1="10" y1="14" x2="37" y2="14" stroke="#343447" strokeWidth="3"/>
                      <line x1="10" y1="20" x2="37" y2="20" stroke="#343447" strokeWidth="3"/>
                      <line x1="10" y1="26" x2="49" y2="26" stroke="#343447" strokeWidth="3"/>
                      <line x1="10" y1="32" x2="49" y2="32" stroke="#343447" strokeWidth="3"/>
                      <line x1="10" y1="38" x2="49" y2="38" stroke="#343447" strokeWidth="3"/>
                      <line x1="10" y1="44" x2="49" y2="44" stroke="#343447" strokeWidth="3"/>
                    </svg>
                  </div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.24px] text-[#343447]">
                    Nothing here yet
                  </p>
                </div>
              )}
            </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

