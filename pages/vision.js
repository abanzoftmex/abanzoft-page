import { FadeIn, StaggerContainer, StaggerItem, AnimatedButton, ParticleBackground, FloatingElement, ScrollReveal } from '@/components/animations';

export default function Vision() {
  return (
    <div className="bg-white relative">
      <ParticleBackground density={30} color="rgba(0, 0, 0, 0.04)" />
      {/* Hero Section */}
      <div className="relative z-10">
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Visión 2.0
              </h1>
              <p className="text-xl text-gray-600">
                Consolidación, expansión y la plataforma integral de Reinos de México
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ABANZOFT 2.0 Introduction */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                ACCIONES ABANZOFT 2.0
              </h2>
            </FadeIn>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <FadeIn delay={0.1}>
                <p>
                  En ABANZOFT estamos conscientes y agradecidos de todo el trabajo realizado y la experiencia aprendida en estos 3 años de la mano de Universo aBanza, Val 'Quirico y Reinos de México. Así mismo, creemos en el crecimiento y la mejora continua, por lo que, nuestra misión será tener para el cierre del 2025 y todo el 2026, un ABANZOFT más sólido, actualizado y diversificado.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-xl font-semibold text-gray-900">
                  Nuestro objetivo principal es consolidar a ABANZOFT y expandirnos al mercado externo.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ¿Qué haremos? */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                ¿Qué haremos? Nuestras mejoras incluyen, tener:
              </h2>
            </FadeIn>

            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <div className="flex items-start bg-gray-50 p-6 rounded-lg">
                  <svg className="w-6 h-6 text-gray-900 mr-4 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Mejor imagen corporativa, operativa, legal y administrativa.</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-start bg-gray-50 p-6 rounded-lg">
                  <svg className="w-6 h-6 text-gray-900 mr-4 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Más y mejor talento de equipo.</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-start bg-gray-50 p-6 rounded-lg">
                  <svg className="w-6 h-6 text-gray-900 mr-4 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Mejor calidad de servicios y proyectos digitales.</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-start bg-gray-50 p-6 rounded-lg">
                  <svg className="w-6 h-6 text-gray-900 mr-4 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Mejores tiempos de entrega.</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-start bg-gray-50 p-6 rounded-lg">
                  <svg className="w-6 h-6 text-gray-900 mr-4 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Más atención y seguimiento de nuestros clientes.</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex items-start bg-gray-50 p-6 rounded-lg">
                  <svg className="w-6 h-6 text-gray-900 mr-4 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Más clientes, mercados y proyectos nuevos.</span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Acciones 2026 */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                ACCIONES ABANZOFT 2.0 2026
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggerItem>
                <div className="bg-white p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Página Web</h3>
                  <p className="text-gray-700">www.abanzoft.com</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Redes Sociales</h3>
                  <p className="text-gray-700">Creación de contenido y lanzamiento oficial. (Instagram y Facebook, tener un Community Manager).</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Catálogo Digital</h3>
                  <p className="text-gray-700">De nuestros Servicios Digitales (Descarga del PDF).</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Equipo de Apoyo</h3>
                  <div className="text-gray-700 space-y-2">
                    <p>Contrataciones nuevas en el área de desarrollo.</p>
                    <p>La contratación formal de Juan Hernández en el área de programación.</p>
                    <p>La contratación formal de Gabriel Hernández en el área de programación.</p>
                    <p>Contratar en el área de diseño. (Pendiente)</p>
                    <p>Contratar en el área administrativa. (Pendiente)</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Administración y Contabilidad</h3>
                  <p className="text-gray-700">Contratar al nuevo departamento de Giros (Germán).</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ventas</h3>
                  <p className="text-gray-700">Clientes y mercados nuevos. Se están cerrando más clientes externos con nuevos proyectos.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Equipo de Vendedores</h3>
                  <p className="text-gray-700">A Comisión. Programado para septiembre 2025 (Estudiantes de universidad, personas interesadas).</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Plataforma Reinos de México */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                PLATAFORMA INTEGRAL: REINOS DE MÉXICO
              </h2>
            </FadeIn>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <FadeIn delay={0.1}>
                <p>
                  ABANZOFT pretende realizar la plataforma oficial de REINOS DE MÉXICO. Esta plataforma tiene el objetivo de ser implementada y usada en cada uno de los Reinos, ya que ésta, tendrá de manera integral, unidos y conectados todos los sistemas y módulos principales que hoy en día se han realizado para Val 'Quirico y Universo aBanza, que hoy funcionan de manera separada e individual.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p>
                  Esta plataforma compartirá: módulos, funciones, procesos, actividades, usuarios, información, data, imágenes y reportes, en un solo y mismo lugar. Para su correcto funcionamiento y seguridad, se crearán y generarán distintos tipos de usuarios, accesos y permisos que permitirá realizar distintas actividades y funciones dentro de la plataforma, pero de manera segura y controlada.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p>
                  Esta plataforma tendrá como base principal el Sistema INSULAE (Condominal).
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="font-semibold text-gray-900">
                  Meta y objetivo: Que a finales del 2025 o principios del 2026 podamos estar empezando a implementar la primera fase de la plataforma para el segundo Reino de México: SASSI DEL VALLE.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Fondeo de la Plataforma */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                FONDEO DE LA PLATAFORMA: REINOS DE MÉXICO
              </h2>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    ABANZOFT le pedirá a Reinos de México cubrir una cuota mensual para cada Reino en donde se implemente dicha plataforma.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Cada Unidad o Cliente que use la plataforma deberá cubrir una renta o licencia justa por uso del sistema o módulo que tenga a su cargo dentro de la Plataforma.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-8 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-gray-900">Punto importante:</strong> Reinos de México será el dueño absoluto en todo sentido de: la data, la información, los accesos, los usuarios, los permisos, los sistemas, los módulos, etc.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Responsabilidad:</strong> ABANZOFT será el responsable de ir mejorando, actualizando y detallando las funcionalidades de la plataforma.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6">
                Únete a nuestra visión
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Estamos construyendo el futuro de las soluciones digitales para Reinos de México.
                Contáctanos para ser parte de esta transformación.
              </p>
              <AnimatedButton href="/contacto" variant="primary">
                Contactar
              </AnimatedButton>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}
