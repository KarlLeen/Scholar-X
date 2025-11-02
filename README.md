# Scholar X

A modern, full-stack academic publication platform built with Next.js 14, Supabase, and Tailwind CSS. Scholar X provides a comprehensive solution for researchers, scholars, and academic institutions to discover, publish, and review academic content.

![Scholar X](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38bdf8?logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Backed-3ecf8e?logo=supabase)

## ✨ Features

- 🎨 **Pixel-Perfect Figma Design** - 100% faithful to the original design specifications
- 🌓 **Light & Dark Mode** - Seamless theme switching with beautiful UI for both modes
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Next.js 14 App Router** - Built with the latest Next.js architecture
- 🎯 **TypeScript** - Complete type safety throughout the codebase
- 🔐 **Supabase Integration** - Authentication and database ready
- 🎭 **Tailwind CSS** - Modern utility-first styling
- 🎬 **Smooth Animations** - Powered by Framer Motion
- 📄 **Dynamic Routing** - Publication and Grant detail pages
- 🎨 **Advanced UI Components** - Sidebar, TopBar, Cards, and more

## 🏗️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) + [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif)
- **Backend**: [Supabase](https://supabase.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- A Supabase account (for backend features)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/KarlLeen/Scholar-X.git
cd Scholar-X
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
Scholar-X/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Home page (Publications)
│   ├── globals.css              # Global styles and CSS variables
│   ├── publication/
│   │   └── [slug]/
│   │       └── page.tsx         # Publication detail page
│   ├── grants/
│   │   ├── page.tsx             # Grants listing page
│   │   └── [id]/
│   │       └── page.tsx         # Grant detail page
│   └── profile/
│       └── page.tsx             # User profile page
├── components/                   # React components
│   ├── Sidebar.tsx              # Collapsible left navigation
│   ├── TopBar.tsx               # Top bar with search
│   ├── Footer.tsx               # Site footer
│   ├── PublicationCard.tsx      # Publication card component
│   ├── GrantCard.tsx            # Grant card component
│   ├── RightSidebar.tsx         # Right sidebar component
│   ├── Pagination.tsx           # Pagination component
│   ├── PDFViewer.tsx            # PDF viewer component
│   ├── VersionHistory.tsx       # Version history component
│   └── ClientLayout.tsx         # Client-side layout wrapper
├── contexts/                    # React contexts
│   └── SidebarContext.tsx       # Sidebar state management
├── lib/                         # Utility libraries
│   └── supabase/                # Supabase configuration
│       ├── client.ts            # Browser client
│       ├── server.ts            # Server client
│       └── middleware.ts       # Middleware client
├── public/                      # Static assets
│   └── assets/                  # Images and icons
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
└── middleware.ts                # Next.js middleware
```

## 🎨 Design System

### Color Palette

#### Light Mode
- **Background**: `#f1f1f1`
- **Sidebar**: `#e2e2e2`
- **Border**: `#dadada`
- **Text Primary**: `#040a18` (TrustBlue 900)
- **Text Secondary**: `#8a8a8a`

#### Dark Mode
- **Background**: `#111116`
- **Sidebar**: `#29292d`
- **Border**: `rgba(255, 255, 255, 0.1)`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `rgba(255, 255, 255, 0.5)`

#### Brand Colors
- **TrustBlue**: `#2563eb` (Primary actions)
  - TrustBlue/0: `#ffffff`
  - TrustBlue/150: `#bed0f9`
  - TrustBlue/200: `#a8c1f7`
  - TrustBlue/350: `#2563eb`
  - TrustBlue/900: `#040a18`
- **OpenGreen**: Success states
  - OpenGreen/250: `#6bd5b1`
  - OpenGreen/300: `#3dc799`
  - OpenGreen/400: `#0d9467`
  - OpenGreen/600: `#064a34`
- **Preserved**: Special tag color
  - Light: `#eac297` / `#9f6424`
  - Dark: `#6d5441` / `#d9ccbc`

### Typography

- **Primary Font**: Inter (UI and body text)
- **Display Font**: Instrument Serif (Headings and quotes)

## 📄 Pages & Features

### 🏠 Home Page (`/`)
- Featured publications carousel
- Publications grid (2-column responsive)
- Recently reviewed section
- Right sidebar with latest submissions

### 📚 Publication Detail (`/publication/[slug]`)
- Full publication content
- Author information
- Tags and badges
- PDF viewer integration
- Version history timeline
- Share functionality
- Table of contents

### 💰 Grants Page (`/grants`)
- Grants grid (3-column layout)
- Grant cards with status indicators
- Search and filter functionality
- Light/Dark mode optimized images

### 🎯 Grant Detail (`/grants/[id]`)
- Complete grant information
- Application process timeline
- Milestones tracking
- Requirements and overview
- Submit application button

### 👤 Profile Page (`/profile`)
- User information panel
- **Articles Published** tab - Grid of published articles
- **Articles Reviewed** tab - Review history with highlighted excerpts
- **Grants History** tab - Applied grants with status
- **Funding Requests** tab - Funding applications with status badges

### 🎨 Theme System
- Toggle between Light and Dark modes
- Smooth theme transitions
- Persistent theme preference
- All components fully themed

## 🔧 Key Features

### ✨ UI/UX Features
- ✅ Collapsible sidebar with smooth animations
- ✅ Responsive navigation
- ✅ Dynamic tab switching
- ✅ Loading states
- ✅ Empty states
- ✅ Custom scrollbar styling
- ✅ Hover effects and transitions

### 🚀 Performance
- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG) where applicable
- ✅ Optimized bundle size

### 🔐 Supabase Integration
- ✅ Authentication ready
- ✅ Database client configuration
- ✅ Server-side and client-side support
- ✅ Middleware integration

## 📦 Supabase Setup

1. Create a new project at [Supabase](https://supabase.com)
2. Copy your project URL and anon key
3. Add them to your `.env.local` file
4. Configure your database schema (if needed)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - Add your Supabase credentials in Vercel dashboard
   - Set `NEXT_PUBLIC_SUPABASE_URL`
   - Set `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `your-project.vercel.app`

### Manual Deployment

```bash
# Build the production bundle
npm run build

# Start the production server
npm start
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Component-based architecture

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design: Based on Figma design specifications
- Icons: [Lucide](https://lucide.dev/)
- Fonts: [Google Fonts](https://fonts.google.com/)

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using Next.js 14**
