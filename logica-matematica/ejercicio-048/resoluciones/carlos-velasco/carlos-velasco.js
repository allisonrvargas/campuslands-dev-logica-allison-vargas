const calcularPuntajePelicula = (puntajes, bono, penalizacion) => {
    if (puntajes.length === 0) return { puntaje_final: 0, clasificacion: "Decepción", explicacion: "Sin críticas." };

    const suma = puntajes.reduce((a, b) => a + b, 0);
    const bajos = puntajes.filter(p => p < 5).length;
    
    let final = (suma / puntajes.length) + bono - (bajos * penalizacion);
    if (final < 0) final = 0;

    let clasificacion = "Decepción";
    if (final > 8) clasificacion = "Obra Maestra";
    else if (final > 5) clasificacion = "Buena";

    return {
        puntaje_final: final.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Promedio calculado con ${bajos} críticas negativas penalizadas.`
    };
};

console.log(calcularPuntajePelicula([8, 9, 4], 1, 2));
console.log(calcularPuntajePelicula([2, 3], 0, 5));