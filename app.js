// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Agregue un nombre pls");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Esta persona ya esta");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega por lo menos 2 personas");
        return;
    }
    
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${amigoSecreto}!`;
    resultado.appendChild(li);
}
