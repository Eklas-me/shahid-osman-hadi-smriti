import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/Navbar' // Will create next
import Footer from './components/Footer' // Will create next

const Layout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-brand-dark text-white overflow-hidden">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
