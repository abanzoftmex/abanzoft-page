import Layout from '@/components/Layout';
import { MoneyParticles } from '@/components/animations';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import DataCard from '@/components/DataCard';
import CircularProgress from '@/components/CircularProgress';
import AnimatedCounter from '@/components/AnimatedCounter';
import {
  FaDollarSign,
  FaChartBar,
  FaStar,
  FaBullseye,
  FaRocket,
  FaChartLine,
  FaChartPie,
  FaChartArea,
  FaHome,
  FaGlobe,
  FaLightbulb,
  FaAward,
  FaBuilding,
  FaUsers,
  FaLaptopCode,
  FaMap,
  FaClock,
  FaBriefcase,
  FaMapPin
} from 'react-icons/fa';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function Numeros() {
  // Datos de línea de tiempo
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

  // Datos para gráficos
  const ventasData = [
    { year: '2023', ventas: 216070, gastos: 150000, utilidades: 66070 },
    { year: '2024', ventas: 1158140, gastos: 668633, utilidades: 489507 },
    { year: '2025', ventas: 1325540, gastos: 849517, utilidades: 476023 }
  ];

  const repartoData2025 = [
    { name: 'UA', value: 285614 },
    { name: 'GAM', value: 190409 }
  ];

  const crecimientoData = [
    { year: '2023', crecimiento: 0 },
    { year: '2024', crecimiento: 436 },
    { year: '2025', crecimiento: 514 }
  ];

  const gastosDetalleData = [
    { concepto: 'Nóminas', monto: 810000 },
    { concepto: 'Generales', monto: 39517 }
  ];

  const inversionData = [
    { concepto: 'Inversión Total', monto: 1370000 },
    { concepto: 'Recuperado', monto: 621594 },
    { concepto: 'Por Recuperar', monto: 748406 }
  ];

  const performanceData = [
    { metric: 'Ventas', '2023': 20, '2024': 100, '2025': 114 },
    { metric: 'Utilidades', '2023': 13, '2024': 100, '2025': 97 },
    { metric: 'Gastos', '2023': 22, '2024': 100, '2025': 127 }
  ];

  return (
    <Layout hideFooter={true}>
      <div className="bg-white relative min-h-screen">
        <MoneyParticles density={15} />

        {/* Hero Section */}
        <div className="relative z-10">
          <section
            className="py-16 px-6 lg:px-8"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 90% 30%, #3258b1 20%, rgb(26 33 53 / 20%) 50%), radial-gradient(ellipse at 70% 0%, #153d8c 0%, rgb(45 56 107) 50%), radial-gradient(ellipse at 20% 10%, #3258b1 10%, rgb(51 89 178) 70%), radial-gradient(ellipse at 50% 100%, #5b72a3 0%, rgb(50 89 178) 50%)'
            }}
          >
            <div className="max-w-4xl mx-auto text-center">

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                Los Números
              </h1>
              <p className="text-xl text-gray-200">
                Dashboard Financiero 2023-2025
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

                {/* Resumen de Inversión Total */}
                <div className="bg-secondary p-8 rounded-2xl border border-secondary/30">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
                    <FaDollarSign className="text-3xl text-white" />
                    Inversión Total Acumulada
                  </h3>
                  <div className="flex justify-center items-center gap-8">
                    <div className="text-center">
                      <div className="text-lg text-white/80 mb-2">2022</div>
                      <div className="text-3xl font-bold text-white">$560,000</div>
                    </div>
                    <div className="text-4xl text-white/60">+</div>
                    <div className="text-center">
                      <div className="text-lg text-white/80 mb-2">2023</div>
                      <div className="text-3xl font-bold text-white">$810,000</div>
                    </div>
                    <div className="text-4xl text-white/60">=</div>
                    <div className="text-center">
                      <div className="bg-primary px-8 py-6 rounded-xl">
                        <div className="text-lg text-white/80 mb-2">Total</div>
                        <div className="text-5xl font-bold text-white">$1,370,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard principal - Totales */}
          <section className="py-12 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">

              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Resumen Ejecutivo 2023-2025
              </h2>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <DataCard
                  title="Ventas Totales"
                  value={2699750}
                  subtitle="Nov 2025"
                  icon={<FaDollarSign />}
                  color="primary"
                  delay={0}
                  trend={514}
                  fullOpacity={true}
                />
                <DataCard
                  title="Gastos Totales"
                  value={1668150}
                  subtitle="Nov 2025"
                  icon={<FaChartBar />}
                  color="red"
                  delay={100}
                  fullOpacity={true}
                />
                <DataCard
                  title="Utilidades"
                  value={1031600}
                  subtitle="Nov 2025"
                  icon={<FaStar />}
                  color="green"
                  delay={200}
                  trend={38}
                  fullOpacity={true}
                />
                <DataCard
                  title="Utilidades UA"
                  value={621594}
                  subtitle="60% del total"
                  icon={<FaBullseye />}
                  color="primary"
                  delay={300}
                  fullOpacity={true}
                />
                <DataCard
                  title="Utilidades GAM"
                  value={414395}
                  subtitle="40% del total"
                  icon={<FaRocket />}
                  color="secondary"
                  delay={400}
                  fullOpacity={true}
                />
                <DataCard
                  title="Margen Utilidad"
                  value={38.2}
                  prefix=""
                  suffix="%"
                  subtitle="Promedio 3 años"
                  icon={<FaChartLine />}
                  color="cyan"
                  delay={500}
                  fullOpacity={true}
                />
              </div>

              {/* Gráficos principales lado a lado */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Gráfico de barras comparativo */}

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <FaChartPie className="mr-3 text-2xl text-secondary" />
                    Evolución Financiera
                  </h3>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={ventasData}>
                      <defs>
                        <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2b3445" stopOpacity={0.9} />
                          <stop offset="95%" stopColor="#2b3445" stopOpacity={0.6} />
                        </linearGradient>
                        <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.9} />
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0.6} />
                        </linearGradient>
                        <linearGradient id="colorUtilidades" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.9} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.6} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="year" stroke="#6b7280" style={{ fontSize: '14px', fontWeight: '600' }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          border: 'none',
                          borderRadius: '16px',
                          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                          padding: '12px'
                        }}
                        formatter={(value) => `$${value.toLocaleString()}`}
                      />
                      <Legend wrapperStyle={{ paddingTop: '20px' }} />
                      <Bar dataKey="ventas" fill="url(#colorVentas)" name="Ventas" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="gastos" fill="url(#colorGastos)" name="Gastos" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="utilidades" fill="url(#colorUtilidades)" name="Utilidades" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>


                {/* Gráfico de área - Crecimiento */}

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <FaChartArea className="mr-3 text-2xl text-secondary" />
                    Tasa de Crecimiento
                  </h3>
                  <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={crecimientoData}>
                      <defs>
                        <linearGradient id="colorCrecimiento" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="year" stroke="#6b7280" style={{ fontSize: '14px', fontWeight: '600' }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          border: 'none',
                          borderRadius: '16px',
                          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                          padding: '12px'
                        }}
                        formatter={(value) => `${value}%`}
                      />
                      <Area
                        type="monotone"
                        dataKey="crecimiento"
                        stroke="#10b981"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorCrecimiento)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

              </div>
            </div>
          </section>

          {/* Sección de Reparto 2025 */}
          <section className="py-16 px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">

              <h2 className="text-3xl font-bold text-primary mb-10 text-center">
                Distribución de Utilidades 2025
              </h2>


              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-primary mb-6 text-center">Reparto Proporcional</h3>
                  <ResponsiveContainer width="100%" height={320}>
                    <PieChart>
                      <defs>
                        <linearGradient id="uaGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#2b3445" />
                          <stop offset="100%" stopColor="#4a5568" />
                        </linearGradient>
                        <linearGradient id="gamGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#ee887d" />
                          <stop offset="100%" stopColor="#f5a89a" />
                        </linearGradient>
                      </defs>
                      <Pie
                        data={repartoData2025}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent, value }) => (
                          `${name}: $${value.toLocaleString()} (${(percent * 100).toFixed(1)}%)`
                        )}
                        outerRadius={120}
                        innerRadius={70}
                        fill="#8884d8"
                        dataKey="value"
                        paddingAngle={5}
                      >
                        <Cell fill="url(#uaGradient)" />
                        <Cell fill="url(#gamGradient)" />
                      </Pie>
                      <Tooltip
                        formatter={(value) => `$${value.toLocaleString()}`}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>


                <div className="space-y-6">

                  <div className="bg-primary p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-white uppercase tracking-wider">UA (60%)</div>
                      <FaBullseye className="text-2xl text-white/80" />
                    </div>
                    <div className="text-5xl font-bold text-white mb-2">
                      <AnimatedCounter end={285614} />
                    </div>
                    <div className="text-white/90 mb-3">Utilidades Noviembre 2025</div>
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>



                  <div className="bg-secondary p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-white uppercase tracking-wider">GAM (40%)</div>
                      <FaRocket className="text-2xl text-white/80" />
                    </div>
                    <div className="text-5xl font-bold text-white mb-2">
                      <AnimatedCounter end={190409} />
                    </div>
                    <div className="text-white/90 mb-3">Utilidades Noviembre 2025</div>
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Sección de Inversión y Recuperación */}
          <section className="py-16 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">

              <h2 className="text-3xl font-bold text-primary mb-10 text-center">
                Estado de Inversión y Recuperación
              </h2>


              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Progreso Circular */}

                <div className="flex justify-center bg-white p-8 rounded-2xl shadow-lg">
                  <CircularProgress
                    percentage={45.4}
                    size={260}
                    strokeWidth={20}
                    title="Recuperado"
                    subtitle="de $1,370,000"
                    color="#10b981"
                  />
                </div>


                {/* Detalles */}
                <div className="lg:col-span-2 space-y-6">

                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="text-sm text-gray-600 mb-2 uppercase tracking-wider">Inversión Total UA</div>
                        <div className="text-4xl font-bold text-secondary mb-2">
                          <AnimatedCounter end={1370000} />
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-2 uppercase tracking-wider">Utilidades Recibidas</div>
                        <div className="text-4xl font-bold text-secondary mb-2">
                          <AnimatedCounter end={621594} />
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-secondary to-primary" style={{ width: '45.4%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="text-sm text-gray-600 mb-4 uppercase tracking-wider">Estado de Inversión</div>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={inversionData}>
                        <defs>
                          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2b3445" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#2b3445" stopOpacity={0.6} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="concepto" stroke="#6b7280" style={{ fontSize: '11px' }} angle={-15} textAnchor="end" height={60} />
                        <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                        <Tooltip
                          formatter={(value) => `$${value.toLocaleString()}`}
                          contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px'
                          }}
                        />
                        <Bar dataKey="monto" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">54.6%</div>
                        <div className="text-xs text-gray-600 mt-1">Pendiente</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">45.4%</div>
                        <div className="text-xs text-gray-600 mt-1">Completado</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">~2.5</div>
                        <div className="text-xs text-gray-600 mt-1">Años ROI</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Timeline Moderna */}
          <section className="py-16 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-primary mb-12 text-center">
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
                          <h3 className="text-2xl font-bold text-primary mb-4">{event.title}</h3>
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
              <h2 className="text-4xl font-bold text-primary mb-12 text-center flex items-center justify-center gap-3">
                <FaBullseye className="text-4xl text-secondary" />
                Estado Actual 2025
              </h2>

              {/* Ingresos Mensuales */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-10 rounded-2xl shadow-lg border border-secondary/30 mb-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Ingresos Mensuales Actuales
                  </h3>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-5xl font-bold text-secondary">$100,000</div>
                    <div className="text-3xl text-gray-400">-</div>
                    <div className="text-5xl font-bold text-secondary">$125,000</div>
                  </div>
                  <p className="text-gray-600 mt-4 text-lg">
                    Después de <span className="font-bold text-secondary">3 años continuos</span> de trabajo.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-secondary p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMapPin className="text-2xl text-secondary" />
                    <span className="font-bold text-gray-900">Nota importante:</span>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Se empezó vendiendo <span className="font-bold text-secondary text-2xl">$5,000</span> mensuales en <span className="font-bold">julio del 2023.</span>
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Inicio</div>
                      <div className="text-3xl font-bold text-primary">$5,000</div>
                    </div>
                    <FaChartLine className="text-3xl text-secondary" />
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Actual</div>
                      <div className="text-3xl font-bold text-secondary">$100K+</div>
                    </div>
                    <div className="text-3xl">=</div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Crecimiento</div>
                      <div className="text-3xl font-bold text-secondary">2000%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Actual */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-10 rounded-2xl shadow-lg border border-primary/20">
                <h3 className="text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
                  <FaChartBar className="text-3xl text-secondary" />
                  ABANZOFT hoy cuenta con:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tarjeta Clientes */}
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <FaUsers className="text-3xl text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Clientes Activos</div>
                        <div className="text-5xl font-bold text-secondary">+40</div>
                      </div>
                    </div>
                    <p className="text-gray-600">Base sólida de clientes recurrentes.</p>
                  </div>

                  {/* Tarjeta Sistemas */}
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                        <FaLaptopCode className="text-3xl text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Sistemas Desarrollados</div>
                        <div className="text-5xl font-bold text-secondary">+15</div>
                      </div>
                    </div>
                    <p className="text-gray-600">Distintos rubros y funcionalidades.</p>
                  </div>

                  {/* Tarjeta Páginas Web */}
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <FaGlobe className="text-3xl text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Páginas Web</div>
                        <div className="text-5xl font-bold text-secondary">+15</div>
                      </div>
                    </div>
                    <p className="text-gray-600">Formato web y e-commerce.</p>
                  </div>

                  {/* Tarjeta Mapa Digital */}
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                        <FaMap className="text-3xl text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Mapas Digitales</div>
                        <div className="text-5xl font-bold text-secondary">1</div>
                      </div>
                    </div>
                    <p className="text-gray-600">Navegación interactiva.</p>
                  </div>
                </div>

                {/* Banner de continuidad */}
                <div className="mt-8 bg-primary p-6 rounded-xl text-white text-center">
                  <p className="text-2xl font-bold mb-2 flex items-center justify-center gap-3">
                    <FaRocket className="text-2xl text-secondary" />
                    Y continuando con muchos más proyectos...
                  </p>
                  <p className="text-lg opacity-90">
                    Pipeline activo con nuevos desarrollos en progreso.
                  </p>
                </div>
              </div>

              {/* Resumen Visual Final */}
              <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg border border-secondary/30">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center flex items-center justify-center gap-3">
                  <FaChartLine className="text-3xl text-secondary" />
                  Resumen de Crecimiento
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <FaClock className="text-4xl mb-2 text-secondary mx-auto" />
                    <div className="text-3xl font-bold text-secondary">3</div>
                    <div className="text-sm text-gray-600">Años operando</div>
                  </div>
                  <div className="text-center">
                    <FaBriefcase className="text-4xl mb-2 text-primary mx-auto" />
                    <div className="text-3xl font-bold text-primary">70+</div>
                    <div className="text-sm text-gray-600">Proyectos totales</div>
                  </div>
                  <div className="text-center">
                    <FaUsers className="text-4xl mb-2 text-secondary mx-auto" />
                    <div className="text-3xl font-bold text-secondary">40+</div>
                    <div className="text-sm text-gray-600">Clientes activos</div>
                  </div>
                  <div className="text-center">
                    <FaDollarSign className="text-4xl mb-2 text-primary mx-auto" />
                    <div className="text-3xl font-bold text-primary">$100K+</div>
                    <div className="text-sm text-gray-600">Mensuales</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
