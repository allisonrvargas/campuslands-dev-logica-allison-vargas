let proyectos = [
    { nombre: "Edificio A", puntaje: 9.5, completo: true },
    { nombre: "Casa B", puntaje: 5.0, completo: true },
    { nombre: "Puente C", puntaje: 8.0, completo: false },
    { nombre: "Museo D", puntaje: 7.2, completo: true }
];

proyectos.forEach(p => {
    if (!p.completo) {
        console.log(p.nombre + ": DESCALIFICADO");
        return;
    }

    if (p.puntaje >= 9) {
        console.log(p.nombre + ": TOP NIVEL");
    } else if (p.puntaje >= 6) {
        console.log(p.nombre + ": NIVEL ESTÁNDAR");
    } else {
        console.log(p.nombre + ": POR MEJORAR");
    }
});