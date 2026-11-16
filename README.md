# C-Emprende504 — Plataforma de Marketing de Afiliados (Hotmart)

Bienvenido al repositorio oficial del proyecto **C-Emprende504**, una plataforma web moderna, modular y de alto rendimiento diseñada para la promoción, descubrimiento y comercialización de productos digitales (cursos online, programas formativos y certificaciones) a través del programa de afiliados de **Hotmart**.

---

## 1. Visión y Propósito del Proyecto

**C-Emprende504** nace con el objetivo de servir como puente de confianza entre audiencias hispanohablantes interesadas en emprendimiento, desarrollo profesional y habilidades de alta demanda, y los mejores infoproductos educativos de la plataforma Hotmart.

El proyecto está diseñado para:
- Promocionar infoproductos de calidad seleccionados con criterios de alta satisfacción y garantía.
- Proveer **Landing Pages de alta conversión** optimizadas para tráfico móvil derivado de campañas publicitarias (Meta Ads, TikTok Ads, Google Ads).
- Garantizar la **atribución íntegra de comisiones de afiliados** mediante el rastreo y propagación de parámetros UTM y el parámetro `sck` de Hotmart en fases posteriores.
- Mantener un **coste operativo de infraestructura recurrente de $0.00 USD/mes** mediante el despliegue de arquitectura estática en **Cloudflare Pages**.
- Cumplir estrictamente con normativas legales de comercio electrónico y políticas de plataformas de publicidad (Meta Ads, Google Ads, FTC).

---

## 2. Estado Actual del Proyecto (Sprint 1 Completado)

> [!NOTE]
> **Fase Actual: Sprint 1 — Cimientos de Infraestructura & Inicialización de Astro**  
> Se ha completado la inicialización de la arquitectura base: Git inicializado, Astro configurado en modo estático (SSG), colección de contenido tipada `products` configurada (con 0 productos reales o ficticios), sistema de diseño CSS neutral y componentes accesibles de navegación y layout.

- **Espacio de Trabajo Local:** Configurado y validado.
- **Control de Versiones (Git):** Inicializado en rama `main` con `.gitignore` exhaustivo.
- **Motor SSG:** Astro `v7.4.12` instalado y verificado (`output: 'static'`).
- **Diagnósticos de Código:** `npm run check` (0 errores, 0 advertencias, 0 hints).
- **Compilación Estática:** `npm run build` verificado exitosamente (5 rutas estáticas generadas).

---

## 3. Índice de Documentación Técnica

La documentación del proyecto sigue estándares de arquitectura empresarial:

1. 📄 **[Documento de Descubrimiento del Proyecto (`docs/PROJECT_DISCOVERY.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/PROJECT_DISCOVERY.md)**
   - Resumen del proyecto, objetivos de negocio (CTR $\ge 15\%$, coste \$0/mes).
   - Requisitos funcionales y no funcionales detallados.
   - Alternativas tecnológicas evaluadas y resoluciones del Sprint 1.
   - Consideraciones de despliegue en Cloudflare Pages, seguridad y cumplimiento publicitario.

2. 📄 **[Evaluación Técnica Inicial y Factibilidad (`docs/INITIAL_TECHNICAL_ASSESSMENT.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/INITIAL_TECHNICAL_ASSESSMENT.md)**
   - Resultados de la inspección técnica del entorno de trabajo.
   - Evaluación de factibilidad de coste cero ($0/mes) y Core Web Vitals móviles.
   - Análisis comparativo ponderado de alternativas de frontend (Astro vs Vite/HTML5 vs Next.js).
   - Arquitectura de trazabilidad de enlaces de afiliados y preservación de UTMs.

3. 📄 **[Arquitectura de Software (`docs/ARCHITECTURE.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/ARCHITECTURE.md)**
   - Visión general del sistema Jamstack y compilación estática.
   - Arquitectura de componentes UI y layouts.
   - Diseño del esquema tipado Zod para colecciones de productos.
   - Sistema de diseño de CSS Tokens y accesibilidad (WCAG 2.1 AA).
   - Especificaciones para el despliegue en Cloudflare Pages.

4. 📄 **[Guía de Desarrollo y Operaciones (`docs/DEVELOPMENT_GUIDE.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/DEVELOPMENT_GUIDE.md)**
   - Prerrequisitos de entorno (Node.js, npm, Git).
   - Comandos estándar de desarrollo (`dev`, `build`, `preview`, `check`).
   - Flujo de trabajo en Git con Conventional Commits.
   - Procedimiento paso a paso para incorporar un nuevo producto al catálogo.

---

## 4. Comandos de Desarrollo

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local con recarga en caliente. |
| `npm run build` | Compila la aplicación en HTML/CSS estático dentro de `dist/`. |
| `npm run preview` | Previsualiza localmente el artefacto estático generado en `dist/`. |
| `npm run check` | Ejecuta diagnósticos de TypeScript y esquemas Zod con `@astrojs/check`. |

---

## 5. Estructura del Proyecto

```text
C-Emprende504/
├── docs/                         # Documentación técnica completa
├── public/                       # Activos estáticos públicos
│   └── favicon.svg               # Favicon SVG
├── src/                          # Código fuente
│   ├── assets/                   # Activos procesados (imágenes, iconos)
│   ├── components/               # Componentes modulares
│   │   ├── layout/               # Header.astro, Footer.astro
│   │   └── ui/                   # Button.astro
│   ├── content/                  # Almacén de contenidos
│   │   └── products/             # Ficheros de producto (0 productos en Sprint 1)
│   ├── layouts/                  # Plantillas maestras (BaseLayout.astro)
│   ├── pages/                    # Rutas estáticas del sitio
│   │   ├── index.astro           # Portada neutral de desarrollo
│   │   ├── about.astro           # Acerca del proyecto
│   │   ├── contact.astro         # Canales de supervisión
│   │   ├── privacy.astro         # Política de privacidad
│   │   └── affiliate-disclosure.astro # Aviso de afiliación FTC
│   ├── styles/                   # Sistema de diseño CSS
│   │   ├── global.css            # Reset, A11y y utilidades
│   │   └── variables.css         # Tokens de diseño CSS
│   └── content.config.ts         # Esquema tipado Zod para productos
├── astro.config.mjs              # Configuración SSG de Astro
├── package.json                  # Dependencias y scripts
├── tsconfig.json                 # Configuración TypeScript estricta
└── .gitignore                    # Reglas de exclusión de Git
```

---

## 6. Gobernanza y Reglas de Desarrollo

El equipo de desarrollo se adhiere a las diez reglas fundamentales de ingeniería y negocio:

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
