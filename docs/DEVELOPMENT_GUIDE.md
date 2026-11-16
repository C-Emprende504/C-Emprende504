# C-Emprende504 — Guía de Desarrollo y Operaciones Monorepo
**Proyecto:** C-Emprende504  
**Rol:** Senior Software Architect & Frontend Lead  
**Supervisión:** Project Manager (ChatGPT)  
**Fecha:** 16 de noviembre de 2026  
**Versión:** 1.2.1 (Sprint 3.1 — Consistencia Comercial & Estado de Nichos)  

---

## 1. Prerrequisitos del Entorno Local

Para colaborar en el proyecto se requiere el siguiente entorno de desarrollo:
- **Node.js:** Versión `>= 20.0.0` (entorno verificado con `v24.19.0`).
- **npm:** Versión `>= 10.0.0` (entorno verificado con `11.17.0`).
- **Git:** Versión `>= 2.40.0`.

---

## 2. Puesta en Marcha y Servidor de Desarrollo Local

Para ejecutar el portal localmente en modo desarrollo con recarga rápida (HMR):

```bash
# 1. Asegurar instalación de dependencias en el monorepo
npm install

# 2. Iniciar el servidor local de desarrollo desde la raíz
npm run dev
```

### Dirección Local Esperada:
El servidor local de Astro se levantará en:
👉 **`http://localhost:4321/`**

---

## 3. Comandos de Desarrollo Disponibles en el Monorepo

| Comando desde la Raíz | Función Técnica | Cuándo Utilizarlo |
| :--- | :--- | :--- |
| `npm run dev` | Ejecuta `astro dev` en `apps/main` en el puerto `4321`. | Durante el diseño y desarrollo de componentes. |
| `npm run build` | Compila `apps/main` en HTML/CSS estático dentro de `apps/main/dist/`. | Previo a confirmar cambios en Git. |
| `npm run preview` | Levanta un servidor local estático sobre `apps/main/dist/`. | Para verificar la salida estática final. |
| `npm run check` | Ejecuta diagnósticos estrictos de TypeScript y Astro en `apps/main`. | En flujos de QA y antes de cada commit. |

---

## 4. Procedimiento de Pruebas y Control de Calidad

Para validar el sitio, el desarrollador debe diferenciar claramente entre **pruebas automatizadas** y **comprobaciones visuales**:

### A. Pruebas Automatizadas (Línea de Comandos)
1. **Diagnóstico Estático:**
   ```bash
   npm run check
   ```
   *Debe arrojar 0 errores, 0 advertencias y 0 hints.*
2. **Compilación de Producción:**
   ```bash
   npm run build
   ```
   *Debe generar todas las rutas estáticas en `apps/main/dist/` sin excepciones.*

### B. Comprobaciones Visuales y Responsive (En Navegador)
1. **Verificación de Navegación:**
   - Clic en el enlace *"Nichos"* del Header: debe desplazarse suavemente a la sección `#nichos`.
   - Clic en *"Acerca de"*: debe abrir `/about` con estética dark theme.
   - Clic en enlaces legales del Footer: `/contact`, `/privacy`, `/affiliate-disclosure`.
2. **Inspección de las Diez Tarjetas:**
   - Comprobar que se renderizan exactamente las 10 categorías definidas en `src/data/niches.ts`.
   - Verificar que los iconos vectoriales SVG se visualicen con nitidez y acento naranja.
   - Comprobar que todas las 10 tarjetas exhiban uniformemente el badge *"En Planificación"* (sin nichos marcados como activos ni en preparación).
   - Verificar que no existan enlaces rotos a productos ni precios inventados.
3. **Prueba de Adaptabilidad Responsive (DevTools):**
   - **Móvil Pequeño (320px - 375px):** Comprobar que no hay desbordamiento horizontal (`overflow-x`), los textos se leen cómodamente y el menú hamburguesa abre y cierra correctamente.
   - **Móvil Estándar (390px - 430px):** Cuadrícula de 1 columna fluida con márgenes laterales de 16px.
   - **Tablet (768px):** Cuadrícula de 2 columnas balanceadas.
   - **Escritorio (1024px y superior):** Cuadrícula de 3 columnas con espaciado amplio de 24px/32px.
4. **Verificación de Accesibilidad (A11y):**
   - Navegación exclusiva por teclado (Tab / Shift+Tab): verificar que el foco visible (`outline: 2px solid #FF5A00`) se aprecie claramente en todos los botones y enlaces.
   - Presionar `Escape` con el menú móvil abierto para confirmar que se cierra y devuelve el foco al botón de apertura.

---

## 5. Estructura de Componentes y Datos

```text
apps/main/src/
├── data/
│   └── niches.ts                 # Fuente de verdad de los 10 nichos (inmutable)
├── components/
│   ├── layout/
│   │   ├── Header.astro          # Cabecera sticky con menú responsive
│   │   └── Footer.astro          # Pie con avisos de transparencia y páginas legales
│   ├── ui/
│   │   ├── Badge.astro           # Chip de estado (planning, preparation)
│   │   ├── Button.astro          # Botón accesible (primary, secondary, outline)
│   │   └── SectionHeading.astro  # Título y descripción modular de sección
│   ├── niches/
│   │   ├── NicheCard.astro       # Tarjeta individual de nicho
│   │   └── NicheGrid.astro       # Cuadrícula responsiva que mapea NICHES_DATA
│   └── home/
│       ├── HeroSection.astro     # Portada principal con resplandor naranja y CTAs
│       └── PlatformOverview.astro# Pilares arquitectónicos del ecosistema
├── pages/
│   ├── index.astro               # Ensamblaje de la portada
│   ├── about.astro               # Principios del proyecto
│   ├── contact.astro             # Canales técnicos
│   ├── privacy.astro             # Privacidad
│   └── affiliate-disclosure.astro# Transparencia FTC
└── styles/
    ├── variables.css             # Tokens CSS (Dark theme: #0B0B0B, #141414, #FF5A00)
    └── global.css                # Reset, A11y y utilidades
```

---

## 6. Procedimiento para Modificar o Activar un Nicho Futuro

Cuando un nicho vertical sea aprobado por el Project Manager para su conversión en micrositio:
1. Abrir `apps/main/src/data/niches.ts`.
2. Actualizar el estado de dicho nicho a `'active'`.
3. Asignar el enlace correspondiente (ej. `https://finanzas.dominio.com` o la ruta de staging correspondiente).
4. El componente `NicheCard.astro` detectará automáticamente el estado y transformará la tarjeta en un enlace activo al micrositio.
