"use strict"

const lista = document.querySelector("#lista-de-musicas");
const reprodutor = document.querySelector("audio");

const figureCapa =  document.querySelector("figure")
const imagemCapa = figureCapa.querySelector("img")
const tituloMusica = figureCapa.querySelector("figcaption")

/* Monitorando o evento de mudanças de opções na lista <select> */
lista.addEventListener("change", function(){

    if(figureCapa.hasAttribute("hidden")){
        figureCapa.removeAttribute("hidden");
    }
    


    /* Selecionadno o <option> que foi escolhido
    dentro da lista <select> */
    let musicaSelecionada = lista.options[lista.selectedIndex];
    console.log(musicaSelecionada);

    /* Associando o value do option(musicaSelecionada)
    ao src do elemento audio(reprodutor) */
    reprodutor.src=musicaSelecionada.value;

    /* Exibir titulo no figcaption */
    tituloMusica.textContent = musicaSelecionada.textContent;

    /* Exibindo a capa do img 
    Nesse caso, é necessario usar o getAttribute para poder
    acessar o atributo personalizado criado por você no HTML: data-capa*/
    imagemCapa.src = musicaSelecionada.getAttribute("data-capa");
    figureCapa.style.transition = "2s"

     /* Reproduzindo a música selecionada somente 
     se o valor de musicaSelecionada for diferente de vazio */
    if(musicaSelecionada.value !== ""){
        reprodutor.play();
    }
    if(musicaSelecionada.value == ""){
        figureCapa.setAttribute("hidden");
    }
})  