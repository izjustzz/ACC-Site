import React from 'react'

const Nav = ({route, setRoute}) => {
  const links = [
    {key: 'home', label: 'Home'},
    {key: 'about', label: 'About'},
    {key: 'events', label: 'Events'}
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-teal-cyan/95 backdrop-blur-md z-40 border-b border-brand-light-cyan/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-light-cyan to-brand-cyan flex items-center justify-center text-dark-bg font-bold shadow-lg text-xs">LOGO</div>
          <div className="text-sm font-semibold text-white tracking-wide">AWS Cloud Club</div>
        </div>

        <nav className="space-x-2">
          {links.map(l => (
            <button
              key={l.key}
              onClick={() => setRoute(l.key)}
              aria-current={route===l.key}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                route===l.key 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
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
