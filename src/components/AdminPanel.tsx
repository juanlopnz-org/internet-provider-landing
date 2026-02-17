import { useState } from 'react';
import type { SiteConfig } from '../utils/siteConfig';

interface AdminPanelProps {
  config: SiteConfig;
  onSave: (newConfig: Partial<SiteConfig>) => void;
}

export default function AdminPanel({ config, onSave }: AdminPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'theme' | 'sections' | 'content'>('general');
  const [localConfig, setLocalConfig] = useState<SiteConfig>(config);

  const handleSave = () => {
    onSave(localConfig);
    alert('Configuración guardada exitosamente!');
  };

  const handleReset = () => {
    setLocalConfig(config);
    alert('Cambios descartados');
  };

  const updateTheme = (key: keyof SiteConfig['theme'], value: string) => {
    setLocalConfig({
      ...localConfig,
      theme: {
        ...localConfig.theme,
        [key]: value,
      },
    });
  };

  const updateSection = (section: keyof SiteConfig['sections'], value: boolean) => {
    setLocalConfig({
      ...localConfig,
      sections: {
        ...localConfig.sections,
        [section]: value,
      },
    });
  };

  return (
    <>
      {/* Admin Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Abrir panel de administración"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {/* Admin Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-2xl bg-white shadow-2xl overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Panel de Administración
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2">
                {[
                  { id: 'general', label: 'General', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { id: 'theme', label: 'Tema', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
                  { id: 'sections', label: 'Secciones', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
                  { id: 'content', label: 'Contenido', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-white text-purple-600'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                    </svg>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* General Tab */}
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre del Sitio
                    </label>
                    <input
                      type="text"
                      value={localConfig.siteName}
                      onChange={(e) => setLocalConfig({ ...localConfig, siteName: e.target.value })}
                      className="input-custom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Eslogan
                    </label>
                    <input
                      type="text"
                      value={localConfig.tagline}
                      onChange={(e) => setLocalConfig({ ...localConfig, tagline: e.target.value })}
                      className="input-custom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descripción
                    </label>
                    <textarea
                      value={localConfig.description}
                      onChange={(e) => setLocalConfig({ ...localConfig, description: e.target.value })}
                      className="input-custom"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={localConfig.contact.email}
                        onChange={(e) => setLocalConfig({
                          ...localConfig,
                          contact: { ...localConfig.contact, email: e.target.value }
                        })}
                        className="input-custom"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ubicación
                      </label>
                      <input
                        type="text"
                        value={localConfig.contact.location}
                        onChange={(e) => setLocalConfig({
                          ...localConfig,
                          contact: { ...localConfig.contact, location: e.target.value }
                        })}
                        className="input-custom"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Theme Tab */}
              {activeTab === 'theme' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Color Primario
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={localConfig.theme.primaryColor}
                          onChange={(e) => updateTheme('primaryColor', e.target.value)}
                          className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={localConfig.theme.primaryColor}
                          onChange={(e) => updateTheme('primaryColor', e.target.value)}
                          className="input-custom flex-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Color Secundario
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={localConfig.theme.secondaryColor}
                          onChange={(e) => updateTheme('secondaryColor', e.target.value)}
                          className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={localConfig.theme.secondaryColor}
                          onChange={(e) => updateTheme('secondaryColor', e.target.value)}
                          className="input-custom flex-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Color de Acento
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={localConfig.theme.accentColor}
                          onChange={(e) => updateTheme('accentColor', e.target.value)}
                          className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={localConfig.theme.accentColor}
                          onChange={(e) => updateTheme('accentColor', e.target.value)}
                          className="input-custom flex-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Color Oscuro
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={localConfig.theme.darkColor}
                          onChange={(e) => updateTheme('darkColor', e.target.value)}
                          className="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={localConfig.theme.darkColor}
                          onChange={(e) => updateTheme('darkColor', e.target.value)}
                          className="input-custom flex-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4">Vista Previa de Colores</h4>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { label: 'Primario', value: localConfig.theme.primaryColor },
                        { label: 'Secundario', value: localConfig.theme.secondaryColor },
                        { label: 'Acento', value: localConfig.theme.accentColor },
                        { label: 'Oscuro', value: localConfig.theme.darkColor },
                      ].map((color) => (
                        <div key={color.label} className="text-center">
                          <div
                            className="w-full h-20 rounded-xl shadow-md mb-2"
                            style={{ backgroundColor: color.value }}
                          ></div>
                          <div className="text-sm font-medium text-gray-700">{color.label}</div>
                          <div className="text-xs text-gray-500">{color.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Sections Tab */}
              {activeTab === 'sections' && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 mb-6">
                    Activa o desactiva las secciones que deseas mostrar en tu landing page.
                  </p>

                  {Object.entries(localConfig.sections).map(([key, value]) => (
                    <label
                      key={key}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          value ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-400'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {value ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            )}
                          </svg>
                        </div>
                        <span className="font-medium text-gray-900 capitalize">{key}</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => updateSection(key as any, e.target.checked)}
                        className="w-12 h-6 appearance-none bg-gray-300 rounded-full relative cursor-pointer transition-colors checked:bg-green-500 before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:bg-white before:top-0.5 before:left-0.5 before:transition-transform checked:before:translate-x-6"
                      />
                    </label>
                  ))}
                </div>
              )}

              {/* Content Tab */}
              {activeTab === 'content' && (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex gap-3">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Edición de Contenido</h4>
                        <p className="text-sm text-blue-700">
                          Para editar el contenido de cada sección (textos, planes, servicios), edita el archivo
                          <code className="bg-blue-100 px-2 py-0.5 rounded mx-1">src/config/siteConfig.ts</code>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Título Hero</h3>
                    <input
                      type="text"
                      value={localConfig.hero.title}
                      onChange={(e) => setLocalConfig({
                        ...localConfig,
                        hero: { ...localConfig.hero, title: e.target.value }
                      })}
                      className="input-custom"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Subtítulo Hero</h3>
                    <input
                      type="text"
                      value={localConfig.hero.subtitle}
                      onChange={(e) => setLocalConfig({
                        ...localConfig,
                        hero: { ...localConfig.hero, subtitle: e.target.value }
                      })}
                      className="input-custom"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex gap-4">
              <button
                onClick={handleSave}
                className="flex-1 btn btn-primary text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Guardar Cambios
              </button>
              <button
                onClick={handleReset}
                className="btn btn-secondary"
              >
                Descartar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
