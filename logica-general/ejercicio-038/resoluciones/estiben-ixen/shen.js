function asignarTurno(soldador) {
    const { nombre, nivelCertificacion, tieneExperienciaEspecial, disponibilidad } = soldador;

    if (!disponibilidad) {
        return { dictamen: "no apto", razon: "Personal no disponible actualmente." };
    }

    if (nivelCertificacion === 3 && tieneExperienciaEspecial) {
        return { dictamen: "asignado", razon: "Soldador de alta capacidad listo para turno crítico." };
    }
    
    if (nivelCertificacion >= 2) {
        return { dictamen: "en espera", razon: "Soldador cualificado, requiere validación de experiencia especial." };
    }

    return { dictamen: "no apto", razon: "Nivel de certificación insuficiente para este turno." };
}

const soldadorA = { nombre: "Juan", nivelCertificacion: 3, tieneExperienciaEspecial: true, disponibilidad: true };
console.log(asignarTurno(soldadorA));