function validarReserva(viajero) {
    if (viajero.edad < 18 && !viajero.acompanadoPorAdulto) {
        return "Rechazado: Menor de edad sin acompañante.";
    }

    if (viajero.destino === "Internacional" && !viajero.tienePasaporte) {
        return "Rechazado: Destino internacional requiere pasaporte.";
    }

    if (viajero.edad > 80 && !viajero.certificadoMedico) {
        return "Rechazado: Requiere certificado médico para mayores de 80.";
    }

    return "Aprobado: Reserva confirmada.";
}

const turista1 = { edad: 25, destino: "Internacional", tienePasaporte: true, acompanadoPorAdulto: true, certificadoMedico: false };
const turista2 = { edad: 15, destino: "Nacional", tienePasaporte: false, acompanadoPorAdulto: false, certificadoMedico: false };

console.log(validarReserva(turista1));
console.log(validarReserva(turista2));