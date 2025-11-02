'use client'

import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Share2, ExternalLink } from 'lucide-react'
import { useSidebar } from '@/contexts/SidebarContext'

// 示例数据 - 实际应该从数据库或API获取
const grantData = {
  id: 4,
  title: 'Zcash Privacy Enhancement Fund',
  description: 'The purpose of Zcash Privacy Enhancement Fund is to support ZEC ecosystem growth and innovation, reinforcing network utility and adoption.',
  amount: '$5,500,000',
  deadline: '31.12.2025',
  chanceToGetIn: '1 in 10',
  projectsIn: '1 out of 5',
  image: '/assets/Rectangle4.png',
  lightImage: '/assets/light4.png',
  chain: {
    name: 'Zcash',
    icon: '💰'
  },
  grant: {
    supportWithVCRaise: 'Yes',
    kycKybRequirement: 'Yes',
    projectStages: 'All'
  },
  organizer: {
    name: 'Orange DAO',
    avatar: '🟠',
    investedIn: '3 Projects',
    investedThroughScholarX: '$20M',
    website: 'orangedao.xyz'
  }
}

export default function GrantDetail({ params }: { params: { id: string } }) {
  const { sidebarWidth, isDarkMode } = useSidebar()

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
          className="fixed top-0 right-0 h-[72px] bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-light dark:border-white/10 z-40 overflow-x-hidden transition-all duration-200"
          style={{ left: `${sidebarWidth}px` }}
        >
          <div className="flex items-center w-full h-full px-4 md:px-2">
            {/* Left Side */}
            <div className="flex items-center gap-[16px] ml-[24px]">
              <h1 className="text-[18px] font-semibold tracking-[-0.3px] text-trustblue-900 dark:text-white">Grants</h1>
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
          {/* Content Container - centered with max width */}
          <div className="max-w-[1444px] mx-auto px-8">
            {/* Back Button */}
            <Link href="/grants" className="flex items-center gap-2 text-trustblue-900 dark:text-white text-[14px] hover:opacity-70 transition-opacity mt-[27px] mb-[38px]">
              <ArrowLeft className="w-[18px] h-[18px]" />
              <span>Back to grants</span>
            </Link>

            {/* Hero Image with Title */}
            <div className="mb-[56px]">
              <div className="relative w-full max-w-[1372px] h-[174px] rounded-[12px] overflow-hidden bg-black">
                <Image 
                  src={isDarkMode ? grantData.image : (grantData.lightImage || grantData.image)}
                  alt={grantData.title}
                  width={1372}
                  height={174}
                  className="object-cover w-full h-full"
                  unoptimized
                />
                <h1 className="absolute inset-0 flex items-center justify-center font-serif text-[40px] text-trustblue-900 dark:text-white text-center px-8 z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {grantData.title}
                </h1>
                {/* Share Button - Figma: right side */}
                <button className="absolute right-[28px] top-1/2 -translate-y-1/2 flex items-center gap-2 px-[10px] py-[8px] rounded-[6px] border border-border-light dark:border-[#2b3740] text-trustblue-900 dark:text-white text-[14px] hover:bg-trustblue-900/5 dark:hover:bg-white/5 transition-colors z-10">
                  <Share2 className="w-4 h-4" />
                  <span>Share Project</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex gap-[62px]">
              {/* Main Content */}
              <div className="flex-1 max-w-[918px]">
                {/* Grant Info Stats */}
                <div className="grid grid-cols-4 gap-[24px] mb-[80px]">
                  <div>
                    <p className="text-[14px] text-trustblue-900 dark:text-white/50 mb-[7px]">Grant Funding Amount:</p>
                    <p className="text-[32px] font-semibold text-trustblue-900 dark:text-white">{grantData.amount}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-trustblue-900 dark:text-white/50 mb-[7px]">Deadline:</p>
                    <p className="text-[32px] font-semibold text-trustblue-900 dark:text-white">{grantData.deadline}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-trustblue-900 dark:text-white/50 mb-[7px]">Projects In:</p>
                    <p className="text-[32px] font-semibold text-trustblue-900 dark:text-white">{grantData.projectsIn}</p>
                  </div>
                  <div>
                    <p className="text-[14px] text-trustblue-900 dark:text-white/50 mb-[7px]">Chance to get in:</p>
                    <p className="text-[32px] font-semibold text-trustblue-900 dark:text-white">{grantData.chanceToGetIn}</p>
                  </div>
                </div>

                {/* Overview Section */}
                <div className="mb-[80px]">
                  <h2 className="text-[18px] font-semibold text-trustblue-900 dark:text-white mb-[24px]">Overview</h2>
                  <div className="text-[14px] leading-[26px] text-trustblue-900 dark:text-white space-y-4">
                    <p>The purpose of Zcash Privacy Enhancement Fund is to support ZEC ecosystem growth and innovation, reinforcing network utility and adoption.</p>
                    <p>This grant provides retroactive funding to teams building ZEC-related privacy enhancement tools. Grants will only be disbursed once all eligibility requirements have been met and verified by the Zcash foundation.</p>
                  </div>
                </div>

                {/* Requirements Section */}
                <div className="mb-[80px]">
                  <h2 className="text-[18px] font-semibold text-trustblue-900 dark:text-white mb-[24px]">Requirements</h2>
                  <div className="space-y-[24px]">
                    <div>
                      <h3 className="text-[16px] font-medium text-trustblue-900 dark:text-white mb-[8px]">Zcash Blockchain</h3>
                      <p className="text-[14px] leading-[26px] text-trustblue-900 dark:text-white">
                        Projects should focus on creating novel, privacy-enhancing solutions that expand Zcash's capabilities and adoption. While projects with KYC requirements may be considered, priority will be given to those that maximize user anonymity and data protection.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-medium text-trustblue-900 dark:text-white mb-[8px]">Developer tooling</h3>
                      <p className="text-[14px] leading-[26px] text-trustblue-900 dark:text-white">
                        Tooling projects must support Zcash L1 builders — for example, deployment tools, explorers, testing frameworks, validator dashboards, and more. Preference will be given to tools that integrate Zcash-native protocols like Halo and Orchard. Tooling must be open-source, publicly usable, and accompanied by documentation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Application Process Timeline */}
                <div className="mb-[80px]">
                  <h2 className="text-[18px] font-semibold text-trustblue-900 dark:text-white mb-[40px]">Application Process Timeline</h2>
                  <div className="flex justify-between relative">
                    {/* Horizontal lines */}
                    <div className="absolute top-[12px] left-[calc(166px/2)] right-[calc(166px/2)] h-px bg-trustblue-900/10 dark:bg-white/10" />

                    {/* Step 1 - Application Submit */}
                    <div className="flex flex-col items-center w-[166px]">
                      <div className="w-[16px] h-[16px] rounded-full bg-trustblue-900/20 dark:bg-white/20 flex items-center justify-center mb-[12px] relative z-10">
                        <div className="w-[8px] h-[8px] rounded-full bg-white" />
                      </div>
                      <p className="text-[12px] font-medium text-trustblue-900 dark:text-white mb-[16px]">Day 1</p>
                      <div className="relative w-full">
                        {/* Outer background - white 10% opacity, rounded-16px */}
                        <div className="bg-trustblue-900/10 dark:bg-white/10 rounded-[16px] h-[137px] w-full" />
                        {/* Inner content with inner background */}
                        <div className="absolute top-[9px] left-0 right-0 bottom-0 flex flex-col items-center text-center px-[8px]">
                          <p className="text-[14px] font-medium text-trustblue-900 dark:text-white mb-[8px]">Application Submit</p>
                          {/* Inner background card */}
                          <div className="relative w-[calc(100%-8px)] bg-trustblue-900/20 dark:bg-white/20 rounded-[12px] px-[8px] py-[12px]">
                            <p className="text-[12px] leading-[20px] text-trustblue-900 dark:text-white/70">
                              Provide a project proposal, via application submit form
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 - Review */}
                    <div className="flex flex-col items-center w-[166px]">
                      <div className="w-[16px] h-[16px] rounded-full bg-trustblue-900/20 dark:bg-white/20 flex items-center justify-center mb-[12px] relative z-10">
                        <div className="w-[8px] h-[8px] rounded-full bg-white" />
                      </div>
                      <p className="text-[12px] font-medium text-trustblue-900 dark:text-white mb-[16px]">Day 2-7</p>
                      <div className="relative w-full">
                        <div className="bg-trustblue-900/10 dark:bg-white/10 rounded-[16px] h-[137px] w-full" />
                        <div className="absolute top-[9px] left-0 right-0 bottom-0 flex flex-col items-center text-center px-[8px]">
                          <p className="text-[14px] font-medium text-trustblue-900 dark:text-white mb-[8px]">Review</p>
                          <div className="relative w-[calc(100%-8px)] bg-trustblue-900/20 dark:bg-white/20 rounded-[12px] px-[8px] py-[12px]">
                            <p className="text-[12px] leading-[20px] text-trustblue-900 dark:text-white/70">
                              Organizer will verify the eligibility of the application
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 - Interview */}
                    <div className="flex flex-col items-center w-[166px]">
                      <div className="w-[16px] h-[16px] rounded-full bg-trustblue-900/20 dark:bg-white/20 flex items-center justify-center mb-[12px] relative z-10">
                        <div className="w-[8px] h-[8px] rounded-full bg-white" />
                      </div>
                      <p className="text-[12px] font-medium text-trustblue-900 dark:text-white mb-[16px]">Day 8-10</p>
                      <div className="relative w-full">
                        <div className="bg-trustblue-900/10 dark:bg-white/10 rounded-[16px] h-[137px] w-full" />
                        <div className="absolute top-[9px] left-0 right-0 bottom-0 flex flex-col items-center text-center px-[8px]">
                          <p className="text-[14px] font-medium text-trustblue-900 dark:text-white mb-[8px]">Interview</p>
                          <div className="relative w-[calc(100%-8px)] bg-trustblue-900/20 dark:bg-white/20 rounded-[12px] px-[8px] py-[12px]">
                            <p className="text-[12px] leading-[20px] text-trustblue-900 dark:text-white/70">
                              Organizer will invite you for the interview
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 - Decision */}
                    <div className="flex flex-col items-center w-[166px]">
                      <div className="w-[16px] h-[16px] rounded-full bg-trustblue-900/20 dark:bg-white/20 flex items-center justify-center mb-[12px] relative z-10">
                        <div className="w-[8px] h-[8px] rounded-full bg-white" />
                      </div>
                      <p className="text-[12px] font-medium text-trustblue-900 dark:text-white mb-[16px]">Day 11-14</p>
                      <div className="relative w-full">
                        <div className="bg-trustblue-900/10 dark:bg-white/10 rounded-[16px] h-[137px] w-full" />
                        <div className="absolute top-[9px] left-0 right-0 bottom-0 flex flex-col items-center text-center px-[8px]">
                          <p className="text-[14px] font-medium text-trustblue-900 dark:text-white mb-[8px]">Decision</p>
                          <div className="relative w-[calc(100%-8px)] bg-trustblue-900/20 dark:bg-white/20 rounded-[12px] px-[8px] py-[12px]">
                            <p className="text-[12px] leading-[20px] text-trustblue-900 dark:text-white/70">
                              Wait for decision to arrive in your inbox
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 - Contract */}
                    <div className="flex flex-col items-center w-[166px]">
                      <div className="w-[16px] h-[16px] rounded-full bg-trustblue-900/20 dark:bg-white/20 flex items-center justify-center mb-[12px] relative z-10">
                        <div className="w-[8px] h-[8px] rounded-full bg-white" />
                      </div>
                      <p className="text-[12px] font-medium text-trustblue-900 dark:text-white mb-[16px]">Day 15</p>
                      <div className="relative w-full">
                        <div className="bg-trustblue-900/10 dark:bg-white/10 rounded-[16px] h-[137px] w-full" />
                        <div className="absolute top-[9px] left-0 right-0 bottom-0 flex flex-col items-center text-center px-[8px]">
                          <p className="text-[14px] font-medium text-trustblue-900 dark:text-white mb-[8px]">Contract</p>
                          <div className="relative w-[calc(100%-8px)] bg-trustblue-900/20 dark:bg-white/20 rounded-[12px] px-[8px] py-[12px]">
                            <p className="text-[12px] leading-[20px] text-trustblue-900 dark:text-white/70">
                              in case of success — sign a contract and receive funding
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="relative">
                  <h2 className="text-[18px] font-semibold text-trustblue-900 dark:text-white mb-[40px]">Milestones</h2>
                  
                  {/* Milestone 1 - Literature Review */}
                  <div className="relative mb-[40px] h-[217px]">
                    {/* Vertical dashed line - left: 216px from main content start */}
                    <div className="absolute left-[2px] top-[26px] bottom-[-40px] w-px border-l border-dashed border-border-light dark:border-white/10" />
                    {/* Circle badge - left: 238px (24px), top: 26px */}
                    <div className="absolute left-[24px] top-[26px] w-[24px] h-[24px] rounded-full bg-trustblue-900/20 dark:bg-white/20 flex items-center justify-center border-2 border-white/20">
                      <span className="text-[6px] font-semibold text-trustblue-900 dark:text-white/50 tracking-[0.3px]">20%</span>
                    </div>
                    {/* MILESTONE label - left: 214px, top: 0 */}
                    <p className="absolute left-0 top-0 text-[8px] font-semibold text-trustblue-900 dark:text-white/50 uppercase tracking-[0.4px]">MILESTONE 1</p>
                    {/* Title - left: 270px, top: 29px */}
                    <h3 className="absolute left-[56px] top-[29px] text-[16px] font-medium text-trustblue-900 dark:text-white">Literature Review</h3>
                    {/* Amount - right align at 905px, top: 28px */}
                    <p className="absolute left-[645px] top-[28px] text-[16px] font-medium text-trustblue-900 dark:text-white">$12,000</p>
                    {/* Description - left: 237px (23px), top: 66px, width: 689px */}
                    <p className="absolute left-[23px] top-[66px] w-[689px] text-[14px] leading-[25px] tracking-[-0.3px] text-trustblue-900 dark:text-white">
                      Interoperability is increasingly becoming an important part of how the crypto ecosystem evolves. As more and more Layer-1s and Layer-2s become specialized, more of the value becomes siloed, solving one problem but creating another.
                    </p>
                    {/* Icons and details - left: 237px, top: 168px */}
                    <div className="absolute left-[23px] top-[168px] flex gap-[32px]">
                      <div className="flex items-center gap-[4px]">
                        <svg className="w-4 h-4 text-trustblue-900 dark:text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[12px] font-medium text-[#58585c]">
                          Due in: <span className="text-trustblue-900 dark:text-white">1 month</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <svg className="w-4 h-4 text-trustblue-900 dark:text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-[12px] font-medium text-[#58585c]">
                          Deliverables: <span className="text-trustblue-900 dark:text-white">research paper</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Milestone 2 - Data Collection */}
                  <div className="relative mb-[40px] h-[217px]">
                    <div className="absolute left-[2px] top-[26px] bottom-[-40px] w-px border-l border-dashed border-border-light dark:border-white/10" />
                    <div className="absolute left-[24px] top-[26px] w-[24px] h-[24px] rounded-full bg-trustblue-900/20 dark:bg-white/20 flex items-center justify-center border-2 border-white/20">
                      <span className="text-[6px] font-semibold text-trustblue-900 dark:text-white/50 tracking-[0.3px]">20%</span>
                    </div>
                    <p className="absolute left-0 top-0 text-[8px] font-semibold text-trustblue-900 dark:text-white/50 uppercase tracking-[0.4px]">MILESTONE 2</p>
                    <h3 className="absolute left-[56px] top-[29px] text-[16px] font-medium text-trustblue-900 dark:text-white">Data Collection</h3>
                    <p className="absolute left-[645px] top-[28px] text-[16px] font-medium text-trustblue-900 dark:text-white">$12,000</p>
                    <p className="absolute left-[23px] top-[66px] w-[689px] text-[14px] leading-[25px] tracking-[-0.3px] text-trustblue-900 dark:text-white">
                      Interoperability is increasingly becoming an important part of how the crypto ecosystem evolves. As more and more Layer-1s and Layer-2s become specialized, more of the value becomes siloed, solving one problem but creating another.
                    </p>
                    <div className="absolute left-[23px] top-[168px] flex gap-[32px]">
                      <div className="flex items-center gap-[4px]">
                        <svg className="w-4 h-4 text-trustblue-900 dark:text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[12px] font-medium text-[#58585c]">
                          Due in: <span className="text-trustblue-900 dark:text-white">3 months</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <svg className="w-4 h-4 text-trustblue-900 dark:text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-[12px] font-medium text-[#58585c]">
                          Deliverables: <span className="text-trustblue-900 dark:text-white">methodology doc</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Milestone 3 - Model Development */}
                  <div className="relative h-[217px]">
                    <div className="absolute left-[2px] top-[26px] bottom-0 w-px border-l border-dashed border-border-light dark:border-white/10" />
                    <div className="absolute left-[24px] top-[26px] w-[24px] h-[24px] rounded-full bg-trustblue-900/20 dark:bg-white/20 flex items-center justify-center border-2 border-white/20">
                      <span className="text-[6px] font-semibold text-trustblue-900 dark:text-white/50 tracking-[0.3px]">20%</span>
                    </div>
                    <p className="absolute left-0 top-0 text-[8px] font-semibold text-trustblue-900 dark:text-white/50 uppercase tracking-[0.4px]">MILESTONE 3</p>
                    <h3 className="absolute left-[56px] top-[29px] text-[16px] font-medium text-trustblue-900 dark:text-white">Model Development</h3>
                    <p className="absolute left-[645px] top-[28px] text-[16px] font-medium text-trustblue-900 dark:text-white">$12,000</p>
                    <p className="absolute left-[23px] top-[66px] w-[689px] text-[14px] leading-[25px] tracking-[-0.3px] text-trustblue-900 dark:text-white">
                      Interoperability is increasingly becoming an important part of how the crypto ecosystem evolves. As more and more Layer-1s and Layer-2s become specialized, more of the value becomes siloed, solving one problem but creating another.
                    </p>
                    <div className="absolute left-[23px] top-[168px] flex gap-[32px]">
                      <div className="flex items-center gap-[4px]">
                        <svg className="w-4 h-4 text-trustblue-900 dark:text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[12px] font-medium text-[#58585c]">
                          Due in: <span className="text-trustblue-900 dark:text-white">3 months</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <svg className="w-4 h-4 text-trustblue-900 dark:text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-[12px] font-medium text-[#58585c]">
                          Deliverables: <span className="text-trustblue-900 dark:text-white">code repo + initial results</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-[358px] flex-shrink-0">
                <div className="sticky top-[100px] space-y-[24px]">
                  {/* Grant Info */}
                  <div>
                    <p className="text-[8px] text-trustblue-900 dark:text-white/50 uppercase tracking-[0.4px] mb-[16px]">GRANT</p>
                    <div className="space-y-[16px] text-[12px]">
                      <div className="flex justify-between">
                        <span className="text-trustblue-900 dark:text-white/50">Chain:</span>
                        <span className="text-trustblue-900 dark:text-white flex items-center gap-1">
                          <span>{grantData.chain.icon}</span>
                          {grantData.chain.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-trustblue-900 dark:text-white/50">Support with VC raise:</span>
                        <span className="text-trustblue-900 dark:text-white">{grantData.grant.supportWithVCRaise}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-trustblue-900 dark:text-white/50">KYC / KYB requirement:</span>
                        <span className="text-trustblue-900 dark:text-white">{grantData.grant.kycKybRequirement}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-trustblue-900 dark:text-white/50">Project stages:</span>
                        <span className="text-trustblue-900 dark:text-white">{grantData.grant.projectStages}</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-trustblue-900/10 dark:bg-white/10" />

                  {/* Organizer Info */}
                  <div>
                    <p className="text-[8px] text-trustblue-900 dark:text-white/50 uppercase tracking-[0.4px] mb-[16px]">ORGANIZER</p>
                    <div className="space-y-[16px] text-[12px]">
                      <div className="flex justify-between">
                        <span className="text-trustblue-900 dark:text-white/50">Hosted by:</span>
                        <span className="text-trustblue-900 dark:text-white flex items-center gap-1">
                          <span>{grantData.organizer.avatar}</span>
                          {grantData.organizer.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-trustblue-900 dark:text-white/50">Invested in:</span>
                        <span className="text-trustblue-900 dark:text-white">{grantData.organizer.investedIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-trustblue-900 dark:text-white/50">Invested through ScholarX:</span>
                        <span className="text-trustblue-900 dark:text-white">{grantData.organizer.investedThroughScholarX}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-trustblue-900 dark:text-white/50">Website:</span>
                        <a href={`https://${grantData.organizer.website}`} target="_blank" rel="noopener noreferrer" className="text-trustblue-900 dark:text-white flex items-center gap-1 hover:opacity-70">
                          {grantData.organizer.website}
                          <ExternalLink className="w-[14px] h-[14px]" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-trustblue-900/10 dark:bg-white/10" />

                  {/* Submit Button */}
                  <button className="w-full bg-[#2563eb] py-[14px] rounded-[8px] text-[14px] font-semibold text-white hover:bg-[#2563eb]/90 transition-colors">
                    Submit to Grant
                  </button>
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

