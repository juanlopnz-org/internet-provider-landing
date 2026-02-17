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
import AdminPanel from './AdminPanel';

export default function LandingPage() {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);

  // Aplicar tema dinámicamente
  // useEffect(() => {
  //   const root = document.documentElement;
  //   root.style.setProperty('--color-primary', config.theme.primaryColor);
  //   root.style.setProperty('--color-secondary', config.theme.secondaryColor);
  //   root.style.setProperty('--color-accent', config.theme.accentColor);
  //   root.style.setProperty('--color-dark', config.theme.darkColor);
  //   root.style.setProperty('--color-light', config.theme.lightColor);
  //   root.style.setProperty('--font-display', config.theme.fontDisplay);
  //   root.style.setProperty('--font-body', config.theme.fontBody);
  // }, [config.theme]);

  // Cargar configuración guardada del localStorage
  // useEffect(() => {
  //   const savedConfig = localStorage.getItem('landingConfig');
  //   if (savedConfig) {
  //     try {
  //       const parsed = JSON.parse(savedConfig);
  //       setConfig({ ...defaultConfig, ...parsed });
  //     } catch (error) {
  //       console.error('Error loading saved config:', error);
  //     }
  //   }
  // }, []);

  // const handleConfigSave = (newConfig: Partial<SiteConfig>) => {
  //   const updatedConfig = { ...config, ...newConfig };
  //   setConfig(updatedConfig);
  //   localStorage.setItem('landingConfig', JSON.stringify(updatedConfig));
  // };

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

      {/* <AdminPanel config={config} onSave={handleConfigSave} /> */}
    </div>
  );
}
