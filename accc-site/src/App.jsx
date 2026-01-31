import React, {useState} from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'

export default function App(){
  const [route, setRoute] = useState('home')
  const [isInverted, setIsInverted] = useState(false)
  return (
    <div className={`min-h-screen bg-gradient-teal-cyan text-white ${isInverted ? 'invert' : ''}`}>
      <Nav route={route} setRoute={setRoute} isInverted={isInverted} setIsInverted={setIsInverted} />
      <main className="pt-20 max-w-6xl mx-auto px-6">
        {route === 'home' && <Home setRoute={setRoute} />}
        {route === 'about' && <About />}
        {route === 'events' && <Events />}
      </main>
    </div>
  )
}
