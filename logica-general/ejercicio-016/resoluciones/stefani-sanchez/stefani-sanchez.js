// Logica general 016 - Matrices simples
// Animacion 3D

// Entradas
const escena = [
    ["Camara", "Luz", "Personaje"],
    ["Arbol", "Casa", "Auto"],
    ["Cielo", "Montaña", "Rio"]
];

// Funcion para recorrer la matriz
function mostrarEscena(matriz) {

    if (!Array.isArray(matriz) || matriz.length === 0) {
        return "La escena esta vacia.";
    }

    const elementos = [];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            elementos.push(matriz[i][j]);
        }
    }

    return elementos;
}

// Prueba normal
console.log("Prueba 1:");
console.log(mostrarEscena(escena));

// Caso borde
console.log("\nPrueba 2 - Caso borde:");
console.log(mostrarEscena([]));