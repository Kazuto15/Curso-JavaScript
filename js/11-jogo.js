
'use strict';

const pagina = document.querySelector('body');
const label = document.querySelector('label')
const formulario = document.querySelector('form');
const campoPalpite = document.querySelector('#palpite')
const resultado = document.querySelector('#resultado')
const img = document.querySelector('#imagem');

let faustao ="../imgs/faustao.gif"
let miseravi ="../imgs/miseravi.gif"
let noImg = ""

/* Gerar valores aleatórios 
Usamos math.random() * 11, para gerar valores de 0 a 10
e passamos o valor  para parseInt para descartar a parte
"Quebrada" do numero, mantendo apenas o valor inteiro 
*/
let numeroAleatorio = parseInt(Math.random() *11);
console.log(numeroAleatorio);

/* Detectar o acionamento do formulario 
para capturar e analisar o palpite */

/* formulario.addEventListener("submit", function(event){


    //Anuladno o comportamento padrão do evento
    event.preventDefault();
    
    //Capturando o palpite(Valor do campo)
    let palpite = parseInt(campoPalpite.value);

    if(palpite == numeroAleatorio){
        resultado.textContent ="Parabens, você acertou 🎉🎉🎉";
        resultado.style.color="Green"
        pagina.style.background="lightgreen"
        
        img.src = miseravi;

        numeroAleatorio= parseInt(Math.random() * 11);
        //Redirecionamento
        //location = "https://youtu.be/dQw4w9WgXcQ?si=LE35Y1taHSYxAFuu"

    }
    else if(palpite > numeroAleatorio){
        resultado.textContent =`Tente novamente, o numero é menor 🤏`;
        resultado.classList.add('animate__animated');
        resultado.classList.add('animate__tada');
        resultado.style.color="red";
        pagina.style.background="salmon"
        img.src = noImg;
    }else if(palpite < numeroAleatorio){
        resultado.textContent =`Tente novamente, o numero é maior ☝`;
        resultado.style.color ="blue";
        resultado.classList.add('animate__animated');
        resultado.classList.add('animate__headShake');
        pagina.style.background="lightblue"
                img.src = noImg;


    }
}) */

formulario.addEventListener("submit", function(event){
    //Anuladno o comportamento padrão do evento
    event.preventDefault();
    
    //Capturando o palpite(Valor do campo)
    let palpite = parseInt(campoPalpite.value);

    if(palpite == numeroAleatorio){
        resultado.textContent ="Acertou mizeravi";
        resultado.style.color="Green"
        resultado.style.animation= "tada 3s infinite"
        pagina.style.background="lightgreen"
        img.src = miseravi;

        //Outra maneira de setar a imagem dentro da tag img
        //img.setAttribute('src', '../imgs/miseravi.gif');
        
        //Fazendo gerar um novo numero aleatório
        numeroAleatorio= parseInt(Math.random() * 11);

        //Redirecionamento
        //location = "https://youtu.be/dQw4w9WgXcQ?si=LE35Y1taHSYxAFuu"
    }
    else{
        resultado.textContent =`Errouuuuuu!!!`;
        resultado.style.color="red";
        resultado.style.animation = "headShake 3s infinite"
        pagina.style.background="salmon"
        img.src = faustao;

        //Outra maneira de setar a imagem dentro da tag img
        //img.setAttribute('src', '../imgs/faustao.gif');

    }
})