const prompt = require("prompt-sync")();
const velocPermitida = Number(prompt("Velocidade Permitida: "));
const velocCondutor = Number(prompt("Velocidade do condutor: "));

if(velocCondutor > velocPermitida && velocCondutor <= velocPermitida * 1.2){
	console.log("Multa leve");
} else if(velocCondutor > velocPermitida * 1.2){
	console.log("Multa Grave")
} else {
	console.log("Sem Multas");
}