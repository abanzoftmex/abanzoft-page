import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="ABANZOFT" className="w-1/4" />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/nosotros" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                Nuestra Historia
              </Link>
              <Link href="/soluciones" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                Soluciones
              </Link>
              <Link href="/numeros" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                Números
              </Link>
              <Link href="/vision" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                Visión 2.0
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-[70] shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                  <img src="/logo.png" alt="ABANZOFT" className="w-1/3" />
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-primary hover:text-secondary transition-colors"
                    aria-label="Close mobile menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="flex flex-col space-y-6">
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className="text-lg font-medium text-primary hover:text-secondary transition-colors py-2"
                    >
                      Inicio
                    </Link>
                    <Link
                      href="/nosotros"
                      onClick={closeMobileMenu}
                      className="text-lg font-medium text-primary hover:text-secondary transition-colors py-2"
                    >
                      Nuestra Historia
                    </Link>
                    <Link
                      href="/soluciones"
                      onClick={closeMobileMenu}
                      className="text-lg font-medium text-primary hover:text-secondary transition-colors py-2"
                    >
                      Soluciones
                    </Link>
                    <Link
                      href="/numeros"
                      onClick={closeMobileMenu}
                      className="text-lg font-medium text-primary hover:text-secondary transition-colors py-2"
                    >
                      Números
                    </Link>
                    <Link
                      href="/vision"
                      onClick={closeMobileMenu}
                      className="text-lg font-medium text-primary hover:text-secondary transition-colors py-2"
                    >
                      Visión 2.0
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
