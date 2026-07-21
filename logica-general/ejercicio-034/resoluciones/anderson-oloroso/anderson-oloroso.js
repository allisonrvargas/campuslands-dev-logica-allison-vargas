function diagnosticarSolicitudesTatuajes(solicitudes) {
  if (!Array.isArray(solicitudes) || solicitudes.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos una solicitud registrada."
    };
  }

  const diagnosticos = [];
  let solicitudesValidas = 0;

  for (const solicitud of solicitudes) {
    const {
      cliente,
      edad,
      tamano,
      presupuesto,
      consentimiento
    } = solicitud;

    if (
      !cliente ||
      edad <= 0 ||
      tamano <= 0 ||
      presupuesto < 0 ||
      typeof consentimiento !== "boolean"
    ) {
      diagnosticos.push({
        cliente,
        estado: "Error",
        motivo: "Datos incompletos o inválidos."
      });
      continue;
    }

    if (edad < 18) {
      diagnosticos.push({
        cliente,
        estado: "Rechazada",
        motivo: "El cliente es menor de edad."
      });
      continue;
    }

    if (!consentimiento) {
      diagnosticos.push({
        cliente,
        estado: "Pendiente",
        motivo: "Falta el consentimiento informado."
      });
      continue;
    }

    if (presupuesto < tamano * 50) {
      diagnosticos.push({
        cliente,
        estado: "Pendiente",
        motivo: "El presupuesto es insuficiente."
      });
      continue;
    }

    solicitudesValidas++;

    diagnosticos.push({
      cliente,
      estado: "Aprobada",
      motivo: "La solicitud cumple todos los requisitos."
    });
  }

  return {
    solicitudesAnalizadas: solicitudes.length,
    solicitudesValidas,
    diagnosticos
  };
}

const solicitudes = [
  {
    cliente: "Laura",
    edad: 25,
    tamano: 8,
    presupuesto: 600,
    consentimiento: true
  },
  {
    cliente: "Carlos",
    edad: 17,
    tamano: 5,
    presupuesto: 500,
    consentimiento: true
  },
  {
    cliente: "Andrea",
    edad: 28,
    tamano: 10,
    presupuesto: 300,
    consentimiento: true
  }
];

console.log(diagnosticarSolicitudesTatuajes(solicitudes));