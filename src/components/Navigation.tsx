import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Leaf, ChevronRight } from 'lucide-react'

const navItems = [
  { name: 'Sứ Mệnh', href: '#mission' },
  { name: 'Hoạt Động', href: '#activities' },
  { name: 'Case Study', href: '#cases' },
  { name: 'Tin Tức', href: '#news' },
  { name: 'Hợp Tác', href: '#partnership' },
  { name: 'Liên Hệ', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full section-padding">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/30 transition-shadow">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className={`block text-sm font-bold leading-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                HỘI BẢO VỆ
              </span>
              <span className={`block text-xs font-medium ${isScrolled ? 'text-primary-600' : 'text-primary-600'}`}>
                NGƯỜI TIÊU DÙNG
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled ? 'text-slate-700 hover:text-primary-600' : 'text-slate-700 hover:text-primary-600'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all flex items-center gap-2"
            >
              Tham Gia Ngay
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="section-padding py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-slate-700 hover:text-primary-600 py-2 border-b border-slate-50"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-full shadow-lg"
              >
                Tham Gia Ngay
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
