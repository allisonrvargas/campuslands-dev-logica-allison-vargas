function asignarPrioridad(servicio) {
    const { tipoServicio, urgenciaCliente, disponibilidadRepuestos } = servicio;

    if (!disponibilidadRepuestos) {
        return { prioridad: "Espera", razon: "Reparación pausada por falta de repuestos." };
    }

    const esCritico = tipoServicio === "frenos" || tipoServicio === "motor";
    
    if (esCritico && urgenciaCliente) {
        return { prioridad: "Inmediata", razon: "Servicio crítico de seguridad con alta prioridad." };
    }

    return { prioridad: "Programada", razon: "Servicio agendado según disponibilidad del taller." };
}

const casoTaller = { tipoServicio: "aceite", urgenciaCliente: false, disponibilidadRepuestos: true };
console.log(asignarPrioridad(casoTaller));