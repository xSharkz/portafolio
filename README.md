
# Portafolio Personal

Este es mi portafolio personal desarrollado con HTML, CSS, y JavaScript. Incluye una configuración personalizada de **Tailwind CSS** y **Flowbite** para estilos modernos y responsivos.

## Características

- **Barra de navegación fija:** Acceso rápido a todas las secciones.
- **Diseño moderno y responsivo:** Adaptable a cualquier dispositivo.
- **Enlaces anclados:** Navegación fluida entre secciones.
- **Secciones principales:**
  - Sobre mí
  - Habilidades técnicas
  - Redes sociales
  - Proyectos
  - Contacto
- **Personalización de estilos:** Usando Tailwind CSS y configuración personalizada.

## Tecnologías Utilizadas

- **HTML5:** Estructura principal.
- **CSS3 y Tailwind CSS:** Para estilos personalizados.
- **JavaScript:** Funcionalidades interactivas.
- **Flowbite:** Componentes de interfaz de usuario predefinidos.

## Requisitos Previos

Asegúrate de tener instalado **Node.js** y **npm** antes de comenzar.  
Puedes descargar Node.js desde [nodejs.org](https://nodejs.org).

## Instalación y Uso

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/xSharkz/portafolio.git
   cd portafolio
   ```

2. **Instala las dependencias:**
   Ejecuta el siguiente comando en la carpeta del proyecto:
   ```bash
   npm install
   ```

3. **Compila los estilos de Tailwind CSS:**
   Si necesitas compilar los estilos personalizados, usa el siguiente comando:
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```
   Esto generará los estilos en tiempo real mientras haces cambios.

4. **Abre el proyecto en tu navegador:**
   Si estás usando un servidor local como Live Server de VS Code, simplemente abre el archivo `index.html`. También puedes usar cualquier servidor HTTP para servir el proyecto.

## Estructura del Proyecto

- **`index.html`**: Archivo principal del proyecto.
- **`tailwind.config.js`**: Configuración personalizada para Tailwind CSS.
- **`src/input.css`**: Archivo base de estilos para Tailwind CSS.
- **`dist/output.css`**: Estilos generados por Tailwind CSS.
- **`node_modules/`**: Librerías necesarias instaladas con npm.
- **`package.json`**: Lista de dependencias y scripts configurados.

## Personalización

Puedes modificar los siguientes archivos para personalizar el proyecto:

- **HTML (`index.html`)**: Cambia el contenido de las secciones.
- **CSS (`src/input.css`)**: Añade o modifica clases de estilo de Tailwind.
- **Config (`tailwind.config.js`)**: Ajusta las configuraciones de Tailwind CSS.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

## Autor

- **Martin Becerra**  
  Estudiante de Ingeniería Civil en Computación e Informática.  
  Contacto: [Correo Electrónico](mailto:martin.becerra@alumnos.ucn.cl)