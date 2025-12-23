import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="logo.png" alt="ABANZOFT" className="w-1/2" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Construyendo el futuro digital de México desde 2022.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/nosotros" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/soluciones" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Soluciones
                </Link>
              </li>
              <li>
                <Link href="/numeros" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Números
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Visión 2.0
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contacto" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-600">
                  Legal y Formal
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-600">
                contacto@abanzoft.com
              </li>
              <li className="text-sm text-gray-600">
                Val´Quirico, Tlaxcala
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} ABANZOFT. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
