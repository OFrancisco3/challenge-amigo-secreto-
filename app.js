// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const nombre = document.getElementById("amigo").value;
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
        const elementoLista = document.createElement("li");
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    });
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para realizar el sorteo.");
        return;
    }

    const amigosDisponibles = [...amigos]; // Copia para no modificar el original
    const asignaciones = {}; // Objeto para almacenar las asignaciones

    amigos.forEach(amigo => {
        let amigoSecreto;
        do {
            const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
            amigoSecreto = amigosDisponibles.splice(indiceAleatorio, 1)[0];
        } while (amigoSecreto === amigo); // Asegurar que no sea su propio amigo secreto

        asignaciones[amigo] = amigoSecreto;
    });

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (const amigo in asignaciones) {
        const elementoResultado = document.createElement("li");
        elementoResultado.textContent = `${amigo}: ${asignaciones[amigo]}`;
        resultado.appendChild(elementoResultado);
    }
}