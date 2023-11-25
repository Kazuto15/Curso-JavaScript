"use strict"

/* Exemplo 1: manipulação do DOM */

const titulo = $("h1");
const subtitulos = $("h2");

/* console.log(titulo);
console.log(subtitulos); */

//titulo.text("bem Vindo")
titulo.html("<i>Bem Vindo</i>");

// Acessando determinados elementos selecionados
// eq(indice/posição por hierarquia) para acessar o elemento
console.log( $(subtitulos).eq(0).text() );
console.log( $(subtitulos).eq(1).text() )

const sub1 = $(subtitulos).eq(0);
const sub2 = $(subtitulos).eq(1);

// Aplicando CSS inline
sub1.css("color","red")
sub2.css("text-transform","uppercase")


titulo.css({
    "color":"purple",
    "text-align" : "center",
    "font-family" : "geneva"
});

const sub3 = $("h3")
sub3.addClass("destaque")




/* Exemplo 2: DOM e Evento */
const pagina = $("body");
const formularo= $("form")
const nome =$("#nome")
const tema =$("#tema")

// Manipular evento
formularo.on("submit", function(event){
    event.preventDefault()

    // Capturando os dados
    let usuario = nome.val();
    let cor = tema.val()
    let textoDaCor = tema.find("option:selected").text();

    //Aplicando a cor na pagina
    pagina.css("background-color", cor)

    // Personalizando o titulo
    titulo
    .hide()
    .html(`Olá <b>${usuario}<b>, você escolheu ${textoDaCor}`)
    //.fadeIn(3000)
    .slideDown


    console.log(usuario, cor, textoDaCor);
});

