let amigos = [];

function agregarAmigo() {
  if (document.getElementById("amigo").value === "") {
    alert("¡Por favor, ingrese un nombre de amigo!");
    return;
  } else{
    const amigo = document.getElementById("amigo").value;
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
  }
}

function mostrarAmigos() {
  document.getElementById("listaAmigos").innerHTML = "";
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    document.getElementById("listaAmigos").appendChild(li);
  });
  // for (let i = 0; i < amigos.length; i++) {
  //   const li = document.createElement("li");
  //   li.textContent = amigos[i];
  //   document.getElementById("listaAmigos").appendChild(li);
  // }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("¡Por favor, agregue amigos antes de sortear!");
    return;
  }else{
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
  }
}
