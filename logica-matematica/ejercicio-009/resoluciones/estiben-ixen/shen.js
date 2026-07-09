function calcularDistribucionFunciones(peliculas) {
    const TIEMPO_BLOQUE = 120; // Bloques de 120 minutos

    return peliculas.map(pelicula => {
        const resto = pelicula.duracion % TIEMPO_BLOQUE;
        const requiereBloqueExtra = resto > 0;
        const totalBloques = Math.floor(pelicula.duracion / TIEMPO_BLOQUE) + (requiereBloqueExtra ? 1 : 0);
        
        return {
            titulo: pelicula.titulo,
            totalBloques,
            tiempoDesperdiciado: requiereBloqueExtra ? (TIEMPO_BLOQUE - resto) : 0
        };
    });
}

const cartelera = [
    { titulo: "El Orfanato", duracion: 105 },
    { titulo: "El Conjuro", duracion: 130 },
    { titulo: "IT", duracion: 240 }
];

console.log(calcularDistribucionFunciones(cartelera));