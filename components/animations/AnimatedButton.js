import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Botón con animación hover sutil
 */
export default function AnimatedButton({ 
  href, 
  children, 
  variant = 'primary',
  className = '' 
}) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-colors';
  
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800',
    secondary: 'border border-gray-300 text-gray-900 hover:bg-gray-50'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className={combinedClassName}
      >
        {children}
      </motion.a>
    </Link>
  );
}
