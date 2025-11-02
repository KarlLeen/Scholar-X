import Image from 'next/image'
import Link from 'next/link'

interface Tag {
  type: 'preserved' | 'raising' | 'peer-reviewed'
  label: string
}

interface PublicationCardProps {
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
  }
  tags?: Tag[]
  slug?: string
}

export default function PublicationCard({ title, excerpt, author, tags = [], slug = 'router-protocol' }: PublicationCardProps) {
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
    <article className="flex flex-col h-[229px] justify-between">
      <Link href={`/publication/${slug}`} className="group">
        <h3 className="font-serif text-[24px] leading-normal text-trustblue-900 dark:text-white group-hover:text-trustblue-900/80 dark:group-hover:text-white/80 transition-colors">
          {title}
        </h3>
      </Link>
      
      <div className="flex flex-col gap-[64px]">
        <p className="text-[14px] leading-[24px] text-trustblue-900 dark:text-white tracking-tight">
          {excerpt}
        </p>
        
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-[6px]">
            <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[12px] font-medium text-trustblue-900 dark:text-white tracking-tight">
              {author.name}
            </span>
          </div>
          
          {tags.length > 0 && (
            <div className="flex items-center gap-[16px] flex-shrink-0">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`flex items-center gap-1 pl-[2px] pr-[8px] py-[2px] rounded-[16px] text-[10px] font-medium tracking-[0.3px] ${getTagStyles(tag.type)}`}
                  style={{ boxShadow: '0px 2px 1px 0px inset rgba(0,0,0,0.1)' }}
                >
                  {tag.type === 'peer-reviewed' && (
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="w-[13px] h-[13px]">
                      <path d="M4.5 6.5L6 8L8.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  <span className="leading-[5px]">{tag.label}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

