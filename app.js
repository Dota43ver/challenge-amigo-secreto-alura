// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if(nombre.trim().length > 0){
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }else{
        alert("El nombre no puede estar vacío");
    }
}


function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i = 0; i <amigos.length; i++){
        let li = document.createElement("li");
        li.innerText = amigos[i];
        listaAmigos.appendChild(li);
    }
}
    



function sortearAmigo(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let amigo = Math.floor(Math.random()*amigos.length)+1;
    resultado.innerHTML = amigos[amigo-1];
}