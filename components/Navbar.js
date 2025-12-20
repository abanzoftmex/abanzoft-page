import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            ABANZOFT
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/nosotros" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Nosotros
            </Link>
            <Link href="/soluciones" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Soluciones
            </Link>
            <Link href="/numeros" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Números
            </Link>
            <Link href="/vision" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Visión 2.0
            </Link>
            <Link href="/contacto" className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
