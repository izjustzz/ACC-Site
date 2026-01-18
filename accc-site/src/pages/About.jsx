import React from 'react'

export default function About(){
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-4">About</h2>
      <p className="mb-6 muted">ACCC exists to teach cloud skills, host workshops, and connect students with real-world AWS projects.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Team</h3>
          <p className="muted">A small group of students and organizers who run workshops and events each semester.</p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Get involved</h3>
          <p className="muted">Find signups and links on <a href="https://linktr.ee" className="text-brand-aqua">Linktree</a>.</p>
        </div>

        <div className="card">
          <h3 className="text-2xl font-semibold mb-3">Semester schedule</h3>
          <p className="muted">Semester program graphic / timeline goes here. Replace with the timeline image in the Events page.</p>
        </div>
      </div>
    </section>
  )
}
