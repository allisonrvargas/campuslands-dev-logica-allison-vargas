const reactivos = [
    { nombre: "Ácido Sulfúrico", cantidad: 50, esPeligroso: true, proximoAVencer: false },
    { nombre: "Etanol", cantidad: 20, esPeligroso: true, proximoAVencer: true },
    { nombre: "Agua Destilada", cantidad: 100, esPeligroso: false, proximoAVencer: false },
    { nombre: "Cloruro de Sodio", cantidad: 80, esPeligroso: false, proximoAVencer: false }
];

let reactivoPrioritario = reactivos[0];
let calcular_urgencia = (r) => {
    let puntaje = (r.cantidad * 0.5);
    puntaje *= (r.esPeligroso ? 2.0 : 1.0);
    if (r.proximoAVencer) puntaje -= 100;
    return puntaje;
};

if (reactivos.length === 0) {
    console.log("No hay reactivos registrados en el inventario.");
} else {
    reactivos.forEach((reactivo) => {
        if (calcular_urgencia(reactivo) < calcular_urgencia(reactivoPrioritario)) {
            reactivoPrioritario = reactivo;
        }
    });
    console.log(`El reactivo que requiere reabastecimiento urgente es: ${reactivoPrioritario.nombre}`);
}