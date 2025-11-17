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

## Información técnica añadida desde rama 3

Aquí voy a añadir una pequeña reflexión personal sobre todo lo que aprendí en la primera parte del proyecto.

Al principio trabajar con Git, ramas y commits parecía un caos, pero cuando ves el flujo completo (crear rama, modificar, hacer el commit, subirlo y fusionarlo con pull request), todo empeza a tener un cierto sentido, este proceso me ha ayudado a manejar GitHub mejor y a entender por qué las ramas son fundamentales para trabajar sin liarla en main.

### Historial completo del repositorio:

* 54e74a6 (HEAD -> rama3_Ismael, gitlab/main, main) Corregido
| *   7f59895 (origin/main, origin/HEAD) Merge pull request #1 from Ismaeliki11/rama1_Flores
| |\
| | *   5299909 (origin/rama1_Flores) Merge branch 'main' into rama1_Flores
| | |\
| | |/
| |/|
| * |   3d2c803 Merge pull request #2 from Ismaeliki11/rama2_Flores
| |\ \
| | * | ad8bbfd (origin/rama2_Flores, rama2_Flores) Añadido log en una sola linea en rama 2
| |/ /
|/| |
| | * 24c74f6 (rama1_Flores) Añadido log en una línea en rama 2
| |/
|/|
* | 795c61e Commit base
* | 2a1b19b Añadida información técnica en la rama 1
* | e9a219e Actualizado el README
* | 853c6c7 nuevo botón
|/
* f03ddfe Primer commit del proyecto SDAW_2866108

