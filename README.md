# Portafolio Profesional — Leonardo Junior Silva Saboya

Portafolio web estático con estética **cyberpunk**, desarrollado en HTML, CSS y JavaScript vanilla. Listo para despliegue en **GitHub Pages**.

## 🗂 Estructura de Directorios

```
Portafolio Profesioal/
├── index.html
├── css/
│   ├── reset.css        # CSS reset cross-browser
│   ├── variables.css    # Design tokens (colores, fuentes, espaciado)
│   ├── base.css         # Estilos globales, botones, badges, utilities
│   ├── animations.css   # Glitch, scanlines, fade-in, skill bars
│   ├── navbar.css       # Barra de navegación responsive
│   ├── hero.css         # Sección hero con terminal widget
│   ├── about.css        # Sección sobre mí
│   ├── skills.css       # Habilidades con progress bars
│   ├── projects.css     # Grid de proyectos con filtros
│   └── contact.css      # Formulario + footer
├── js/
│   ├── utils.js         # Helpers compartidos (DOM, Observer, throttle)
│   ├── navbar.js        # Comportamiento navbar (scroll, mobile toggle)
│   ├── typed.js         # Efecto typewriter sin librerías
│   ├── counter.js       # Animación de contadores numéricos
│   ├── skills.js        # Animación de barras de habilidades
│   ├── projects.js      # Filtrado de tarjetas de proyectos
│   ├── contact.js       # Validación y manejo del formulario
│   └── main.js          # Punto de entrada y coordinación global
└── assets/              # Directorio para imágenes y recursos futuros
```

## 🚀 Despliegue en GitHub Pages

1. Crear repositorio en GitHub (e.g., `lsilva-portfolio`)
2. Subir todos los archivos
3. Ir a **Settings → Pages → Source: Deploy from branch → main**
4. Tu portafolio estará en: `https://tu-usuario.github.io/lsilva-portfolio/`

## 🎨 Paleta de Colores

| Token | Valor | Uso |
|---|---|---|
| `--clr-bg-deep` | `#080a0f` | Fondo principal |
| `--clr-accent` | `#e8153a` | Rojo vibrante — acento principal |
| `--clr-accent2` | `#ff4060` | Rojo suave — hover/glitch |
| `--clr-text-code` | `#63e2b7` | Verde terminal |

## ✉ Formulario de Contacto

El formulario está listo para conectarse a un servicio de backend. Edita `js/contact.js` y reemplaza el `await new Promise(...)` por:

```js
// Opción A: FormSubmit.co (gratis, sin backend)
await fetch('https://formsubmit.co/tu@email.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

// Opción B: Netlify Forms
// Agrega `netlify` al elemento <form> en index.html
```

## 🛠 Tecnologías

- HTML5 semántico
- CSS3 vanilla (Custom Properties, Grid, Flexbox, Animations)
- JavaScript ES6+ puro (sin frameworks)
- Google Fonts: Orbitron · Rajdhani · Share Tech Mono
