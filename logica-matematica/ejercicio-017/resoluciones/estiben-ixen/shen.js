function generarRankingProyectos(proyectos) {
    return proyectos.map(p => {
        const score = (p.calidadDetalle * 0.7) + (p.velocidadEntrega * 0.3);
        let categoria = "";

        if (score >= 90) categoria = "Élite";
        else if (score >= 70) categoria = "Profesional";
        else categoria = "Estándar";

        return { ...p, score: score.toFixed(2), categoria };
    }).sort((a, b) => b.score - a.score);
}

const proyectos = [
    { nombre: "Edificio Centro", calidadDetalle: 95, velocidadEntrega: 80 },
    { nombre: "Villa Moderna", calidadDetalle: 85, velocidadEntrega: 90 },
    { nombre: "Casa Minimalista", calidadDetalle: 60, velocidadEntrega: 70 }
];

console.table(generarRankingProyectos(proyectos));