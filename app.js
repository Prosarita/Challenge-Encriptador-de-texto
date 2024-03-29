const mensaje_encriptar = document.getElementById("textoEncriptado");
const campo_mensaje = document.getElementById("mensajeEncriptado");

document.getElementById("mostrarSalida").style.display = "none";
document.getElementById("copiarBo").style.display = "none";

const matrizEncriptacion = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"], 
    ["o", "ober"],
    ["u", "ufat"],
];

function validarMayusCarac(mensaje_encriptar = document.getElementById("textoEncriptado")) {
    var regex = /^[a-zñÁ-Ú \n]+$/;
    if (regex.test(mensaje_encriptar.value)) { 
        return true; 
    } else {
        return false; 
    }
}

function botonEncriptar(){
    const texto = procesoEncriptacion(mensaje_encriptar.value, matrizEncriptacion);

    if(!validarMayusCarac(texto.value) || texto == ""){
        alert('No se permiten mayusculas o caracteres especiales');
    }else{
        estiloSalida();
        campo_mensaje.value = texto;
        document.getElementById("textoEncriptado").value = '';
        document.getElementById("copiarBo").value= "Copiar";
    }
}

function procesoEncriptacion(fraseEncriptada, matriz){    
    for(let i = 0; i < matriz.length; i++) {
        if(fraseEncriptada.includes(matriz[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz[i][0],
                matriz[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function botonDesencriptar(){
    const textoNormal = procesoDesencriptar(mensaje_encriptar.value,matrizEncriptacion);

    if(!validarMayusCarac(textoNormal.value) || textoNormal == ""){
        alert('No se permiten mayusculas o caracteres especiales');
    }else{
        estiloSalida();
        campo_mensaje.value = textoNormal;
        document.getElementById("textoEncriptado").value = '';
        document.getElementById("copiarBo").value= "Copiar";
    }
}

function procesoDesencriptar(fraseDesencriptada, matriz){
    for(let i = 0; i < matriz.length; i++){
        if(fraseDesencriptada.includes(matriz[i][1])){
            fraseDesencriptada = fraseDesencriptada
            .replace(/ai/, "a")
            .replace(/enter/, "e")
            .replace(/imes/, "i")
            .replace(/ober/, "o")
            .replace(/ufat/, "u");
        }
    }
    return fraseDesencriptada;
}

function botonCopiar(){
    navigator.clipboard.writeText(campo_mensaje.value);
    document.getElementById("copiarBo").value= "Copiado";
    document.getElementById("copiarBo").classList.add("animar")
    setTimeout(() => {
      document.getElementById("copiarBo").classList.remove("animar")
      mostrarMensajeCopiado()
    }, 300)
}

function mostrarMensajeCopiado() {
    const mensajeCopiado = document.getElementById("mensajeCopiado");
    mensajeCopiado.style.display = "block";
}

function cerrarMensajeCopiado() {
    const mensajeCopiado = document.getElementById("mensajeCopiado");
    mensajeCopiado.style.display = "none";
}

function estiloSalida() {
    document.getElementById("muñecoMensaje").style.display = "none";
    document.getElementById("mensajeOut").style.display = "none";
    document.getElementById("mostrarSalida").style.display = "block";
    document.getElementById("copiarBo").style.display = "block";
}