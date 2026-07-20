function calcularCombinacionesPeleas(competidoresCategoriaA, competidoresCategoriaB) {
    if (competidoresCategoriaA < 0 || competidoresCategoriaB < 0) {
        return 0;
    }
    
    const totalPeleasPosibles = competidoresCategoriaA * competidoresCategoriaB;
    return totalPeleasPosibles;
}

const pruebas = [
    { catA: 5, catB: 4, esperado: 20 },
    { catA: 0, catB: 10, esperado: 0 },
    { catA: 3, catB: 3, esperado: 9 },
    { catA: -1, catB: 5, esperado: 0 }
];

pruebas.forEach(({ catA, catB, esperado }) => {
    const resultado = calcularCombinacionesPeleas(catA, catB);
    if (resultado !== esperado) {
        throw new Error(`Error en la prueba para: ${catA} vs ${catB}. Esperado: ${esperado}, Obtenido: ${resultado}`);
    }
});

console.log("Todas las pruebas se ejecutaron con éxito.");