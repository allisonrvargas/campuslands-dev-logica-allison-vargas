/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} margenError 
 */
function calcularDistanciaAterrizaje(x, y, margenError) {
    const distancia = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    
    let estado = "";
    if (distancia <= margenError) {
        estado = "Aterrizaje perfecto";
    } else if (distancia <= 50) {
        estado = "Zona segura";
    } else {
        estado = "Fuera de rango";
    }

    return {
        distancia: distancia.toFixed(2),
        estado: estado,
        explicacion: `El paracaidista aterrizó a ${distancia.toFixed(2)} unidades del centro.`
    };
}
console.log("Caso Normal:", calcularDistanciaAterrizaje(30, 40, 10)); 
console.log("Caso Borde:", calcularDistanciaAterrizaje(0, 0, 5));