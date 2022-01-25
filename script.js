
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/



var textoInput = document.getElementById("input-texto");
var mensaje = document.querySelector("#msg");
var encriptar = document.querySelector("#btn-encriptar");
var desencriptar = document.querySelector("#btn-desencriptar");
var copiar = document.querySelector("#btn-copy");
var letrasInvalidas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ!#$%&'()*+,-.\\/:;=?@[\"]^_`{|}~";



function encriptarMsg(palabra){
   for(i=0; i<palabra.length; i++){
      if (letrasInvalidas.indexOf(palabra.charAt(i),0)!=-1){
         return alert("Verifique que el texto contenga caracteres válidos");
         break;
      }
   }
   const encriptado = palabra.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
   mensaje.value = encriptado;
}


encriptar.addEventListener("click", function(event){
   event.preventDefault();
   
   var palabra = textoInput.value;

   encriptarMsg(palabra)
});


desencriptar.addEventListener("click", function(event){

 event.preventDefault();
 
 var palabra = textoInput.value; 

 const desencriptado = palabra.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
 mensaje.value = desencriptado;

});

   copiar.addEventListener("click", function(event){
       event.preventDefault();
       var content = mensaje;
       content.select();
       document.execCommand('copy');
     
})


 

