var mqtt = require('mqtt')
var server  = mqtt.connect({ host: 'localhost', port: 8888 })

var srv_id = 'srv:'

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
   ] 

const pedido = [];

server.subscribe('faz-pedido', function(err) {
  if (!err){
    console.log("Subscrito no tópico 'faz-pedido' com sucesso!");
  };
});

server.subscribe('lista-pedido', function(err) {
  if (!err){
    console.log("Subscrito no tópico 'lista-pedido' com sucesso!");
  };
});

server.subscribe('finaliza-pedido', function(err) {
  if (!err){
    console.log("Subscrito no tópico 'finaliza-pedido' com sucesso!");
  };
});

server.on('message', function(topic, message){
    const FAZ_PEDIDO = 'faz-pedido';
    const LISTA_PEDIDO = 'lista-pedido';
    const FINALIZA_PEDIDO = 'finaliza-pedido';

    var message_str = message.toString()
    var check = true
    
    if (message_str.substring(0, 4) == srv_id) {
      check = false
    } else {
      message_str = message_str.substring(4)
    }
  
    if (check) {
      switch(topic) {
        case FAZ_PEDIDO:
            var l = message_str
            pedido.push(l);
            break;
        case LISTA_PEDIDO:
            console.log(pedido)
            server.publish(LISTA_PEDIDO, srv_id + pedido.toString());
            break;
        case FINALIZA_PEDIDO:
            soma = 0;
            pedido.forEach(function(d) {
                aux = JSON.parse(d)
                soma += aux.preco;
            })
            server.publish(FINALIZA_PEDIDO, srv_id + 'O preço do seu pedido é: ' + soma);
            break;
      }
    }
    
});
