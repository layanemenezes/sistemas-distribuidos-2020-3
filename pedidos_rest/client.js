const axios = require('axios');

var readlineSync = require('readline-sync');

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



function finalizar() {
	axios.get('http://127.0.0.1:2000/consulta')
		.then(function (response) {
			const pedido = response.data;

			console.log(pedido);

			axios.get('http://127.0.0.1:2000/total')
				.then(function (response) {
					console.log(response.data);
				})
				.catch(function (error) {
					console.log(error);
				})
				.then(function () {
					console.log("Execução concluída!");
				});

		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
			console.log("Execução concluída!");
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
		axios.post('http://127.0.0.1:2000/pedido',
			lanche[input]
		).then(function (response){
			console.log(response.data);
			atendimento();
		}).catch(function (error){
			console.log(error);
		});
	}
};

console.log("Menu: ", lanche);
console.log("Qual o seu pedido? ");
atendimento();

// while (true) {
//	input = readlineSync.prompt();
//	console.log('(0 para finalizar) Quer adicionar algo ao carrinho? ');
//	if (input === '0') {
//		break;
//	} else if (input > lanche.length-1){
//		console.log('(0 para finalizar) Entrada inválida. Tente novamente.');
//	} else {
//		axios.post('https://node_rest.herokuapp.com/pedido',
//			lanche[input]
//		).then(function (response){
//			console.log(response.data);
//		}).catch(function (error){
//			console.log(error);
//		});
//	}
// };

// console.log('Adicionando ao carrinho.');

// axios.get('https://node_rest.herokuapp.com/consulta')
//	.then(function (response) {
//		const pedido = response.data;

//		console.log(pedido);
//	})
//	.catch(function (error) {
//		console.log(error);
//	})
//	.then(function () {
//		console.log("Execução concluída!");
//	});

// axios.get('https://node_rest.herokuapp.com/total')
//	.then(function (response) {
//		console.log(response.data);
//	})
//	.catch(function (error) {
//		console.log(error);
//	})
//	.then(function () {
//		console.log("Execução concluída!");
//	});
