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

export interface Benefit {
  icon: string
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    icon: 'bolt',
    title: 'Sintonización Self Control',
    description:
      'Software de sintonización permanente de alto rendimiento. Autoajuste con salida de ángulo de fase disparado para una entrega de potencia suave y exacta.',
  },
  {
    icon: 'shield',
    title: 'Compensación ante Falla',
    description:
      'Compensación automática ante falla de termocupla con cambio a funcionamiento manual, usando la potencia promedio histórica para no detener la producción.',
  },
  {
    icon: 'wrench',
    title: 'Diseño 100% Modular',
    description:
      'Módulos intercambiables en formato normalizado de 48 x 96mm para un fácil mantenimiento. Configuraciones de 2 hasta 256 zonas.',
  },
  {
    icon: 'clock',
    title: 'Arranque Suave (Soft Start)',
    description:
      'Función de soft-start automático que protege los calentadores del molde durante el encendido, extendiendo su vida útil significativamente.',
  },
  {
    icon: 'sync',
    title: 'Sincronización de Zonas',
    description:
      'Sincronización automática de todas las zonas con indicación visual simultánea de temperatura deseada y real en cada módulo.',
  },
  {
    icon: 'monitor',
    title: 'Pantalla Táctil y Amperímetro',
    description:
      'Interfaz touch screen con visualización en tiempo real. Amperímetro integrado y control del porcentaje de potencia entregada por zona.',
  },
]

export const SPECS: Spec[] = [
  { icon: 'bolt', label: 'Potencia máxima por zona', value: '15A / 3,600W (30A opcional)' },
  { icon: 'grid', label: 'Zonas disponibles', value: '1, 4, 5, 6 zonas (hasta 256 bajo pedido)' },
  { icon: 'thermometer', label: 'Voltaje de operación', value: '85–260 VAC, 50/60 Hz' },
  { icon: 'shield', label: 'Nivel de protección', value: 'IP65 — Cortocircuito y sobrecarga' },
  { icon: 'server', label: 'Gabinete', value: 'Rack de aluminio normalizado de 19"' },
  { icon: 'chart', label: 'Formato del módulo', value: '48 x 96 mm normalizado' },
]

export const SERIES: Series[] = [
  {
    image: '/images/ctrl4.jpg',
    name: 'Serie 5',
    description:
      'Módulos individuales o armarios de 2 a 48 zonas. Ideal para aplicaciones que requieren flexibilidad con potencia de 15A por zona.',
    tags: ['2 a 48 zonas', 'Modular', '15A / 3,600W'],
  },
  {
    image: '/images/serie-mundial.jpg',
    name: 'Serie Mundial',
    description:
      'Módulos con certificación bajo normas internacionales. Diseñados para operaciones globales, compatibles con voltaje 85–260 VAC.',
    tags: ['Normas Internacionales', 'Certificado', '85–260 VAC'],
  },
  {
    image: '/images/ctrl6.jpg',
    name: 'Serie 8',
    description:
      'Módulos compactos dobles de 2 a 48 zonas con opción de 30A. Perfecto para instalaciones de gran escala que requieren alta potencia.',
    tags: ['2 a 48 zonas', 'Compacto', '30A / 7,200W'],
  },
]

export const BENEFITS: Benefit[] = [
  {
    icon: 'check',
    title: 'Operación continua ante fallas',
    description:
      'Compensación automática ante falla de termocupla con cambio a funcionamiento manual usando potencia promedio histórica. Su molde no se detiene.',
  },
  {
    icon: 'check',
    title: 'Entrega inmediata y garantía',
    description:
      'Stock disponible para entrega inmediata en configuraciones estándar. Garantía completa y asesoramiento técnico incluido en cada compra.',
  },
  {
    icon: 'check',
    title: 'Diagnóstico preventivo de molde',
    description:
      'Detección automática de posición incorrecta entre calentador y termocouple. Protección electrónica contra cortocircuito y sobrecarga.',
  },
  {
    icon: 'check',
    title: 'Universal para colada caliente',
    description:
      'Compatible con cualquier sistema de inyección por colada caliente para moldes plásticos, independientemente del fabricante del molde.',
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
  address: 'Paseo de la Reforma 483, Of. 1450, CDMX, CP. 06500',
}
