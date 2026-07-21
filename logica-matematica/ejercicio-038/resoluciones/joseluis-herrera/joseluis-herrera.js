const resultadosSoldadura = [
    { id: "S001", penetracion: 85, uniformidad: 90, posicionForzada: true, porosidad: false },
    { id: "S002", penetracion: 95, uniformidad: 95, posicionForzada: false, porosidad: false },
    { id: "S003", penetracion: 70, uniformidad: 80, posicionForzada: true, porosidad: true },
    { id: "S004", penetracion: 90, uniformidad: 85, posicionForzada: false, porosidad: false }
];

let mejorResultado = resultadosSoldadura[0];
let calcular_puntaje = (s) => {
    let puntaje = (s.penetracion * 10) + (s.uniformidad * 5);
    puntaje *= (s.posicionForzada ? 1.5 : 1.0);
    if (s.porosidad) puntaje -= 50;
    return puntaje;
};

if (resultadosSoldadura.length === 0) {
    console.log("No hay resultados de soldadura para procesar.");
} else {
    resultadosSoldadura.forEach((resultado) => {
        if (calcular_puntaje(resultado) > calcular_puntaje(mejorResultado)) {
            mejorResultado = resultado;
        }
    });
    console.log(`La soldadura con mayor calidad es la pieza: ${mejorResultado.id}`);
}