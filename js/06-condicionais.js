/* Estruturas de 
controle Condicional

Comandos mais comuns:
-if (SE)
-else (SENÃO)
-else if (SENÃO SE)

Operadores Relacionais:
> Maior que
< Menor que
>= Maior ou igual
<= Menor ou igual
== Igualdade
!= diferente
 */

//Exemplo 1:
/* let numero = prompt("Escolha um numero");
if(numero >=5){
    console.log("A condição foi atingida");
    console.log(`Foi exibido porque ${numero} é maior ou igual a 5(Condição especificada)`);
    }
 */

let numero = 5;
if(numero >=5){
console.log("A condição foi atingida");
console.log(`Foi exibido porque ${numero} é maior ou igual a 5(Condição especificada)`);
}

//Exemplo 2: condicional COMPOSTA (if e else)
let aluno ="Sarah";
let nota1=7;
let nota2=7;
let media=(nota1+nota2)/2;
let faltas = 12;

const mediaMinima=7
const limiteDeFaltas = 10;

console.log(`Aluno(a):${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`);

/* if(media >= 7){
    console.log("Aprovado(a)");
}else if(media >5 && media < 7){
    console.log("Recuperação");
}else{
    console.log("Reprovado(a)");
} */

// OU
let resultado;//Indefinida(undefined)

/* if(media >= mediaMinima){
    resultado="Aprovado(a)";
}else{
    resultado="Reprovado(a)";
} */

/* resultado =(media >= mediaMinima && faltas < limiteDeFaltas) ? 'Aprovado(a)' : 'Reprovado(a)'
 console.log(resultado);*/

//Operador logico && (E/AND)
if(media >= mediaMinima && faltas < limiteDeFaltas){
    resultado = "Aprovado(a)"
}else{
    resultado="Reprovado(a)"
} 
console.log(resultado);

//Exemplo 3: condicional ENCADEADA (if,else if, else){
/* Desempenhos
-Media menor que 3? PÉSSIMO
-Media menor que 5? RUIM
-Media menor que 7? REGULAR
-Media menor que 9? BOM
-Nenhuma das anteriores das condições anteriores? OTIMO */

if(media < 3){
    console.log("PÉSSIMO");
}else if(media <5){
    console.log("RUIM");
}else if(media < 7){
    console.log("REGULAR");
}else if(media < 9){
    console.log("BOM");
}else{
    console.log("OTIMO");
}

/* BAGUNÇA DOS IGUAIS
=   IGUAL UNICO     ->serve para ATRIBUIR/COLOCAR VALOR
==  IGUAL DUPLP     ->serve para COMPARAR VALORES
=== IGUAL TRIPLO    ->serve para COMPARAR VALORES E TIPOS DE DADOS*/

let a = 10;
let b = "10";
console.log(a === b);