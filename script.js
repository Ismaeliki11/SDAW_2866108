// --- script.js para la práctica SDAW ---

// Usamos 'DOMContentLoaded' para asegurarnos de que el script se ejecuta
// solo cuando el HTML está completamente cargado.
// Aunque usamos 'defer' en el HTML (que haría esto innecesario),
// es una buena práctica conocer este método.
document.addEventListener('DOMContentLoaded', () => {

  // 1. Obtenemos las referencias a los elementos del DOM
  
  // Seleccionamos el botón por su ID 'saludoBtn'
  const botonSaludar = document.getElementById('saludoBtn');
  
  // Seleccionamos el párrafo por su ID 'mensaje'
  const parrafoMensaje = document.getElementById('mensaje');
  const botonActualizacion = document.getElementById('actualizacionBtn');
  const parrafoActualizacion = document.getElementById('mensajeActualizacion');

  // 2. Definimos la función que se ejecutará al hacer clic
  
  function mostrarSaludo() {
    // Escribimos el mensaje exacto solicitado en el párrafo
    parrafoMensaje.textContent = 'Hola Ismael Flores Andreo';
  }

  function anunciarActualizacion() {
    if (parrafoActualizacion) {
      parrafoActualizacion.textContent = 'Nueva actualizacion lista para GitHub.';
    }
  }

  // 3. Añadimos el "oyente de eventos" (Event Listener)
  
  // Le decimos al navegador que "escuche" el evento 'click'
  // en el 'botonSaludar'. Cuando ocurra, debe ejecutar la
  // función 'mostrarSaludo'.
  if (botonSaludar) {
    botonSaludar.addEventListener('click', mostrarSaludo);
  } else {
    console.error("Error: No se encontró el elemento con ID 'saludoBtn'");
  }

  if (botonActualizacion) {
    botonActualizacion.addEventListener('click', anunciarActualizacion);
  } else {
    console.error("Error: No se encontro el elemento con ID 'actualizacionBtn'");
  }

});
