import Layout from '../components/Layout';
import {
  FaRocket,
  FaChartLine,
  FaLightbulb,
  FaAward,
  FaBuilding,
  FaChartBar,
  FaDollarSign,
  FaBullseye,
  FaMapPin,
  FaUsers,
  FaLaptopCode,
  FaGlobe,
  FaMap,
  FaClock,
  FaBriefcase
} from 'react-icons/fa';

export default function Nosotros() {
  const timelineEvents = [
    {
      year: '2022',
      title: 'Fundación de ABANZOFT',
      icon: <FaRocket />,
      color: 'blue',
      items: [
        { label: 'Julio - Diciembre', text: 'Inversión de $560,000 para iniciar 4 proyectos en ZOHO' },
        { label: 'Sociedad Inicial', text: '51% UA / 49% G-A-M' },
        { label: 'Decisión Estratégica', text: 'Desarrollo desde cero con código propio para control total' }
      ]
    },
    {
      year: '2023',
      title: 'Instalación Formal y Primeros Ingresos',
      icon: <FaChartLine />,
      color: 'green',
      items: [
        { label: 'Enero - Septiembre', text: 'Inversión adicional de $810,000' },
        { label: 'Julio 2023', text: 'Primera mensualidad cobrada - Primer ingreso directo' },
        { label: 'Finales de 2023', text: 'Creación de nómina operativa de $50,000/mes' },
        { label: 'Resultados', text: 'Ventas: $216,070 | Utilidades: $66,070' }
      ]
    },
    {
      year: '2024',
      title: 'Crecimiento y Reestructuración',
      icon: <FaLightbulb />,
      color: 'purple',
      items: [
        { label: 'Mediados de 2024', text: 'Incremento de nómina a $60,000/mes' },
        { label: 'Reajuste de Sociedad', text: '60% UA / 40% G-A-M para equilibrar utilidades.' },
        { label: 'Resultados', text: 'Ventas: $1,158,140 | Utilidades: $489,507' },
        { label: 'Crecimiento', text: '436% en ventas vs 2023' }
      ]
    },
    {
      year: '2025',
      title: 'Consolidación y Visión 2.0',
      icon: <FaAward />,
      color: 'orange',
      items: [
        { label: 'Estado Actual', text: 'Ingresos mensuales: $100,000 - $125,000' },
        { label: 'Noviembre 2025', text: 'Ventas: $1,325,540 | Utilidades: $476,023' },
        { label: 'Portfolio', text: '40+ clientes, 15+ sistemas, 15+ páginas web' },
        { label: 'Julio 2025', text: 'Nómina: $90,000/mes con Juan y Gabriel' },
        { label: 'Visión', text: 'Preparación para ABANZOFT 2.0 y mercado externo' }
      ]
    }
  ];

  const colorClasses = {
    blue: 'bg-primary',
    green: 'bg-secondary',
    purple: 'bg-primary',
    orange: 'bg-secondary'
  };
  return (
    <Layout hideFooter={true}>
      {/* Hero Section */}
      <section
        className="py-16 px-6 lg:px-8"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 90% 30%, #3258b1 20%, rgb(26 33 53 / 20%) 50%), radial-gradient(ellipse at 70% 0%, #153d8c 0%, rgb(45 56 107) 50%), radial-gradient(ellipse at 20% 10%, #3258b1 10%, rgb(51 89 178) 70%), radial-gradient(ellipse at 50% 100%, #5b72a3 0%, rgb(50 89 178) 50%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Nuestra Historia
          </h1>
          <p className="text-xl text-gray-200">
            Desde 2022, construyendo soluciones digitales para Universo aBanza, Val'Quirico y Reinos de México.
          </p>
        </div>
      </section>

      {/* Historia y Sociedad Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Historia y Sociedad
          </h2>

          <div className="space-y-10">
            {/* Origen 2022 */}
            <div className="bg-primary p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaRocket className="text-4xl mr-3 text-secondary" />
                El Origen - 2022
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                En el <span className="font-bold text-secondary">2022</span> ABANZOFT nace con la invitación e iniciativa de <span className="font-bold text-white">Adolfo Blanca</span> y <span className="font-bold text-white">Germán Blanca</span> para crear una unidad de negocio que desarrolle Sistemas/Software a la medida para Universo aBanza y Val'Quirico.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-2">Sociedad Inicial</div>
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-3xl font-bold text-primary">51%</span>
                    <span className="text-gray-700">Universo aBanza</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-3 mt-2">
                    <span className="text-3xl font-bold text-secondary">49%</span>
                    <span className="text-gray-700">G-A-M</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-2">Inversión Inicial</div>
                  <div className="text-4xl font-bold text-secondary mb-2">$560,000</div>
                  <div className="text-sm text-gray-600">Julio - Diciembre 2022</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-sm font-semibold text-gray-900 mb-3">4 Proyectos Iniciales:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-secondary">▶</span>
                    <span className="font-medium text-gray-900">Catálogo de Productos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary">▶</span>
                    <span className="font-medium text-gray-900">Sistema Inmobiliario</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary">▶</span>
                    <span className="font-medium text-gray-900">Sistema Condominal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary">▶</span>
                    <span className="font-medium text-gray-900">Sistema Administrativo-Contable</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary/20 border-l-4 border-secondary rounded">
                <p className="text-gray-200 leading-relaxed">
                  <span className="font-bold text-white">Decisión estratégica:</span> Después de analizar ZOHO y ver que no se tenía el control al 100%, se decidió que <span className="font-bold text-white">ABANZOFT desarrollara desde cero con código propio</span> para tener control total.
                </p>
              </div>
            </div>

            {/* 2023 Instalación Formal */}
            <div className="bg-primary p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaBuilding className="text-4xl mr-3 text-secondary" />
                Instalación Formal - 2023
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-2">Inversión Adicional</div>
                  <div className="text-4xl font-bold text-secondary mb-2">$810,000</div>
                  <div className="text-sm text-gray-600">Enero - Septiembre 2023.</div>
                  <div className="mt-3 text-sm text-gray-700">
                    Para instalar formalmente a ABANZOFT dentro de Val'Quirico.
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-2">Primera Venta</div>
                  <div className="text-4xl font-bold text-secondary mb-2">$5,000</div>
                  <div className="text-sm text-gray-600">Julio 2023 - Primer ingreso directo.</div>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      Primera mensualidad cobrada
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-sm font-semibold text-gray-900 mb-3">Finales 2023:</div>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-3xl font-bold text-primary">$50,000</div>
                  <div className="text-gray-700">
                    <div className="font-semibold">Nómina Operativa</div>
                    <div className="text-sm text-gray-600">Gasto mensual.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2024 Crecimiento */}
            <div className="bg-primary p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaChartLine className="text-4xl mr-3 text-secondary" />
                Crecimiento - 2024
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-2">Nómina Incrementada</div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-3xl font-bold text-gray-400">$50,000</div>
                    <span className="text-2xl">→</span>
                    <div className="text-3xl font-bold text-secondary">$60,000</div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Mediados de 2024.</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-2">Ajuste de Sociedad</div>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-3">
                      <span className="text-3xl font-bold text-primary">60%</span>
                      <span className="text-gray-700 font-semibold">Universo aBanza</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-3">
                      <span className="text-3xl font-bold text-secondary">40%</span>
                      <span className="text-gray-700 font-semibold">G-A-M</span>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">Para equilibrar utilidades.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Estructura de Sociedad */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Estructura de Sociedad
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Universo aBanza 60% */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/20">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-primary">
                  Universo aBanza
                </h3>
                <div className="text-5xl font-bold text-primary">60%</div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">ABN</span>
                    <span className="text-3xl font-bold text-secondary">17%</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-secondary">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">PGG</span>
                    <span className="text-4xl font-bold text-secondary">17%</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">JAE</span>
                    <span className="text-3xl font-bold text-secondary">10%</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">GBN</span>
                    <span className="text-3xl font-bold text-secondary">7%</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">JAN</span>
                    <span className="text-3xl font-bold text-secondary">6%</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">CET</span>
                    <span className="text-3xl font-bold text-secondary">2%</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">ECB</span>
                    <span className="text-3xl font-bold text-secondary">1%</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary rounded-xl">
                <div className="text-center">
                  <div className="text-sm text-white font-semibold">Total Socios</div>
                  <div className="text-2xl font-bold text-white">7 Personas</div>
                </div>
              </div>
            </div>

            {/* G-A-M 40% */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-secondary/30">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-primary">
                  G-A-J
                </h3>
                <div className="text-5xl font-bold text-secondary">40%</div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm mb-6">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Composición</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <span className="text-lg font-bold text-gray-900">Gerardo</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <span className="text-lg font-bold text-gray-900">Alejandro</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <span className="text-lg font-bold text-gray-400">Ex Desarrollador: Maribel</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <span className="text-lg font-bold text-gray-900">Desarrollador: Juan</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="text-sm text-gray-600 mb-3 font-semibold">Rol en ABANZOFT</div>
                    <p className="text-gray-700 leading-relaxed text-base">
                      <span className="font-bold text-secondary">Equipo fundador</span> que desarrolla y opera todos los proyectos de ABANZOFT.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-secondary/20 to-secondary/30 p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-sm text-primary font-semibold mb-2">Equipo Operativo</div>
                  <div className="text-xl font-bold text-primary">Desarrollo y Operación</div>
                  <div className="mt-3 text-sm text-gray-700">
                    100% responsables de la ejecución.
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary rounded-xl">
                <div className="text-center">
                  <div className="text-sm text-white font-semibold">Total Socios</div>
                  <div className="text-2xl font-bold text-white">3 Personas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen Visual */}
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center flex items-center justify-center gap-3">
              <FaChartBar className="text-3xl text-secondary" />
              Distribución Total
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Universo aBanza</div>
                <div className="text-6xl font-bold text-primary">60%</div>
                <div className="text-sm text-gray-500 mt-2">7 socios</div>
              </div>

              <div className="text-4xl text-gray-300">+</div>

              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">G-A-M</div>
                <div className="text-6xl font-bold text-secondary">40%</div>
                <div className="text-sm text-gray-500 mt-2">3 socios</div>
              </div>

              <div className="text-4xl text-gray-300">=</div>

              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Total</div>
                <div className="text-6xl font-bold text-secondary">100%</div>
                <div className="text-sm text-gray-500 mt-2">10 socios</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
