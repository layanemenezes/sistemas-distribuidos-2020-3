const express = require('express');

const app = express();

const porta = process.env.PORT || 2000;

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

const pedido = [];

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/consulta/:pos", (req, res) => {
	const posicao = req.params.pos;

	res.send(JSON.stringify(pedido[posicao]));
});


app.get("/consulta", (req, res) => {
	res.send(" >>>>>>> Lista de Pedidos: " + JSON.stringify(pedido));
});

app.post("/pedido", (req, res) => {
	const p = req.body;

	pedido.push(p);

	console.log(req.body);

	res.send("Adição registrada com sucesso ao pedido.");
});

app.get("/total", (req, res) => {
	soma = 0;
	pedido.forEach(function(d) {
		//aux = JSON.parse(d);
		soma += d.preco;
	});

	res.send('O preço do seu pedido é: ' + soma);
});


app.listen(porta, () => {
	console.log("Servidor inicializado!");
});
