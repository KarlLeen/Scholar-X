'use client'

import { ZoomIn, ZoomOut, Download, Printer, Share2, Menu } from 'lucide-react'

export default function PDFViewer() {
  return (
    <div className="w-full bg-background rounded-lg overflow-hidden">
      {/* PDF Toolbar */}
      <div className="bg-[#1a1a1f] border-b border-white/10 px-4 py-3 flex items-center justify-between">
        {/* Left: Menu + Title */}
        <div className="flex items-center gap-4">
          <button className="w-[18px] h-[18px] flex items-center justify-center hover:opacity-80">
            <Menu className="w-4 h-4 text-white" />
          </button>
          <span className="text-[14px] text-white/70 truncate max-w-[300px]">
            Router Protocol: Infrastructure for the Cross-Chain World
          </span>
        </div>

        {/* Center: Pagination and Zoom */}
        <div className="flex items-center gap-6">
          {/* Pagination */}
          <div className="flex items-center gap-2 text-[14px]">
            <span className="text-white">1</span>
            <span className="text-white/50">/ 2</span>
          </div>
          
          <div className="w-px h-3 bg-white/10" />
          
          {/* Zoom Controls */}
          <div className="flex items-center gap-3">
            <button className="hover:opacity-80">
              <ZoomOut className="w-[18px] h-[18px] text-white" />
            </button>
            <span className="text-[14px] text-white">100%</span>
            <button className="hover:opacity-80">
              <ZoomIn className="w-[18px] h-[18px] text-white" />
            </button>
          </div>
          
          <div className="w-px h-3 bg-white/10" />
          
          <button className="hover:opacity-80">
            <Printer className="w-[18px] h-[18px] text-white" />
          </button>
          <button className="hover:opacity-80">
            <Download className="w-[18px] h-[18px] text-white" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="hover:opacity-80">
            <Share2 className="w-[18px] h-[18px] text-white" />
          </button>
        </div>
      </div>

      {/* PDF Content Area */}
      <div className="bg-[#2a2a2f] p-4 overflow-auto" style={{ height: '993px' }}>
        <div className="bg-white mx-auto shadow-2xl" style={{ width: '702px', height: '993px' }}>
          {/* PDF Image */}
          <div className="w-full h-full relative">
            <img 
              src="/assets/PDF.png" 
              alt="PDF Page 1" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

