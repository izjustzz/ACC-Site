import React from 'react'

export default function Events(){
  return (
    <section className="py-20">
      <h2 className="text-6xl md:text-7xl font-black mb-12 text-center bg-gradient-to-r from-brand-light-cyan to-brand-cyan bg-clip-text text-transparent">EVENTS</h2>

      <div className="h-px bg-gradient-to-r from-transparent via-brand-light-cyan to-transparent mb-12"></div>

      <p className="text-white/70 mb-12 text-lg text-center max-w-2xl mx-auto">Semester timeline below — replace with the pasted image when ready.</p>

      <div className="card flex flex-col items-center hover:shadow-lg hover:shadow-brand-light-cyan/30 transition duration-300">
        <div className="w-full h-72 bg-brand-teal/30 border-2 border-dashed border-brand-cyan/50 rounded-lg flex items-center justify-center text-brand-light-cyan font-semibold text-lg">
          Timeline image placeholder
        </div>
        <p className="mt-6 text-sm text-white/60">Tips: Use a wide PNG/SVG for best results.</p>
      </div>
    </section>
  )
}
