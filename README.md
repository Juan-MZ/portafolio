# Portafolio - Juan José Medicis

Portafolio personal moderno y responsivo construido con Angular 21, con secciones de presentación, experiencia profesional, habilidades, proyectos y contacto.

## 🚀 Características

- **Diseño Moderno**: Interfaz oscura con gradientes, animaciones suaves y CSS custom properties
- **Totalmente Responsivo**: Optimizado para desktop, tablet y móvil
- **Componentes Standalone**: Arquitectura Angular moderna con componentes independientes y signals
- **Animación de Typewriter**: Efecto de escritura en el título del hero
- **Navegación Fluida**: Scroll suave con anchor links y `scroll-margin-top` calibrado
- **Formulario de Contacto Real**: Envío de emails via Web3Forms (sin backend propio)
- **Página de Experiencia**: Timeline de experiencia laboral, educación y certificaciones
- **Página de Proyectos**: Grid filtrable con enlace al perfil de GitHub

## 🛠️ Tecnologías

- Angular 21.2.0
- TypeScript
- CSS3 con animaciones y variables personalizadas
- Angular Signals
- Angular Router (standalone, withInMemoryScrolling)
- HttpClient + Web3Forms API
- Devicons (iconos de tecnologías)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Juan-MZ/Portafolio.git
cd Portafolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre tu navegador en `http://localhost:4200/`

> **Nota:** Para que el formulario de contacto envíe emails reales, reemplaza `TU_ACCESS_KEY_DE_WEB3FORMS` en `contact.component.ts` con tu clave de [web3forms.com](https://web3forms.com).

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── data/
│   │   └── projects.data.ts            # Datos de proyectos
│   ├── pages/
│   │   ├── home/
│   │   │   └── home.component.ts       # Página principal (ruta /)
│   │   ├── projects/
│   │   │   └── projects-page.component.ts  # Todos los proyectos (ruta /projects)
│   │   └── experience/
│   │       └── experience-page.component.ts # Experiencia completa (ruta /experience)
│   ├── widgets/
│   │   ├── hero.component.ts           # Sección Sobre mí + foto + typewriter
│   │   ├── experience-preview.component.ts # Preview de experiencia en home
│   │   ├── skills.component.ts         # Habilidades en tarjetas por categoría
│   │   ├── projects.component.ts       # Proyectos destacados en home
│   │   ├── contact.component.ts        # Formulario de contacto (Web3Forms)
│   │   └── navbar.component.ts         # Barra de navegación fija
│   ├── app.config.ts                   # Configuración (router, httpClient)
│   ├── app.html                        # Template raíz
│   └── app.routes.ts                   # Rutas: /, /projects, /experience
├── styles.css                          # Estilos globales y variables CSS
└── index.html                          # HTML principal
```

## 🗺️ Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con todas las secciones |
| `/projects` | Página completa de proyectos con filtros |
| `/experience` | Timeline de experiencia laboral, educación y certificaciones |

## 🎨 Secciones (Home)

### Sobre mí (`#sobre-mi`)
- Presentación personal con foto de perfil
- Animación typewriter en el cargo
- Links a LinkedIn, GitHub y correo

### Experiencia (`#experiencia`)
- Preview de experiencia laboral y educación reciente
- Botón para ver la página completa `/experience`

### Habilidades (`#habilidades`)
- 4 categorías: Frontend, Backend, Herramientas, Aprendiendo
- Items clicables con icono y enlace al sitio oficial de cada tecnología

### Proyectos
- Vista previa de proyectos destacados
- Enlace a la página `/projects` con todos los proyectos y filtros

### Contacto (`#contacto`)
- Formulario funcional con estados: enviando / éxito / error
- Tarjetas con email, teléfono y ubicación

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
