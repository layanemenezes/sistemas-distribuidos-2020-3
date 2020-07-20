var mqtt = require('mqtt');
var client  = mqtt.connect({ host: 'localhost', port: 8888 });

var readlineSync = require('readline-sync');

const { exception } = require('console');
const { STATUS_CODES } = require('http');
var user_id = "anonymous:";
var topic_id = null;


var WRITING = false;


var readline = require('readline');

function setup(){
	console.clear();

	console.log("\t\tCHAT");

	user_id = readlineSync.question("Insira seu nome para identificação > ");

	topic_id = readlineSync.question("Insira o nome da sala que deseja entrar > ");

	console.clear();


	client.subscribe(topic_id, function(err) {
		if (!err){
			console.log("\t\tCHAT - [%s]\n", topic_id);
			console.log("Você entrou na sala '%s'! Comece a conversar!", topic_id);
			console.log("Para sair da aplicação use o comando [\\exit]");
			console.log("Para entrar em uma nova sala use o comando [\\restart]\n");

			client.publish(topic_id, 'O usuário [' + user_id + '] entrou na sala!');
			client.publish(topic_id, user_id + ':startchatgrimes');
		};
	});
}

client.on('connect', function () {
	setup();
});


function chat(chat_msg) {
	const EXIT = '\\exit';
	const RESTART = '\\restart';

	switch (chat_msg) {
	case EXIT:
		client.publish(topic_id, 'exitRequest:' + user_id);
		break;
	case RESTART:
		client.publish(topic_id, 'restartRequest:' + user_id);
		break;
	default:
		client.publish(topic_id, user_id + ':' + chat_msg);
	}

}

client.on('message', function(topic, message){
	var content = message.toString();

	if (topic == topic_id){
		var username = content.split(':')[0];
		var message_str = content.split(':')[1];
		var timestamp = new Date().toLocaleTimeString();

		if (username == 'exitRequest') {
			if (message_str == user_id) {
				client.end();
				process.kill(process.pid, 'SIGTERM');
			} else {
				console.log('\nO usuário [' + message_str + '] saiu da sala!');
				process.stdout.write("Digite sua mensagem > ");
			}
		} else if (username == 'restartRequest') {
			if (message_str == user_id) {
				client.unsubscribe(topic_id);
				setup();
			} else {
				console.log('\nO usuário [' + message_str + '] saiu da sala!');
				process.stdout.write("Digite sua mensagem > ");
			}
		} else {
			if (message_str == undefined) {
				if (username != user_id){
					console.log('\n' + content);
				} else {
					console.log(content);
			}
			} else {
				if (message_str != 'startchatgrimes'){
					if (username != user_id){
						console.log('\n' + username + ' [' + timestamp + ']: ' + message_str);
					} else {
						console.log(username + ' [' + timestamp + ']: ' + message_str);
					}
				}
			}


			if (username == user_id) {
				var rl = readline.createInterface({
					input: process.stdin,
					output: process.stdout
				});

				rl.question('Digite sua mensagem > ', (answer) => {
					rl.close();
					chat(answer);
				});
			} else {
				if (message_str != 'startchatgrimes'){
					process.stdout.write("Digite sua mensagem > ");
				}
			}


		}


	}
});
