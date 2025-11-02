'use client'

import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Share2 } from 'lucide-react'
import { useState } from 'react'
import PDFViewer from '@/components/PDFViewer'
import VersionHistory from '@/components/VersionHistory'
import { useSidebar } from '@/contexts/SidebarContext'

// 示例数据 - 实际应该从数据库或API获取
const publicationData = {
  title: 'Router Protocol: Infrastructure for the Cross-Chain World',
  author: {
    name: 'Dylan Bane',
    avatar: '/avatar.svg',
    institution: 'Chinese Academy of Science',
    articles: 22
  },
  date: '14.09.2025',
  readTime: '16 min read',
  tags: ['Infra', 'Cross-chain', 'Interoperability'],
  badges: [
    { type: 'preserved' as const, label: 'preserved' },
    { type: 'peer-reviewed' as const, label: 'peer reviewed' },
    { type: 'raising' as const, label: 'raising' }
  ],
  metadata: {
    ipfsCid: 'bafybe67uz...ojeequvyku',
    doi: '10.1038/s41586-019-1666-5',
    ensDomain: 'quantum-2024.papers.scholarx.eth',
    activeNodes: '~190.000',
    citationCount: 22
  },
  project: {
    name: 'Router Protocol',
    logo: '/avatar.svg',
    fundraising: 'raising' as const
  }
}

const contentSections = [
  'Key Insights',
  'Abstract',
  'Cross-chain bridge protocol',
  'Overview of Router Protocol',
  'Features',
  'ROUTE Token',
  'Usage',
  'Roadmap',
  'Competition & Risk',
  'Governance',
  'Conclusion'
]

export default function PublicationDetail({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState<'publication' | 'pdf' | 'history'>('publication')
  const { sidebarWidth } = useSidebar()

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
            <div className="w-full max-w-[1444px] px-8">
              <div className="flex gap-[62px]">
                {/* Article Content */}
                <div className="flex-1 max-w-[918px]">
              {/* Back Link */}
              <Link 
                href="/"
                className="flex items-center gap-[26px] text-trustblue-900 dark:text-trustblue-900 dark:text-white hover:opacity-80 transition-opacity mt-[27px] mb-[27px]"
              >
                <ArrowLeft className="w-[18px] h-[18px]" />
                <span className="text-[14px]">Back to researches catalog</span>
              </Link>

              {/* Title */}
              <h1 className="font-serif text-[32px] leading-normal text-trustblue-900 dark:text-trustblue-900 dark:text-white mb-[42px]">
                {publicationData.title}
              </h1>

              {/* Author Info & Meta */}
              <div className="mb-[51px]">
                <div className="flex items-center gap-[10px] mb-[32px] text-[12px] text-trustblue-900/40 dark:text-trustblue-900 dark:text-white/40">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-gray-600 dark:bg-gray-400" />
                    <span className="text-trustblue-900 dark:text-trustblue-900 dark:text-white">{publicationData.author.name}</span>
                  </div>
                  <span>•</span>
                  <span>{publicationData.author.institution}</span>
                  <span>•</span>
                  <span>{publicationData.date}</span>
                  <span>•</span>
                  <span>{publicationData.readTime}</span>
                </div>

                {/* Tags & Badges */}
                <div className="flex items-center gap-[10px] flex-wrap">
                  {publicationData.tags.map((tag, index) => (
                    <div key={index}>
                      <span className="px-1 py-0.5 bg-trustblue-900/10 dark:bg-white/10 rounded text-[12px] text-trustblue-900 dark:text-white/40">
                        {tag}
                      </span>
                      {index < publicationData.tags.length - 1 && (
                        <span className="ml-[10px] text-trustblue-900 dark:text-white/40">•</span>
                      )}
                    </div>
                  ))}
                  {publicationData.badges.map((badge, index) => (
                    <>
                      <span className="text-trustblue-900 dark:text-white/40">•</span>
                      <span
                        key={index}
                        className={`px-2 py-0.5 rounded-2xl text-[10px] font-medium ${getTagStyles(badge.type)}`}
                        style={{ boxShadow: '0px 2px 1px 0px inset rgba(0,0,0,0.1)' }}
                      >
                        {badge.label}
                      </span>
                    </>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-border-light dark:border-white/10 mb-[48px]">
                <div className="flex gap-[64px]">
                  <button 
                    onClick={() => setActiveTab('publication')}
                    className={`pb-[6px] border-b-2 text-[12px] font-semibold uppercase tracking-wider transition-colors ${
                      activeTab === 'publication' 
                        ? 'border-trustblue-350 text-trustblue-900 dark:text-white' 
                        : 'border-transparent text-trustblue-900 dark:text-trustblue-900/50 dark:text-white/50 hover:text-trustblue-900 dark:text-trustblue-900/70 dark:text-white/70'
                    }`}
                  >
                    Publication
                  </button>
                  <button 
                    onClick={() => setActiveTab('pdf')}
                    className={`pb-[6px] border-b-2 text-[12px] font-semibold uppercase tracking-wider transition-colors ${
                      activeTab === 'pdf' 
                        ? 'border-trustblue-350 text-trustblue-900 dark:text-white' 
                        : 'border-transparent text-trustblue-900 dark:text-trustblue-900/50 dark:text-white/50 hover:text-trustblue-900 dark:text-trustblue-900/70 dark:text-white/70'
                    }`}
                  >
                    Original PDF
                  </button>
                  <button 
                    onClick={() => setActiveTab('history')}
                    className={`pb-[6px] border-b-2 text-[12px] font-semibold uppercase tracking-wider transition-colors ${
                      activeTab === 'history' 
                        ? 'border-trustblue-350 text-trustblue-900 dark:text-white' 
                        : 'border-transparent text-trustblue-900 dark:text-trustblue-900/50 dark:text-white/50 hover:text-trustblue-900 dark:text-trustblue-900/70 dark:text-white/70'
                    }`}
                  >
                    Version History
                  </button>
                </div>
              </div>

              {/* Content based on active tab */}
              {activeTab === 'publication' && (
                <>
              {/* Key Insights */}
              <section className="mb-[64px]">
                <h2 className="text-[18px] font-semibold text-trustblue-900 dark:text-white mb-[24px]">Key Insights</h2>
                <ul className="space-y-4 text-[14px] leading-[24px] text-trustblue-900 dark:text-white">
                  <li>• Router Protocol is a cross-chain messaging protocol currently in its alpha mainnet. It uses a mesh network architecture to facilitate communication between disparate chains.</li>
                  <li>• Router offers a suite of products including its main application, Voyager, a flexible widget, and an SDK called CrossTalk.</li>
                  <li>• Voyager enables cross-chain asset swaps by leveraging DEX liquidity and aggregators such as 1inch.</li>
                  <li>• The CrossTalk SDK and widget enable other applications and developers to build interoperability directly into their systems.</li>
                  <li>• Router allows users to pay transfer fees with the source chain&apos;s native gas token, USDC, or with ROUTE or DFYN with rebates given for fees paid in ROUTE.</li>
                </ul>
              </section>

              {/* Abstract */}
              <section className="mb-[64px]">
                <h2 className="text-[18px] font-semibold text-trustblue-900 dark:text-white mb-[24px] flex items-center gap-2">
                  Abstract
                </h2>
                <div className="text-[14px] leading-[24px] text-trustblue-900 dark:text-white space-y-4">
                  <p>Interoperability is increasingly becoming an important part of how the crypto ecosystem evolves. As more and more Layer-1s and Layer-2s become specialized, more of the value becomes siloed, solving one problem but creating another.</p>
                  <p>These ecosystems are not interoperable by default. They create a set of isolated environments, but all of the chains and apps built on top need to talk to one another to fully maximize their potential. This problem has sparked a new wave of bridging solutions with the goal of connecting these ecosystems.</p>
                  <p>The most common design approach for bridging chains involves the use of dedicated chains as bridges, also known as middlechains — think Wormhole or Ronin. These middlechains connect two blockchains by establishing two-way communication between them on a 1-1 basis (e.g., Ethereum to Solana). But this approach is limited. Adding a new chain to the network becomes exponentially more difficult for every chain that is added. For each new chain, new connections or 1-1 bridges need to be added for the chain to be connected to the new network.</p>
                  <p>Router Protocol has taken an innovative approach to avoid the additional complexity and costs of this process. Instead of implementing a 1-1 bridge for every connection, Router generalizes the process of plugging in new chains. The protocol adopts a <span className="text-trustblue-350">mesh network</span> architecture where chains can plug into and immediately be connected to other participating chains.</p>
                  <p>In this report, we will cover how the Router Protocol works, its features and roadmap, and what it seeks to unlock in this increasingly cross-chain world.</p>
                </div>
              </section>

              {/* Cross-Chain Bridge Protocols */}
              <section className="mb-[64px]">
                <h2 className="text-[18px] font-semibold text-trustblue-900 dark:text-white mb-[24px]">Cross-Chain Bridge Protocols</h2>
                <div className="text-[14px] leading-[24px] text-trustblue-900 dark:text-white space-y-4">
                  <p>When considering bridging solutions, all design approaches adopt certain tradeoffs and require certain trust assumptions. As outlined by Berezon in his piece, <span className="text-trustblue-350">Blockchain Bridges</span>, there are three common validation mechanisms currently used:</p>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li>External Validators & Federations — as the name suggests, these consist of an external set of validators that sit between the source and destination chain.</li>
                    <li>Light Clients & Relays — both source and destination chains implement light clients, and relayers facilitate the passing of messages between them.</li>
                    <li>Liquidity Networks — individual liquidity nodes holding both source and destination chain assets operate on a P2P basis.</li>
                  </ul>

                  <p>They can all be compared by how they optimize for some of these factors:</p>
                  
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Security</li>
                    <li>Speed</li>
                    <li>Connectivity</li>
                    <li>Capital Efficiency</li>
                    <li>Statefulness</li>
                  </ul>

                  {/* Bridge Architecture Comparison Chart */}
                    <div className="w-full h-[450px] relative my-8 rounded-lg overflow-hidden">
                    <Image 
                      src="/assets/Bridge_Architecture_Tradeoffs.png"
                      alt="Bridge Architecture Comparison Chart"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p>External Validators & Federations are the most widely used, given that they present an attractive combination of statefulness, connectivity, and speed. However, what they offer in those areas, they sacrifice in security. Their users have to rely on the security of the bridge as opposed to that of the underlying chains.</p>

                  <p>Light Clients & Relays are the second most popular and optimize for statefulness, capital efficiency, and security. The high level of statefulness is possible because of the wide range of data that can be passed through header relay systems. They are also capital efficient because they don&apos;t need capital lockup. Lastly, they provide high security because they don&apos;t require additional trust assumptions. The limiting factor is connectivity since adding new chains is not as straightforward.</p>

                  <p>Liquidity networks provide speed and security because nodes operate in a peer-to-peer fashion. The nodes don&apos;t require consensus with the rest of the nodes, which is why they are referred to as &quot;locally verified systems.&quot; They are also quite capital efficient because capital is not such an important component for securing the system. They do, however, sacrifice statefulness, given that it is limited in what the calldata can perform.</p>
                </div>
              </section>

              {/* Overview of Router Protocol */}
              <section className="mb-[64px]">
                <h2 className="text-[18px] font-semibold text-trustblue-900 dark:text-white mb-[24px]">Overview of Router Protocol</h2>
                
                {/* Background */}
                <div className="mb-[32px]">
                  <h3 className="text-[14px] font-semibold text-trustblue-900 dark:text-white mb-[16px]">Background</h3>
                  <div className="text-[14px] leading-[24px] text-trustblue-900 dark:text-white space-y-4">
                    <p>Router was founded in August 2020 by Ramani Ramachandran, Shubham Singh, Chandan Choudhury, and Priyeshu Garg. Following the onset of new Layer-1s and scaling solutions, the team recognized a need for better interoperability infrastructure. Native bridge solutions were too slow and only focused on connecting two ecosystems.</p>
                    <p>The project raised an initial seed round of $485,000 and in October 2021 raised an additional $4.1 million from investors including Polygon and Coinbase Ventures.</p>
                  </div>
                </div>

                {/* How Router Works */}
                <div className="mb-[32px]">
                  <h3 className="text-[14px] font-semibold text-trustblue-900 dark:text-white mb-[16px]">How Router Works</h3>
                  <div className="text-[14px] leading-[24px] text-trustblue-900 dark:text-white space-y-4">
                    <p>The Router Protocol is an extensible cross-chain bridge built as a mesh network of chains connected via a series of nodes. These nodes have bridge contracts deployed on each of the chains connected to the network. The bridge contracts can listen to and perform transactions in order to facilitate transfers of value between chains. The transfer of value can happen in a number of ways such as locking assets in the source chain and unlocking or minting assets in the destination chain. The protocol can also be used to relay data among chains to perform cross-chain actions without the need to bridge assets.</p>

                    <p>Router currently connects nine EVM-based chains consisting of Ethereum, Polygon, BNB Chain, Avalanche, Fantom, Arbitrum, Cronos, Harmony, and Optimism. The team is currently working on adding Aurora and Moonbeam to the mesh. The team is also working on integrating non-EVM chains such as Solana, Algorand, and the Cosmos ecosystem to the mesh. Their first step will be the Cosmos ecosystem via building on the CosmWasm module.</p>

                    <p>Given its early stage, Router is currently in a limited production version. In this version, the team controls three nodes that secure the system. However, the team is working to migrate the protocol to an independent, base-layer blockchain network built using the Cosmos SDK.</p>
                  </div>
                </div>
              </section>
                </>
              )}

              {/* PDF Viewer */}
              {activeTab === 'pdf' && (
                <div className="mb-[64px]">
                  <PDFViewer />
                </div>
              )}

              {/* Version History */}
              {activeTab === 'history' && (
                <div className="mb-[64px]">
                  <VersionHistory />
                </div>
              )}
              </div>

              {/* Right Sidebar */}
              <div className="w-[358px] flex-shrink-0">
                <div className="sticky top-[100px]">
                {/* Share Button */}
                <button className="flex items-center gap-2 px-[10px] py-2 border border-border-light dark:border-[#2b3740] rounded-md text-sm text-trustblue-900 dark:text-white hover:bg-trustblue-900/5 dark:hover:bg-white/5 transition-colors mb-[66px]">
                  <Share2 className="w-4 h-4" />
                  <span>Share Project</span>
                </button>

                {/* Table of Contents */}
                <section className="mb-[24px]">
                  <h3 className="text-[8px] font-semibold uppercase tracking-wider text-trustblue-900/50 dark:text-white/50 mb-[16px]">
                    Content
                  </h3>
                  <div className="space-y-[10px] pl-2">
                    {contentSections.map((section, index) => (
                      <a
                        key={index}
                        href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`block text-[12px] ${
                          index === 0 ? 'font-medium text-trustblue-900 dark:text-white' : 'text-trustblue-900/70 dark:text-white/70 hover:text-trustblue-900 dark:hover:text-white'
                        }`}
                      >
                        {section}
                      </a>
                    ))}
                  </div>
                </section>

                <div className="h-px bg-trustblue-900/10 dark:bg-white/10 mb-[24px]" />

                {/* Publication Info */}
                <section className="mb-[24px]">
                  <h3 className="text-[8px] font-semibold uppercase tracking-wider text-trustblue-900/50 dark:text-white/50 mb-[16px]">
                    Publication
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-trustblue-900/50 dark:text-white/50">Filecoin Preserve:</span>
                      <span className="px-2 py-0.5 bg-preserved-light dark:bg-[#6d5441] text-preserved-dark dark:text-[#d9ccbc] rounded-2xl text-[10px] font-medium">
                        preserved
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-trustblue-900/50 dark:text-white/50">Peer Review:</span>
                      <span className="px-2 py-0.5 bg-opengreen-250 dark:bg-opengreen-600 text-opengreen-400 dark:text-opengreen-300 rounded-2xl text-[10px] font-medium">
                        peer reviewed
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-trustblue-900/50 dark:text-white/50">Citation Count:</span>
                      <span className="text-trustblue-900 dark:text-white">{publicationData.metadata.citationCount}</span>
                    </div>
                  </div>
                </section>

                {/* Download Button */}
                <button className="w-full bg-[#e6e6e6] dark:bg-[#29292d] px-4 py-3 rounded-lg text-[14px] font-medium text-[#333333] dark:text-white hover:bg-[#d6d6d6] dark:hover:bg-[#323238] transition-colors mb-[24px]">
                  Download Research
                </button>

                <div className="h-px bg-trustblue-900/10 dark:bg-white/10 mb-[24px]" />

                {/* Project Info */}
                <section className="mb-[24px]">
                  <h3 className="text-[8px] font-semibold uppercase tracking-wider text-trustblue-900/50 dark:text-white/50 mb-[16px]">
                    Project
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-trustblue-900/50 dark:text-white/50">Project Name:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-gray-600 dark:bg-gray-600" />
                        <span className="text-[12px] text-trustblue-900 dark:text-white">{publicationData.project.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-trustblue-900/50 dark:text-white/50">Fundraising:</span>
                      <span className={`px-2 py-0.5 rounded-2xl text-[10px] font-medium ${getTagStyles(publicationData.project.fundraising)}`}>
                        {publicationData.project.fundraising}
                      </span>
                    </div>
                  </div>
                </section>

                {/* Funding Details Button */}
                <button className="w-full bg-trustblue-200 dark:bg-trustblue-600 px-4 py-3 rounded-lg text-[14px] font-medium text-[#0b1e47] dark:text-white hover:bg-trustblue-200/90 dark:hover:bg-trustblue-600/90 transition-colors mb-[24px]">
                  See Requested Funding Details
                </button>

                <div className="h-px bg-trustblue-900/10 dark:bg-white/10 mb-[24px]" />

                {/* Author */}
                <section className="mb-[24px]">
                  <h3 className="text-[8px] font-semibold uppercase tracking-wider text-trustblue-900/50 dark:text-white/50 mb-[16px]">
                    Author
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-gray-600 dark:bg-gray-600" />
                      <span className="text-[12px] font-medium text-trustblue-900 dark:text-white">{publicationData.author.name}</span>
                    </div>
                    <button className="bg-trustblue-200 dark:bg-trustblue-600 px-2 py-1 rounded text-[12px] text-[#0b1e47] dark:text-white hover:bg-trustblue-200/90 dark:hover:bg-trustblue-600/90">
                      {publicationData.author.articles} articles →
                    </button>
                  </div>
                </section>

                <div className="h-px bg-trustblue-900/10 dark:bg-white/10 mb-[24px]" />

                {/* Metadata */}
                <section>
                  <h3 className="text-[8px] font-semibold uppercase tracking-wider text-trustblue-900/50 dark:text-white/50 mb-[16px]">
                    Metadata
                  </h3>
                  <div className="space-y-4 text-[12px]">
                    <div className="flex items-center justify-between">
                      <span className="text-trustblue-900/50 dark:text-white/50">IPFS CID:</span>
                      <span className="text-trustblue-900 dark:text-white">{publicationData.metadata.ipfsCid}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-trustblue-900/50 dark:text-white/50">DOI:</span>
                      <span className="text-trustblue-900 dark:text-white">{publicationData.metadata.doi}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-trustblue-900/50 dark:text-white/50">ENS Domain:</span>
                      <span className="text-trustblue-900 dark:text-white text-right text-[11px]">{publicationData.metadata.ensDomain}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-trustblue-900/50 dark:text-white/50">Active Nodes:</span>
                      <span className="text-trustblue-900 dark:text-white">{publicationData.metadata.activeNodes}</span>
                    </div>
                  </div>
                </section>
                </div>
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
