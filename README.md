# C-Emprende504 — Plataforma Central y Monorepo Multi-Sitio

Bienvenido al repositorio central del proyecto **C-Emprende504**, una plataforma web moderna, escalable y de alto rendimiento diseñada como un **monorepo con npm workspaces y Astro**.

La plataforma permite gobernar desde un único repositorio un **sitio principal** (`apps/main`) con un diseño en modo oscuro sobrio y profesional con acentos naranjas, y, progresivamente, **micrositios verticales independientes** (`apps/[nicho]`) orientados a la promoción y comercialización ética de productos digitales educativos del programa de afiliados de **Hotmart**.

> [!NOTE]
> **Identificador Interno:** `C-Emprende504` es el nombre interno del proyecto técnico. La marca comercial pública, dominio definitivo y eslóganes se definirán y aprobarán en fases posteriores.

---

## 1. Visión y Modelo de Negocio

- **Sitio Principal (`apps/main`):** Portal central de descubrimiento, catálogo de categorías y presentación del ecosistema.
- **Micrositios Verticales (Futuros):** Sitios web independientes para nichos que demuestren validación comercial y disponibilidad de infoproductos de alta calidad.
- **Subdominios y Dominios Propios:** Cada aplicación en `apps/` podrá contar con su propio subdominio o dominio personalizado desplegado como proyecto independiente en **Cloudflare Pages**.
- **Coste de Infraestructura $0.00/mes:** Arquitectura Jamstack pura con generación estática (SSG) inmutable y distribución Anycast en el Edge.

---

## 2. Estado Actual del Proyecto (Sprint 3.1 Completado)

> [!TIP]
> **Fase Actual: Sprint 3.1 — Consistencia Comercial & Revisión Visual**  
> Se perfeccionó la consistencia comercial del portal principal en `apps/main/`. Las **10 categorías de nichos potenciales** se homologaron uniformemente al estado **"En Planificación"** (`planning`), garantizando que ninguna vertical se exhiba erróneamente como seleccionada o activa antes de su validación formal. Se eliminaron métricas técnicas o porcentajes no respaldados del hero principal, consolidando un mensaje transparente y profesional alineado a la fase de estudio de mercado.

- **Estructura del Proyecto:** Monorepo con npm workspaces (`apps/*`, `packages/*`).
- **Diseño Visual:** Dark Theme accesible (WCAG 2.1 AA) con tokens CSS configurables (#0B0B0B, #141414, #FF5A00).
- **Catálogo de Nichos:** 10 categorías centralizadas en `src/data/niches.ts` con estado unificado "En Planificación" (sin nicho piloto preseleccionado).
- **Hero & Mensajería:** Mensajes orientados a la arquitectura del portal, sin vanity stats ni afirmaciones de ventas operando.
- **Diagnósticos de Código:** `npm run check` pasando con 0 errores, 0 advertencias y 0 hints.
- **Compilación Estática:** `npm run build` genera exitosamente 5 páginas estáticas en `apps/main/dist/`.

---

## 3. Puesta en Marcha Local

Para ejecutar y probar visualmente el portal en el entorno local:

```bash
# 1. Instalar dependencias del monorepo
npm install

# 2. Iniciar el servidor local de desarrollo
npm run dev
```

El servidor local quedará disponible en:  
👉 **`http://localhost:4321/`**

---

## 4. Índice de Documentación Técnica

La documentación del proyecto sigue estándares de arquitectura empresarial:

1. 📄 **[Arquitectura de Software (`docs/ARCHITECTURE.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/ARCHITECTURE.md)**
   - Visión del sistema Jamstack y compilación estática (SSG) con Astro.
   - Sistema de diseño visual en modo oscuro y tokens CSS (`variables.css`).
   - Arquitectura de componentes UI, layout y esquema tipado de nichos.
   - Lineamientos de despliegue independiente en Cloudflare Pages.

2. 📄 **[Guía de Desarrollo y Operaciones (`docs/DEVELOPMENT_GUIDE.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/DEVELOPMENT_GUIDE.md)**
   - Comandos de desarrollo centralizados en la raíz.
   - Procedimiento de pruebas automatizadas y comprobaciones visuales responsive.
   - Procedimiento técnico para añadir un nuevo micrositio y activar nichos.
   - Flujo de trabajo en Git con Conventional Commits.

3. 📄 **[Estrategia Multi-Sitio y Escalabilidad (`docs/MULTI_SITE_STRATEGY.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/MULTI_SITE_STRATEGY.md)**
   - Justificación del modelo monorepo y funcionamiento de npm workspaces.
   - Catálogo detallado de las 10 categorías de nichos potenciales.
   - Criterios de validación previa requeridos antes de abrir un micrositio.
   - Políticas de almacenamiento multimedia y exclusión de videos pesados.

4. 📄 **[Documento de Descubrimiento del Proyecto (`docs/PROJECT_DISCOVERY.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/PROJECT_DISCOVERY.md)**
   - Visión de negocio, público objetivo y requisitos funcionales y no funcionales.

5. 📄 **[Evaluación Técnica Inicial y Factibilidad (`docs/INITIAL_TECHNICAL_ASSESSMENT.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/INITIAL_TECHNICAL_ASSESSMENT.md)**
   - Resultados de inspecciones de entorno y factibilidad de coste cero.

---

## 5. Comandos de Desarrollo (Monorepo)

Ejecutables desde la raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala y enlaza las dependencias de todos los workspaces del monorepo. |
| `npm run dev` | Inicia el servidor de desarrollo local del sitio principal en `http://localhost:4321/`. |
| `npm run build` | Compila el sitio principal en HTML/CSS estático dentro de `apps/main/dist/`. |
| `npm run preview` | Previsualiza localmente el artefacto estático de `apps/main/dist/`. |
| `npm run check` | Ejecuta diagnósticos de Astro, TypeScript y esquemas Zod en `apps/main`. |

---

## 6. Estructura de Directorios

```text
C-Emprende504/
├── apps/                                 # Aplicaciones independientes
│   └── main/                             # Sitio principal (@c-emprende504/main)
│       ├── public/                       # Activos estáticos directos (favicon.svg, media/)
│       ├── src/                          # Código fuente Astro
│       │   ├── assets/                   # Activos optimizados (images/, icons/)
│       │   ├── components/               # Componentes modulares
│       │   │   ├── layout/               # Header.astro, Footer.astro
│       │   │   ├── ui/                   # Button.astro, Badge.astro, SectionHeading.astro
│       │   │   ├── niches/               # NicheGrid.astro, NicheCard.astro
│       │   │   └── home/                 # HeroSection.astro, PlatformOverview.astro
│       │   ├── content/                  # Colección tipada products (0 productos)
│       │   ├── data/                     # Fuente de verdad tipada (niches.ts)
│       │   ├── layouts/                  # BaseLayout.astro
│       │   ├── pages/                    # Rutas estáticas (index, about, contact, privacy, affiliate-disclosure)
│       │   ├── styles/                   # global.css y variables.css (Dark Theme)
│       │   └── content.config.ts         # Esquema Zod (affiliateUrl opcional en draft)
│       ├── astro.config.mjs              # Configuración SSG de Astro
│       ├── package.json                  # Manifiesto workspace @c-emprende504/main
│       └── tsconfig.json                 # TypeScript estricto
├── packages/                             # Bibliotecas compartidas (preparado YAGNI)
│   └── README.md                         # Lineamientos de abstracción justificada
├── docs/                                 # Documentación técnica completa
├── package.json                          # Manifiesto raíz de npm workspaces
├── package-lock.json                     # Lockfile sincronizado del monorepo
└── .gitignore                            # Exclusiones de Git optimizadas para monorepo
```

---

## 7. Gobernanza y Reglas de Desarrollo

El equipo se adhiere estrictamente a las diez reglas fundamentales de ingeniería y negocio:

1. **Decisiones Arquitectónicas:** No se toman decisiones mayores sin presentar alternativas y su respectiva justificación técnica.
2. **Sin Backend Innecesario:** No asumir que el proyecto requiere un backend o base de datos propia; toda la gestión transaccional se apoya en Hotmart.
3. **Prioridad en la Eficiencia:** Priorizar la simplicidad, mantenibilidad, velocidad de carga y escalabilidad.
4. **Cero Gastos Recurrentes:** Evitar dependencias superfluas y servicios de pago en la etapa inicial.
5. **Componentización Limpia:** Utilizar componentes reutilizables y código modular.
6. **Desacoplamiento de Contenido:** Mantener la funcionalidad de marketing independiente del contenido específico de los productos.
7. **Diseño Mobile-First:** Diseñar y optimizar prioritariamente para pantallas de teléfonos inteligentes y redes móviles.
8. **Cumplimiento Legal y Publicitario:** Integrar directrices de SEO, accesibilidad, privacidad (RGPD) y políticas de anuncios (Meta/Google Ads) desde la arquitectura base.
9. **Veracidad de la Información:** Nunca inventar testimonios, precios, beneficios ni atributos que no hayan sido provistos por el productor en Hotmart.
10. **Supervisión de Proyecto:** Tratar a **ChatGPT** como el Project Manager responsable de validar y aprobar cada fase del ciclo de vida.

---

cat <<'EOF' >> README.md

## Estado de publicación

- Repositorio: GitHub.
- Arquitectura: Astro con generación estática (SSG).
- Aplicación principal: `apps/main/`.
- Directorio de publicación: `apps/main/dist/`.
- Plataforma de despliegue prevista: Cloudflare Pages.
- Estado: configuración de despliegue pendiente de validación.
EOF



*C-Emprende504 — Arquitectura de Marketing de Afiliados de Alto Rendimiento.*
