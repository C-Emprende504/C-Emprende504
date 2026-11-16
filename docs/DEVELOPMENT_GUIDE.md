# C-Emprende504 — Guía de Desarrollo y Operaciones Monorepo
**Proyecto:** C-Emprende504  
**Rol:** Senior Software Architect & Developer  
**Supervisión:** Project Manager (ChatGPT)  
**Fecha:** 16 de noviembre de 2026  
**Versión:** 1.1.0 (Sprint 2 — Monorepo & npm Workspaces)  

---

## 1. Prerrequisitos del Entorno Local

Para colaborar en el proyecto se requiere el siguiente entorno de desarrollo:
- **Node.js:** Versión `>= 20.0.0` (entorno verificado con `v24.19.0`).
- **npm:** Versión `>= 10.0.0` (entorno verificado con `11.17.0`).
- **Git:** Versión `>= 2.40.0`.

---

## 2. Inicialización y Gestión de Dependencias (npm Workspaces)

El proyecto utiliza **npm workspaces** para centralizar la administración de dependencias de todas las aplicaciones:

```bash
# 1. Instalar todas las dependencias del monorepo desde la raíz
npm install

# 2. Agregar una dependencia a una aplicación específica (ejemplo: apps/main)
npm install <paquete> --workspace=@c-emprende504/main

# 3. Agregar una dependencia de desarrollo compartida en la raíz
npm install -D <herramienta>
```

---

## 3. Comandos de Desarrollo Disponibles

Los scripts en la raíz del monorepo delegan automáticamente las tareas a la aplicación principal (`@c-emprende504/main`):

| Comando desde la Raíz | Equivalente Interno | Propósito |
| :--- | :--- | :--- |
| `npm run dev` | `npm run dev --workspace=@c-emprende504/main` | Inicia el servidor de desarrollo local de `apps/main` con HMR. |
| `npm run build` | `npm run build --workspace=@c-emprende504/main` | Compila la aplicación principal en `apps/main/dist/`. |
| `npm run preview` | `npm run preview --workspace=@c-emprende504/main` | Previsualiza localmente el artefacto compilado en `apps/main/dist/`. |
| `npm run check` | `npm run check --workspace=@c-emprende504/main` | Ejecuta diagnósticos de Astro, TypeScript y esquemas Zod. |

Para ejecutar comandos directamente en el directorio de la aplicación:
```bash
cd apps/main
npm run dev
```

---

## 4. Estructura de Directorios del Monorepo

```text
C-Emprende504/
├── apps/                                 # Aplicaciones independientes
│   └── main/                             # Sitio principal de C-Emprende504
│       ├── public/                       # Activos estáticos directos
│       │   ├── favicon.svg               # Favicon
│       │   └── media/                    # Multimedia estática
│       │       ├── downloads/            # Documentos descargables (.gitkeep)
│       │       └── videos/               # (.gitkeep - Prohibido subir videos pesados)
│       ├── src/                          # Código fuente de Astro
│       │   ├── assets/                   # Imágenes e iconos procesados por Astro
│       │   │   ├── icons/                # (.gitkeep)
│       │   │   └── images/               # (.gitkeep)
│       │   ├── components/               # Header, Footer, Button
│       │   ├── content/                  # Colección tipada products (0 productos)
│       │   │   └── products/             # (.gitkeep)
│       │   ├── layouts/                  # BaseLayout.astro
│       │   ├── pages/                    # index, about, contact, privacy, affiliate-disclosure
│       │   ├── styles/                   # global.css y variables.css
│       │   └── content.config.ts         # Esquema Zod con affiliateUrl opcional
│       ├── astro.config.mjs              # Configuración SSG
│       ├── package.json                  # @c-emprende504/main
│       └── tsconfig.json                 # TypeScript estricto
├── packages/                             # Espacio para futuras bibliotecas compartidas
│   └── README.md                         # Lineamientos de abstracción (YAGNI)
├── docs/                                 # Documentación técnica y estratégica
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT_GUIDE.md
│   ├── INITIAL_TECHNICAL_ASSESSMENT.md
│   ├── MULTI_SITE_STRATEGY.md
│   └── PROJECT_DISCOVERY.md
├── package.json                          # Configuración raíz de npm workspaces
├── package-lock.json                     # Lockfile sincronizado del monorepo
└── .gitignore                            # Exclusiones de Git optimizadas
```

---

## 5. Procedimiento para Agregar un Nuevo Micrositio

Cuando el Project Manager autorice la apertura de un nuevo micrositio vertical (ejemplo: `apps/bienestar`):

1. **Crear el directorio:**
   ```bash
   mkdir -p apps/bienestar
   ```
2. **Crear su `package.json` propio:**
   ```json
   {
     "name": "@c-emprende504/bienestar",
     "version": "0.1.0",
     "type": "module",
     "private": true,
     "scripts": {
       "dev": "astro dev",
       "build": "astro build",
       "preview": "astro preview",
       "check": "astro check"
     },
     "dependencies": {
       "astro": "^7.4.12"
     },
     "devDependencies": {
       "@astrojs/check": "^0.9.12",
       "typescript": "^6.0.3"
     }
   }
   ```
3. **Copiar la configuración de `astro.config.mjs` y `tsconfig.json`:**  
   Garantizando `output: 'static'`.
4. **Ejecutar `npm install` desde la raíz:**  
   npm workspaces vinculará automáticamente el nuevo workspace sin duplicar dependencias comunes.
5. **Añadir el script en el `package.json` raíz:**
   ```json
   "build:bienestar": "npm run build --workspace=@c-emprende504/bienestar"
   ```

---

## 6. Procedimiento para Incorporar un Producto (Borrador vs Publicado)

El esquema tipado permite dos modalidades de ficha técnica en `apps/main/src/content/products/`:

### A. Ficha Técnica en Borrador (`status: "draft"`)
Permite documentar un infoproducto en evaluación sin disponer aún de un enlace de afiliado autorizado:

```json
{
  "title": "Nombre Oficial del Curso",
  "slug": "nombre-oficial-curso",
  "description": "Descripción verificada provista por el productor en Hotmart.",
  "category": "Salud y Bienestar",
  "status": "draft"
}
```

### B. Producto Publicado (`status: "published"`)
Requiere obligatoriamente un enlace `affiliateUrl` válido para compilar exitosamente:

```json
{
  "title": "Nombre Oficial del Curso",
  "slug": "nombre-oficial-curso",
  "description": "Descripción verificada provista por el productor en Hotmart.",
  "category": "Salud y Bienestar",
  "affiliateUrl": "https://go.hotmart.com/A12345678Z?sck=c_emprende504",
  "benefits": ["Acceso vitalicio", "Garantía oficial de 7 días"],
  "targetAudience": ["Personas interesadas en bienestar integral"],
  "frequentlyAskedQuestions": [
    {
      "question": "¿Cómo recibo el acceso?",
      "answer": "Acceso inmediato por correo electrónico tras procesar el pago en Hotmart."
    }
  ],
  "status": "published",
  "publishedAt": "2026-11-20T00:00:00Z"
}
```

---

## 7. Manejo de Recursos Multimedia

1. **Imágenes e Iconos:** Guardar en `apps/[app-name]/src/assets/images/` y `apps/[app-name]/src/assets/icons/`.
2. **Archivos Descargables:** Guardar en `apps/[app-name]/public/media/downloads/`.
3. **Videos:** **NO almacenar videos de gran tamaño en el repositorio.** Utilizar enlaces o reproductores embebidos de YouTube no listado, Vimeo o servicios de streaming dedicados.

---

## 8. Flujo de Trabajo en Git (Git Workflow)

1. **Convención de Commits (Conventional Commits):**
   - `chore(monorepo):` Cambios en workspaces o configuración raíz.
   - `feat(main):` Funcionalidad en el sitio principal.
   - `feat(nicho):` Funcionalidad en un micrositio específico.
   - `docs:` Actualización de documentación.
   - `style:`, `refactor:`, `fix:`
2. **Control de Calidad Pre-Commit:**
   - Ejecutar siempre `npm run check` y `npm run build` antes de realizar un commit.
