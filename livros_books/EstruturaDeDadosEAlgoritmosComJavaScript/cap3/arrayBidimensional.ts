let mediaTemperatura = [];
mediaTemperatura[0] = [ 72, 75, 79, 79, 81, 81 ];
mediaTemperatura[1] = [ 81, 79, 75, 75, 73, 72 ];

const displayMatriz = (matriz) => {
	for (let i = 0; i < matriz.length; i++){
		for(let j = 0; j < matriz[i].length; j++){
			console.table(matriz[i][j]);
		}
	}
}

displayMatriz(mediaTemperatura);
console.table(mediaTemperatura);