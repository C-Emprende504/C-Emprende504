# Directorio de Paquetes Compartidos (`packages/`)

Este directorio está reservado para bibliotecas, utilidades o componentes compartidos entre las distintas aplicaciones del monorepo (`apps/main` y futuros micrositios).

---

## 1. Principio de Abstracción Justificada (YAGNI)

En estricto apego a las decisiones arquitectónicas aprobadas por el Project Manager:
- **No se crean paquetes artificiales de manera prematura.**
- Cada aplicación en `apps/` es autónoma y autosuficiente.
- La extracción de un paquete a este directorio solo ocurrirá cuando al menos **dos aplicaciones independientes** requieran compartir exactamente la misma lógica, esquema o componente de interfaz, evitando duplicaciones innecesarias.

---

## 2. Posibles Paquetes Futuros (Sujetos a Aprobación)

Cuando la escala del proyecto y la existencia de múltiples micrositios lo justifiquen, se podrán evaluar paquetes como:
- `packages/ui`: Componentes visuales genéricos y tokens de diseño compartidos.
- `packages/tracking`: Utilidades de captura de parámetros UTM y propagación de identificadores de afiliado (`sck`).
- `packages/schema`: Validadores y tipos comunes para infoproductos.

---

*Estado actual: Directorio preparado estructuralmente. Sin paquetes activos en Sprint 2.*
