function asignarTurnosSoldadura(operarios) {
  if (!Array.isArray(operarios) || operarios.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen operarios para asignar turnos."
    };
  }

  const resultados = [];
  let turnoManana = 0;
  let turnoTarde = 0;
  let turnoNoche = 0;

  for (const operario of operarios) {
    const {
      nombre,
      experiencia,
      disponibilidad,
      certificado
    } = operario;

    if (
      !nombre ||
      experiencia < 0 ||
      !["Completa", "Parcial"].includes(disponibilidad) ||
      typeof certificado !== "boolean"
    ) {
      resultados.push({
        nombre,
        turno: "Datos inválidos"
      });
      continue;
    }

    let turno = "";

    if (
      experiencia >= 5 &&
      certificado &&
      disponibilidad === "Completa"
    ) {
      turno = "Mañana";
      turnoManana++;
    } else if (
      experiencia >= 2 &&
      certificado
    ) {
      turno = "Tarde";
      turnoTarde++;
    } else {
      turno = "Noche";
      turnoNoche++;
    }

    resultados.push({
      nombre,
      turno
    });
  }

  return {
    operariosEvaluados: operarios.length,
    turnoManana,
    turnoTarde,
    turnoNoche,
    resultados
  };
}

const operarios = [
  {
    nombre: "Carlos",
    experiencia: 6,
    disponibilidad: "Completa",
    certificado: true
  },
  {
    nombre: "Laura",
    experiencia: 3,
    disponibilidad: "Parcial",
    certificado: true
  },
  {
    nombre: "Miguel",
    experiencia: 1,
    disponibilidad: "Completa",
    certificado: false
  }
];

console.log(asignarTurnosSoldadura(operarios));