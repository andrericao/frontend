const matrizx3x3x3 = [];
/*
for(let i = 0; i < 3; i++){
	matrizx3x3x3[i] = []; // precisamos inicializar cada array
	for(let j = 0; j < 3; j++){
		matrizx3x3x3[i][j] = [];
		for(let z = 0; z < 3; z++){
			matrizx3x3x3[i][j][z] = i + j + z;
		}
	}
}
*/
for(let i = 0; i < matrizx3x3x3.length; i++){
	for(let j = 0; j < matrizx3x3x3[i].length ; j++){
		for(let z = 0; z < matrizx3x3x3[i][j].length; z++){
			console.log(matrizx3x3x3[i][j][z]);
		}
	}
}