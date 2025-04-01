/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */
const btnSend = document.getElementById("btn-send");
const inputMessage = document.getElementById("message");
const lastMessage = document.getElementById("last-message");
//Definimos las variables que vamos a usar en la funcion y como EventListener, la funcion es simple, pero necesitamos .toUpperCase para las mayusculas.

function getMessage() {
lastMessage.textContent = inputMessage.value.toUpperCase();
}

btnSend.addEventListener('click', getMessage)