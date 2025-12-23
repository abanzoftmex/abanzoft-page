import Layout from '../components/Layout';
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

export default function Vision() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero - Pantalla 1 */}
        <section 
          className="h-screen sticky top-0 flex items-center justify-center text-white overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 90% 30%, #3258b1 20%, rgb(26 33 53 / 20%) 50%), radial-gradient(ellipse at 70% 0%, #153d8c 0%, rgb(45 56 107) 50%), radial-gradient(ellipse at 20% 10%, #3258b1 10%, rgb(51 89 178) 70%), radial-gradient(ellipse at 50% 100%, #5b72a3 0%, rgb(50 89 178) 50%)'
          }}
        >
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <FaRocket className="text-6xl mx-auto mb-6 text-secondary" />
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
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* ABANZOFT 2.0 - Pantalla 2 */}
        <section className="h-screen sticky top-0 flex items-center justify-center bg-white">
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
              <FaLightbulb className="text-5xl mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                ABANZOFT 2.0
              </h2>
              <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed">
                  En ABANZOFT estamos conscientes y agradecidos de todo el trabajo realizado y la experiencia aprendida en estos <span className="font-bold text-secondary">3 años</span> de la mano de Universo aBanza, Val'Quirico y Reinos de México.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Creemos en el crecimiento y la mejora continua. Nuestra misión: tener para el cierre del <span className="font-bold text-secondary">2025 y todo el 2026</span>, un ABANZOFT más sólido, actualizado y diversificado.
                </p>
              </div>
            </div>

            <div className="bg-primary p-8 rounded-xl text-center shadow-lg">
              <FaBullseye className="text-4xl mx-auto mb-3 text-white" />
              <p className="text-2xl font-bold text-white">
                Objetivo Principal: Consolidar ABANZOFT y expandirnos al mercado externo
              </p>
            </div>
          </div>
        </section>

        {/* Mejoras - Pantalla 3 */}
        <section className="h-screen sticky top-0 flex items-center justify-center bg-gray-50">
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
              <FaStar className="text-5xl mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                Nuestras Mejoras
              </h2>
              <p className="text-xl text-gray-600">¿Qué haremos?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: FaBuilding, text: 'Mejor imagen corporativa, operativa, legal y administrativa' },
                { icon: FaUsers, text: 'Más y mejor talento de equipo' },
                { icon: FaStar, text: 'Mejor calidad de servicios y proyectos digitales' },
                { icon: FaClock, text: 'Mejores tiempos de entrega' },
                { icon: FaHandshake, text: 'Más atención y seguimiento de clientes' },
                { icon: FaGlobe, text: 'Más clientes, mercados y proyectos nuevos' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-secondary">
                  <item.icon className="text-3xl mb-3 text-secondary" />
                  <p className="text-base text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Acciones 2026 - Pantalla 4 */}
        <section className="h-screen sticky top-0 flex items-center justify-center bg-white">
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
              <FaChartLine className="text-5xl mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                Acciones 2026
              </h2>
              <div className="h-1 w-32 bg-secondary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <FaGlobe className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Página Web</h3>
                <p className="text-sm text-gray-600">www.abanzoft.com</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <FaUsers className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Redes Sociales</h3>
                <p className="text-sm text-gray-600">Instagram, Facebook, Community Manager</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <FaAward className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Catálogo Digital</h3>
                <p className="text-sm text-gray-600">Servicios Digitales (PDF)</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <FaUsers className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Equipo de Apoyo</h3>
                <p className="text-sm text-gray-600">Juan, Gabriel, Diseño, Administrativa</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <FaMoneyBillWave className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Administración</h3>
                <p className="text-sm text-gray-600">Departamento de Giros</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <FaHandshake className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Ventas</h3>
                <p className="text-sm text-gray-600">Clientes externos nuevos</p>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm md:col-span-2">
                <FaChartLine className="text-3xl mb-3 text-secondary" />
                <h3 className="text-lg font-bold text-primary mb-2">Equipo de Vendedores</h3>
                <p className="text-sm text-gray-600">A Comisión - Septiembre 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Plataforma Reinos - Pantalla 5 */}
        <section 
          className="h-screen sticky top-0 flex items-center justify-center text-white"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 90% 30%, #3258b1 20%, rgb(26 33 53 / 20%) 50%), radial-gradient(ellipse at 70% 0%, #153d8c 0%, rgb(45 56 107) 50%), radial-gradient(ellipse at 20% 10%, #3258b1 10%, rgb(51 89 178) 70%), radial-gradient(ellipse at 50% 100%, #5b72a3 0%, rgb(50 89 178) 50%)'
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-8">
              <FaBuilding className="text-6xl mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Plataforma Integral
              </h2>
              <p className="text-2xl text-secondary">REINOS DE MÉXICO</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  ABANZOFT pretende realizar la <span className="font-bold text-secondary">plataforma oficial de REINOS DE MÉXICO</span>. Esta plataforma será implementada en cada uno de los Reinos, uniendo todos los sistemas y módulos de manera integral.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Compartirá: <span className="text-secondary font-semibold">módulos, funciones, procesos, actividades, usuarios, información, data, imágenes y reportes</span> en un solo lugar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary p-6 rounded-xl">
                  <FaShieldAlt className="text-4xl mb-3 text-secondary" />
                  <h3 className="text-xl font-bold mb-2">Seguridad</h3>
                  <p className="text-sm">Distintos tipos de usuarios, accesos y permisos controlados</p>
                </div>

                <div className="bg-primary p-6 rounded-xl">
                  <FaBuilding className="text-4xl mb-3 text-secondary" />
                  <h3 className="text-xl font-bold mb-2">Base Principal</h3>
                  <p className="text-sm">Sistema INSULAE (Condominal)</p>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-xl text-center">
                <FaBullseye className="text-5xl mx-auto mb-3 text-white" />
                <p className="text-xl font-bold text-white mb-2">
                  Meta: Finales 2025 / Principios 2026
                </p>
                <p className="text-base text-white/90">
                  Primera fase para el segundo Reino: <span className="font-bold">SASSI DEL VALLE</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fondeo - Pantalla 6 */}
        <section className="h-screen sticky top-0 flex items-center justify-center bg-gray-50">
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
              <FaMoneyBillWave className="text-6xl mx-auto mb-4 text-secondary" />
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                Modelo de Fondeo
              </h2>
              <p className="text-xl text-gray-600">Plataforma Reinos de México</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-3 text-secondary">Cuota Mensual por Reino</h3>
                <p className="text-base text-gray-700">ABANZOFT solicitará una cuota mensual para cada Reino donde se implemente la plataforma</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-3 text-secondary">Licencias por Usuario</h3>
                <p className="text-base text-gray-700">Cada Unidad o Cliente cubrirá una renta justa por uso del sistema o módulo asignado</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary text-white p-6 rounded-xl">
                  <FaShieldAlt className="text-4xl mb-3" />
                  <h3 className="text-xl font-bold mb-2">Propiedad</h3>
                  <p className="text-sm"><span className="font-bold">Reinos de México</span> será el dueño absoluto de: data, información, accesos, usuarios, permisos, sistemas y módulos</p>
                </div>

                <div className="bg-primary text-white p-6 rounded-xl">
                  <FaRocket className="text-4xl mb-3" />
                  <h3 className="text-xl font-bold mb-2">Responsabilidad</h3>
                  <p className="text-sm"><span className="font-bold">ABANZOFT</span> será responsable de mejorar, actualizar y detallar las funcionalidades</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final - Pantalla 7 */}
        <section className="h-screen flex items-center justify-center bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FaHandshake className="text-7xl mx-auto mb-6 text-secondary" />
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Únete a Nuestra Visión
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
              Estamos construyendo el futuro de las soluciones digitales para Reinos de México.
              <br />
              <span className="text-secondary font-semibold">Contáctanos para ser parte de esta transformación.</span>
            </p>
            <a 
              href="/contacto"
              className="inline-flex items-center gap-3 bg-secondary hover:opacity-90 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl hover:shadow-2xl"
            >
              <FaRocket className="text-2xl" />
              Contactar Ahora
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
