interface Publication {
  title: string
  timeAgo: string
  tags: string
}

interface RightSidebarProps {
  justSubmitted: Publication[]
  needsReview: Publication[]
}

export default function RightSidebar({ justSubmitted, needsReview }: RightSidebarProps) {
  return (
    <aside className="w-[386px] flex-shrink-0">
      <div className="sticky top-[96px]">
        {/* Just Submitted Section - top: 127px */}
        <section>
          <h2 className="text-[8px] font-semibold uppercase tracking-[0.4px] text-trustblue-900/50 dark:text-white/50 mb-[30px] mt-[55px]">
            Just SUBMITTED
          </h2>
          <div className="flex flex-col gap-[32px] mb-[40px]">
            {justSubmitted.map((pub, index) => (
              <div key={index} className="flex flex-col gap-[8px]">
                <h3 className="text-[12px] font-medium leading-[20px] text-trustblue-900 dark:text-white">
                  {pub.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] font-medium leading-normal text-trustblue-900/40 dark:text-white/40">
                  <span>{pub.timeAgo}</span>
                  <span className="text-right whitespace-pre">{pub.tags}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider - top: 945px */}
        <div className="h-px bg-border-light dark:bg-white/10 mb-[40px]" />

        {/* Needs Peer Review Section - top: 985px */}
        <section>
          <h2 className="text-[8px] font-semibold uppercase tracking-[0.4px] text-trustblue-900/50 dark:text-white/50 mb-[30px]">
            Needs peer review
          </h2>
          <div className="flex flex-col gap-[32px]">
            {needsReview.map((pub, index) => (
              <div key={index} className="flex flex-col gap-[8px]">
                <h3 className="text-[12px] font-medium leading-[20px] text-trustblue-900 dark:text-white">
                  {pub.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] font-medium leading-normal text-trustblue-900/40 dark:text-white/40">
                  <span>{pub.timeAgo}</span>
                  <span className="text-right whitespace-pre">{pub.tags}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  )
}

