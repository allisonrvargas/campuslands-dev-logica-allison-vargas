function calcularRankingArquitectura(puntajes) {
    if (!puntajes || puntajes.length === 0) return { error: "No hay datos de puntajes" };

    const total = puntajes.reduce((acc, curr) => acc + curr, 0);
    const promedio = total / puntajes.length;
    const maximo = Math.max(...puntajes);
    const ranking = puntajes.map((p, index) => {
        let categoria = p >= promedio ? "Nivel Avanzado" : "Nivel Estándar";
        return { proyecto: index + 1, puntaje: p, categoria: categoria };
    });

    return {
        promedio_general: promedio.toFixed(2),
        puntaje_maximo: maximo,
        detalle_ranking: ranking
    };
}
const listaPuntajes = [85, 92, 78, 60, 95];
console.log("Ranking:", calcularRankingArquitectura(listaPuntajes));
console.log("Caso Borde:", calcularRankingArquitectura([70]));