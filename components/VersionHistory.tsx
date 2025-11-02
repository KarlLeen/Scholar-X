export default function VersionHistory() {
  const versions = [
    {
      date: '24.11.25',
      type: 'Actual Version',
      description: '"Abstract" part added, "References" part added',
      isCurrent: true
    },
    {
      date: '20.11.25',
      type: 'Minor Update',
      description: '"Overview of Router Protocol" part added',
      isCurrent: false
    },
    {
      date: '30.09.25',
      type: 'Major Update',
      description: '"Roadmap" part added',
      isCurrent: false
    },
    {
      date: '30.09.25',
      type: 'Paper Published',
      description: '',
      isCurrent: false
    }
  ]

  return (
    <div className="w-full max-w-[376px]">
      {/* Version Timeline */}
      <div className="relative">
        {versions.map((version, index) => (
          <div 
            key={index} 
            className="relative"
            style={{
              position: 'absolute',
              top: `${index * 91}px`,
              left: 0,
              width: '100%'
            }}
          >
            {/* Date Badge */}
            <div 
              className={`
                inline-flex items-center gap-[6px] 
                px-[12px] py-[10px] 
                rounded-[32px] 
                border 
                ${version.isCurrent 
                  ? 'bg-trustblue-150 dark:bg-trustblue-150 border-trustblue-250 dark:border-trustblue-250' 
                  : 'border-trustblue-150 dark:border-trustblue-150'
                }
              `}
            >
              {version.isCurrent && (
                <div className="w-[6px] h-[6px] rounded-full bg-trustblue-350 dark:bg-trustblue-350" />
              )}
              <span className="text-[12px] font-semibold text-[#07142f] dark:text-[#07142f]">
                {version.date}
              </span>
            </div>

            {/* Version Type - positioned to the right */}
            <div className="absolute left-[107px] top-0">
              <h3 className={`
                text-trustblue-900 dark:text-trustblue-900
                ${version.isCurrent ? 'text-[16px] font-semibold' : 'text-[14px] font-normal'}
                mb-[6px]
              `}>
                {version.type}
              </h3>

              {/* Description */}
              {version.description && (
                <p className="text-[12px] text-trustblue-900/50 dark:text-trustblue-900/50 leading-[15px]">
                  {version.description}
                </p>
              )}
            </div>

            {/* Vertical Dashed Line */}
            {index < versions.length - 1 && (
              <div 
                className="absolute left-[41px] w-px border-l border-dashed border-trustblue-150 dark:border-trustblue-150"
                style={{ 
                  top: '35px',
                  height: '56px'
                }}
              />
            )}
          </div>
        ))}
        {/* Spacer to account for absolute positioning */}
        <div style={{ height: `${versions.length * 91}px` }} />
      </div>
    </div>
  )
}

