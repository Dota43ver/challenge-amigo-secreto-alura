// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if(nombre.trim().length > 0){
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        //mostrarAmigos();
        console.log(amigos);
    }else{
        alert("El nombre no puede estar vacío");
    }
}