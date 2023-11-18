"use strict"

const lista = document.querySelector("#lista-de-musicas");
const reprodutor = document.querySelector("audio");

/* Monitorando o evento de mudanças de opções na lista <select> */
lista.addEventListener("change", function(){

    /* Selecionadno o <option> que foi escolhido
    dentro da lista <select> */
    let musicaSelecionada = lista.options[lista.selectedIndex];
    console.log(musicaSelecionada);

    /* Associando o value do option(musicaSelecionada)
    ao src do elemento audio(reprodutor) */
    reprodutor.src=musicaSelecionada.value;

     /* Reproduzindo a música selecionada somente 
     se o valor de musicaSelecionada for diferente de vazio */
    if(musicaSelecionada.value !== ""){
        reprodutor.play();
    }
})  