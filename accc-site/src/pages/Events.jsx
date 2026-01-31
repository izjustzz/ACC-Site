import React from 'react'

export default function Events(){
  return (
    <section className="py-20">
      <h2 className="text-6xl md:text-7xl font-black mb-12 text-center bg-gradient-to-r from-brand-light-cyan to-brand-cyan bg-clip-text text-transparent">EVENTS</h2>

      <div className="h-px bg-gradient-to-r from-transparent via-brand-light-cyan to-transparent mb-12"></div>

      <div className="flex justify-center">
        <img 
          src="/savedate.png" 
          alt="Events Timeline" 
          className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}
