const net = require('net');

// cria objeto do tipo socket utilizado para
// realizar comunicação entre cliente e servidor
const socket = net.Socket();

const lanche = [
	{id: 0,
	nome: 'finalizado',
	preco: 0.0},
	{ id: 1,
	nome: "hamburguer",
	preco: 15.0},
	{ id: 2,
	nome: "pizza",
	preco: 25.0},
	{ id: 3,
	nome: "refri",
	preco: 5.0}
];

var readlineSync = require('readline-sync');

// função que trata todos os eventos da conexão no cliente
function realizaConexao () {
    // imprime msg na tela
    console.log("Conectado!");

    // envio "MENSAGEM2" para o servidor
    console.log("Menu: ", lanche);
    console.log("Qual o seu pedido? ");
    pedido = [];
    while (true) {
        input = readlineSync.prompt();
        console.log('(0 para finalizar) Quer adicionar algo ao carrinho? ');
        if (input === '0') {
            break;
        } else if (input > lanche.length-1){
            console.log('(0 para finalizar) Entrada inválida. Tente novamente.');
        } else {
            pedido.push(input);
            
        }
        
    }
    socket.write(pedido.toString());
    // código que executa quando dados são recebidos
    socket.on("data", function (data) {
        var readlineSync = require('readline-sync');
        const mensagem = data.toString()
        
        console.log(mensagem);

        // encerro a conexão
    });
    socket.end();
}

// realiza a conexão com o servidor
socket.connect(1337, "127.0.0.1", realizaConexao);