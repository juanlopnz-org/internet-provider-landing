import { whatsAppNumber } from "./constants";
import { spacingWhatsAppNumber } from "./formatters";

export interface SiteConfig {
  siteName: string;
  tagline: string;
  description: string;

  contact: {
    whatsapp: string[];
    email: string;
    address: string;
    location: string;
    schedule: {
      weekdays: string;
      weekend: string;
    };
  };

  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    darkColor: string;
    lightColor: string;
    fontDisplay: string;
    fontBody: string;
  };

  sections: {
    hero: boolean;
    about: boolean;
    services: boolean;
    plans: boolean;
    tools: boolean;
    contact: boolean;
  };

  hero: {
    title: string;
    subtitle: string;
    ctaButtons: {
      primary: { text: string; link: string; };
      secondary: { text: string; link: string; };
      tertiary: { text: string; link: string; };
    };
    stats: {
      label: string;
      value: string;
      description: string;
    }[];
  };

  about: {
    title: string;
    content: string[];
    specialty: {
      title: string;
      description: string;
    };
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
    stats: {
      label: string;
      value: string;
    }[];
  };

  services: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
      featured?: boolean;
    }[];
  };

  plans: {
    title: string;
    subtitle: string;
    ctaSection: {
      title: string;
      description: string;
      buttonText: string;
      link?: string;
    };
    items: {
      name: string;
      speed: string;
      price: number;
      period: string;
      description?: string;
      features?: string[];
      featured?: boolean;
      buttonText: string;
    }[];
  };

  tools: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      description: string;
      link: string;
      color: 'blue' | 'green' | 'purple';
    }[];
  };
}

export const siteConfig: SiteConfig = {
  siteName: "GABANG COMUNICACIONES S.A.S",
  tagline: "Internet de Alta Velocidad Para Zonas de Difícil Acceso",
  description: "Líderes en telecomunicaciones rurales. Conectamos tu hogar o empresa con Internet simétrico de alta calidad donde otros no llegan",

  contact: {
    whatsapp: [`+57 ${spacingWhatsAppNumber(whatsAppNumber)}`],
    email: "gabangcomunicaciones@gmail.com",
    address: "Calle 7a # 3a-61",
    location: "El Placer (El Cerrito - Valle)",
    schedule: {
      weekdays: "8:00 AM - 12:00 PM, 2:00 PM - 6:00 PM",
      weekend: "Cerrado"
    }
  },

  theme: {
    primaryColor: "#1E6EBE",
    secondaryColor: "#143C8C",
    accentColor: "#FAC814",
    darkColor: "#0F0F0F",
    lightColor: "#F8FAFC",
    fontDisplay: "'Outfit', sans-serif",
    fontBody: "'Inter', sans-serif"
  },

  sections: {
    hero: true,
    about: true,
    services: true,
    plans: true,
    tools: true,
    contact: true
  },

  hero: {
    title: "Internet de Alta Velocidad",
    subtitle: "Conectividad sin límites",
    ctaButtons: {
      primary: { text: "Solicitar Instalación", link: "https://clientes.portalinternet.app/solicitar-instalacion/9811f55b-ecef-4b9c-82a7-6b7e0c96102f/" },
      secondary: { text: "Más Información", link: "#contacto" },
      tertiary: { text: "WhatsApp", link: `https://wa.me/57${whatsAppNumber}` }
    },
    stats: [
      // {
      //   label: "100%",
      //   value: "Internet Simétrico",
      //   description: "Velocidad garantizada de subida y bajada"
      // },
      {
        label: "500+",
        value: "Clientes Conectados",
        description: "Familias y empresas satisfechas"
      },
      {
        label: "+8",
        value: "Años de Experiencia",
        description: "En telecomunicaciones rurales"
      }
    ]
  },

  about: {
    title: "Sobre Nosotros",
    content: [
      "GABANG COMUNICACIONES S.A.S es una empresa joven ubicada en El Placer – El Cerrito (Valle del Cauca), dedicada a la prestación de servicios integrales de telecomunicaciones e informática. Nacimos con el propósito de llevar servicios de Internet a zonas de difícil acceso, donde no existe cobertura tradicional.",
      "Contamos con infraestructura en Candelaria, Palmira, El Cerrito, El Placer, El Castillo, La Pampa y Boyacá. Además, ofrecemos instalación de cámaras de seguridad para hogares, comercios y empresas, con acceso remoto desde PC o smartphone."
    ],
    specialty: {
      title: "Nuestra Especialidad",
      description: "Brindamos soluciones de conectividad a zonas rurales y de difícil acceso, llevando Internet estable y de alta calidad donde los grandes operadores no tienen cobertura."
    },
    features: [
      // {
      //   icon: "users",
      //   title: "Equipo Experto",
      //   description: "Personal altamente calificado"
      // },
      {
        icon: "award",
        title: "Calidad",
        description: "Servicios certificados y estables"
      },
      {
        icon: "zap",
        title: "Tecnología",
        description: "Equipos de última generación"
      },
      {
        icon: "shield",
        title: "Confianza",
        description: "Respaldo garantizado permanente"
      }
    ],
    stats: [
      {
        label: "500+",
        value: "Clientes Satisfechos"
      },
      // {
      //   label: "99.9%",
      //   value: "Uptime Garantizado"
      // }
    ]
  },

  services: {
    title: "Nuestros Servicios",
    subtitle: "Ofrecemos soluciones completas en telecomunicaciones para garantizar una conectividad confiable y eficiente",
    items: [
      {
        icon: "home",
        title: "Internet Residencial",
        description: "Velocidades desde 30 hasta 100 Mbps"
      },
      {
        icon: "building",
        title: "Internet Empresarial",
        description: "Ancho de banda dedicado para empresas rurales"
      },
      {
        icon: "camera",
        title: "Cámaras de Seguridad",
        description: "Videovigilancia con acceso remoto"
      },
      {
        icon: "radio",
        title: "Radioenlaces",
        description: "Diseño e implementación en zonas difíciles"
      },
      {
        icon: "headphones",
        title: "Soporte Técnico",
        description: "Soporte técnico de lunes a sábado"
      }
    ]
  },

  plans: {
    title: "Planes y Precios",
    subtitle: "Elige el plan que mejor se adapte a tus necesidades de conectividad",
    ctaSection: {
      title: "¿Necesitas un servicio personalizado?",
      description: "Nuestro equipo de expertos puede diseñar una solución específica para tus requerimientos",
      buttonText: "Solicitar Cotización",
      link: `https://wa.me/57${whatsAppNumber}`
    },
    items: [
      {
        name: "Hogar Básico",
        speed: "30 Mbps",
        price: 40000,
        period: "por mes",
        description: "Perfecto para navegación y streaming",
        features: [
          "Velocidad simétrica: 30 Mbps",
          "Sin límite de datos",
          "Soporte técnico básico",
          "Múltiples dispositivos"
        ],
        buttonText: "Consultar Disponibilidad"
      },
      {
        name: "Estándar",
        speed: "50 Mbps",
        price: 56000,
        period: "por mes",
        description: "Perfecto para familias y trabajo remoto",
        features: [
          "Velocidad simétrica: 50 Mbps",
          "Sin límite de datos",
          "Soporte técnico L-S",
          "Múltiples dispositivos"
        ],
        featured: true,
        buttonText: "Consultar Disponibilidad"
      },
      {
        name: "Empresarial",
        speed: "100 Mbps",
        price: 65000,
        period: "por mes",
        description: "Para empresas y usuarios exigentes",
        features: [
          "Velocidad simétrica: 100 Mbps",
          "Sin límite de datos",
          "Soporte técnico prioritario",
          "Ideal para videoconferencias"
        ],
        buttonText: "Consultar Disponibilidad"
      },
      // {
      //   name: "Ultra Velocidad",
      //   speed: "200 Mbps",
      //   price: 80000,
      //   period: "por mes",
      //   description: "Máxima velocidad para uso intensivo",
      //   features: [
      //     "Velocidad simétrica: 200 Mbps",
      //     "Subida y bajada iguales",
      //     "Sin límite de datos",
      //     "Soporte técnico prioritario",
      //     "Streaming 4K sin interrupciones"
      //   ],
      //   buttonText: "Consultar Disponibilidad"
      // }
    ]
  },

  tools: {
    title: "Herramientas para Clientes",
    subtitle: "Accede a nuestras herramientas online para gestionar tu servicio",
    items: [
      {
        name: "Portal del Cliente",
        description: "Gestiona tu cuenta, consulta facturas y realiza pagos online",
        link: "https://clientes.portalinternet.app/accounts/login/?next=/panel/clientes/",
        color: "blue"
      },
      {
        name: "Consultar Saldo",
        description: "Verifica el estado de tu cuenta y próximos pagos",
        link: "https://clientes.portalinternet.app/saldo/gabang-comunicacioes/",
        color: "green"
      },
      {
        name: "Test de Velocidad",
        description: "Mide la velocidad real de tu conexión a Internet",
        link: "https://www.speedtest.net/es",
        color: "purple"
      },
      // {
      //   name: "Consultar Planes Empresariales",
      //   description: "Descubre nuestras soluciones corporativas personalizadas",
      //   link: "#planes-empresariales",
      //   color: "blue"
      // }
    ]
  }
};
