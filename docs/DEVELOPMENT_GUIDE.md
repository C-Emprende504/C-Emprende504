# C-Emprende504 — Guía de Desarrollo y Operaciones
**Proyecto:** C-Emprende504  
**Rol:** Senior Software Architect & Developer  
**Supervisión:** Project Manager (ChatGPT)  
**Fecha:** 16 de noviembre de 2026  
**Versión:** 1.0.0 (Sprint 1)  

---

## 1. Prerrequisitos del Entorno Local

Para colaborar en el proyecto se requiere el siguiente entorno de desarrollo:
- **Node.js:** Versión `>= 20.0.0` (entorno verificado con `v24.19.0`).
- **npm:** Versión `>= 10.0.0` (entorno verificado con `11.17.0`).
- **Git:** Versión `>= 2.40.0`.

---

## 2. Instalación y Puesta en Marcha

Clonar o acceder al directorio del proyecto y ejecutar la instalación de dependencias:

```bash
# Instalación de dependencias (Astro, TypeScript, @astrojs/check)
npm install

# Generación inicial de tipos para colecciones de contenido
npx astro sync
```

---

## 3. Comandos de Desarrollo Disponibles

En `package.json` se han estandarizado los siguientes scripts:

| Comando | Función Técnica | Cuándo Utilizarlo |
| :--- | :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local de Astro con recarga rápida (HMR). | Durante el diseño y maquetación de componentes. |
| `npm run build` | Ejecuta la compilación de producción SSG, generando archivos HTML/CSS estáticos en `dist/`. | Antes de confirmar cambios en Git o desplegar. |
| `npm run preview` | Levanta un servidor local liviano para inspeccionar los archivos estáticos compilados en `dist/`. | Para verificar el comportamiento idéntico a producción. |
| `npm run check` | Ejecuta diagnósticos de tipado estricto en archivos `.astro`, `.ts` y esquemas Zod. | En flujos de QA y antes de cada commit. |

---

## 4. Estructura de Directorios del Código Fuente

```text
C-Emprende504/
├── docs/                         # Documentación arquitectónica, técnica y de gobernanza
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT_GUIDE.md
│   ├── INITIAL_TECHNICAL_ASSESSMENT.md
│   └── PROJECT_DISCOVERY.md
├── public/                       # Activos estáticos públicos no procesados por Vite
│   ├── favicon.svg               # Isotipo SVG del proyecto
│   ├── _headers                  # Configuración HTTP para Cloudflare Pages (Sprint 2)
│   └── _redirects                # Reglas de redirección para enlaces limpios (Sprint 2)
├── src/                          # Código fuente de la aplicación Astro
│   ├── assets/                   # Activos procesados y optimizados
│   │   ├── icons/                # Iconos SVG (.gitkeep)
│   │   └── images/               # Imágenes optimizadas (.gitkeep)
│   ├── components/               # Componentes modulares reutilizables
│   │   ├── common/               # Componentes compartidos y SEO
│   │   ├── layout/               # Header.astro, Footer.astro
│   │   └── ui/                   # Button.astro y elementos de interfaz
│   ├── content/                  # Almacén de colecciones de datos
│   │   └── products/             # Ficheros individuales por producto (.gitkeep)
│   ├── layouts/                  # Plantillas maestras de página
│   │   └── BaseLayout.astro      # Layout HTML5 maestro con accesibilidad integrada
│   ├── pages/                    # Enrutamiento estático basado en archivos
│   │   ├── index.astro           # Portada neutral de desarrollo
│   │   ├── about.astro           # Descripción del proyecto
│   │   ├── contact.astro         # Canales de supervisión y contacto
│   │   ├── privacy.astro         # Política de privacidad
│   │   └── affiliate-disclosure.astro # Aviso legal de afiliación
│   ├── styles/                   # Hojas de estilo globales
│   │   ├── global.css            # Normalización, reset y clases de utilidad
│   │   └── variables.css         # Tokens de diseño CSS (colores, fuentes, espaciado)
│   └── content.config.ts         # Definición del esquema tipado Zod para productos
├── astro.config.mjs              # Configuración de compilación SSG de Astro
├── package.json                  # Manifiesto de dependencias y scripts
├── tsconfig.json                 # Configuración de TypeScript en modo estricto
└── .gitignore                    # Reglas de exclusión de Git
```

---

## 5. Guía para Incorporar un Futuro Producto al Catálogo

Cuando el Project Manager (ChatGPT) apruebe un producto digital oficial de Hotmart con su respectivo HotLink autorizado, se añadirá como un archivo JSON o Markdown dentro de `src/content/products/`.

### Ejemplo de Archivo de Datos (`src/content/products/curso-ejemplo.json`):

```json
{
  "title": "Nombre Oficial del Infoproducto",
  "slug": "nombre-oficial-infoproducto",
  "description": "Descripción persuasiva y verificada provista por el productor en Hotmart.",
  "category": "Emprendimiento Digital",
  "featuredImage": "/images/products/portada-curso.webp",
  "affiliateUrl": "https://go.hotmart.com/A12345678Z?sck=c_emprende504",
  "benefits": [
    "Acceso vitalicio a los contenidos en la plataforma Hotmart",
    "Certificado digital de finalización",
    "Garantía de satisfacción de 7 días naturales"
  ],
  "targetAudience": [
    "Emprendedores que inician su negocio digital",
    "Profesionales que buscan monetizar habilidades"
  ],
  "frequentlyAskedQuestions": [
    {
      "question": "¿Cómo recibo el acceso al curso?",
      "answer": "Inmediatamente tras la confirmación de pago en Hotmart, recibirás un correo electrónico con tus credenciales de acceso a la plataforma."
    }
  ],
  "status": "draft",
  "publishedAt": "2026-11-20T00:00:00Z"
}
```

> [!CAUTION]
> **Regla de Oro:** Nunca inventar enlaces de afiliado, testimonios ni precios. Todos los datos deben provenir de la ficha oficial del productor en Hotmart.

---

## 6. Flujo de Trabajo en Git (Git Workflow)

1. **Convención de Mensajes de Commit (Conventional Commits):**
   - `feat:` Nuevas funcionalidades o páginas.
   - `fix:` Corrección de errores en código o marcado.
   - `docs:` Actualización de documentación técnica.
   - `style:` Ajustes visuales de CSS o diseño que no alteran la lógica.
   - `refactor:` Reestructuración de código sin alterar comportamiento.
   - `chore:` Tareas de mantenimiento de tooling o configuración.
2. **Buenas Prácticas:**
   - Ejecutar siempre `npm run check` y `npm run build` antes de realizar un commit.
   - Mantener commits atómicos y descriptivos.

---

## 7. Requerimientos para el Despliegue en Cloudflare Pages

1. **Conexión:** Se conectará el repositorio GitHub a Cloudflare Pages una vez autorizado el repositorio remoto.
2. **Configuración de Compilación:**
   - **Framework:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Variables de Entorno:** `NODE_VERSION: 24` (o versión LTS compatible).
3. **Caché y Redirecciones:** En el Sprint 2 se incluirán los archivos `public/_headers` y `public/_redirects` para optimizar la seguridad y los enlaces salientes.
