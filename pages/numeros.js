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
  FaMapPin,
  FaMoneyBillWave,
  FaServer,
  FaHandshake
} from 'react-icons/fa';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function Numeros() {
  // Datos de línea de tiempo
  const timelineEvents = [
    {
      year: '2023',
      title: 'Año 2023',
      icon: <FaChartLine />,
      color: 'green',
      items: [
        { label: 'VENTAS', text: '$216,070' },
        { label: 'GASTOS', text: '' },
        { label: '  • Nóminas', text: '$150,000' },
        { label: 'UTILIDADES', text: '$66,070' },
        { label: '  • Reparto', text: '' },
        { label: '    → UA', text: '$42,276' },
        { label: '    → GAM', text: '$28,184' }
      ]
    },
    {
      year: '2024',
      title: 'Año 2024',
      icon: <FaLightbulb />,
      color: 'purple',
      items: [
        { label: 'VENTAS', text: '$1,158,140' },
        { label: 'GASTOS', text: '' },
        { label: '  • Nóminas', text: '$650,000' },
        { label: '  • Generales', text: '$18,633' },
        { label: 'UTILIDADES', text: '$489,507' },
        { label: '  • Reparto', text: '' },
        { label: '    → UA', text: '$293,704' },
        { label: '    → GAM', text: '$195,802' }
      ]
    },
    {
      year: '2025',
      title: 'Año 2025',
      icon: <FaAward />,
      color: 'orange',
      items: [
        { label: 'VENTAS', text: '$1,325,540 (NOVIEMBRE)' },
        { label: 'GASTOS', text: '' },
        { label: '  • Nóminas', text: '$810,000 (NOVIEMBRE)' },
        { label: '  • Generales', text: '$39,517 (NOVIEMBRE)' },
        { label: 'UTILIDADES', text: '$476,023 (NOVIEMBRE)' },
        { label: '  • Reparto', text: '' },
        { label: '    → UA', text: '$285,614 (NOVIEMBRE)' },
        { label: '    → GAM', text: '$190,409 (NOVIEMBRE)' }
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
    { name: 'UA', value: 621594 },
    { name: 'GAM', value: 414395 }
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
                      <div className="text-sm text-white uppercase tracking-wider">UA (61.8%)</div>
                      <FaBullseye className="text-2xl text-white/80" />
                    </div>
                    <div className="text-5xl font-bold text-white mb-2">
                      <AnimatedCounter end={621594} />
                    </div>
                    <div className="text-white/90 mb-3">Utilidades Noviembre 2025</div>
                    <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>



                  <div className="bg-secondary p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-white uppercase tracking-wider">GAM (38.2%)</div>
                      <FaRocket className="text-2xl text-white/80" />
                    </div>
                    <div className="text-5xl font-bold text-white mb-2">
                      <AnimatedCounter end={414395} />
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
                            borderRadius: '8px',
                            color: '#1f2937'
                          }}
                          labelStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                          itemStyle={{ color: '#1f2937' }}
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

          {/* Gráficos principales lado a lado */}
          <section className="py-12 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
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
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                border: 'none',
                                borderRadius: '16px',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                                padding: '12px',
                                color: '#1f2937'
                              }}>
                                <p style={{ fontWeight: 'bold', marginBottom: '8px', color: '#1f2937' }}>{label}</p>
                                <p style={{ margin: '4px 0', color: '#1f2937' }}>
                                  <span style={{ color: '#2b3445' }}>Ventas</span>: ${payload[0]?.payload.ventas.toLocaleString()}
                                </p>
                                <p style={{ margin: '4px 0', color: '#1f2937' }}>
                                  <span style={{ color: '#ef4444' }}>Gastos</span>: ${payload[0]?.payload.gastos.toLocaleString()}
                                </p>
                                <p style={{ margin: '4px 0', color: '#1f2937' }}>
                                  <span style={{ color: '#10b981' }}>Utilidades</span>: ${payload[0]?.payload.utilidades.toLocaleString()}
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="ventas" fill="url(#colorVentas)" name="Ventas" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="gastos" fill="url(#colorGastos)" name="Gastos" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="utilidades" fill="url(#colorUtilidades)" name="Utilidades" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>

                  {/* Leyenda personalizada */}
                  <div className="flex justify-center items-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#2b3445' }}></div>
                      <span className="text-sm font-medium text-gray-700">Ventas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#ef4444' }}></div>
                      <span className="text-sm font-medium text-gray-700">Gastos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#10b981' }}></div>
                      <span className="text-sm font-medium text-gray-700">Utilidades</span>
                    </div>
                  </div>
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
                          padding: '12px',
                          color: '#1f2937'
                        }}
                        labelStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                        itemStyle={{ color: '#1f2937' }}
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
                        <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-secondary/30">
                          {/* Badge del año con gradiente */}
                          <div className={`inline-block px-6 py-2 rounded-full text-white text-sm font-bold mb-4 shadow-lg ${colorClasses[event.color]} bg-gradient-to-r`}>
                            {event.year}
                          </div>

                          {/* Título */}
                          <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors">
                            {event.title}
                          </h3>

                          {/* Items con mejor estructura */}
                          <div className="space-y-2">
                            {event.items.map((item, i) => {
                              const isMainCategory = ['VENTAS', 'GASTOS', 'UTILIDADES'].includes(item.label);
                              const isSubItem = item.label.startsWith('  •');
                              const isReparto = item.label.includes('→');

                              return (
                                <div
                                  key={i}
                                  className={`text-left transition-all duration-200 ${isMainCategory ? 'mt-3 pt-3 border-t border-gray-200' : ''
                                    }`}
                                >
                                  {item.label && (
                                    <span className={`font-semibold ${isMainCategory ? 'text-primary text-lg' :
                                      isReparto ? 'text-secondary' :
                                        'text-gray-700'
                                      }`}>
                                      {item.label}
                                      {item.label.endsWith(':') ? '' : item.text ? ':' : ''}
                                    </span>
                                  )}
                                  {item.text && (
                                    <span className={`ml-2 ${isMainCategory ? 'text-gray-900 font-semibold text-lg' :
                                      isReparto ? 'text-gray-800 font-medium' :
                                        'text-gray-600'
                                      }`}>
                                      {item.text}
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Decoración inferior */}
                          <div className={`mt-6 h-1 w-20 rounded-full ${colorClasses[event.color]} opacity-50 group-hover:opacity-100 transition-opacity ${index % 2 === 0 ? 'ml-auto' : ''}`}></div>
                        </div>
                      </div>

                      {/* Icono central */}
                      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                        <div className={`w-20 h-20 rounded-full ${colorClasses[event.color]} flex items-center justify-center text-white text-3xl shadow-2xl animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300 ring-4 ring-white`}>
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

          {/* Gastos Detallados */}
          <section className="py-16 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-10">
                GASTOS (DETALLE):
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nóminas */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FaMoneyBillWave className="text-3xl text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Nóminas</h3>
                      <p className="text-2xl font-semibold text-gray-800 mb-3">
                        $50,000 / $60,000 x 3 GAM
                      </p>
                      <div className="bg-blue-50 border-l-4 border-primary p-3 rounded">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Nota:</span> serán $90,000 a partir de julio del 2025 en adelante con la integración de Juan y Gabriel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dominio y hospedaje */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <FaServer className="text-3xl text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Dominio y hospedaje</h3>
                      <p className="text-2xl font-semibold text-gray-800 mb-3">
                        $990
                      </p>
                      <div className="bg-green-50 border-l-4 border-secondary p-3 rounded">
                        <p className="text-sm text-gray-700">
                          A partir de julio del 2025 se ajustó a <span className="font-semibold">$1,350</span> por una integración de respaldo para asegurar la información de cada sistema.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compras y renovaciones de dominios */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <FaGlobe className="text-3xl text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Compras y renovaciones de dominios</h3>
                      <p className="text-2xl font-semibold text-gray-800">
                        $200 - $800
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Varían según el tipo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Apoyo Juan */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <FaHandshake className="text-3xl text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Apoyo Juan</h3>
                      <p className="text-2xl font-semibold text-gray-800 mb-3">
                        $4,500
                      </p>
                      <p className="text-sm text-gray-600">
                        Por los proyectos desarrollados, durante 4 meses en el 2025. Antes de contratarlo formalmente.
                      </p>
                    </div>
                  </div>
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
