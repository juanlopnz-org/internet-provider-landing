import { useState, useEffect } from 'react';
import { siteConfig as defaultConfig, type SiteConfig } from '../utils/siteConfig';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Plans from './Plans';
import Tools from './Tools';
import Contact from './Contact';
import Footer from './Footer';

export default function LandingPage() {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);

  return (
    <div className="min-h-screen">
      <Navbar siteName={config.siteName} sections={config.sections} />

      {config.sections.hero && (
        <Hero config={config.hero} theme={config.theme} contact={config.contact} />
      )}

      {config.sections.about && (
        <About config={config.about} />
      )}

      {config.sections.services && (
        <Services config={config.services} />
      )}

      {config.sections.plans && (
        <Plans config={config.plans} />
      )}

      {config.sections.tools && (
        <Tools config={config.tools} />
      )}

      {config.sections.contact && (
        <Contact contact={config.contact} />
      )}

      <Footer siteName={config.siteName} contact={config.contact} />

    </div>
  );
}
