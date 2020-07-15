// definição do caminho do arquivo proto
const PROTO_PATH = "./restaurant.proto";

const grpc = require('grpc');

const protoLoader = require('@grpc/proto-loader');

// carregamento do arquivo proto e geração das definições
const packageDefinition = protoLoader.loadSync(
	PROTO_PATH,
	{keepCase: true,
	 longs: String,
	 enums: String,
	 defaults: true,
	 oneofs: true
	});

// carregamento do código do serviço
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition).lanche;

const client = new protoDescriptor.ServicoLanche('127.0.0.1:50051',
									grpc.credentials.createInsecure());

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

var call = null;

function finalizar() {
	client.ListarLanches({}, function(err, response){
		if (err != null) {
			console.log("Ocorreu um erro invocando o procedimento ListaLanches");
			return;
		}

		console.log(" >>>>>>> Lista de Pedidos: " + JSON.stringify(response.lanches));

		client.FinalizaPedido({}, function(err, response){
			if (err != null) {
				console.log("Ocorreu um erro invocando o procedimento FinalizaPedido");
				return;
			}

			console.log(response);
			console.log(" O preço total do pedido é " + response.valor + ".");
		});

	});
}

// pra resolver o problema da chamadas asincronas encapsulei uma chamada dentro da outra
function atendimento() {
	input = readlineSync.prompt();

	console.log('(0 para finalizar) Quer adicionar algo ao carrinho? ');
	if (input === '0') {
		finalizar();
	} else if (input > lanche.length-1){
		console.log('(0 para finalizar) Entrada inválida. Tente novamente.');
		atendimento();
	} else {
		client.RegistrarPedido(lanche[input], function(err, response) {
			if (err != null) {
				console.log("Ocorreu um erro invocando o procedimento RegistrarPedido");
				return;
			}

			console.log("Adição registrada com sucesso ao pedido.");
			atendimento();
		});
	}
};

console.log("Menu: ", lanche);
console.log("Qual o seu pedido? ");
atendimento();
