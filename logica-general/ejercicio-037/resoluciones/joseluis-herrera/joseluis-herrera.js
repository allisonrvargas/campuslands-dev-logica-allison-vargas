const edificios = [
    { nombre: "Torre A", altura: 120, detalle: 5, estabilidad: 80 },
    { nombre: "Torre B", altura: 200, detalle: 2, estabilidad: 90 },
    { nombre: "Torre C", altura: 150, detalle: 8, estabilidad: 60 },
    { nombre: "Torre D", altura: 90, detalle: 10, estabilidad: 95 }
];

let ganador = edificios[0];
let calcular_puntuaje = (e) => (e.altura * 5) + (e.detalle * 200) + (e.estabilidad * 50);

if (edificios.length === 0) {
    console.log("No hay edificios registrados.");
} else {
    edificios.forEach((edificio) => {
        if (calcular_puntuaje(edificio) > calcular_puntuaje(ganador)) {
            ganador = edificio;
        }
    });
    console.log(`El edificio más eficiente es ${ganador.nombre}`);
}