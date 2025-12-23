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
  FaGlobe
} from 'react-icons/fa';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function Numeros() {
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
    <Layout>
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
                          <stop offset="5%" stopColor="#2b3445" stopOpacity={0.9}/>
                          <stop offset="95%" stopColor="#2b3445" stopOpacity={0.6}/>
                        </linearGradient>
                        <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.9}/>
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0.6}/>
                        </linearGradient>
                        <linearGradient id="colorUtilidades" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.9}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.6}/>
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
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
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
                            <stop offset="5%" stopColor="#2b3445" stopOpacity={0.9}/>
                            <stop offset="95%" stopColor="#2b3445" stopOpacity={0.6}/>
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

        {/* Análisis de Mercado */}
        <section className="py-16 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            
              <h2 className="text-3xl font-bold text-primary mb-10 text-center">
                Análisis de Mercado
              </h2>
            

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* En Val'Quirico */}
              
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex items-center mb-6">
                    <FaHome className="text-4xl mr-3 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">En Val'Quirico</h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                      <span className="mr-2">✅</span> Pros:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Clientes cautivos',
                        'Muchas necesidades y problemas que atender',
                        'Círculo económico beneficioso',
                        'Proyectos sirven de experiencia'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start group">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                      <span className="mr-2">⚠️</span> Contras:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Muchos responsables, muchas opiniones',
                        'Quieren todo bueno, bonito y barato',
                        'Pagos se atrasan mucho',
                        'Sin contratos formales',
                        'Dependencia económica del pueblo'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start group">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              

              {/* Clientes Externos */}
              
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <div className="flex items-center mb-6">
                    <FaGlobe className="text-4xl mr-3 text-secondary" />
                    <h3 className="text-2xl font-bold text-primary">Clientes Externos</h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                      <span className="mr-2">✅</span> Pros:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Muchos proyectos y clientes nuevos',
                        'Pagan bien y a tiempo',
                        'Replicar proyectos de Val\'Quirico',
                        'Tiempos de entrega organizados',
                        'Contratos formales',
                        'Poder contratar más equipo'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start group">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                      <p className="text-sm text-primary italic">
                        <strong>Nota:</strong> Formalizar ABANZOFT como persona moral = más y mejores proyectos
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                      <span className="mr-2">⚠️</span> Contras:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Saturación de proyectos',
                        'Equipo de trabajo reducido'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start group">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
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
