# C-Emprende504 — Plataforma Central y Monorepo Multi-Sitio

Bienvenido al repositorio central del proyecto **C-Emprende504**, una plataforma web moderna, escalable y de alto rendimiento diseñada como un **monorepo con npm workspaces y Astro**.

La plataforma permite gobernar desde un único repositorio un **sitio principal** (`apps/main`) y, progresivamente, **micrositios verticales independientes** (`apps/[nicho]`) orientados a la promoción y comercialización ética de productos digitales educativos del programa de afiliados de **Hotmart**.

> [!NOTE]
> **Identificador Interno:** `C-Emprende504` es el nombre interno del proyecto técnico. La marca comercial pública, dominio definitivo y eslóganes se definirán y aprobarán en fases posteriores.

---

## 1. Visión y Modelo de Negocio

- **Sitio Principal (`apps/main`):** Portal central de descubrimiento, catálogo general y presentación institucional.
- **Micrositios Verticales (Futuros):** Sitios web independientes para nichos que demuestren validación comercial y disponibilidad de infoproductos de alta calidad.
- **Subdominios y Dominios Propios:** Cada aplicación en `apps/` podrá contar con su propio subdominio o dominio personalizado desplegado como proyecto independiente en **Cloudflare Pages**.
- **Coste de Infraestructura $0.00/mes:** Arquitectura Jamstack pura con generación estática (SSG) inmutable y distribución Anycast en el Edge.

---

## 2. Estado Actual del Proyecto (Sprint 2 Completado)

> [!TIP]
> **Fase Actual: Sprint 2 — Arquitectura Multi-Sitio y Escalabilidad**  
> Se completó la migración hacia una arquitectura monorepo con npm workspaces. La aplicación principal reside en `apps/main/`, el directorio `packages/` queda preparado para futuras bibliotecas compartidas, y el esquema de productos ahora permite registrar fichas en estado borrador (`draft`) sin enlace de afiliado.

- **Estructura del Proyecto:** Monorepo con npm workspaces (`apps/*`, `packages/*`).
- **Sitio Principal:** Ubicado en `apps/main/` (`@c-emprende504/main`).
- **Historial de Git:** Preservado íntegramente mediante migraciones rastreadas con `git mv`.
- **Diagnósticos de Código:** `npm run check` pasando con 0 errores, 0 advertencias y 0 hints.
- **Compilación Estática:** `npm run build` genera exitosamente 5 páginas estáticas en `apps/main/dist/` en ~2.4s.

---

## 3. Índice de Documentación Técnica

La documentación del proyecto sigue estándares de arquitectura empresarial:

1. 📄 **[Estrategia Multi-Sitio y Escalabilidad (`docs/MULTI_SITE_STRATEGY.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/MULTI_SITE_STRATEGY.md)**
   - Justificación del modelo monorepo y funcionamiento de npm workspaces.
   - Catálogo de las 10 categorías de nichos potenciales identificados.
   - Requisitos de validación previa requeridos antes de abrir un micrositio.
   - Procedimiento para crear nuevos micrositios y preparación para subdominios en Cloudflare Pages.
   - Políticas de almacenamiento multimedia y exclusión de videos pesados.

2. 📄 **[Arquitectura de Software (`docs/ARCHITECTURE.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/ARCHITECTURE.md)**
   - Visión del sistema Jamstack y compilación estática (SSG) con Astro.
   - Arquitectura de componentes, layouts y estilos CSS modulares.
   - Esquema Zod de productos con validación condicional (`draft` vs `published`).
   - Lineamientos de despliegue independiente en Cloudflare Pages.

3. 📄 **[Guía de Desarrollo y Operaciones (`docs/DEVELOPMENT_GUIDE.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/DEVELOPMENT_GUIDE.md)**
   - Comandos de desarrollo centralizados en la raíz.
   - Gestión de dependencias en workspaces de npm.
   - Procedimiento técnico para añadir un nuevo micrositio y registrar productos.
   - Flujo de trabajo en Git y Conventional Commits.

4. 📄 **[Documento de Descubrimiento del Proyecto (`docs/PROJECT_DISCOVERY.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/PROJECT_DISCOVERY.md)**
   - Visión de negocio, público objetivo y requisitos funcionales y no funcionales.
   - Alternativas evaluadas y resoluciones de los sprints.

5. 📄 **[Evaluación Técnica Inicial y Factibilidad (`docs/INITIAL_TECHNICAL_ASSESSMENT.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/INITIAL_TECHNICAL_ASSESSMENT.md)**
   - Resultados de inspecciones de entorno y factibilidad de coste cero.

---

## 4. Comandos de Desarrollo (Monorepo)

Ejecutables desde la raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala y enlaza las dependencias de todos los workspaces del monorepo. |
| `npm run dev` | Inicia el servidor de desarrollo local del sitio principal (`apps/main`). |
| `npm run build` | Compila el sitio principal en HTML/CSS estático dentro de `apps/main/dist/`. |
| `npm run preview` | Previsualiza localmente el artefacto estático de `apps/main/dist/`. |
| `npm run check` | Ejecuta diagnósticos de Astro, TypeScript y esquemas Zod en `apps/main`. |

---

## 5. Estructura de Directorios

```text
C-Emprende504/
├── apps/                                 # Aplicaciones independientes
│   └── main/                             # Sitio principal (@c-emprende504/main)
│       ├── public/                       # Activos estáticos directos
│       │   ├── favicon.svg               # Favicon preliminar
│       │   └── media/                    # Carpetas organizadas para multimedia
│       │       ├── downloads/            # Documentos y descargables (.gitkeep)
│       │       └── videos/               # (.gitkeep - Videos pesados se alojan externamente)
│       ├── src/                          # Código fuente Astro
│       │   ├── assets/                   # Activos optimizados (images/, icons/)
│       │   ├── components/               # Header, Footer, Button
│       │   ├── content/                  # Colecciones tipadas (0 productos)
│       │   ├── layouts/                  # BaseLayout.astro
│       │   ├── pages/                    # Rutas estáticas (/about, /privacy, etc.)
│       │   ├── styles/                   # global.css y variables.css
│       │   └── content.config.ts         # Esquema Zod (affiliateUrl opcional en draft)
│       ├── astro.config.mjs              # Configuración SSG de Astro
│       ├── package.json                  # Manifiesto workspace @c-emprende504/main
│       └── tsconfig.json                 # TypeScript estricto
├── packages/                             # Bibliotecas compartidas (preparado estructuralmente)
│   └── README.md                         # Lineamientos de abstracción (YAGNI)
├── docs/                                 # Documentación técnica completa
├── package.json                          # Manifiesto raíz de npm workspaces
├── package-lock.json                     # Lockfile sincronizado del monorepo
└── .gitignore                            # Exclusiones de Git optimizadas para monorepo
```

---

## 6. Gobernanza y Reglas de Desarrollo

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

*C-Emprende504 — Arquitectura de Marketing de Afiliados de Alto Rendimiento.*
