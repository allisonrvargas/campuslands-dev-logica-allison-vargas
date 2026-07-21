function organizarParticipantesKickboxing(participantes) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un participante registrado."
    };
  }

  const categorias = {
    Amateur: [],
    Semiprofesional: [],
    Profesional: []
  };

  const observaciones = [];

  for (const participante of participantes) {
    const {
      nombre,
      edad,
      peso,
      experiencia
    } = participante;

    if (
      !nombre ||
      edad < 16 ||
      peso <= 0 ||
      experiencia < 0
    ) {
      observaciones.push({
        nombre,
        estado: "Datos inválidos"
      });
      continue;
    }

    let categoria = "";

    if (experiencia >= 10) {
      categoria = "Profesional";
    } else if (experiencia >= 4) {
      categoria = "Semiprofesional";
    } else {
      categoria = "Amateur";
    }

    categorias[categoria].push({
      nombre,
      edad,
      peso,
      experiencia
    });
  }

  return {
    totalParticipantes: participantes.length,
    amateur: categorias.Amateur.length,
    semiprofesional: categorias.Semiprofesional.length,
    profesional: categorias.Profesional.length,
    categorias,
    observaciones
  };
}

const participantes = [
  {
    nombre: "Carlos",
    edad: 20,
    peso: 68,
    experiencia: 2
  },
  {
    nombre: "Andrea",
    edad: 25,
    peso: 60,
    experiencia: 6
  },
  {
    nombre: "Miguel",
    edad: 31,
    peso: 82,
    experiencia: 12
  }
];

console.log(organizarParticipantesKickboxing(participantes));