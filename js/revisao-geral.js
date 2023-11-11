

/* O que aprendemos até o momento 

-Sintaxe
-Variaveis,Constantes e tipos de dados (texto,numero)
-Formas de saida (Concatenação e template literal/string)
-Janelas
-Array
-Objeto */

//Variável
let clube = "Corinthians";

//Constante (valor fixo)
const estado ="SP"

//Saida de dados para testes
console.log(clube);
//console.log(estado);

//Concatenação
console.log("O "+clube+" é do estado de "+estado);

//Template String/Literal
console.log(`O ${clube} é do estado de ${estado}`);
console.log(`Eu amo o ${clube} do Fundo do meu coração`);

//janela de diálogo
/* let nome = prompt("Qual o seu nome?");
console.log("Bem-vindo(a) "+nome); */

//Array são uma lista de dados INDEXADOS
//Em programação sempre se começa do 0
//              0           1           2
let comidas =["Paçoca","Brigadeiro","Pizza"];

console.log(`Adoro ${comidas[0]} e ${comidas[2]}!`);


//Objetos(listas de dados NÃO INDEXADOS)
//Os dados são formados por propriedades com nome/valor
let alunos ={
    nome:"Fulano",
    sobrenome:"da Silva",
    idade: 18,
}

console.log(`O ${alunos.nome} tem ${alunos.idade} nanos`);