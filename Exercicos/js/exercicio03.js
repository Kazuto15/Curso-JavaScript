let salario=5000;
let novoSalario;

if(salario < 1500){
    novoSalario = salario * 1.15;
}else if(salario <=3000){
    novoSalario = salario * 1.10
}else {
    novoSalario = salario * 1.05
}
console.log(`Seu antigo salario era R$${salario} e após o reajuste é R$${novoSalario.toFixed(2)}`);//Fixar em duas casas decimais

//Tratar/formatar como moeda em reais
console.log(`Seu antigo salario era R$${salario} e após o reajuste é R$${novoSalario.toLocaleString("pt-br",{
    style: "currency",
    currency:"BRL"
})}`);

novoSalario=(salario < 1500)? novoSalario=salario *1.15 : (salario < 3000) ? novoSalario=salario *1.10 : novoSalario = salario *1.05
console.log(`Seu antigo salario era R$${salario} e após o reajuste é R$${novoSalario.toFixed(2)}`);

