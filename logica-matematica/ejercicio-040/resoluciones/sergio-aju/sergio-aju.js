function calcularRendimiento(participantes, bono, penalizacion) {
    if (participantes.length === 0) {
        return { puntajeFinal: 0, clasificacion: "en desarrollo" };
    }
    const suma = participantes.reduce((acc, val) => acc + val, 0);
    const promedio = Math.round(suma / participantes.length);
    
    const puntajeFinal = promedio + bono - penalizacion;

    let clasificacion = "";
    if (puntajeFinal >= 50) {
        clasificacion = "alto impacto";
    } else if (puntajeFinal >= 20) {
        clasificacion = "eficiente";
    } else {
        clasificacion = "en desarrollo";
    }
    return { puntajeFinal, clasificacion };
}
const data = [12, 18, 25, 30];
const resultado = calcularRendimiento(data, 8, 3);
console.log(`puntaje_final: ${resultado.puntajeFinal}`);
console.log(`clasificacion: ${resultado.clasificacion}`);