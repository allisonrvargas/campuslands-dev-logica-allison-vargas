let escena = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 1]
];

function buscarObjeto(matriz, fila, columna) {
    if (matriz[fila] && matriz[fila][columna] === 1) {
        return "Objeto encontrado en [" + fila + "," + columna + "]";
    } else {
        return "Espacio vacío en [" + fila + "," + columna + "]";
    }
}

console.log(buscarObjeto(escena, 0, 1));