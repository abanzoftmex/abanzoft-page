import { FadeIn, StaggerContainer, StaggerItem, MoneyParticles, ScrollReveal } from '@/components/animations';

export default function Numeros() {
  return (
    <div className="bg-white relative">
      <MoneyParticles density={25} />
      {/* Hero Section */}
      <div className="relative z-10">
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Los Números
              </h1>
              <p className="text-xl text-gray-600">
                Datos financieros completos 2023-2025: ventas, gastos, utilidades y análisis de mercado
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Año 2023 */}
        <section className="py-16 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">AÑO 2023</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn delay={0.1}>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">VENTAS</div>
                  <div className="text-3xl font-bold text-gray-900">$216,070</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">GASTOS</div>
                  <div className="text-3xl font-bold text-gray-900">$150,000</div>
                  <div className="text-sm text-gray-600 mt-2">Nóminas: $150,000</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">UTILIDADES</div>
                  <div className="text-3xl font-bold text-gray-900">$66,070</div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-6 bg-white p-6 rounded-lg">
                <div className="text-lg font-semibold text-gray-900 mb-4">Reparto:</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">UA:</span>
                    <span className="ml-2 text-xl font-bold text-gray-900">$42,276</span>
                  </div>
                  <div>
                    <span className="text-gray-600">GAM:</span>
                    <span className="ml-2 text-xl font-bold text-gray-900">$23,184</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Año 2024 */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">AÑO 2024</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn delay={0.1}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">VENTAS</div>
                  <div className="text-3xl font-bold text-gray-900">$1,158,140</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">GASTOS</div>
                  <div className="text-3xl font-bold text-gray-900">$668,633</div>
                  <div className="text-sm text-gray-600 mt-2">Nóminas: $650,000</div>
                  <div className="text-sm text-gray-600">Generales: $18,633</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">UTILIDADES</div>
                  <div className="text-3xl font-bold text-gray-900">$489,507</div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <div className="text-lg font-semibold text-gray-900 mb-4">Reparto:</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">UA:</span>
                    <span className="ml-2 text-xl font-bold text-gray-900">$293,704</span>
                  </div>
                  <div>
                    <span className="text-gray-600">GAM:</span>
                    <span className="ml-2 text-xl font-bold text-gray-900">$195,802</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Año 2025 */}
        <section className="py-16 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">AÑO 2025 (Corte a NOVIEMBRE)</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn delay={0.1}>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">VENTAS (NOVIEMBRE)</div>
                  <div className="text-3xl font-bold text-gray-900">$1,325,540</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">GASTOS (NOVIEMBRE)</div>
                  <div className="text-3xl font-bold text-gray-900">$849,517</div>
                  <div className="text-sm text-gray-600 mt-2">Nóminas: $810,000</div>
                  <div className="text-sm text-gray-600">Generales: $39,517</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">UTILIDADES (NOVIEMBRE)</div>
                  <div className="text-3xl font-bold text-gray-900">$476,023</div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-6 bg-white p-6 rounded-lg">
                <div className="text-lg font-semibold text-gray-900 mb-4">Reparto:</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">UA (NOVIEMBRE):</span>
                    <span className="ml-2 text-xl font-bold text-gray-900">$285,614</span>
                  </div>
                  <div>
                    <span className="text-gray-600">GAM (NOVIEMBRE):</span>
                    <span className="ml-2 text-xl font-bold text-gray-900">$190,409</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Totales 2023-2025 */}
        <section className="py-16 px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8">TOTALES 2023-2025</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FadeIn delay={0.1}>
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                  <div className="text-sm text-gray-300 mb-2">VENTAS 2023-2025 (NOVIEMBRE)</div>
                  <div className="text-3xl font-bold">$2,699,750</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                  <div className="text-sm text-gray-300 mb-2">GASTOS 2023-2025 (NOVIEMBRE)</div>
                  <div className="text-3xl font-bold">$1,668,150</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                  <div className="text-sm text-gray-300 mb-2">UTILIDADES 2023-2025 (NOVIEMBRE)</div>
                  <div className="text-3xl font-bold">$1,031,600</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                  <div className="text-sm text-gray-300 mb-2">UTILIDADES UA (NOVIEMBRE)</div>
                  <div className="text-3xl font-bold">$621,594</div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                  <div className="text-sm text-gray-300 mb-2">UTILIDADES GAM (NOVIEMBRE)</div>
                  <div className="text-3xl font-bold">$414,395</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Detalle de Inversión y Gastos */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">DETALLE DE INVERSIÓN Y GASTOS</h2>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">INVERSIÓN ABANZOFT (UA)</div>
                      <div className="text-4xl font-bold text-gray-900">$1,370,000</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">RECIBIDAS POR UA</div>
                      <div className="text-4xl font-bold text-gray-900">$621,594</div>
                      <div className="text-sm text-gray-600 mt-1">(A NOVIEMBRE 2025)</div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900 mb-4">GASTOS (DETALLE):</div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-900">Nóminas:</div>
                      <p className="text-gray-700">$50,000 / $60,000 x 3 GAM</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Nota: serán $90,000 a partir de julio del 2025 en adelante con la integración de Juan y Gabriel.
                      </p>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900">Dominio y hospedaje:</div>
                      <p className="text-gray-700">$990. A partir de julio del 2025 se ajustó a $1350 por una integración de respaldo para asegurar la información de cada sistema.</p>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900">Compras y renovaciones de dominios:</div>
                      <p className="text-gray-700">varían según el tipo entre $200-$800</p>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900">Apoyo Juan:</div>
                      <p className="text-gray-700">de $4,500 por los proyectos desarrollados, durante 4 meses en el 2025. Antes de contratarlo formalmente.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Análisis de Mercado */}
        <section className="py-16 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">ANÁLISIS DE MERCADO</h2>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* En Val'Quirico */}
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-lg h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">En Val 'Quirico</h3>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">Pros:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Clientes cautivos.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Muchas necesidades y problemas que atender y resolver.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Es un círculo económico beneficioso.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Muchos proyectos sirven de experiencia y funcionan para otros clientes.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-red-700 mb-3">Contras:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">Muchos responsables, muchas opiniones.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">Quieren todo bueno, bonito y barato.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">Quieren todo rápido.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">Los pagos se atrasan mucho.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">No hay contratos para formalizar los proyectos.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">Dependemos de la situación económica del pueblo.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">Tenemos un equipo de trabajo reducido.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Clientes Externos */}
              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-lg h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Clientes Externos</h3>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-700 mb-3">Pros:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Muchos proyectos y clientes nuevos.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Pagan bien y a tiempo.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Poder replicar los proyectos realizados en Val 'Quirico.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Tiempos de entrega más organizados.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Firmar contratos para formalizar los proyectos.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Poder contratar a más equipo de apoyo.</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3 italic">
                      Nota: Si formalizamos ABANZOFT como personal moral, podemos obtener más y mejores proyectos.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-red-700 mb-3">Contras:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">Saturación de proyectos.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700">Tener un equipo de trabajo reducido.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
