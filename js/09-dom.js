"use strict";

/* Funções/Métodos de seleçao de elementos no DOM 

-getElementById
seleciona UM elemento através do ID

-querySelector()
Seleciona UM elemento através de SELETORES (mesma lógica do CSS)

-querySelectorAll()
Seleciona VÁRIOS elementos através de SELETORES (mesma lógica do CSS)
*/

//  Exemplos 1: getElementById
const legenda = document.getElementById("legenda");
console.log(legenda);

// Exemplo 2: querySelector()
const titulo = document.querySelector("h1");
const sobreFront = document.querySelector('#sobre')
console.log(titulo);
console.log(sobreFront);

const backEnd = document.querySelector(".back-End")
console.log(backEnd);
const editores = document.querySelector("div h2")
console.log(editores);

// Exemplo 3: querySelectorAll()
// obs.: o retorno desta função é como um ARRAY
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[1]);

// const varios = document.querySelectorAllO("p, a");





/* Modificando elementos no DOM
(conteudo,mudança de tag, cores, criação de elementos) */

// Alterando o conteudo
legenda.textContent = "DOM - Hierarquia Geral";

// Alterando com suporte a html
sobreFront.innerHTML = "<i>Front-end</i>"

//CSS INLINE via JavaScript
editores.style.color ="red"
backEnd.style.textAlign = "center"

// CSS usando classes via JavaScript
titulo.classList.add("destaque")

let listaDeEditores=[
    "VScode",
    "notepad++",
    "Sublime Text",
    "Atom",
    "Dreamweaver",
    "mySql",
    "Xampp"
];

//Selecionando a lista vazia através da classe
const lista = document.querySelector(".lista")
console.log(lista);

//Percorrer o array usando o loop for/of
for(let programa of listaDeEditores){

    //1- Criar um novo elemento
    let item = document.createElement("li");

    //2- Adicionar conteudo ao novo elemento
    item.innerHTML = programa;

    //3- Adicionar a lista
    lista.appendChild(item);
}

/* Adicionando atributo à diversos elementos */
const linksReferencis = document.querySelectorAll(".referencias li a");
console.log(linksReferencis);

for(let link of linksReferencis){
    //"Setando/colocando" o atributo "target" com o valor "_blank"
    link.setAttribute("target", "_blank")
}