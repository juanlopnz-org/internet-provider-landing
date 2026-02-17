import type { SiteConfig } from "../utils/siteConfig";

interface ToolsProps {
  config: SiteConfig['tools'];
}

const colorClasses = {
  blue: 'bg-blue-500 hover:bg-blue-600',
  green: 'bg-green-500 hover:bg-green-600',
  purple: 'bg-purple-500 hover:bg-purple-600',
};

export default function Tools({ config }: ToolsProps) {
  return (
    <section id="herramientas" className="section bg-mesh">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="font-semibold">{config.title}</span>
          </div>
          <h2 className="mb-6">
            Accede a <span className="text-gradient">Tus Herramientas</span>
          </h2>
          <p className="text-xl text-gray-600">{config.subtitle}</p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {config.items.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="group card hover:scale-105 cursor-pointer bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >              
              <div className="pt-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-dark mb-2">¿Necesitas ayuda?</h3>
                <p className="text-gray-600">
                  Nuestro equipo de soporte está disponible de lunes a sábado para ayudarte con cualquier consulta o problema técnico.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a href="#contacto" className="btn btn-primary">
                  Contactar Soporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
