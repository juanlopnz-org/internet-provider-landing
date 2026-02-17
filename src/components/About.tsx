import type { SiteConfig } from '../utils/siteConfig';

interface AboutProps {
  config: SiteConfig['about'];
}

const iconMap: Record<string, JSX.Element> = {
  users: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  award: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  zap: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default function About({ config }: AboutProps) {
  return (
    <section id="nosotros" className="section section-alt">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-6">
            Sobre <span className="text-gradient">{config.title.split(' ')[1]}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            {config.content.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border-l-4 border-primary mt-8">
              <h3 className="text-2xl font-bold text-dark mb-4">{config.specialty.title}</h3>
              <p className="text-lg text-gray-700">{config.specialty.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {config.features.map((feature, index) => (
              <div
                key={index}
                className="flex w-[calc(50%-12px)] justify-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card hover:border-primary hover:border-opacity-20 border-2 border-transparent w-full max-w-sm">
                  <div className="flex flex-col">
                    <div className="icon-container bg-gradient-to-br from-primary to-secondary text-white mb-4 mx-auto">
                      {iconMap[feature.icon]}
                    </div>

                    <h4 className="text-xl font-bold text-dark mb-2 text-center">
                      {feature.title}
                    </h4>

                    <p className="text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="https://www.speedtest.net/es" target='_blank' rel="noopener noreferrer" className="btn btn-primary text-lg inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Probar Velocidad de Internet
          </a>
        </div>
      </div>
    </section>
  );
}
