"use strict"

// Selecionando os elementos
const formulario = document.querySelector("form");
const campoNome = formulario.querySelector("#nome");
const campoNota1 = formulario.querySelector("#nota1");
const campoNota2 = formulario.querySelector("#nota2");
const tabela = document.querySelector("table");
const corpoTabela = tabela.querySelector("tbody");

formulario.addEventListener("submit", function(event){
    //Evitando a saida da pagina após o submit
    event.preventDefault();

    /* Verificando se a tabela está oculta 
    ou seja, se ela tem o atrivuto hidden */
    if(tabela.hasAttribute("hidden")){
        /* Se estiver, então removemos o atributo
        e com isso a tabela volta a aparecer  */
        tabela.removeAttribute("hidden")
    }
    // Capturando os dados digitados
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    //Calculando a média das notas
    let media = (nota1 +nota2) / 2;

    // Verificando a situação do aluno de acordo com a média
    let situacao;
    let classe;

    if(media>=7){
        situacao=  "Aprovado(a)";
        classe= "aprovado";
    }else{
        situacao= "Reprovado(a)";
        classe ="reprovado";
    }

    //testes

    console.log(nome,nota1,nota2,media,situacao);
    

    /* Rotinas para criar uma nova linha e colunas
    para exibição dos dados no corpo da tabela */

    // 1) Criar elemento
    let linha = document.createElement("tr")
    linha.classList.add(classeSituacao)

    // 2) Montar o conteudo do elemento
    linha.innerHTML= `<td>${nome}</td>
                     <td>${media}</td>
                     <td>${situacao}</td>`;

    // 3)Adicionar na área da pagina desejada
    corpoTabela.appendChild(linha);
    
    // Resetar o formulário
    formulario.reset();

    // Devolver o foco/cursor para o nome
    campoNome.focus();
})
