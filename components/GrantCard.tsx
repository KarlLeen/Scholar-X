import { Calendar, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSidebar } from '@/contexts/SidebarContext'

interface Grant {
  id: number
  title: string
  description: string
  amount: string
  deadline: string
  chanceToGetIn: string
  projectsIn: string
  timeLeft: string
  tags: Array<{ label: string; type: string }>
  image: string
  lightImage?: string
  status?: string | null
  logo?: string
}

export default function GrantCard({ grant }: { grant: Grant }) {
  const { isDarkMode } = useSidebar()
  return (
    <Link href={`/grants/${grant.id}`} className="w-[482px] flex flex-col hover:opacity-90 transition-opacity">
      {/* Card Image/Header - 482px x 160px */}
      <div className="relative w-[482px] h-[160px] rounded-[12px] overflow-hidden bg-black">
        {/* Background Image - no overlay, direct display */}
        <Image 
          src={isDarkMode ? grant.image : (grant.lightImage || grant.image)}
          alt={grant.title}
          width={482}
          height={160}
          className="absolute inset-0 w-full h-full object-cover"
          unoptimized
          priority
        />
        
        {/* Logo if exists - top-left corner */}
        {grant.logo && (
          <div className="absolute top-[12px] left-[12px] w-[20px] h-[20px] z-10" />
        )}
        
        {/* Status Badge - top-right corner */}
        {grant.status === 'applied' && (
          <div className="absolute top-[12px] right-[12px] flex items-center gap-[3px] pl-[4px] pr-[7px] py-[4px] rounded-[32px] bg-[#2563eb] z-10">
            <div className="w-[12px] h-[12px] rounded-full bg-white" />
            <span className="text-[10px] font-semibold text-white tracking-[0.3px] leading-[13px]">
              Applied
            </span>
          </div>
        )}
        
        {/* Title - centered */}
        <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
          <h3 className="font-['Instrument_Serif:Regular',serif] text-[28px] leading-normal text-trustblue-900 dark:text-white text-center max-w-[300px]">
            {grant.title}
          </h3>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="flex flex-col">
        {/* Description - 24px margin top, fixed height 72px */}
        <p className="text-[14px] leading-[24px] tracking-[-0.3px] text-trustblue-900 dark:text-white mt-[24px] h-[72px] overflow-hidden">
          {grant.description}
        </p>
        
        {/* Amount and Time Left - 24px margin top */}
        <div className="flex items-baseline justify-between mt-[24px]">
          <span className="text-[28px] font-semibold leading-normal text-trustblue-900 dark:text-white">{grant.amount}</span>
          <span className="text-[14px] leading-[24px] tracking-[-0.3px] text-[#999999] dark:text-white/60">{grant.timeLeft}</span>
        </div>
        
        {/* Metrics - 24px margin top, inline layout */}
        <div className="flex items-center gap-[16px] mt-[24px]">
          <div className="flex items-center gap-[4px]">
            <Calendar className="w-4 h-4 text-[#999999] dark:text-[#58585c]" />
            <span className="text-[12px] leading-[15px] font-medium text-trustblue-900 dark:text-white">
              <span className="text-[#999999] dark:text-[#58585c]">Deadline: </span>
              <span className="font-semibold">{grant.deadline}</span>
            </span>
          </div>
          <div className="flex items-center gap-[4px]">
            <TrendingUp className="w-4 h-4 text-[#999999] dark:text-[#58585c]" />
            <span className="text-[12px] leading-[15px] font-medium text-trustblue-900 dark:text-white">
              <span className="text-[#999999] dark:text-[#58585c]">Chance to get in: </span>
              <span className="font-semibold">{grant.chanceToGetIn}</span>
            </span>
          </div>
          <div className="flex items-center gap-[4px]">
            <Users className="w-4 h-4 text-[#999999] dark:text-[#58585c]" />
            <span className="text-[12px] leading-[15px] font-medium text-trustblue-900 dark:text-white">
              <span className="text-[#999999] dark:text-[#58585c]">Projects in: </span>
              <span className="font-semibold">{grant.projectsIn}</span>
            </span>
          </div>
        </div>
        
        {/* Tags - 24px margin top */}
        <div className="flex flex-wrap gap-[8px] mt-[24px]">
          {grant.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-[6px] py-[4px] rounded-[16px] border-[0.5px] border-solid border-[#999999] dark:border-white text-[12px] leading-[15px] text-[#999999] dark:text-white/60"
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
