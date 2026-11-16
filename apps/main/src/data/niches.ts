/**
 * C-Emprende504 — Estructura Centralizada de Categorías de Nicho
 * Contiene la definición tipada de los 10 nichos potenciales identificados durante la planificación.
 * NOTA: Representan oportunidades preliminares en preparación, NO tiendas ni productos comerciales activos.
 */

export interface NicheCategory {
  id: string;
  orderNumber: string;
  name: string;
  shortDescription: string;
  status: 'planning' | 'preparation';
  statusLabel: string;
  iconSvg: string;
}

export const NICHES_DATA: NicheCategory[] = [
  {
    id: 'finanzas',
    orderNumber: '01',
    name: 'Finanzas',
    shortDescription:
      'Gestión financiera personal, estrategias de ahorro, tributación consciente y educación patrimonial.',
    status: 'planning',
    statusLabel: 'En Planificación',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  },
  {
    id: 'salud-bienestar',
    orderNumber: '02',
    name: 'Salud y Bienestar',
    shortDescription:
      'Nutrición equilibrada, actividad física adaptada, bienestar integral y manejo del estrés cotidiano.',
    status: 'planning',
    statusLabel: 'En Planificación',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  },
  {
    id: 'belleza-estetica',
    orderNumber: '03',
    name: 'Belleza y Estética',
    shortDescription:
      'Técnicas de cuidado facial, barbería, estilismo profesional y cosmetología aplicada.',
    status: 'planning',
    statusLabel: 'En Planificación',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  },
  {
    id: 'mascotas',
    orderNumber: '04',
    name: 'Mascotas',
    shortDescription:
      'Adiestramiento canino respetuoso, nutrición animal especializada y bienestar de animales de compañía.',
    status: 'planning',
    statusLabel: 'En Planificación',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="14" r="4"/><circle cx="6.5" cy="10.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8" cy="5.5" r="2"/><circle cx="16" cy="5.5" r="2"/></svg>`,
  },
  {
    id: 'marketing-digital',
    orderNumber: '05',
    name: 'Marketing Digital',
    shortDescription:
      'Estrategias de comunicación digital, pauta publicitaria, copywriting y posicionamiento orgánico.',
    status: 'preparation',
    statusLabel: 'En Preparación',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  },
  {
    id: 'ia',
    orderNumber: '06',
    name: 'Inteligencia Artificial',
    shortDescription:
      'Adopción de herramientas de IA generativa, optimización de flujos productivos y automatización.',
    status: 'preparation',
    statusLabel: 'En Preparación',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9z"/><path d="M15 2v1"/><path d="M9 2v1"/><path d="M2 15h1"/><path d="M2 9h1"/><path d="M21 15h1"/><path d="M21 9h1"/><path d="M15 21v1"/><path d="M9 21v1"/></svg>`,
  },
  {
    id: 'desarrollo-personal',
    orderNumber: '07',
    name: 'Desarrollo Personal',
    shortDescription:
      'Productividad personal, gestión del tiempo, oratoria efectiva y hábitos para el crecimiento individual.',
    status: 'planning',
    statusLabel: 'En Planificación',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  },
  {
    id: 'negocios-online',
    orderNumber: '08',
    name: 'Negocios Online',
    shortDescription:
      'Modelos de comercio digital, servicios remotos, creación de agencias y emprendimientos independientes.',
    status: 'planning',
    statusLabel: 'En Planificación',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  },
  {
    id: 'relaciones',
    orderNumber: '09',
    name: 'Relaciones',
    shortDescription:
      'Habilidades de comunicación asertiva, fortalecimiento de vínculos familiares y dinámicas interpersonales.',
    status: 'planning',
    statusLabel: 'En Planificación',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    id: 'espiritualidad',
    orderNumber: '10',
    name: 'Espiritualidad',
    shortDescription:
      'Prácticas de atención plena (mindfulness), meditación reflexiva y balance interior consciente.',
    status: 'planning',
    statusLabel: 'En Planificación',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  },
];
