import { FadeIn, StaggerContainer, StaggerItem, TimelineParticles } from '@/components/animations';

export default function Nosotros() {
  return (
    <div className="bg-white relative">
      <TimelineParticles density={20} />
      {/* Hero Section */}
      <div className="relative z-10">
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h1>
              <p className="text-xl text-gray-600">
                Desde 2022, construyendo soluciones digitales para Universo aBanza, Val'Quirico y Reinos de México
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Historia y Sociedad Section */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Historia y Sociedad
              </h2>
            </FadeIn>

            <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
              <FadeIn delay={0.1}>
                <p>
                  En el 2022 ABANZOFT nace con la invitación e iniciativa de Adolfo Blanca y Germán Blanca para crear una unidad de negocio que desarrolle Sistemas/Software a la medida para Universo aBanza y Val 'Quirico. Se forma una sociedad entre Universo aBanza y G-A-M (Gerardo-Alejandro-Maribel) con un porcentaje inicial del 51% y del 49% respectivamente, con el objetivo de desarrollar 4 proyectos:
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Catálogo de Productos</li>
                  <li>Sistema Inmobiliario</li>
                  <li>Sistema Condominal</li>
                  <li>Sistema Administrativo-Contable</li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p>
                  De julio a diciembre del 2022 hubo una inversión por parte de Universo aBanza de $560,000 para iniciar dichos proyectos en ZOHO, por lo que analizando a detalle los pros y contras de usar esta plataforma especial y viendo que no se tenía el control al 100%, se decidió que la mejor opción fuera que ABANZOFT hiciera desde cero y a la medida con su propio código estos proyectos.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p>
                  A partir de enero a septiembre del 2023 se hace otra inversión de $810,000, para instalar formalmente a ABANZOFT dentro de Val'Quirico como la Unidad de Negocio dedicada a realizar proyectos y soluciones digitales, empezando a atender así, las necesidades de cada Unidad y Giro dentro de Val'Quirico.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <p>
                  En julio del 2023, se empieza a cobrar la primera mensualidad de un proyecto entregado formalmente, entrando así, por primera vez una venta/renta directa a ABANZOFT.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p>
                  A finales del 2023 se crea el gasto operativo o nómina de $50,000 y a mediados del 2024 se incrementa a $60,000. Y a su vez, se ajustan los porcentajes de la sociedad para que Universo aBanza tuviera más utilidades, equilibrando la sociedad, quedando de esta manera: 60% UA / 40% G-A-M
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Estructura de Sociedad */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Estructura de Sociedad
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Universo aBanza: 60%
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">ABN</span>
                      <span className="text-xl font-semibold text-gray-900">17%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">PGG</span>
                      <span className="text-xl font-semibold text-gray-900">17%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">JAE</span>
                      <span className="text-xl font-semibold text-gray-900">10%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">GBN</span>
                      <span className="text-xl font-semibold text-gray-900">7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">JAN</span>
                      <span className="text-xl font-semibold text-gray-900">6%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">CET</span>
                      <span className="text-xl font-semibold text-gray-900">2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">ECB</span>
                      <span className="text-xl font-semibold text-gray-900">1%</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    G-A-M: 40%
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Gerardo-Alejandro-Maribel conforman el 40% de la sociedad,
                    representando el equipo fundador que desarrolla y opera
                    todos los proyectos de ABANZOFT.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Línea de Tiempo
              </h2>
            </FadeIn>
            <StaggerContainer className="space-y-12">
              {/* 2022 */}
              <StaggerItem>
                <div className="flex gap-6">
                  <div className="shrink-0 w-32 text-right">
                    <span className="text-3xl font-bold text-gray-900">2022</span>
                  </div>
                  <div className="grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Fundación de ABANZOFT</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Julio - Diciembre:</strong> Inversión de $560,000 para iniciar 4 proyectos en ZOHO.
                        Formación de sociedad 51% UA / 49% G-A-M.
                      </p>
                      <p>
                        Proyectos iniciales: Catálogo de Productos, Sistema Inmobiliario,
                        Sistema Condominal, Sistema Administrativo-Contable.
                      </p>
                      <p>
                        Decisión estratégica: desarrollar sistemas desde cero con código propio
                        para tener control total.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* 2023 */}
              <StaggerItem>
                <div className="flex gap-6">
                  <div className="shrink-0 w-32 text-right">
                    <span className="text-3xl font-bold text-gray-900">2023</span>
                  </div>
                  <div className="grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Instalación Formal y Primeros Ingresos</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Enero - Septiembre:</strong> Inversión adicional de $810,000 para
                        instalar formalmente a ABANZOFT dentro de Val'Quirico.
                      </p>
                      <p>
                        <strong>Julio 2023:</strong> Primera mensualidad cobrada ($5,000).
                        Primer ingreso directo a ABANZOFT.
                      </p>
                      <p>
                        <strong>Finales de 2023:</strong> Creación de nómina operativa de $50,000 mensuales.
                      </p>
                      <p>
                        Ventas del año: $216,070 | Utilidades: $66,070
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* 2024 */}
              <StaggerItem>
                <div className="flex gap-6">
                  <div className="shrink-0 w-32 text-right">
                    <span className="text-3xl font-bold text-gray-900">2024</span>
                  </div>
                  <div className="grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Crecimiento y Reestructuración</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Mediados de 2024:</strong> Incremento de nómina a $60,000 mensuales.
                      </p>
                      <p>
                        Ajuste de sociedad a 60% UA / 40% G-A-M para equilibrar utilidades.
                      </p>
                      <p>
                        Ventas del año: $1,158,140 | Utilidades: $489,507
                      </p>
                      <p>
                        Crecimiento significativo en cartera de clientes y proyectos entregados.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* 2025 */}
              <StaggerItem>
                <div className="flex gap-6">
                  <div className="shrink-0 w-32 text-right">
                    <span className="text-3xl font-bold text-gray-900">2025</span>
                  </div>
                  <div className="grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Consolidación y Visión 2.0</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Estado actual (Noviembre):</strong> Ingresos mensuales de $100,000 - $125,000.
                      </p>
                      <p>
                        Ventas acumuladas: $1,325,540 | Utilidades: $476,023
                      </p>
                      <p>
                        40+ clientes, 15+ sistemas, 15+ páginas web, 1 mapa digital.
                      </p>
                      <p>
                        <strong>Julio 2025:</strong> Incremento de nómina a $90,000 con integración
                        de Juan y Gabriel al equipo.
                      </p>
                      <p>
                        Preparación para ABANZOFT 2.0 y expansión al mercado externo.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Estado Actual */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Estado Actual 2025
              </h2>
            </FadeIn>

            <div className="bg-gray-50 p-10 rounded-lg">
              <FadeIn delay={0.1}>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Hoy en día 2025, después de 3 años continuos de trabajo, se genera alrededor de $100,000 a $125,000 mensuales.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-gray-600 mb-6 italic">
                  Nota: Se empezó vendiendo $5,000 mensuales en julio del 2023.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-900">
                    ABANZOFT hoy cuenta con:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>+40 clientes.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>+15 sistemas de distintos rubros y funcionalidades.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>+15 páginas web en formato web y e-commerce.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>1 mapa digital de navegación. Y continuando con muchos más proyectos....</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
