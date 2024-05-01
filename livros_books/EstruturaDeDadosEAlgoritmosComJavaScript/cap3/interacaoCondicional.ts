const isEven = (x) => {
	// devolve true se x for múltiplo de 2
	return x % 2 === 0 ? true : false; 
	//return (x % 2 == 0);
}

/* OU
const isEven = x => x % 2 === 0;
*/

let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

/*
for(let i = 0; i < numeros.length; i++) {
	console.log(numeros[i] + " - " + isEven(numeros[i]));
};
*/

// console.log(numeros.every(isEven)); // false
// console.log(numeros.some(isEven)); // false

// numeros.forEach(x => console.log(x % 2 === 0));

const meuMap = numeros.map(isEven);
console.info(meuMap[9]);

const numerosPares = numeros.filter(isEven);
console.log(numerosPares);

// ========== REDUCE ==========

console.info(numeros.reduce((previous, current) => previous + current));

// ========== FOR... OF ==========

for(const numero of numeros){
	console.log(numero % 2 == 0 ? "par" : "ímpar");
}

// ========== ITERADOR ==========

let iterador = numeros[Symbol.iterator]();
console.info(iterador.next().value);
console.info(iterador.next().value);
console.info(iterador.next().value);
console.info(iterador.next().value);
console.info(iterador.next().value);
