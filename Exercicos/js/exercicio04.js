'use strict';
]const pagina = document.querySelector("body")
const significado = document.querySelector("#significado")
const botao1 = document.querySelector("#botao1")
const botao2 = document.querySelector("#botao2")
const botao3 = document.querySelector("#botao3")

botao1.addEventListener("click", function(){
    significado.innerHTML="Vermelho significa Fúria e Amor";
    significado.style.color="#fc5858"
    pagina.style.backgroundColor= "#c90e0e";
    pagina.style.transition="1s";
})
botao2.addEventListener("click", function(){
    significado.innerHTML="Azul significa Harmonia e Maturidade";
    significado.style.color= "#5ba1e3"
    pagina.style.backgroundColor="#04068c";
    pagina.style.transition="1s";
})
botao3.addEventListener("click", function(){
    significado.innerHTML="Verde significa Saúda e Esperança";
    significado.style.color="#5de35b"
    pagina.style.backgroundColor="green";
    pagina.style.transition="1s";
})
