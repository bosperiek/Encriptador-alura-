function encriptar() {
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();
  
    //La letra "e" es convertida para "enter"
    //La letra "i" es convertida para "imes"
    //La letra "a" es convertida para "ai"
    //La letra "o" es convertida para "ober"
    //La letra "u" es convertida para "ufat"
  
    var textoEncriptado = texto.replace(/e/gim, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/gim, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/gim, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/gim, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/gim, "ufat");
  
    document.getElementById("textoDesencriptado").innerHTML = 
    textoEncriptado;
  }

  function desencriptar() {
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();
  
    var textoEncriptado = texto.replace(/enter/gim, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/gim, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/gim, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/gim, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/gim, "u");
  
    document.getElementById("textoDesencriptado").innerHTML = 
    textoEncriptado;
  }

  function copiar(){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy")

  }
  