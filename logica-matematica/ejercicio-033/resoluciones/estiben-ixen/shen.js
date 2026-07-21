function calcularAterrizaje(puntoA, puntoB, viento) {
    const [x1, y1] = puntoA;
    const [x2, y2] = puntoB;

    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    let distanciaEfectiva = viento > 15 ? distancia + (viento * 0.5) : distancia;

    let estado = "";
    if (distanciaEfectiva <= 10) {
        estado = "Preciso";
    } else if (distanciaEfectiva <= 50) {
        estado = "Controlado";
    } else {
        estado = "Riesgoso (fuera de zona)";
    }

    return {
        distancia_final: parseFloat(distanciaEfectiva.toFixed(2)),
        estado: estado
    };
}

console.log("Caso Normal:", calcularAterrizaje([0, 0], [5, 5], 5));
console.log("Caso Borde (Viento fuerte):", calcularAterrizaje([0, 0], [10, 10], 30));