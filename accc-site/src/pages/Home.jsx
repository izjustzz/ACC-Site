import React from 'react'

export default function Home(){
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">ACCC Cloud Club</h1>
          <p className="text-lg text-muted mb-6">We bring students together to learn, build, and deploy on AWS. Workshops, project nights, and industry talks with a focus on practical skills.</p>

          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 bg-brand-aqua hover:brightness-95 text-white px-5 py-3 rounded-full shadow-md transition">Join</button>
            <button className="inline-flex items-center gap-2 border border-brand-navy text-brand-navy px-4 py-3 rounded-full hover:bg-gray-50 transition">Attend</button>
            <button className="inline-flex items-center gap-2 bg-gray-50 text-muted px-4 py-3 rounded-full">Get involved</button>
          </div>
        </div>

        <aside className="card">
          <h3 className="text-xl font-semibold mb-2">Upcoming event</h3>
          <p className="text-muted">Intro to AWS Lambda — Jan 27 • 6:00pm</p>
          <p className="mt-3 text-sm muted">RSVP on Linktree</p>
        </aside>
      </div>
    </section>
  )
}
