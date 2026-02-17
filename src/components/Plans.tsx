import { redirectToWhatsApp } from '../utils/methods';
import type { SiteConfig } from '../utils/siteConfig';

interface PlansProps {
  config: SiteConfig['plans'];
}

export default function Plans({ config }: PlansProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleRedirectToWhatsApp = (planName: string) => {
    redirectToWhatsApp(
      undefined,
      `Hola, estoy interesado en el plan "${planName}". ¿Podrían brindarme más información?`
    );
  }

  return (
    <section id="planes" className="section section-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">
            <span className="text-gradient">{config.title}</span>
          </h2>
          <p className="text-xl text-gray-600">{config.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{config.ctaSection.title}</h3>
              <p className="text-lg md:text-xl mb-8 opacity-90">{config.ctaSection.description}</p>
              <a href={config.ctaSection.link} target='_blank' rel="noopener noreferrer" className="btn bg-white text-primary hover:bg-gray-100 text-lg">
                {config.ctaSection.buttonText}
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {config.items.map((plan, index) => (
            <div
              key={index}
              className={`card relative ${plan.featured ? 'card-featured ring-4 ring-primary ring-opacity-20' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="badge bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 shadow-xl border-2 border-white">
                    ⭐ Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-3xl font-bold text-gradient">{plan.speed}</span>
                </div>
              </div>

              <div className="text-center mb-6 pb-6 border-b border-gray-100">
                <div className="text-4xl font-bold text-dark mb-1">{formatPrice(plan.price)}</div>
                <div className="text-sm text-gray-500">{plan.period}</div>
                <p className="text-sm text-gray-600 mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan?.features?.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full btn ${plan.featured ? 'btn-primary' : 'btn-secondary'
                  }`}
                onClick={
                  () => handleRedirectToWhatsApp(plan.name)
                }
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
