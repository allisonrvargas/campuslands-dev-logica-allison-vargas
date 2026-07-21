function calcularPuntaje(participantes, bono, penalizacion) {
    if (participantes.length === 0) return { puntaje: 0, clasificacion: "N/A" };

    const suma = participantes.reduce((acc, val) => acc + val, 0);
    const promedio = Math.round(suma / participantes.length);
    const puntajeFinal = promedio + bono - penalizacion;

    let clasificacion = "";
    if (puntajeFinal >= 50) clasificacion = "elite";
    else if (puntajeFinal >= 20) clasificacion = "competitivo";
    else clasificacion = "principiante";

    return { puntajeFinal, clasificacion };
}
const resultado1 = calcularPuntaje([12, 18, 25, 30], 8, 3);
console.log(resultado1); 

const casoBorde = calcularPuntaje([], 8, 3);
console.log(casoBorde);