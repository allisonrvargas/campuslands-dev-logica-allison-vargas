function validarRankingFutbolSala(equipos) {
  if (!Array.isArray(equipos) || equipos.length === 0) {
    return {
      estado: "Error",
      motivo: "No existen equipos registrados para validar."
    };
  }

  let equiposValidos = 0;
  let equiposInvalidos = 0;
  const resultados = [];

  for (const equipo of equipos) {
    const errores = [];

    const {
      nombre,
      partidosJugados,
      golesFavor,
      golesContra,
      puntos
    } = equipo;

    // Validación del nombre
    if (
      typeof nombre !== "string" ||
      nombre.trim().length === 0
    ) {
      errores.push("Nombre del equipo inválido");
    }

    // Validación de valores numéricos
    if (
      typeof partidosJugados !== "number" ||
      partidosJugados < 0
    ) {
      errores.push("Partidos jugados inválidos");
    }

    if (
      typeof golesFavor !== "number" ||
      golesFavor < 0
    ) {
      errores.push("Goles a favor inválidos");
    }

    if (
      typeof golesContra !== "number" ||
      golesContra < 0
    ) {
      errores.push("Goles en contra inválidos");
    }

    if (
      typeof puntos !== "number" ||
      puntos < 0
    ) {
      errores.push("Puntos inválidos");
    }

    // Validación lógica del ranking
    if (
      errores.length === 0 &&
      puntos > partidosJugados * 3
    ) {
      errores.push(
        "Los puntos superan el máximo posible de partidos"
      );
    }

    if (errores.length > 0) {
      equiposInvalidos++;

      resultados.push({
        nombre,
        estado: "Datos inválidos",
        errores
      });

    } else {
      equiposValidos++;

      resultados.push({
        nombre,
        estado: "Datos válidos",
        diferenciaGoles: golesFavor - golesContra
      });
    }
  }

  return {
    equiposEvaluados: equipos.length,
    equiposValidos,
    equiposInvalidos,
    resultados
  };
}


const equipos = [
  {
    nombre: "Titanes FS",
    partidosJugados: 10,
    golesFavor: 35,
    golesContra: 20,
    puntos: 24
  },
  {
    nombre: "Furia Urbana",
    partidosJugados: 8,
    golesFavor: 18,
    golesContra: 22,
    puntos: 40
  },
  {
    nombre: "Rápidos FC",
    partidosJugados: 12,
    golesFavor: 40,
    golesContra: 25,
    puntos: 30
  }
];

console.log(validarRankingFutbolSala(equipos));