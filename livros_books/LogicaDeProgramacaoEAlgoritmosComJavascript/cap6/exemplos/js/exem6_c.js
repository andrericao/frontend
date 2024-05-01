const cidades = ["Pelotas", "São Lourenço", "Porto Alegre"];
for(let i = 0; i < cidades.length; i++){
	console.log(cidades[i]);	
}

console.log("-".repeat(40)); // separador
console.log("TOSTRING: " + cidades.toString());
console.log("JOIN: " + cidades.join(" - "));