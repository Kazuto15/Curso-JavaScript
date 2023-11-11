 //comentario de uma linha = control + ;
        /*Comentario de bloco = Shift + Alt + a*/
        
        console.log("Exemplo Sintaxe geral");

        /* Variaveis e Constantes
        São espaços na memoria RAM
        para armazenamento de dados*/

        //Variaveis (Valor que pode mudar)
        var aluno = "Kauã"; //método antigo
        let produto = "PC Gamer"; //método novo
        
        // Constantes (Um que é valor fixo,que não muda)
        const escola ="Senac"


        // Saida/Exibição de dados na tela
        console.log(aluno) //Usando o nome da variavel 
        console.log(produto);//Usando o nome da Variavel
        console.log(escola);// Usando o nome da constante

        console.log(aluno,escola,produto);
        
        // Somente declaração
        let servico, prestador, unidade

        // Atribuição
        servico = "Manutenção"
        prestador = "Seu Madruga"
        unidade = "Vila do Chaves"

        console.log(prestador,"faz", servico,"na",unidade);//Concatenando com ,

        /* Dados numéricos */
        let ano = 2023; //inteiro
        let preco = 1950.42; //Decimal

        /* Valores "quebrados" a casa decimal é feita com . (ponto) e não com , (virgula)*/
        
        /* Nomes compostos para variáveis */
        //let curso de tecnologia //errado
        let Cursodetecnologia; //certo
        let curso_de_tecnologia; //certo
        let CursoDeTecnologia; //certo (MAIS USADO)


        /* Operadores matemáticos */
        // + Adição
        // - Subtração
        // * Multiplicação
        // / Divisão




       let valor1=10;
       let valor2= 5;

       let soma = valor1 +valor2;
       let subtracao = valor1 - valor2;
       let multiplicacao = valor1 * valor2;
       let divisao = valor1 / valor2;

        console.log(soma,subtracao,multiplicacao,divisao);

        /* Saida de dados elaborada */

        //CONCATENAÇÂO (Serve para juntar dados)
        console.log("Olá "+aluno+ " bem-vindo ao "+escola+"!"); //concatenando com +
  
        //Template literal/string
        console.log(`Olá ${aluno} bem-vindo ao ${escola}!`);


        /* Sobre aspas (simples '' ou duplas "")
        Aspas são usadas para textos/strings */

        let estiloMusical_1 = "Rock 'n' Roll";
        // let estiloMusical_2 = 'Rock 'n' Roll'; ERRADO!
        let estiloMusical_3 = 'Rock "n" Roll'; //CERTO
        let estiloMusical_4 = 'Rock \'n\' Roll'; //CERTO

        /* A barra invertida significa "ESCAPE"
        indicamos pro JS que aqueke caractere cin a barra
         deve ser entendido apenas como um texto qualquer
         sem interferencia com a linguagem de programação
        */
