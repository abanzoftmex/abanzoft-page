import { FadeIn, StaggerContainer, StaggerItem, AnimatedButton, ParticleBackground, FloatingElement, ScrollReveal } from '@/components/animations';
import { Settings, Globe, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white relative">
      <ParticleBackground density={40} color="rgba(0, 0, 0, 0.04)" />
      {/* Hero Section */}
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn duration={0.6}>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                ABANZOFT
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} duration={0.6}>
              <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Unidad de Negocio dedicada a desarrollar Sistemas y Software a la medida para Universo aBanza, Val'Quirico y Reinos de México.
                Desde 2022 construyendo soluciones digitales que funcionan.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} duration={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton href="/nosotros" variant="primary">
                  Nuestra Historia
                </AnimatedButton>
                <AnimatedButton href="/soluciones" variant="secondary">
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
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  ABANZOFT en Números
                </h2>
                <p className="text-xl text-gray-600">
                  3 años de trabajo continuo generando soluciones digitales reales
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <StaggerItem>
                <div className="text-6xl lg:text-7xl font-bold text-gray-900 mb-3">40+</div>
                <div className="text-lg text-gray-600">Clientes</div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-6xl lg:text-7xl font-bold text-gray-900 mb-3">15+</div>
                <div className="text-lg text-gray-600">Sistemas Desarrollados</div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-6xl lg:text-7xl font-bold text-gray-900 mb-3">15+</div>
                <div className="text-lg text-gray-600">Páginas Web</div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-6xl lg:text-7xl font-bold text-gray-900 mb-3">3</div>
                <div className="text-lg text-gray-600">Años de Operación</div>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="mt-16 text-center">
                <p className="text-2xl text-gray-900 font-semibold mb-2">
                  $100,000 - $125,000 mensuales
                </p>
                <p className="text-lg text-gray-600">
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
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
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
                      <div className="w-16 h-16 bg-gray-900 rounded-lg mx-auto mb-6 flex items-center justify-center">
                        <Settings className="w-8 h-8 text-white" />
                      </div>
                    </FloatingElement>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
                      <div className="w-16 h-16 bg-gray-900 rounded-lg mx-auto mb-6 flex items-center justify-center">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                    </FloatingElement>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
                      <div className="w-16 h-16 bg-gray-900 rounded-lg mx-auto mb-6 flex items-center justify-center">
                        <Lightbulb className="w-8 h-8 text-white" />
                      </div>
                    </FloatingElement>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
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
                  <div className="text-3xl font-bold text-gray-900 mb-2">2022</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
                  <div className="text-3xl font-bold text-gray-900 mb-2">2023</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
                  <div className="text-3xl font-bold text-gray-900 mb-2">2025</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
                <div className="bg-gray-50 p-10 rounded-lg h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Conoce Nuestra Historia
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Descubre cómo nació ABANZOFT, nuestra sociedad, inversiones,
                    y el camino recorrido desde 2022 hasta hoy.
                  </p>
                  <AnimatedButton href="/nosotros" variant="secondary">
                    Ver Historia Completa
                  </AnimatedButton>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-gray-50 p-10 rounded-lg h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Los Números Completos
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Revisa todos los datos financieros, ventas, gastos, utilidades
                    y análisis de mercado detallado año por año.
                  </p>
                  <AnimatedButton href="/numeros" variant="secondary">
                    Ver Números
                  </AnimatedButton>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-gray-50 p-10 rounded-lg h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Nuestras Soluciones
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Explora nuestro modelo de servicios, experiencia del usuario,
                    costos accesibles y todos los sistemas que ofrecemos.
                  </p>
                  <AnimatedButton href="/soluciones" variant="secondary">
                    Ver Soluciones
                  </AnimatedButton>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-gray-50 p-10 rounded-lg h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Visión 2.0
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Conoce nuestros planes para el futuro, ABANZOFT 2.0,
                    y la plataforma integral de Reinos de México.
                  </p>
                  <AnimatedButton href="/vision" variant="secondary">
                    Ver Visión
                  </AnimatedButton>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Hablemos sobre cómo podemos ayudarte a construir la solución digital
                que tu negocio necesita.
              </p>
              <AnimatedButton href="/contacto" variant="primary">
                Iniciar Conversación
              </AnimatedButton>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}
