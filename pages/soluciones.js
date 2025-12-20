import { FadeIn, StaggerContainer, StaggerItem, AnimatedButton, CodeParticles } from '@/components/animations';
import { Grid3x3, TrendingUp, Link, Monitor, WifiOff, Users, Brain, Database, BarChart2 } from 'lucide-react';

export default function Soluciones() {
  return (
    <div className="bg-white relative">
      <CodeParticles density={30} />
      {/* Hero Section */}
      <div className="relative z-10">
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Nuestras Soluciones
              </h1>
              <p className="text-xl text-gray-600">
                Servicios digitales genéricos, escalables e interconectables diseñados para tu negocio
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Experiencia del Usuario */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                EXPERIENCIA DEL USUARIO: MEJORES SERVICIOS DIGITALES
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="bg-white p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <Grid3x3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Genéricos y modulares</h3>
                  <p className="text-gray-600">adaptables a cualquier giro de negocio.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Escalables</h3>
                  <p className="text-gray-600">pueden crecer y evolucionar junto con tu empresa.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <Link className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Interconectables</h3>
                  <p className="text-gray-600">se integran con otras plataformas y servicios.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Compatibles</h3>
                  <p className="text-gray-600">funcionales en celular, laptop, tablet y desktop.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <WifiOff className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Offline</h3>
                  <p className="text-gray-600">pueden operar sin conexión a internet.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiusuario</h3>
                  <p className="text-gray-600">diferentes niveles de usuarios y permisos.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">IA Integrada</h3>
                  <p className="text-gray-600">para automatizar tareas y tomar decisiones inteligentes.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Exportación/importación de datos</h3>
                  <p className="text-gray-600">vía Excel.</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white p-6 rounded-lg h-full">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <BarChart2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Reportes dinámicos</h3>
                  <p className="text-gray-600">generales y específicos, en formato digital e impreso.</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Modelo ABANZOFT */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                COSTOS Y LEGAL
              </h2>
            </FadeIn>

            <div className="space-y-12">
              <FadeIn delay={0.1}>
                <div className="bg-gray-50 p-10 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Modelo ABANZOFT: Accesible y Personalizado
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong>Costo inicial de implementación bajo:</strong> solo pagas una pequeña cuota por la implementación de la solución digital que diseñamos y desarrollamos a tu medida.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <strong>Renta mensual accesible:</strong> una mensualidad justa y flexible por el uso de la solución digital, durante el tiempo que la necesites y la uses.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        Sin gastos excesivos ni inversiones fuertes.
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-gray-900 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        Actualizaciones, soporte y mejoras incluidas en tu plan.
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-gray-50 p-10 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Legal
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Contrato de Prestación de Servicios.</h4>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Políticas y Condiciones:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Los tiempos de diseño y desarrollo</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Los procesos de diseño y desarrollo</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Los avances y las entregas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Los pagos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Los costos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Entrega de información requerida: textos-imágenes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Seguimiento y atención al cliente</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-gray-700">
                        Dar de alta a ABANZOFT como persona moral (analizando propuestas de Juan Pablo Suárez y Ricardo Gali).
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Organización de Proyectos:</h4>
                      <p className="text-gray-700">
                        Agenda Oficial: Semanal y mensual de acuerdo con prioridades establecidas. Con reuniones presenciales semanales y por videollamada.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Sistemas Involucrados */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                SISTEMAS INVOLUCRADOS
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-900 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Categoría / Tipo de Sistema</th>
                        <th className="px-6 py-4 text-left font-semibold">Nombre del Sistema / Módulo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-condominal</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Insulae</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Inmobiliario-construcción</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Inmobiliario</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-contable</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Luca</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-entradas y salidas</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Salditos-punto de venta</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-membresías</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Membresías</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Servicio-evaluación de negocios</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Encuestas</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-recursos humanos</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">RH-reloj checador</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-pendientes y calendario</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Pendientódromo-calendario</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-compras</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Pedidos-compras</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-rentas</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Rentas</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-reportes</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Reportes: giros y socios</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Servicio-plataforma de cursos</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Batallón elite</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Servicio-bolsa de trabajo</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Puesto ya</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-agua</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Administración del agua</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Servicio-compra de boletos-eventos</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Eventos y boletos</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-seguimiento de clientes</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">CRM</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Administrativo-cobranza</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Recibos de pago/cobro</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Plataforma de venta en línea</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Pido a</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Mapa de navegación</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">Mapa Val 'Quirico</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ¿Listo para comenzar?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contáctanos para conocer más sobre nuestras soluciones y cómo pueden ayudar a tu negocio.
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
