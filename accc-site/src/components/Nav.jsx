import React from 'react'

const Nav = ({route, setRoute}) => {
  const links = [
    {key: 'home', label: 'Home'},
    {key: 'about', label: 'About'},
    {key: 'events', label: 'Events'}
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-40 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-brand-aqua flex items-center justify-center text-white font-semibold shadow">AC</div>
          <div className="text-sm font-medium text-brand-navy">ACCC</div>
        </div>

        <nav className="space-x-6">
          {links.map(l => (
            <button
              key={l.key}
              onClick={() => setRoute(l.key)}
              aria-current={route===l.key}
              className={`uppercase text-sm tracking-wider px-3 py-1 rounded-full transition-colors ${route===l.key? 'bg-brand-aqua text-white shadow-md':'text-muted hover:text-brand-navy hover:bg-gray-50'}`}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Nav
