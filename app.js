// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const nombre = document.getElementById("amigo");
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Muestra una alerta si el campo está vacío
      }

      amigos.push(nombre); // Agrega el nombre al array de amigos
    
      document.querySelector(".input-name").value = ""; // Limpia el campo de entrada
      actualizarLista(); // Actualiza la lista de amigos en la interfaz de usuario (ver función abajo)    
      return;
    }

    
    function actualizarLista() {
        const listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla

    amigos.forEach(amigo => {
        const elementoLista = document.getElementById("listaAmigos");
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}