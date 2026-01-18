import React from 'react'

export default function About(){
  const boardMembers = [
    { name: 'Board Member', role: 'President' },
    { name: 'Board Member', role: 'Vice President' },
    { name: 'Board Member', role: 'Treasurer' },
    { name: 'Board Member', role: 'Secretary' },
    { name: 'Board Member', role: 'Events Lead' },
    { name: 'Board Member', role: 'Workshops Lead' }
  ]

  return (
    <section className="py-20">
      <div className="mb-16">
        <h2 className="text-6xl md:text-7xl font-black mb-12 text-center bg-gradient-to-r from-brand-light-cyan to-brand-cyan bg-clip-text text-transparent">ABOUT</h2>

        <div className="h-px bg-gradient-to-r from-transparent via-brand-light-cyan to-transparent mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-brand-light-cyan">Who We Are</h3>
            <p className="text-white/70 leading-relaxed">A dedicated community of students and organizers passionate about cloud computing and AWS technology. We believe in learning by doing and creating opportunities for hands-on experience.</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-brand-light-cyan">What We Do</h3>
            <p className="text-white/70 leading-relaxed">We host workshops, run project nights, invite industry speakers, and provide mentorship to help students master cloud technologies and advance their careers in tech.</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-brand-light-cyan">Get Involved</h3>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">Whether you're a beginner looking to learn AWS or an experienced developer wanting to contribute, there's a place for you in ACCC. Find signups and join our community on <a href="https://linktr.ee" className="text-brand-light-cyan font-semibold hover:text-white transition">Linktree</a>.</p>
        </div>
      </div>

      <div className="mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-light-cyan to-transparent mb-12"></div>
        <h2 className="text-4xl font-black mb-10 text-white text-center">Meet Our Executive Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, idx) => (
            <div key={idx} className="card flex flex-col items-center text-center hover:shadow-lg hover:shadow-brand-light-cyan/30 transition duration-300 transform hover:-translate-y-1">
              <div className="w-24 h-24 bg-brand-teal/40 rounded-full border-2 border-brand-light-cyan/50 mb-4 flex items-center justify-center hover:border-brand-light-cyan transition duration-300">
                <span className="text-brand-light-cyan font-semibold">Photo</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-brand-light-cyan font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 pt-12 border-t border-brand-cyan/20">
        <h3 className="text-2xl font-bold mb-6 text-white/70">Semester Schedule</h3>
        <div className="card hover:shadow-lg hover:shadow-brand-light-cyan/30 transition duration-300">
          <div className="w-full h-64 bg-brand-teal/30 border-2 border-dashed border-brand-cyan/50 rounded-lg flex items-center justify-center text-brand-light-cyan font-semibold">
            Timeline image placeholder
          </div>
          <p className="mt-4 text-sm text-white/60 text-center">Tips: Use a wide PNG/SVG for best results.</p>
        </div>
      </div>
    </section>
  )
}
