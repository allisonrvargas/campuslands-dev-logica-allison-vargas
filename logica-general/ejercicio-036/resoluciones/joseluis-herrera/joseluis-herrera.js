let matriz = [
    [2, 6, 8],
    [1, 4, 9],
    [7, 3, 5]
];

let sumaTotal = 0;

for (let i = 0; i < matriz.length; i++) {

    for (let j = 0; j < matriz[i].length; j++) {
        
        let valorActual = matriz[i][j];
    
        if (valorActual > 5) {
            console.log("Detectado valor alto: " + valorActual);
            sumaTotal = sumaTotal + valorActual;
        }
    }
}

console.log("La energía total de las luces altas es: " + sumaTotal);