import Layout from '@/components/Layout';
import { FadeIn, StaggerContainer, StaggerItem, MouseFollowParticles, ParticleBackground } from '@/components/animations';

export default function Contacto() {
  return (
    <Layout>
    <div className="bg-white relative">
      <MouseFollowParticles density={15} />
      <ParticleBackground density={20} color="rgba(147, 51, 234, 0.3)" />
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
                [Título: Hablemos]
              </h1>
              <p className="text-xl text-gray-200">
                [Descripción del contacto]
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    [Envíanos un mensaje]
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        [Nombre]
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="[Tu nombre]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        [Email]
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="[tu@email.com]"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                        [Empresa]
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="[Tu empresa]"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                        [Mensaje]
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                        placeholder="[Cuéntanos sobre tu proyecto...]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      [Enviar mensaje]
                    </button>
                  </form>
                </div>
              </FadeIn>

              {/* Contact Info */}
              <FadeIn delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    [Información de contacto]
                  </h2>
                  <div className="space-y-8">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">[Email]</h3>
                        <p className="text-gray-600">[contacto@empresa.com]</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">[Teléfono]</h3>
                        <p className="text-gray-600">[+52 XXX XXX XXXX]</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">[Ubicación]</h3>
                        <p className="text-gray-600">[Ciudad, Estado, País]</p>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="pt-8 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">[Síguenos]</h3>
                      <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <span className="text-gray-900 font-semibold">Li</span>
                        </a>
                        <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <span className="text-gray-900 font-semibold">Tw</span>
                        </a>
                        <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <span className="text-gray-900 font-semibold">Fb</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                [Preguntas Frecuentes]
              </h2>
            </FadeIn>
            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">[Pregunta 1]</h3>
                  <p className="text-gray-600">[Respuesta]</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">[Pregunta 2]</h3>
                  <p className="text-gray-600">[Respuesta]</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">[Pregunta 3]</h3>
                  <p className="text-gray-600">[Respuesta]</p>
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
