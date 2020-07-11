var mqtt = require('mqtt')
var client  = mqtt.connect({ host: 'localhost', port: 8888 })

const readline = require('readline');
const { exception } = require('console');
const { STATUS_CODES } = require('http');
const cli_id = "cli:"

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

client.on('connect', function () {

  var readlineSync = require('readline-sync');

  console.log("Menu: ", lanche);
  console.log("Qual o seu pedido? ");

  while (true) {
    input = readlineSync.prompt();
    console.log('(0 para finalizar) Quer adicionar algo ao carrinho? ');
    if (input === '0') {
      break;
    } else if (input > lanche.length-1){
      console.log('(0 para finalizar) Entrada inválida. Tente novamente.');
    } else {
      client.publish('faz-pedido', cli_id + JSON.stringify(lanche[input]));
    }
    
  }
  console.log('Adicionando ao carrinho.');

  client.publish('lista-pedido', cli_id);
  
  client.publish('finaliza-pedido', cli_id);
  
  client.end();
});

client.subscribe('lista-pedido', function(err) {
  if (!err){
    console.log("Subscrito no tópico 'lista-pedido' com sucesso!");
    };
});

  
client.subscribe('finaliza-pedido', function(err) {
  if (!err){
    console.log("Subscrito no tópico 'finaliza-pedido' com sucesso!");
    };
  });

client.on('message', function(topic, message){
  
  const LISTA_PEDIDO = 'lista-pedido';
  const FINALIZA_PEDIDO = 'finaliza-pedido';

  var message_str = message.toString()
  var check = true
  
  if (message_str.substring(0, 4) == cli_id) {
    check = false
  } else {
    message_str = message_str.substring(4)
  }

  if (check) {
    switch(topic) {
      case LISTA_PEDIDO:
        // const lista = JSON.parse(message);
        console.log('Esse é o seu pedido: ', message_str);
        break;
      case FINALIZA_PEDIDO:
        console.log(message_str)
        break;
    }   
  }
  
});