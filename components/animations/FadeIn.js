import { motion } from 'framer-motion';

/**
 * Componente de animación reutilizable para fade in + translate Y
 * Se activa una sola vez al entrar en viewport
 */
export default function FadeIn({ children, delay = 0, duration = 0.5, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
