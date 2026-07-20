const analizarPelicula = (frames, intervalo) => {
    if (frames.length === 0) return { puntaje_total: 0, clasificacion: "Moderado", explicacion: "Sin escenas." };

    const suma = frames.reduce((a, b) => a + b, 0);
    const jumpScares = frames.filter(f => f % intervalo === 0).length;
    
    const puntajeTotal = suma + (jumpScares * 10);
    const clasificacion = jumpScares > (frames.length / 3) ? "Intensa" : "Suspenso Moderado";

    return {
        puntaje_total: puntajeTotal,
        clasificacion: clasificacion,
        explicacion: `Se detectaron ${jumpScares} momentos de terror intenso.`
    };
};

console.log(analizarPelicula([10, 20, 30, 40], 10));
console.log(analizarPelicula([5, 7, 11], 10));