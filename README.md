# ♠ KIRITO | Arquitectura Digital

Repositorio oficial de infraestructura frontal y portafolio interactivo. Diseñado bajo la estricta estética de "Aristocracia Oscura", con un enfoque absoluto en la privacidad, la elegancia paramétrica y la inmersión visual.

## 🏛️ Filosofía y Diseño

- **Anonimato Criptográfico:** Eliminación sistemática de vectores de contacto directo, sustituidos por un bloque estático simulando una clave pública PGP en el pie de página.
- **Geometría WebGL:** Integración de un ecosistema volumétrico impulsado por **Three.js**. Renderizado en tiempo real de fragmentos de obsidiana y un sistema de partículas (brasas carmesí) sobre un lienzo espacial infinito.
- **Micro-interacciones:** Físicas de suspensión y paralaje en la cámara operando mediante interpolaciones finas (`Math.sin()`, `lerp`) y transiciones por curvas `cubic-bezier` personalizadas, transmitiendo un peso arquitectónico en la interfaz.

## ⚙️ Stack Tecnológico

- **Estructura:** HTML5 Semántico
- **Estilo:** Vanilla CSS (CSS Grid, Flexbox, Filtros de Cristal Oscuro)
- **Motor Gráfico:** Three.js (r134 via CDN)
- **Lógica:** Vanilla JavaScript (ES6+)

## 📁 Arquitectura del Proyecto

```text
Portafolio/
├── index.html          # Núcleo estructural y anclaje DOM
├── css/
│   └── style.css       # Reglas de estilo, variables y media queries
├── js/
│   └── main.js         # Lógicas de renderizado WebGL, cámara y Preloader
└── assets/             # Directorio designado para recursos estáticos
```

## 🚀 Despliegue

Este proyecto está purgado de dependencias de compilación complejas y se encuentra optimizado para su entrega inmediata y segura a través de **GitHub Pages**.

1. Dirigirse a los **Settings** del repositorio en GitHub.
2. Seleccionar **Pages** en la barra lateral izquierda.
3. En la sección **Build and deployment**, establecer *Source* en `Deploy from a branch`.
4. Seleccionar la rama `main` y presionar Save.

El motor de GitHub orquestará automáticamente la entrega estática del entorno.

---
*Elegancia arquitectónica en código y sistemas. Especializado en infraestructuras resilientes y experiencias digitales inmersivas.*
