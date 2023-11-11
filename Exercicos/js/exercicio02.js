let pedido ={
    codigo:"019203",
    data:"23/09/2023",
    produtos:[
       ["Redmi note 11","Acer nitro 5","PS5"]
    ],
    precoPedido:5200,
    prazoEntrega: "9/10/2023",

}

console.log(`O codigo do seu pedido é: ${pedido.codigo}, feito na data ${pedido.data}
${pedido.produtos[0]} E ficou no valor de ${new Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(pedido.precoPedido)}`);


let precoFormatado = pedido.precoPedido.toLocaleString(
    "pt-br",{
        style:"currency",
        currency:"BRL"
    }
)
console.log(precoFormatado);

console.log(`Preco do pedido: ${precoFormatado}`);
console.log(`Preço do pedido: ${pedido.precoPedido.toLocaleString(
    "pt-br",{
        style:"currency",
        currency:"BRL"
    }
)}`);
