import React from 'react'

const Nav = ({route, setRoute, isInverted, setIsInverted}) => {
  const links = [
    {key: 'home', label: 'Home'},
    {key: 'about', label: 'About'},
    {key: 'events', label: 'Events'}
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-teal-cyan/95 backdrop-blur-md z-40 border-b border-brand-light-cyan/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/gw-aws-logo.png" 
            alt="GW AWS Cloud Club Logo" 
            className="h-10 w-auto"
          />
          <div className="text-sm font-semibold text-white tracking-wide">AWS Cloud Club</div>
        </div>

        <nav className="flex items-center gap-4">
          <div className="space-x-2 flex">
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
          </div>
          <button
  onClick={() => setIsInverted(!isInverted)}
  className="ml-6 p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
  aria-label="Toggle inverse mode"
>
  <img
    src="/banana.webp"
    alt=""
    className="h-6 w-6 opacity-80 hover:opacity-100 transition-opacity"
  />
</button>

        </nav>
      </div>
    </header>
  )
}

export default Nav
