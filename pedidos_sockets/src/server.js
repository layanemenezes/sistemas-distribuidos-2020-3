var net = require('net');
var HOST = '127.0.0.1';
var PORT =  1337;
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



var server = net.createServer(function(socket){
    //console.log('client connected');
    console.log('CONNECTADO POR: ' + socket.remoteAddress +':'+ socket.remotePort);
    socket.write('Conectado ao servidor');
    // Add a 'data' event handler to this instance of socket
    socket.on('data', function(data){
        const pedido = data.toString().trim().split(",");
        console.log('PEDIDO', pedido);
        pedido_final = [];
        for (i=0;i<pedido.length; i++) {
            pedido_final.push(lanche[parseInt(pedido[i])])
        }
        soma = 0;
        
        pedido_final.forEach(function(d) {
            soma += d.preco;
        });
        console.log(pedido_final);
        socket.write('Valor Total: '+ soma.toString());
        socket.write('Seu pedido está a caminho.');

    });
    
    
    socket.on('end', function(){
        console.log('client disconnected');
    });


});

server.listen(PORT, HOST);