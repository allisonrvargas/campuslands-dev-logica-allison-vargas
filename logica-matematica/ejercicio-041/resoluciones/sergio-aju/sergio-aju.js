/**
 * @param {number[]} participantes 
 * @param {number} bono
 * @param {number} penalizacion 
 */
function calcularRendimiento(participantes, bono, penalizacion) {
    if (participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "novato",
            explicacion: "No hubo participantes, el puntaje base es 0."
        };
    }

    const suma = participantes.reduce((acc, val) => acc + val, 0);
    const promedio = suma / participantes.length;

    const puntajeFinal = promedio + bono - penalizacion;

    let clasificacion = "";
    if (puntajeFinal < 15) {
        clasificacion = "novato";
    } else if (puntajeFinal <= 30) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "profesional";
    }

    return {
        puntaje_final: puntajeFinal.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Promedio de ${promedio.toFixed(2)} más bono de ${bono} menos penalización de ${penalizacion}.`
    };
}
const resultadoNormal = calcularRendimiento([12, 18, 25, 30], 8, 3);
console.log("Caso Normal:", resultadoNormal);

const resultadoBorde = calcularRendimiento([], 5, 2);
console.log("Caso Borde:", resultadoBorde);