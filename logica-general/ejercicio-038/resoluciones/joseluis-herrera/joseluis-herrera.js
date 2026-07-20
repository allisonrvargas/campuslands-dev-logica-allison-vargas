const operarios = [
    { nombre: "Carlos", nivel_certificacion: 2, urgencia: 1, tiempo_espera: 10 },
    { nombre: "Ana", nivel_certificacion: 5, urgencia: 2, tiempo_espera: 5 },
    { nombre: "Luis", nivel_certificacion: 3, urgencia: 3, tiempo_espera: 15 },
    { nombre: "Sofia", nivel_certificacion: 4, urgencia: 1, tiempo_espera: 20 }
];

let turno_asignado = operarios[0];
let calcular_prioridad = (o) => (o.nivel_certificacion * 100) + (o.urgencia * 200) + (o.tiempo_espera * 10);

if (operarios.length === 0) {
    console.log("No hay operarios en la cola de soldadura.");
} else {
    operarios.forEach((operario) => {
        if (calcular_prioridad(operario) > calcular_prioridad(turno_asignado)) {
            turno_asignado = operario;
        }
    });
    console.log(`El operario seleccionado para el turno es: ${turno_asignado.nombre}`);
}