"use strict"

/* Exemplo 01 */

// Selecionando os elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body"); // OU document.body

// Detectando um evento de clique
exemplo01.addEventListener("click", function(){
    mensagem01.innerHTML ="Beleza!!!";//Exibe como se fosse tag html na pagina
    mensagem01.style.fontSize ="32px";//faz com que assim que a função for ativada o texto aumente de tamanho
    mensagem01.style.fontFamily = "Verdana";

    // Removendo um elemento
    // exemplo01.remove();

    //Escondendo um elemento
    exemplo01.style.display = "none"
});

const titulo = document.querySelector("h1");
titulo.addEventListener("mouseover", function(){
    //Exibindo o elemento
    exemplo01.style.display= "block"
    mensagem01.textContent = "oi sumido"
})

// exemplo01.addEventListener("click", function(){
//     exemplo01.innerHTML="Exemplo 01: Detectando eventos(Aberto)"
//     exemplo01.style.color = "gray"
// })

/* EXEMPLO 02 */
const mensagem02 = document.querySelector("#mensagem02");
const janela = document.querySelector("#janela-modal")
const botaoFechar = document.querySelector("#janela-modal button")

// document.addEventListener("mouseout", function(event){

//     /*É necesario verificar se a posicão do 
//     mouse(no eixo vertical) está fora/acima
//     da área do documento. Se estiver , ai 
//     mostramos/fazemos alguma ação  */

//     if(event.clientY < 0){
//          mensagem02.style.display= "block"//display block é necessario caso eu queira usar o none la embaixo
//         this.body.style.backgroundColor= "gray";
//         mensagem02.innerHTML= "<i>Vai vazar mesmo?</i>😢"
//         mensagem02.style.backgroundColor= "purple"
//         mensagem02.style.color="white"
//         mensagem02.style.fontSize= "32px"

//         //Exibindo/abrindo o <dialog>
//         janela.showModal()
//     }else{//Faz com que se eu voltar a pagina as ações atribuidas anteriormente sumam
//         this.body.style.backgroundColor= "White"
//        mensagem02.style.display= "none"//Para usar esse display none , tem que usar o display block no outro  
//     }
//  })

//Determinanod a d
document.addEventListener("mouseout",vericaSaida)
function vericaSaida(event){
    if(event.clientY <0){
        janela.showModal();
        //Desativando o monitor de modal
        document.removeEventListener("mouseout",vericaSaida);
    }
}

botaoFechar.addEventListener("click", function(){
    janela.close();
})

/* EXEMPLO 03 */
const botaoNoturno = document.querySelector("#noturno")
botaoNoturno.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");
    pagina.style.transition = "2s"
    

    /* Se o modo noturno estiver "ativado", ou seja,
    se a classe "modo-noturno" ESTÁ aplicada na pagina */
    if(pagina.classList.contains("modo-noturno")){
        //Então, mudamos o texto do botão para Desativar
        botaoNoturno.textContent= "desativar"
    }else{
        //Senão, mantemos o texto como ativar
        botaoNoturno.textContent = "Ativar"
    }
})