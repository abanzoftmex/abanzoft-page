import { motion } from 'framer-motion';

/**
 * Contenedor para animaciones escalonadas
 * Los children se animan uno tras otro con un delay
 */
export default function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Item hijo que se usará dentro de StaggerContainer
 */
export function StaggerItem({ children, className = '' }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
