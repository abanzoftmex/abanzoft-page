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
        { label: 'Reajuste de Sociedad', text: '60% UA / 40% G-A-M para equilibrar utilidades' },
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
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h1>
            <p className="text-xl text-gray-600">
              Desde 2022, construyendo soluciones digitales para Universo aBanza, Val'Quirico y Reinos de México
            </p>
          </div>
        </section>

        {/* Historia y Sociedad Section */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Historia y Sociedad
            </h2>

            <div className="space-y-10">
              {/* Origen 2022 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaRocket className="text-4xl mr-3 text-blue-600" />
                  El Origen - 2022
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En el <span className="font-bold text-blue-600">2022</span> ABANZOFT nace con la invitación e iniciativa de <span className="font-bold">Adolfo Blanca</span> y <span className="font-bold">Germán Blanca</span> para crear una unidad de negocio que desarrolle Sistemas/Software a la medida para Universo aBanza y Val'Quirico.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-2">Sociedad Inicial</div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-blue-600">51%</span>
                      <span className="text-gray-700">Universo aBanza</span>
                    </div>
                    <div className="flex items-baseline gap-3 mt-2">
                      <span className="text-3xl font-bold text-purple-600">49%</span>
                      <span className="text-gray-700">G-A-M</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-2">Inversión Inicial</div>
                    <div className="text-4xl font-bold text-green-600 mb-2">$560,000</div>
                    <div className="text-sm text-gray-600">Julio - Diciembre 2022</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 mb-3">4 Proyectos Iniciales:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="font-medium">Catálogo de Productos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="font-medium">Sistema Inmobiliario</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="font-medium">Sistema Condominal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">▶</span>
                      <span className="font-medium">Sistema Administrativo-Contable</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-gray-900">Decisión estratégica:</span> Después de analizar ZOHO y ver que no se tenía el control al 100%, se decidió que <span className="font-bold">ABANZOFT desarrollara desde cero con código propio</span> para tener control total.
                  </p>
                </div>
              </div>

              {/* 2023 Instalación Formal */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBuilding className="text-4xl mr-3 text-green-600" />
                  Instalación Formal - 2023
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-2">Inversión Adicional</div>
                    <div className="text-4xl font-bold text-green-600 mb-2">$810,000</div>
                    <div className="text-sm text-gray-600">Enero - Septiembre 2023</div>
                    <div className="mt-3 text-sm text-gray-700">
                      Para instalar formalmente a ABANZOFT dentro de Val'Quirico
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-2">Primera Venta</div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">$5,000</div>
                    <div className="text-sm text-gray-600">Julio 2023 - Primer ingreso directo</div>
                    <div className="mt-3">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        Primera mensualidad cobrada
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 mb-3">Finales 2023:</div>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-purple-600">$50,000</div>
                    <div className="text-gray-700">
                      <div className="font-semibold">Nómina Operativa</div>
                      <div className="text-sm text-gray-600">Gasto mensual</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2024 Crecimiento */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaChartLine className="text-4xl mr-3 text-purple-600" />
                  Crecimiento - 2024
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-2">Nómina Incrementada</div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-gray-400">$50,000</div>
                      <span className="text-2xl">→</span>
                      <div className="text-3xl font-bold text-purple-600">$60,000</div>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">Mediados de 2024</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-gray-600 mb-2">Ajuste de Sociedad</div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-blue-600">60%</span>
                        <span className="text-gray-700 font-semibold">Universo aBanza</span>
                      </div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-purple-600">40%</span>
                        <span className="text-gray-700 font-semibold">G-A-M</span>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">Para equilibrar utilidades</div>
                  </div>
                </div>
              </div>

              {/* Resumen de Inversión Total */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                  <FaDollarSign className="text-3xl text-orange-600" />
                  Inversión Total Acumulada
                </h3>
                <div className="flex justify-center items-center gap-8">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">2022</div>
                    <div className="text-3xl font-bold text-blue-600">$560,000</div>
                  </div>
                  <div className="text-4xl text-gray-400">+</div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">2023</div>
                    <div className="text-3xl font-bold text-green-600">$810,000</div>
                  </div>
                  <div className="text-4xl text-gray-400">=</div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Total</div>
                    <div className="text-5xl font-bold text-orange-600">$1,370,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estructura de Sociedad */}
        <section className="py-16 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Estructura de Sociedad
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Universo aBanza 60% */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Universo aBanza
                  </h3>
                  <div className="text-5xl font-bold text-blue-600">60%</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">ABN</span>
                      <span className="text-3xl font-bold text-blue-600">17%</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">PGG</span>
                      <span className="text-3xl font-bold text-blue-600">17%</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">JAE</span>
                      <span className="text-3xl font-bold text-blue-600">10%</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">GBN</span>
                      <span className="text-3xl font-bold text-blue-600">7%</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">JAN</span>
                      <span className="text-3xl font-bold text-blue-600">6%</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">CET</span>
                      <span className="text-3xl font-bold text-blue-600">2%</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">ECB</span>
                      <span className="text-3xl font-bold text-blue-600">1%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-100 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm text-blue-800 font-semibold">Total Socios</div>
                    <div className="text-2xl font-bold text-blue-900">7 Personas</div>
                  </div>
                </div>
              </div>

              {/* G-A-M 40% */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-purple-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">
                    G-A-M
                  </h3>
                  <div className="text-5xl font-bold text-purple-600">40%</div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm mb-6">
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Composición</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-lg font-bold text-gray-900">Gerardo</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-lg font-bold text-gray-900">Alejandro</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span className="text-lg font-bold text-gray-900">Maribel</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="text-sm text-gray-600 mb-3 font-semibold">Rol en ABANZOFT</div>
                      <p className="text-gray-700 leading-relaxed text-base">
                        <span className="font-bold text-purple-600">Equipo fundador</span> que desarrolla y opera todos los proyectos de ABANZOFT.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm text-purple-800 font-semibold mb-2">Equipo Operativo</div>
                    <div className="text-xl font-bold text-purple-900">Desarrollo y Operación</div>
                    <div className="mt-3 text-sm text-purple-700">
                      100% responsables de la ejecución
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-100 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm text-purple-800 font-semibold">Total Socios</div>
                    <div className="text-2xl font-bold text-purple-900">3 Personas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resumen Visual */}
            <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                <FaChartBar className="text-3xl text-blue-600" />
                Distribución Total
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Universo aBanza</div>
                  <div className="text-6xl font-bold text-blue-600">60%</div>
                  <div className="text-sm text-gray-500 mt-2">7 socios</div>
                </div>
                
                <div className="text-4xl text-gray-300">+</div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">G-A-M</div>
                  <div className="text-6xl font-bold text-purple-600">40%</div>
                  <div className="text-sm text-gray-500 mt-2">3 socios</div>
                </div>
                
                <div className="text-4xl text-gray-300">=</div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Total</div>
                  <div className="text-6xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-500 mt-2">10 socios</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Moderna */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Línea de Tiempo
            </h2>
            
            <div className="relative">
              {/* Línea vertical central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block"></div>
              
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={event.year} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Contenido */}
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className={`inline-block px-4 py-1 rounded-full text-white text-sm font-semibold mb-3 ${colorClasses[event.color]}`}>
                          {event.year}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                        <div className="space-y-3">
                          {event.items.map((item, i) => (
                            <div key={i} className="text-left">
                              <span className="font-semibold text-gray-900">{item.label}:</span>
                              <span className="text-gray-600 ml-2">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Icono central */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className={`w-16 h-16 rounded-full ${colorClasses[event.color]} flex items-center justify-center text-white text-2xl shadow-lg`}>
                        {event.icon}
                      </div>
                    </div>
                    
                    {/* Espaciador */}
                    <div className="hidden lg:block w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Estado Actual */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center gap-3">
              <FaBullseye className="text-4xl text-green-600" />
              Estado Actual 2025
            </h2>

            {/* Ingresos Mensuales */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-10 rounded-2xl shadow-lg border border-green-100 mb-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ingresos Mensuales Actuales
                </h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-5xl font-bold text-green-600">$100,000</div>
                  <div className="text-3xl text-gray-400">-</div>
                  <div className="text-5xl font-bold text-green-600">$125,000</div>
                </div>
                <p className="text-gray-600 mt-4 text-lg">
                  Después de <span className="font-bold text-green-700">3 años continuos</span> de trabajo
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <FaMapPin className="text-2xl text-yellow-600" />
                  <span className="font-bold text-gray-900">Nota importante:</span>
                </div>
                <p className="text-gray-700 text-lg">
                  Se empezó vendiendo <span className="font-bold text-yellow-700 text-2xl">$5,000</span> mensuales en <span className="font-bold">julio del 2023</span>
                </p>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Inicio</div>
                    <div className="text-3xl font-bold text-yellow-600">$5,000</div>
                  </div>
                  <FaChartLine className="text-3xl text-green-600" />
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Actual</div>
                    <div className="text-3xl font-bold text-green-600">$100K+</div>
                  </div>
                  <div className="text-3xl">=</div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Crecimiento</div>
                    <div className="text-3xl font-bold text-blue-600">2000%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Actual */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-10 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                <FaChartBar className="text-3xl text-blue-600" />
                ABANZOFT hoy cuenta con:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tarjeta Clientes */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaUsers className="text-3xl text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Clientes Activos</div>
                      <div className="text-5xl font-bold text-blue-600">+40</div>
                    </div>
                  </div>
                  <p className="text-gray-600">Base sólida de clientes recurrentes</p>
                </div>

                {/* Tarjeta Sistemas */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaLaptopCode className="text-3xl text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Sistemas Desarrollados</div>
                      <div className="text-5xl font-bold text-purple-600">+15</div>
                    </div>
                  </div>
                  <p className="text-gray-600">Distintos rubros y funcionalidades</p>
                </div>

                {/* Tarjeta Páginas Web */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <FaGlobe className="text-3xl text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Páginas Web</div>
                      <div className="text-5xl font-bold text-green-600">+15</div>
                    </div>
                  </div>
                  <p className="text-gray-600">Formato web y e-commerce</p>
                </div>

                {/* Tarjeta Mapa Digital */}
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <FaMap className="text-3xl text-orange-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Mapas Digitales</div>
                      <div className="text-5xl font-bold text-orange-600">1</div>
                    </div>
                  </div>
                  <p className="text-gray-600">Navegación interactiva</p>
                </div>
              </div>

              {/* Banner de continuidad */}
              <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl text-white text-center">
                <p className="text-2xl font-bold mb-2 flex items-center justify-center gap-3">
                  <FaRocket className="text-2xl" />
                  Y continuando con muchos más proyectos...
                </p>
                <p className="text-lg opacity-90">
                  Pipeline activo con nuevos desarrollos en progreso
                </p>
              </div>
            </div>

            {/* Resumen Visual Final */}
            <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-pink-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                <FaChartLine className="text-3xl text-purple-600" />
                Resumen de Crecimiento
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <FaClock className="text-4xl mb-2 text-purple-600 mx-auto" />
                  <div className="text-3xl font-bold text-purple-600">3</div>
                  <div className="text-sm text-gray-600">Años operando</div>
                </div>
                <div className="text-center">
                  <FaBriefcase className="text-4xl mb-2 text-blue-600 mx-auto" />
                  <div className="text-3xl font-bold text-blue-600">70+</div>
                  <div className="text-sm text-gray-600">Proyectos totales</div>
                </div>
                <div className="text-center">
                  <FaUsers className="text-4xl mb-2 text-green-600 mx-auto" />
                  <div className="text-3xl font-bold text-green-600">40+</div>
                  <div className="text-sm text-gray-600">Clientes activos</div>
                </div>
                <div className="text-center">
                  <FaDollarSign className="text-4xl mb-2 text-orange-600 mx-auto" />
                  <div className="text-3xl font-bold text-orange-600">$100K+</div>
                  <div className="text-sm text-gray-600">Mensuales</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  );
}
