let tieneAlergia = false;
let esMenor = true;

function diagnosticarCita(alergia, menor) {
    if (alergia) {
        return "Error: Riesgo de salud por alergia.";
    } else if (menor) {
        return "Error: El cliente no cumple con la mayoría de edad.";
    } else {
        return "Cita aprobada: El cliente es apto para el procedimiento.";
    }
}

console.log(diagnosticarCita(tieneAlergia, esMenor));