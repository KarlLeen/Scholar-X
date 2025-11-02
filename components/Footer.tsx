import { Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const links = [
    'About',
    'Documentation',
    'FAQ',
    'Contacts',
    'Privacy Policy',
    'Terms of Use'
  ]

  return (
    <footer className="border-t border-border-light dark:border-white/10 bg-background-light dark:bg-background-dark">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-6 max-w-[1600px] mx-auto gap-4">
        <nav className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-xs md:text-sm font-medium text-[#888888] hover:text-trustblue-900 dark:hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-trustblue-900 dark:text-white">
          <a href="#" className="w-6 h-6 flex items-center justify-center hover:text-trustblue-900/80 dark:hover:text-white/80 transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="w-6 h-6 flex items-center justify-center hover:text-trustblue-900/80 dark:hover:text-white/80 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

