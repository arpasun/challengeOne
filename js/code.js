const inputMensaje = document.getElementById("mensaje");
const inputResultado = document.getElementById("resultado");
const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const botonCopiar = document.getElementById("copiar");
const panelMunieco = document.querySelector(".panelMunieco");
const panelResultado = document.querySelector(".panelResultado");

panelResultado.classList.add("ocultar");

function encriptar (){
    let mensaje = inputMensaje.value.toLowerCase();
    let mensajeFinal ="";
   
    for (let i=0; i < mensaje.length; i++){
        if(mensaje[i] == "a"){
            mensajeFinal = mensajeFinal + "ai";
        }
        else if(mensaje[i] == "e"){
            mensajeFinal = mensajeFinal + "enter"
        }
        else if(mensaje[i] == "i"){
            mensajeFinal = mensajeFinal + "imes"
        }
        else if(mensaje[i] == "o"){
            mensajeFinal = mensajeFinal + "ober"
        }
        else if(mensaje[i] == "u"){
            mensajeFinal = mensajeFinal + "ufat"
        }
        else{
            mensajeFinal = mensajeFinal + mensaje[i];
        }
    inputResultado.value = mensajeFinal;
    }
    panelMunieco.classList.add("ocultar");
    panelResultado.classList.add("mostrar");
}

function desencriptar (){
    let mensaje = inputMensaje.value.toLowerCase();
    inputResultado.value = mensaje;
    let mensajeFinal ="";
   
    for (let i=0; i < mensaje.length; i++){
        if(mensaje[i] == "a" && mensaje[i+1] == "i"){
            mensajeFinal = mensajeFinal + "a";
            i = i+1;
        }
        else if(mensaje[i] == "e" && mensaje[i+1] == "n"){
            mensajeFinal = mensajeFinal + "e";
            i = i+4;
        }
        else if(mensaje[i] == "i" && mensaje[i+1] == "m"){
            mensajeFinal = mensajeFinal + "i";
            i = i+3;
        }
        else if(mensaje[i] == "o" && mensaje[i+1] == "b"){
            mensajeFinal = mensajeFinal + "o";
            i = i+3;
        }
        else if(mensaje[i] == "u" && mensaje[i+1] == "f"){
            mensajeFinal = mensajeFinal + "u";
            i = i+3;
        }
        else{
            mensajeFinal = mensajeFinal + mensaje[i];
        }

    inputResultado.value = mensajeFinal;
    }
    panelMunieco.classList.add("ocultar");
    panelResultado.classList.add("panelResultado mostrar");
}

function copiar(){
    const copiado = document.getElementById("resultado");
    copiado.select();
    document.execCommand('copy');
    inputResultado.value = "";
    inputMensaje.value ="";

}

