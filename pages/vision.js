import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaGlobe,
  FaUsers,
  FaClock,
  FaStar,
  FaChartLine,
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaShieldAlt,
  FaMoneyBillWave,
  FaBuilding
} from 'react-icons/fa';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function Vision() {
  return (
    <Layout hideFooter={true}>
      <div className="bg-white">
        {/* Hero - Pantalla 1 */}
        <section
          className="min-h-screen flex items-center justify-center text-white overflow-hidden relative"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 90% 30%, #3258b1 20%, rgb(26 33 53 / 20%) 50%), radial-gradient(ellipse at 70% 0%, #153d8c 0%, rgb(45 56 107) 50%), radial-gradient(ellipse at 20% 10%, #3258b1 10%, rgb(51 89 178) 70%), radial-gradient(ellipse at 50% 100%, #5b72a3 0%, rgb(50 89 178) 50%)'
          }}
        >
          <motion.div
            className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaRocket className="text-6xl mx-auto mb-6 text-secondary" />
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Visión 2.0
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Consolidación, expansión y la plataforma integral de Reinos de México
            </p>
            <div className="flex items-center justify-center gap-4 text-lg text-gray-400">
              <FaClock className="text-xl" />
              <span>El futuro comienza ahora</span>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        {/* ABANZOFT 2.0 - Pantalla 2 */}
        <section className="min-h-screen flex items-center justify-center bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
              className="text-center mb-10"
              {...fadeInUp}
            >
              <FaLightbulb className="text-5xl mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                ABANZOFT 2.0
              </h2>
              <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={cardVariant} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed">
                  En ABANZOFT estamos conscientes y agradecidos de todo el trabajo realizado y la experiencia aprendida en estos <span className="font-bold text-secondary">3 años</span> de la mano de Universo aBanza, Val'Quirico y Reinos de México.
                </p>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Creemos en el crecimiento y la mejora continua. Nuestra misión: tener para el cierre del <span className="font-bold text-secondary">2025 y todo el 2026</span>, un ABANZOFT más sólido, actualizado y diversificado.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-primary p-8 rounded-xl text-center shadow-lg"
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <FaBullseye className="text-4xl mx-auto mb-3 text-white" />
              <p className="text-2xl font-bold text-white">
                Objetivo Principal: Consolidar ABANZOFT y expandirnos al mercado externo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mejoras - Pantalla 3 */}
        <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
              className="text-center mb-10"
              {...fadeInUp}
            >
              <FaStar className="text-5xl mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                Nuestras Mejoras
              </h2>
              <p className="text-xl text-gray-600">¿Qué haremos?</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                initial: {},
                whileInView: {
                  transition: {
                    staggerChildren: 0.7,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {[
                { icon: FaBuilding, text: 'Mejor imagen corporativa, operativa, legal y administrativa.' },
                { icon: FaUsers, text: 'Más y mejor talento de equipo.' },
                { icon: FaStar, text: 'Mejor calidad de servicios y proyectos digitales.' },
                { icon: FaClock, text: 'Mejores tiempos de entrega.' },
                { icon: FaHandshake, text: 'Más atención y seguimiento de clientes.' },
                { icon: FaGlobe, text: 'Más clientes, mercados y proyectos nuevos.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20, scale: 0.95 },
                    whileInView: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    }
                  }}
                  className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-secondary flex flex-col items-center text-center"
                >
                  <item.icon className="text-3xl mb-3 text-secondary" />
                  <p className="text-base text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 3.1
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-5xl lg:text-7xl font-bold text-primary">
                ABANZOFT 2026
              </h3>
            </motion.div>
          </div>
        </section>

        {/* Acciones 2026 - Pantalla 4 */}
        <section className="min-h-screen flex items-center justify-center bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
              className="text-center mb-10"
              {...fadeInUp}
            >
              <FaChartLine className="text-5xl mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                Acciones 2026
              </h2>
              <div className="h-1 w-32 bg-secondary mx-auto"></div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={cardVariant} className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
                <FaGlobe className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Página Web</h3>
                <p className="text-sm text-gray-600">www.abanzoft.com</p>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
                <FaUsers className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Redes Sociales</h3>
                <p className="text-sm text-gray-600">Instagram, Facebook, Community Manager.</p>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
                <FaAward className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Catálogo Digital</h3>
                <p className="text-sm text-gray-600">Servicios Digitales (PDF).</p>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
                <FaUsers className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Equipo de Apoyo</h3>
                <p className="text-sm text-gray-600">Juan, Gabriel, Diseño, Administrativa.</p>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center">
                <FaMoneyBillWave className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Administración</h3>
                <p className="text-sm text-gray-600">Departamento de Giros.</p>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center ">
                <FaHandshake className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Ventas</h3>
                <p className="text-sm text-gray-600">Clientes externos nuevos.</p>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm md:col-span-2 flex flex-col items-center">
                <FaChartLine className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Equipo de Vendedores</h3>
                <p className="text-sm text-gray-600">A Comisión - Septiembre 2026.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Plataforma Reinos - Pantalla 5 */}
        <section
          className="min-h-screen flex items-center justify-center text-white py-20"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 90% 30%, #3258b1 20%, rgb(26 33 53 / 20%) 50%), radial-gradient(ellipse at 70% 0%, #153d8c 0%, rgb(45 56 107) 50%), radial-gradient(ellipse at 20% 10%, #3258b1 10%, rgb(51 89 178) 70%), radial-gradient(ellipse at 50% 100%, #5b72a3 0%, rgb(50 89 178) 50%)'
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
              className="text-center mb-8"
              {...fadeInUp}
            >
              <FaBuilding className="text-6xl mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Plataforma Integral
              </h2>
              <p className="text-2xl text-secondary">REINOS DE MÉXICO</p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={cardVariant} className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  ABANZOFT pretende realizar la <span className="font-bold text-secondary">plataforma oficial de REINOS DE MÉXICO</span>. Esta plataforma será implementada en cada uno de los Reinos, uniendo todos los sistemas y módulos de manera integral.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Compartirá: <span className="text-secondary font-semibold">módulos, funciones, procesos, actividades, usuarios, información, data, imágenes y reportes</span> en un solo lugar.
                </p>
              </motion.div>

              <motion.div variants={cardVariant} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary p-6 rounded-xl">
                  <FaShieldAlt className="text-4xl mb-3 text-secondary" />
                  <h3 className="text-xl font-bold mb-2">Seguridad</h3>
                  <p className="text-sm">Distintos tipos de usuarios, accesos y permisos controlados.</p>
                </div>

                <div className="bg-primary p-6 rounded-xl">
                  <FaBuilding className="text-4xl mb-3 text-secondary" />
                  <h3 className="text-xl font-bold mb-2">Base Principal</h3>
                  <p className="text-sm">Sistema INSULAE (Condominal).</p>
                </div>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-secondary p-6 rounded-xl text-center">
                <FaBullseye className="text-5xl mx-auto mb-3 text-white" />
                <p className="text-xl font-bold text-white mb-2">
                  Meta: Finales 2025 / Principios 2026
                </p>
                <p className="text-base text-white/90">
                  Primera fase para el segundo Reino: <span className="font-bold">SASSI DEL VALLE.</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Fondeo - Pantalla 6 */}
        <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div
              className="text-center mb-10"
              {...fadeInUp}
            >
              <FaMoneyBillWave className="text-6xl mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                Modelo de Fondeo
              </h2>
              <p className="text-xl text-gray-600">Plataforma Reinos de México</p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={cardVariant} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-3 text-secondary">Cuota Mensual por Reino</h3>
                <p className="text-base text-gray-700">ABANZOFT solicitará una cuota mensual para cada Reino donde se implemente la plataforma.</p>
              </motion.div>

              <motion.div variants={cardVariant} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-3 text-secondary">Licencias por Usuario</h3>
                <p className="text-base text-gray-700">Cada Unidad o Giro cubrirá una renta justa por uso del sistema o módulo asignado..</p>
              </motion.div>

              <motion.div variants={cardVariant} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary text-white p-6 rounded-xl">
                  <FaShieldAlt className="text-4xl mb-3" />
                  <h3 className="text-xl font-bold mb-2">Propiedad</h3>
                  <p className="text-sm"><span className="font-bold">Reinos de México</span> será el dueño absoluto de: data, información, accesos, usuarios, permisos, sistemas y módulos.</p>
                </div>

                <div className="bg-primary text-white p-6 rounded-xl">
                  <FaRocket className="text-4xl mb-3" />
                  <h3 className="text-xl font-bold mb-2">Responsabilidad</h3>
                  <p className="text-sm"><span className="font-bold">ABANZOFT</span> será responsable de mejorar, actualizar y detallar las funcionalidades.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
