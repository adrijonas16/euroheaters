export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Spec {
  icon: string
  label: string
  value: string
}

export interface Series {
  image: string
  name: string
  description: string
  tags: string[]
}

export const FEATURES: Feature[] = [
  {
    icon: 'bolt',
    title: 'Sintonización Self Control',
    description:
      'Software de sintonización permanente de alto rendimiento con componentes electrónicos de última generación para un control preciso.',
  },
  {
    icon: 'shield',
    title: 'Diagnóstico Preventivo',
    description:
      'Sistema integrado de diagnóstico de molde que detecta posición incorrecta entre calentador y termocouple, evitando daños costosos.',
  },
  {
    icon: 'wrench',
    title: 'Diseño Modular',
    description:
      'Completamente modular para un fácil mantenimiento. Permite configurar desde 2 hasta 256 zonas según sus necesidades.',
  },
  {
    icon: 'clock',
    title: 'Arranque Suave (Soft Start)',
    description:
      'Función de arranque suave que protege los componentes del molde durante el encendido, extendiendo su vida útil.',
  },
  {
    icon: 'sync',
    title: 'Sincronización de Zonas',
    description:
      'Sincronización automática de todas las zonas de temperatura para una distribución uniforme del calor en todo el molde.',
  },
  {
    icon: 'monitor',
    title: 'Pantalla Táctil',
    description:
      'Interfaz touch screen amigable para una operación intuitiva con visualización en tiempo real de todos los parámetros.',
  },
]

export const SPECS: Spec[] = [
  { icon: 'bolt', label: 'Potencia de salida', value: '15A / 30A (opcional)' },
  { icon: 'grid', label: 'Rango de zonas', value: '2 a 256 zonas disponibles' },
  { icon: 'shield', label: 'Protección', value: 'IP65 — Cortocircuito y sobrecarga' },
  { icon: 'thermometer', label: 'Control térmico', value: 'Disipación eficaz con temperatura baja interior' },
  { icon: 'chart', label: 'Tipo de salida', value: 'Ángulo de fase disparado con entrega suave' },
  { icon: 'server', label: 'Configuración', value: 'Módulos individuales o armarios rack 19"' },
]

export const SERIES: Series[] = [
  {
    image: '/images/ctrl4.jpg',
    name: 'Serie 5',
    description:
      'Módulos individuales o armarios configurables. Ideal para aplicaciones que requieren flexibilidad y escalabilidad.',
    tags: ['2 a 48 zonas', 'Modular', '15A'],
  },
  {
    image: '/images/serie-mundial.jpg',
    name: 'Serie Mundial',
    description:
      'Módulos con certificación bajo normas internacionales. Diseñados para operaciones globales con los más altos estándares.',
    tags: ['Normas Internacionales', 'Certificado'],
  },
  {
    image: '/images/ctrl6.jpg',
    name: 'Serie 8',
    description:
      'Módulos compactos dobles para optimizar espacio sin sacrificar potencia. Perfecto para instalaciones de gran escala.',
    tags: ['2 a 48 zonas', 'Compacto', '30A'],
  },
]

export interface Benefit {
  icon: string
  title: string
  description: string
}

export const BENEFITS: Benefit[] = [
  {
    icon: 'check',
    title: 'Operación continua ante fallas',
    description:
      'Compensación automática ante falla de termocupla con cambio a funcionamiento manual, manteniendo su molde en operación.',
  },
  {
    icon: 'check',
    title: 'Precio competitivo del mercado',
    description:
      'Ofrecemos el mejor precio del mercado con entrega inmediata, garantía completa y asesoramiento técnico incluido.',
  },
  {
    icon: 'check',
    title: 'Reducción de tiempos de paro',
    description:
      'El diagnóstico preventivo y el diseño modular permiten identificar y resolver problemas sin detener la producción.',
  },
  {
    icon: 'check',
    title: 'Aplicación universal en colada caliente',
    description:
      'Compatible con cualquier sistema de inyección por colada caliente para moldes plásticos, independientemente del fabricante.',
  },
]

export const NAV_LINKS = [
  { href: '#producto', label: 'Producto' },
  { href: '#caracteristicas', label: 'Características' },
  { href: '#especificaciones', label: 'Especificaciones' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#series', label: 'Series' },
  { href: '#contacto', label: 'Contacto' },
]

export const CONTACT_INFO = {
  email: 'ventas@euroheaters.mx',
  phone: '(0052) 5557-757515',
  address: 'Paseo de la Reforma 483, CDMX',
}
