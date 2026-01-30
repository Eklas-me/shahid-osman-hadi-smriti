import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Justice', path: '/justice' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white p-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-rebel font-bold tracking-tighter uppercase relative group">
        <span className="text-brand-crimson group-hover:text-white transition-colors">Shahid</span> Osman
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-brand-crimson transition-all group-hover:w-full"></span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 font-rebel text-lg uppercase tracking-widest">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.path} className="hover:text-brand-crimson transition-colors">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Trigger */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={32} />
      </button>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-12"
          >
            <button className="absolute top-8 right-8 text-brand-crimson" onClick={() => setIsOpen(false)}>
              <X size={48} />
            </button>
            
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link 
                  to={link.path} 
                  className="text-6xl font-rebel uppercase font-black hover:text-brand-crimson transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
