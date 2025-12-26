import Layout from '@/components/Layout';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedButton, CodeParticles, FloatingElement, CardCodeParticles, CardDesignParticles, CardWebParticles, CardShoppingParticles, CardMapParticles, CardMobileParticles, CardSocialParticles, CardAIParticles } from '@/components/animations';
import { Grid3x3, TrendingUp, Link, Monitor, WifiOff, Users, Brain, Database, BarChart2, DollarSign, Home, UserCheck, ClipboardList, Video, ShoppingCart, Package, Megaphone, Ticket, IdCard, Calendar, Dumbbell, Droplet, Utensils, MapPin, Gift, Building2, Code, Palette, Globe, Smartphone, Share2, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Soluciones() {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <Layout hideFooter={true}>
      <div className="bg-white relative">
        <CodeParticles density={30} />
        {/* Hero Section */}
        <div className="relative z-10">
          <section
            className="py-24 px-6 lg:px-8"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 90% 30%, #3258b1 20%, rgb(26 33 53 / 20%) 50%), radial-gradient(ellipse at 70% 0%, #153d8c 0%, rgb(45 56 107) 50%), radial-gradient(ellipse at 20% 10%, #3258b1 10%, rgb(51 89 178) 70%), radial-gradient(ellipse at 50% 100%, #5b72a3 0%, rgb(50 89 178) 50%)'
            }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                  Nuestras Soluciones
                </h1>
                <p className="text-xl text-gray-200">
                  Servicios digitales genéricos, escalables e interconectables diseñados para tu negocio.
                </p>
                <p className="text-xl text-gray-200">
                  Creamos soluciones de software innovadoras y 100% adaptadas a cualquier tipo de negocio o empresa para que operar con máxima eficiencia y eficiencia, optimizando y automatizando procesos operativos, administrativos y comerciales.
                </p>
              </FadeIn>
            </div>
          </section>

          {/* Nuestras Áreas de Acción */}
          <section className="py-24 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
                  Nuestras Áreas de Acción
                </h2>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Desarrollo de Software - Efecto de pulso */}
                <StaggerItem>
                  <div
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden"
                    onMouseEnter={() => setHoveredCard('code')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardCodeParticles isHovered={hoveredCard === 'code'} />
                    <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full mb-6 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:animate-pulse transition-all duration-500 relative z-10">
                      <Code className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Desarrollo de Software</h3>
                    <p className="text-gray-600 text-sm relative z-10">Sistemas especializados en optimización de procesos.</p>
                  </div>
                </StaggerItem>

                {/* Diseño Gráfico - Cambio de gradiente */}
                <StaggerItem>
                  <div
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden"
                    onMouseEnter={() => setHoveredCard('design')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardDesignParticles isHovered={hoveredCard === 'design'} />
                    <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full mb-6 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:from-pink-400 group-hover:to-orange-500 transition-all duration-700 relative z-10">
                      <Palette className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Diseño Gráfico</h3>
                    <p className="text-gray-600 text-sm relative z-10">Porque la imagen lo es todo para tu negocio.</p>
                  </div>
                </StaggerItem>

                {/* Páginas Web - Rotación del globo */}
                <StaggerItem>
                  <div
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden"
                    onMouseEnter={() => setHoveredCard('web')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardWebParticles isHovered={hoveredCard === 'web'} />
                    <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full mb-6 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 relative z-10">
                      <Globe className="w-12 h-12 text-white group-hover:rotate-180 transition-transform duration-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Páginas Web</h3>
                    <p className="text-gray-600 text-sm relative z-10">Herramientas de posicionamiento en la web.</p>
                  </div>
                </StaggerItem>

                {/* Plataformas de Pedidos - Bounce del carrito */}
                <StaggerItem>
                  <div
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden"
                    onMouseEnter={() => setHoveredCard('shopping')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardShoppingParticles isHovered={hoveredCard === 'shopping'} />
                    <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full mb-6 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 relative z-10">
                      <ShoppingCart className="w-12 h-12 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Plataformas de Pedidos</h3>
                    <p className="text-gray-600 text-sm relative z-10">Sistema de ventas y comunicación entre tu negocio y tus clientes.</p>
                  </div>
                </StaggerItem>

                {/* Mapas Interactivos - Expansión del mapa */}
                <StaggerItem>
                  <div
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden"
                    onMouseEnter={() => setHoveredCard('map')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardMapParticles isHovered={hoveredCard === 'map'} />
                    <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full mb-6 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 relative z-10">
                      <MapPin className="w-12 h-12 text-white group-hover:scale-125 transition-transform duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Mapas Interactivos Personalizados</h3>
                    <p className="text-gray-600 text-sm relative z-10">Permite que tus clientes interactúen como nunca lo han hecho.</p>
                  </div>
                </StaggerItem>

                {/* Aplicaciones Móviles - Vibración del teléfono */}
                <StaggerItem>
                  <div
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden"
                    onMouseEnter={() => setHoveredCard('mobile')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardMobileParticles isHovered={hoveredCard === 'mobile'} />
                    <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full mb-6 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 relative z-10">
                      <Smartphone className="w-12 h-12 text-white group-hover:rotate-6 group-hover:-rotate-6 transition-transform duration-100" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Aplicaciones Móviles</h3>
                    <p className="text-gray-600 text-sm relative z-10">Una de las herramientas de interacción más poderosas del mercado.</p>
                  </div>
                </StaggerItem>

                {/* Redes Sociales - Efecto de compartir */}
                <StaggerItem>
                  <div
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden"
                    onMouseEnter={() => setHoveredCard('social')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardSocialParticles isHovered={hoveredCard === 'social'} />
                    <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-full mb-6 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 relative z-10">
                      <Share2 className="w-12 h-12 text-white group-hover:scale-125 group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Gestión de Redes Sociales y Marketing Digital</h3>
                    <p className="text-gray-600 text-sm relative z-10">Interactúa en las plataformas sociales más importantes y genera ventas.</p>
                  </div>
                </StaggerItem>

                {/* IA - Efecto de brillo/sparkle */}
                <StaggerItem>
                  <div
                    className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden"
                    onMouseEnter={() => setHoveredCard('ai')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardAIParticles isHovered={hoveredCard === 'ai'} />
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-6 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-700 relative z-10">
                      <Sparkles className="w-12 h-12 text-white group-hover:rotate-90 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">Soluciones con Inteligencia Artificial</h3>
                    <p className="text-gray-600 text-sm relative z-10">Todo el poder de la IA en cada solución personalizada.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          {/* Experiencia del Usuario */}
          <section className="py-24 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                  EXPERIENCIA DEL USUARIO: MEJORES SERVICIOS DIGITALES
                </h2>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg h-full">
                    <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                      <Grid3x3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Genéricos y modulares</h3>
                    <p className="text-gray-600">adaptables a cualquier giro de negocio.</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg h-full">
                    <div className="w-12 h-12 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Escalables</h3>
                    <p className="text-gray-600">pueden crecer y evolucionar junto con tu empresa.</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg h-full">
                    <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                      <Link className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Interconectables</h3>
                    <p className="text-gray-600">se integran con otras plataformas y servicios.</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg h-full">
                    <div className="w-12 h-12 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Compatibles</h3>
                    <p className="text-gray-600">funcionales en celular, laptop, tablet y desktop.</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg h-full">
                    <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                      <WifiOff className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Offline</h3>
                    <p className="text-gray-600">pueden operar sin conexión a internet.</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg h-full">
                    <div className="w-12 h-12 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Multiusuario</h3>
                    <p className="text-gray-600">diferentes niveles de usuarios y permisos.</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg h-full">
                    <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">IA Integrada</h3>
                    <p className="text-gray-600">para automatizar tareas y tomar decisiones inteligentes.</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg h-full">
                    <div className="w-12 h-12 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Exportación/importación de datos</h3>
                    <p className="text-gray-600">vía Excel.</p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="bg-white p-6 rounded-lg h-full">
                    <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                      <BarChart2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Reportes dinámicos</h3>
                    <p className="text-gray-600">generales y específicos, en formato digital e impreso.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          {/* Sistemas Especializados */}
          <section className="py-24 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                  En nuestra trayectoria hemos desarrollado varios sistemas especializados.
                </h2>
              </FadeIn>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
                {/* Row 1 */}
                <FloatingElement delay={0} duration={3}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <DollarSign className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Gestión administrativa y<br />contable</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={0.2} duration={3.5}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Home className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Inmobiliarias y condominios</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={0.4} duration={3.2}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <UserCheck className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Recursos Humanos</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={0.6} duration={3.8}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <ClipboardList className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Encuestas, cursos y<br />empleabilidad</p>
                  </div>
                </FloatingElement>

                {/* Row 2 */}
                <FloatingElement delay={0.8} duration={3.3}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Video className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Cursos en línea</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={1} duration={3.6}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <ShoppingCart className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Compras y punto de venta</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={1.2} duration={3.4}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Package className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Inventarios y logística</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={1.4} duration={3.7}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Megaphone className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">CRM, cobranza y rentas</p>
                  </div>
                </FloatingElement>

                {/* Row 3 */}
                <FloatingElement delay={0.3} duration={3.9}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Ticket className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Eventos, boletaje y<br />contratación de artistas</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={0.5} duration={3.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <IdCard className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Membresías y gestión de<br />socios</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={0.7} duration={3.5}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Calendar className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Calendarios, pendientes y<br />agendas digitales</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={0.9} duration={3.2}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Dumbbell className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Administración de centros<br />deportivos</p>
                  </div>
                </FloatingElement>

                {/* Row 4 */}
                <FloatingElement delay={1.1} duration={3.8}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Droplet className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Control de agua y recursos</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={1.3} duration={3.4}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Utensils className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Sistemas de hospedaje</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={1.5} duration={3.6}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <MapPin className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Mapas digitales<br />interactivos</p>
                  </div>
                </FloatingElement>

                <FloatingElement delay={1.7} duration={3.3}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Gift className="w-10 h-10 text-gray-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Plataformas de pedidos y<br />entregas</p>
                  </div>
                </FloatingElement>

                {/* Row 5 - Centered */}
                <div className="col-span-2 md:col-span-3 lg:col-span-4 flex justify-center">
                  <FloatingElement delay={1.9} duration={3.7}>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full border-2 border-red-400 flex items-center justify-center mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Building2 className="w-10 h-10 text-gray-700" />
                      </div>
                      <p className="text-sm font-medium text-gray-800">Soluciones para<br />construcción y diseño</p>
                    </div>
                  </FloatingElement>
                </div>
              </div>
            </div>
          </section>

          {/* Modelo ABANZOFT */}
          <section className="py-24 px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <FadeIn>
                <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                  COSTOS
                </h2>
              </FadeIn>

              <div className="space-y-12">
                <FadeIn delay={0.1}>
                  <div className="bg-gray-50 p-10 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary mb-6">
                      Modelo ABANZOFT: Accesible y Personalizado
                    </h3>
                    <div className="space-y-4 text-gray-700">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-secondary mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <strong>Costo inicial de implementación bajo:</strong> solo pagas una pequeña cuota por la implementación de la solución digital que diseñamos y desarrollamos a tu medida.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-secondary mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <strong>Renta mensual accesible:</strong> una mensualidad justa y flexible por el uso de la solución digital, durante el tiempo que la necesites y la uses.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-secondary mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          Sin gastos excesivos ni inversiones fuertes.
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-secondary mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          Actualizaciones, soporte y mejoras incluidas en tu plan.
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Sistemas<section className="py-24 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                  SISTEMAS INVOLUCRADOS
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-primary text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold">Categoría / Tipo de Sistema</th>
                          <th className="px-6 py-4 text-left font-semibold">Nombre del Sistema / Módulo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-condominal</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Insulae</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Inmobiliario-construcción</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Inmobiliario</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-contable</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Luca</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-entradas y salidas</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Salditos-punto de venta</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-membresías</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Membresías</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Servicio-evaluación de negocios</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Encuestas</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-recursos humanos</td>
                          <td className="px-6 py-4 font-semibold text-secondary">RH-reloj checador</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-pendientes y calendario</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Pendientódromo-calendario</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-compras</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Pedidos-compras</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-rentas</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Rentas</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-reportes</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Reportes: giros y socios</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Servicio-plataforma de cursos</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Batallón elite</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Servicio-bolsa de trabajo</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Puesto ya</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-agua</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Administración del agua</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Servicio-compra de boletos-eventos</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Eventos y boletos</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-seguimiento de clientes</td>
                          <td className="px-6 py-4 font-semibold text-secondary">CRM</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Administrativo-cobranza</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Recibos de pago/cobro</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Plataforma de venta en línea</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Pido a</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-gray-700">Mapa de navegación</td>
                          <td className="px-6 py-4 font-semibold text-secondary">Mapa Val 'Quirico</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section> Involucrados */}


        </div>
      </div>
    </Layout>
  );
}
