//Array são uma lista de dados INDEXADOS
/* O acesso ao dados individuais do array, é feito
 através do nome do array do ÍNDICE correspondente
 à posição ao dado  */
 /* let alunos = ["Kauã", "Guilherme","Milena","Matheus"]

console.log(alunos[0]);
console.log(alunos[1]); */

/* Mini-exercicio
- Crie um array com nome de 5 aristas/bandas que você gosta

- Em seguida mostre uma mensagem no console indicando o nome do artista
 que você mais gosta e do que menos gosta*/

 let artistas= ["Veigh","Kayblack","ryu, the runner","Kiss","Thiaguinho"]

 console.log(`O artista que eu mais gosto é ${artistas[0]} e o que eu menos gosto é ${artistas[2]}`);


//  Matrizes (arrays com 2 ou mais dimensões)

let linguagens = [
    //0     //1     //2
    ["HTML","CSS","JS"],    //0
    ["Java","PHP","ASP.Net","Python"]   //1
];

//CSS é para estilos
console.log(linguagens[0][1]+ "é para estilos");
//PHP é back-end
console.log(linguagens[1][1]+" é back-end");