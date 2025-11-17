# Repositorio Git SDAW_2866108

## Descripción del Proyecto

Este repositorio contiene el proyecto base para la práctica de la asignatura Sistemas de Desarrollo de Aplicaciones Web (SDAW).

El proyecto consiste en una pequeña aplicación web que utiliza Node.js y Express para levantar un servidor local. Este servidor sirve una página HTML sencilla con un botón que, al ser pulsado, muestra un mensaje de saludo mediante JavaScript.

El objetivo principal de esta práctica es familiarizarse con:

- La creación de un servidor web básico con Node.js.
- El manejo de dependencias usando npm y package.json.
- La interacción entre HTML y JavaScript en el lado del cliente.
- El flujo de trabajo básico de control de versiones con Git y GitHub.

## Requisitos Previos

Para poder ejecutar este proyecto en tu máquina local, necesitarás tener instalados los siguientes programas:

- **Node.js:** (Recomendado v18 o superior). Esto instalará tanto Node.js como npm (Node Package Manager).
- **Git:** El sistema de control de versiones que usarás para gestionar tu código.

## Instrucciones de Ejecución Local

Sigue estos pasos para poner en marcha el proyecto:

1. Clonar el repositorio (o descargar el ZIP y descomprimirlo):

    ```
    git clone [URL_DE_TU_REPOSITORIO_EN_GITHUB]
    cd SDAW_2866108
    ```

2. Instalar las dependencias del proyecto (en este caso, express):

    ```
    npm install
    ```

3. Iniciar el servidor local:

    ```
    npm start
    ```

4. Abrir el navegador:

Visita [http://localhost:3000](http://localhost:3000) en tu navegador web. Deberías ver la página de la práctica.

## Novedades de la última versión

- Se añadió un segundo botón etiquetado como "Nueva actualizacion" en `index.html`. Este control añade un pequeño mensaje secundario y sirve como prueba visible para nuevos commits (por ejemplo, al subir la actividad a GitHub).
- `script.js` ahora escucha el evento `click` de ese botón y muestra el texto "Nueva actualizacion lista para GitHub." para dejar constancia de la actualización en la interfaz.

## Estructura del Proyecto

El proyecto se compone de los siguientes archivos:

- **package.json:** Archivo de configuración de npm. Define el nombre del proyecto, la versión, los scripts (como npm start) y las dependencias (como express).
- **server.js:** El corazón de nuestro backend. Este archivo utiliza Express para crear un servidor web, definir que debe escuchar en el puerto 3000 y servir los archivos estáticos y el index.html.
- **index.html:** La estructura de la página web (el "frontend"). Contiene el título, el botón de saludo, el botón "Nueva actualizacion" y los párrafos donde se mostrarán los mensajes.
- **script.js:** El código JavaScript del lado del cliente. Se encarga de "escuchar" el clic en ambos botones y de modificar el HTML para mostrar el saludo o el aviso de actualización.
- **README.md:** ¡Este mismo archivo! La documentación del proyecto.

## Comandos Útiles (Node.js y Git)

Aquí tienes una chuleta con los comandos más importantes que usarás para esta práctica.

### Node.js / npm

- `npm init -y`  
  Inicializa un nuevo proyecto de Node.js rápidamente, creando un package.json con valores por defecto.

- `npm install express`  
  Descarga e instala la librería express y la añade como dependencia en package.json.

- `npm install`  
  Lee el package.json e instala todas las dependencias listadas en él.

- `npm start`  
  Ejecuta el script "start" definido en package.json (en nuestro caso, node server.js).

### Git (Flujo básico)

- `git init`  
  Inicializa un repositorio de Git vacío en la carpeta actual.

- `git add .`  
  Añade todos los archivos modificados o nuevos al "área de preparación" (staging area), listos para ser guardados.

- `git commit -m "Mensaje descriptivo del commit"`  
  Guarda una "instantánea" de los archivos que estaban en el área de preparación. El mensaje debe explicar qué cambios has hecho.

- `git status`  
  Muestra el estado actual del repositorio (qué archivos están modificados, cuáles están en staging, etc.).

- `git log`  
  Muestra el historial de commits.

- `git branch nombre_de_la_rama`  
  Crea una nueva rama para trabajar en una nueva funcionalidad sin afectar al código principal.

- `git checkout nombre_de_la_rama`  
  Se mueve a la rama especificada.

- `git checkout -b nombre_de_la_rama`  
  Un atajo que crea una nueva rama y se mueve a ella en un solo paso.

- `git push origin main`  
  Sube tus commits locales de la rama main al repositorio remoto en GitHub (llamado origin).

## Notas y Conclusiones

(Esta sección está pensada para que la completes con tus propias reflexiones)

En esta práctica, he podido aplicar los conceptos teóricos de... El uso de Git me ha permitido... La separación entre el servidor (server.js) y el cliente (index.html y script.js) me ha ayudado a entender mejor la arquitectura de una aplicación web moderna...

## Apartado final

### ¿Qué significa tener múltiples remotos?

Tener múltiples remotos en un mismo repositorio local hace que el proyecto puede sincronizarse simultáneamente con diferentes servidores externos.En mi repositorio está conectado tanto a GitHub como a GitLab, es decir que puedo publicar los mismos commits en las dos plataformas sin tener de hacer el doble del trabajo ni mantener dos carpetas distintas.

### Ventajas o posibles inconvenientes

- Permite tener el proyecto en dos plataformas a la vez.
- Es una buena forma de comparar herramientas como GitHub y GitLab.
- Aumenta la seguridad del repositorio (si un servicio falla, el otro sigue funcionando).
- Facilita colaborar con personas que prefieren un servicio u otro.
- No hace falta duplicar carpetas ni proyectos ya que todo se controla desde el mismo directorio local.
- Tienes que acordarte de subir los cambios a los dos remotos manualmente.
- Si se trabaja con varias ramas a la vez, puede ser un poco bastante lioso el tener todo sincronizado.
- Las plataformas tienen diferencias en la interfaz y hay que acostumbrarsea los dos.
- Un error puede extenderse en los dos si no se tiene cuidado

### Comandos se han utilizado o consultado:
A lo largo de la práctica he recurrido a distintos comandos de Git, entre ellos:

- `git remote add gitlab <URL>` — añade gitlab al proyecto.

- `git remote -v` — enseña los remotos que se han configurados y te deja comprobar que los dos están activos.

- `git checkout -b rama3_Ismael` — crea la nueva rama de trabajo a partir del estado actual

- `git checkout main` — Vuelves a la rama principal.

- `git push origin rama3_Ismael` — envía la rama 3 al repositorio alojado en GitHub.

- `git push gitlab rama3_Ismael` — publica la misma rama en GitLab, manteniendo ambos remotos sincronizados.

- `git log --oneline --graph --all` — enseña el historial del repositorio 

- `git merge` — integra los cambios de una rama dentro de otra.

- `git pull` — actualiza la copia local incorporando los merges realizados en remoto.

Esta actividad me ha servido para entender mejor cómo funcionan los remotos, cómo se gestionan las ramas y cómo se replican los flujos de trabajo en servicios distintos.
