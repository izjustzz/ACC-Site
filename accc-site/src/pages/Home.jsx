import React from 'react'

export default function Home({ setRoute }){
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-center text-center mb-16">
      {/*  <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-brand-light-cyan to-brand-cyan bg-clip-text text-transparent">GW AWS Cloud Club</h1> */}
      <h1 className="text-6xl md:text-7xl font-black mb-6 text-white">GW HELLO Cloud Club</h1>

        <p className="text-lg text-white/80 max-w-2xl mb-10 leading-relaxed">We bring students together to learn, build, and deploy on AWS. Workshops, project nights, and industry talks with a focus on practical skills.</p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://www.meetup.com/aws-cloud-club-at-george-washington-university/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-light-cyan hover:shadow-lg hover:shadow-brand-light-cyan/50 text-dark-bg px-6 py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105 duration-200">Join</a>
          <button onClick={() => setRoute('events')} className="inline-flex items-center gap-2 border-2 border-brand-light-cyan text-brand-light-cyan px-6 py-3 rounded-lg font-semibold hover:bg-brand-light-cyan/10 hover:shadow-lg hover:shadow-brand-light-cyan/30 transition duration-200">Attend</button>
          <a href="https://instagram.com/gwucloud" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 text-white/80 hover:text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 hover:shadow-lg transition duration-200">Follow Us!</a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        <aside className="card md:col-span-1 hover:shadow-lg hover:shadow-brand-light-cyan/30 transition duration-300 transform hover:-translate-y-1 flex flex-col justify-center items-center text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-light-cyan/10 to-brand-cyan/10 rounded-xl"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold mb-3 text-brand-light-cyan">Upcoming event</h3>
            <p className="text-white/90 text-lg">Guest Speaker: Derek Chen<br></br>Wednesday, Feb 18th</p>
            <a href="https://www.meetup.com/aws-cloud-club-at-george-washington-university/" target="_blank" rel="noopener noreferrer" className="mt-4 text-sm text-brand-light-cyan font-medium hover:text-brand-light-cyan/80 transition">RSVP on Meetup</a>
          </div>
        </aside>

        <div className="card md:col-span-1 hover:shadow-lg hover:shadow-brand-light-cyan/30 transition duration-300 transform hover:-translate-y-1 flex flex-col justify-center items-center text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-light-cyan/10 to-brand-cyan/10 rounded-xl"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold mb-3 text-brand-light-cyan">Learn AWS</h3>
            <p className="text-white/70">Master cloud technologies through hands-on workshops and real-world projects.</p>
          </div>
        </div>

        <div className="card md:col-span-1 hover:shadow-lg hover:shadow-brand-light-cyan/30 transition duration-300 transform hover:-translate-y-1 flex flex-col justify-center items-center text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-light-cyan/10 to-brand-cyan/10 rounded-xl"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold mb-3 text-brand-light-cyan">Join us</h3>
            <p className="text-white/70">Join our Project or Marketing subcommittees and gain hands-on experience while growing the club’s brand and community.</p>
            <a href="https://instagram.com/gwucloud" target="_blank" rel="noopener noreferrer" className="mt-4 text-sm text-brand-light-cyan font-medium hover:text-brand-light-cyan/80 transition">DM us on Instagram</a>
          </div>
        </div>
      </div>
    </section>
  )
}
