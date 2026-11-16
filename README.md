# C-Emprende504 — Plataforma de Marketing de Afiliados (Hotmart)

Bienvenido al repositorio oficial del proyecto **C-Emprende504**, una plataforma web moderna, modular y de alto rendimiento diseñada para la promoción, descubrimiento y comercialización de productos digitales (cursos online, programas formativos y certificaciones) a través del programa de afiliados de **Hotmart**.

---

## 1. Visión y Propósito del Proyecto

**C-Emprende504** nace con el objetivo de servir como puente de confianza entre audiencias hispanohablantes interesadas en emprendimiento, desarrollo profesional y habilidades de alta demanda, y los mejores infoproductos educativos de la plataforma Hotmart.

El proyecto está diseñado para:
- Promocionar infoproductos de calidad seleccionados con criterios de alta satisfacción y garantía.
- Proveer **Landing Pages de alta conversión** optimizadas para tráfico móvil derivado de campañas publicitarias (Meta Ads, TikTok Ads, Google Ads).
- Garantizar la **atribución íntegra de comisiones de afiliados** mediante el rastreo y propagación de parámetros UTM y el parámetro `sck` de Hotmart.
- Mantener un **coste operativo de infraestructura recurrente de $0.00 USD/mes** mediante el despliegue de arquitectura estática en **Cloudflare Pages**.
- Cumplir estrictamente con normativas legales de comercio electrónico y políticas de plataformas de publicidad (Meta Ads, Google Ads, FTC).

---

## 2. Estado Actual del Proyecto (Sprint 0)

> [!IMPORTANT]
> **Fase Actual: Fase 0 — Descubrimiento y Evaluación Técnica Inicial**  
> En cumplimiento estricto de las directrices del proyecto, **no se ha generado código fuente de la aplicación** (HTML/CSS/JS) ni se han instalado paquetes hasta contar con la aprobación formal del **Project Manager (ChatGPT)**.

- **Espacio de Trabajo Local:** Inspeccionado y verificado.
- **Control de Versiones (Git):** No inicializado aún en espera de validación de arquitectura base.
- **Documentación de Descubrimiento:** Elaborada y disponible en el directorio [`docs/`](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs).

---

## 3. Índice de Documentación Técnica

La documentación del proyecto sigue estándares de arquitectura empresarial:

1. 📄 **[Documento de Descubrimiento del Proyecto (`docs/PROJECT_DISCOVERY.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/PROJECT_DISCOVERY.md)**
   - Resumen del proyecto y objetivos de negocio.
   - Supuestos sobre el público objetivo y preguntas abiertas.
   - Requisitos funcionales y no funcionales detallados.
   - Alternativas tecnológicas evaluadas.
   - Arquitectura propuesta y estructura de directorios.
   - Consideraciones de despliegue en Cloudflare Pages, seguridad y cumplimiento publicitario.
   - Matriz de riesgos y decisiones abiertas.

2. 📄 **[Evaluación Técnica Inicial y Factibilidad (`docs/INITIAL_TECHNICAL_ASSESSMENT.md`)](file:///home/cristiamsanchez/Documents/VSCodeProjects/ProyectoComerciosAfiliados/C-Emprende504/docs/INITIAL_TECHNICAL_ASSESSMENT.md)**
   - Resultados de la inspección técnica del espacio de trabajo.
   - Evaluación de factibilidad de coste cero ($0/mes) y Core Web Vitals móviles.
   - Análisis comparativo ponderado de alternativas de frontend (Astro vs Vite/HTML5 vs Next.js).
   - Arquitectura de trazabilidad de enlaces de afiliados y preservación de UTMs.
   - Esquema propuesto de datos para productos (`ProductSchema`).
   - Configuración de cabeceras (`_headers`) y redirecciones (`_redirects`) en Cloudflare Pages.
   - Hoja de ruta de implementación técnica en 6 fases.

---

## 4. Gobernanza y Reglas de Desarrollo

El equipo de desarrollo se adhiere a las siguientes diez reglas fundamentales de ingeniería y negocio:

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

## 5. Entorno y Prerrequisitos del Sistema

Para el desarrollo local se cuenta con las siguientes herramientas verificadas en el entorno:

- **Sistema Operativo:** Linux x86_64
- **Node.js:** `v24.19.0` (vía NVM)
- **npm:** `11.17.0`
- **Git:** `2.43.0`
- **Editor / Entorno Asistido:** Antigravity AI
- **Hosting de Destino:** Cloudflare Pages (Free Tier)

---

## 6. Hoja de Ruta Resumida

```text
[ Fase 0: Descubrimiento ]  <-- Estado Actual
       │
       ▼
[ Fase 1: Setup & Tooling (Git, .gitignore, estructura base) ]
       │
       ▼
[ Fase 2: Módulo Legal & Motor de Trazabilidad UTM ]
       │
       ▼
[ Fase 3: Home & Catálogo de Productos ]
       │
       ▼
[ Fase 4: Motor de Landing Pages & Producto Piloto Hotmart ]
       │
       ▼
[ Fase 5: Auditoría de Rendimiento & Despliegue en Cloudflare Pages ]
```

---

*C-Emprende504 — Arquitectura de Marketing de Afiliados de Alto Rendimiento.*
