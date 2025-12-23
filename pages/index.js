import Layout from '@/components/Layout';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedButton, ParticleBackground, FloatingElement, ScrollReveal } from '@/components/animations';
import { Settings, Globe, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
    <div className="bg-white relative">
      <ParticleBackground density={40} color="rgba(0, 0, 0, 0.04)" />
      {/* Hero Section */}
      <div className="relative z-10">
        <section 
          className="min-h-screen flex items-center justify-center px-6 lg:px-8"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 90% 30%, #3258b1 20%, rgb(26 33 53 / 20%) 50%), radial-gradient(ellipse at 70% 0%, #153d8c 0%, rgb(45 56 107) 50%), radial-gradient(ellipse at 20% 10%, #3258b1 10%, rgb(51 89 178) 70%), radial-gradient(ellipse at 50% 100%, #5b72a3 0%, rgb(50 89 178) 50%)'
          }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn duration={0.6}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                <img src="logo_light.png" alt="ABANZOFT" className="w-1/2 mx-auto" />
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} duration={0.6}>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                Unidad de Negocio dedicada a desarrollar Sistemas y Software a la medida para  <strong className="text-white">Universo aBanza</strong>, <strong className="text-white">Val'Quirico</strong> y <strong className="text-white">Reinos de México</strong>.
                Desde 2022 construyendo soluciones digitales que funcionan.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} duration={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton href="/nosotros" variant="primary">
                  Nuestra Historia
                </AnimatedButton>
                <AnimatedButton className='text-white border-white' href="/soluciones" variant="secondary">
                  Ver Soluciones
                </AnimatedButton>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                  ABANZOFT en Números
                </h2>
                <p className="text-xl text-gray-600">
                  3 años de trabajo continuo generando soluciones digitales reales
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <StaggerItem>
                <div className="text-6xl lg:text-7xl font-bold text-secondary mb-3">40+</div>
                <div className="text-lg text-gray-600">Clientes</div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-6xl lg:text-7xl font-bold text-secondary mb-3">15+</div>
                <div className="text-lg text-gray-600">Sistemas Desarrollados</div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-6xl lg:text-7xl font-bold text-secondary mb-3">15+</div>
                <div className="text-lg text-gray-600">Páginas Web</div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-6xl lg:text-7xl font-bold text-secondary mb-3">3</div>
                <div className="text-lg text-gray-600">Años de Operación</div>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="mt-16 text-center bg-primary py-8 px-6 rounded-2xl">
                <p className="text-3xl lg:text-4xl text-white font-bold mb-2">
                  $100,000 - $125,000 mensuales
                </p>
                <p className="text-xl text-secondary/80">
                  Ingresos actuales (2025)
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Qué Hacemos
                </h2>
                <p className="text-xl text-gray-600">
                  Desarrollamos proyectos y soluciones digitales a la medida,
                  atendiendo las necesidades de cada Unidad y Giro dentro de nuestros clientes.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <StaggerItem>
                <ScrollReveal>
                  <div className="text-center">
                    <FloatingElement delay={0}>
                      <div className="bg-secondary w-16 h-16 rounded-lg mx-auto mb-6 flex items-center justify-center">
                        <Settings className="w-8 h-8 text-white" />
                      </div>
                    </FloatingElement>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      Sistemas a Medida
                    </h3>
                    <p className="text-gray-600">
                      Más de 15 sistemas de distintos rubros y funcionalidades,
                      diseñados específicamente para resolver necesidades reales.
                    </p>
                  </div>
                </ScrollReveal>
              </StaggerItem>

              <StaggerItem>
                <ScrollReveal>
                  <div className="text-center">
                    <FloatingElement delay={0.2}>
                      <div className="bg-secondary w-16 h-16 rounded-lg mx-auto mb-6 flex items-center justify-center">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                    </FloatingElement>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      Desarrollo Web
                    </h3>
                    <p className="text-gray-600">
                      Más de 15 páginas web en formato web y e-commerce,
                      con diseño profesional y funcionalidad completa.
                    </p>
                  </div>
                </ScrollReveal>
              </StaggerItem>

              <StaggerItem>
                <ScrollReveal>
                  <div className="text-center">
                    <FloatingElement delay={0.4}>
                      <div className="bg-secondary w-16 h-16 rounded-lg mx-auto mb-6 flex items-center justify-center">
                        <Lightbulb className="w-8 h-8 text-white" />
                      </div>
                    </FloatingElement>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      Soluciones Digitales
                    </h3>
                    <p className="text-gray-600">
                      Mapas digitales de navegación y proyectos innovadores
                      que continúan expandiendo nuestro portafolio.
                    </p>
                  </div>
                </ScrollReveal>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-32 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Nuestro Recorrido
                </h2>
                <p className="text-xl text-gray-600">
                  De $5,000 mensuales en julio 2023 a más de $100,000 mensuales en 2025
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <StaggerItem>
                <div className="bg-white p-8 rounded-lg">
                  <div className="text-3xl font-black text-secondary mb-2">2022</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Fundación
                  </h3>
                  <p className="text-gray-600">
                    Inicio de ABANZOFT con la visión de crear una unidad de negocio
                    dedicada al desarrollo de sistemas a la medida.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-8 rounded-lg">
                  <div className="text-3xl font-black text-secondary mb-2">2023</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Primeros Ingresos
                  </h3>
                  <p className="text-gray-600">
                    Primera mensualidad cobrada en julio. Instalación formal
                    de ABANZOFT dentro de Val'Quirico.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-8 rounded-lg">
                  <div className="text-3xl font-black text-secondary mb-2">2025</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Consolidación
                  </h3>
                  <p className="text-gray-600">
                    40+ clientes, ingresos mensuales de $100,000-$125,000,
                    y preparación para ABANZOFT 2.0.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggerItem>
                <div className="bg-primary p-10 rounded-lg h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Conoce Nuestra Historia
                  </h3>
                  <p className="text-gray-300 mb-6 grow">
                    Descubre cómo nació ABANZOFT, nuestra sociedad, inversiones,
                    y el camino recorrido desde 2022 hasta hoy.
                  </p>
                  <AnimatedButton href="/nosotros" variant="primary">
                    Ver Historia Completa
                  </AnimatedButton>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-primary p-10 rounded-lg h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Los Números Completos
                  </h3>
                  <p className="text-gray-300 mb-6 grow">
                    Revisa todos los datos financieros, ventas, gastos, utilidades
                    y análisis de mercado detallado año por año.
                  </p>
                  <AnimatedButton href="/numeros" variant="primary">
                    Ver Números
                  </AnimatedButton>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-primary p-10 rounded-lg h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Nuestras Soluciones
                  </h3>
                  <p className="text-gray-300 mb-6 grow">
                    Explora nuestro modelo de servicios, experiencia del usuario,
                    costos accesibles y todos los sistemas que ofrecemos.
                  </p>
                  <AnimatedButton href="/soluciones" variant="primary">
                    Ver Soluciones
                  </AnimatedButton>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-primary p-10 rounded-lg h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Visión 2.0
                  </h3>
                  <p className="text-gray-300 mb-6 grow">
                    Conoce nuestros planes para el futuro, ABANZOFT 2.0,
                    y la plataforma integral de Reinos de México.
                  </p>
                  <AnimatedButton href="/vision" variant="primary">
                    Ver Visión
                  </AnimatedButton>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

    
      </div>
    </div>
    </Layout>
  );
}
