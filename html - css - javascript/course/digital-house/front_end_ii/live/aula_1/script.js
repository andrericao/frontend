//var name = 'André';
let userNamer = window.prompt('Digite seu name');
let userAge = window.prompt('Digite sua idade');
let userProf = window.prompt('Digite sua profissão');

const welcomeMessage = "Olá " + userNamer + ' você tem ' + userAge + ' e trabalha como ' + userProf + ', certo?';

console.log(welcomeMessage);
alert(welcomeMessage);

var h1 = document.getElementById('teste');

document.getElementById('teste').innerHTML = 'Passando teste!'

console.log(h1);

