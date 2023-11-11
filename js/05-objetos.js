//Objetos são listas de dados NãO INDEXADOS
let livro ={
    titulo: "Senhor dos anéis",
    ano:1954,
    volumes:3,
    autor:"J.R.R Tolkien"
};

//Meu livro prefirido é senhor dos anéis.

console.log("Meu livro prefirido é: "+livro.titulo);
console.log(`Meu livro prefirido é: ${livro.titulo}`);

console.log(livro.autor);
console.log(livro.ano);

//Exemplo 2:objeto contendo array e outro objeto
let cliente ={
    nome:"Frederico",
    apelido:"Kiko",
    idade:22, 
    telefone:["11-98675-4690","11-4583-3565"],
    medidas:{
        altura:1.90,
        peso:100,
    }
};

console.log(cliente.nome);
console.log(cliente.idade);


/* exibindo a array dentro de um objeto,
 nesse caso estou exibindo um atribudo do cliente, telefone, e exibindo a segunda array dentro dele*/

//acessando uma propriedade que tambem é um objeto
 console.log(cliente.telefone[0]);

//Acessando uma propriendade que tambem é um objeto
console.log(cliente.medidas.altura);

//Exemplo 3: Array de objetos
let livros=[
    {titulo:"Harry potter",
    autor:"J.K Howling"   
},
    {titulo:"romeu e julieta",
    autor:"William Shakespeare"
},
    {titulo:"Dom quixote",
    autor:"Miguel de Cervantes"}
];

//Harry potter (escrito por j.k howling) é uma saga de livros da autora
console.log(`${livros[0].titulo} escrito por ${livros[0].autor} é uma saga de livros da autora`);