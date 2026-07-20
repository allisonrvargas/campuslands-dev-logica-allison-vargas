function convertirRendimientoAutos(autos) {
  if (!Array.isArray(autos) || autos.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un auto registrado."
    };
  }

  const conversiones = [];

  for (const auto of autos) {
    const {
      modelo,
      velocidadKmh,
      potenciaHp
    } = auto;

    if (velocidadKmh <= 0 || potenciaHp <= 0) {
      return {
        estado: "Error",
        motivo: "La velocidad y potencia deben ser valores positivos."
      };
    }

    // Conversión de km/h a mph
    const velocidadMph = Number(
      (velocidadKmh * 0.621371).toFixed(2)
    );

    // Conversión de HP a kW
    const potenciaKw = Number(
      (potenciaHp * 0.7457).toFixed(2)
    );

    let categoria;

    if (velocidadKmh >= 350 && potenciaHp >= 800) {
      categoria = "Hiperdeportivo extremo";
    } else if (velocidadKmh >= 300 && potenciaHp >= 600) {
      categoria = "Superdeportivo";
    } else {
      categoria = "Deportivo";
    }

    conversiones.push({
      modelo,
      velocidadOriginalKmh: velocidadKmh,
      velocidadMph,
      potenciaOriginalHp: potenciaHp,
      potenciaKw,
      categoria
    });
  }

  return {
    autosEvaluados: autos.length,
    resultados: conversiones
  };
}

const autos = [
  {
    modelo: "Bugatti Chiron",
    velocidadKmh: 420,
    potenciaHp: 1500
  },
  {
    modelo: "Ferrari SF90",
    velocidadKmh: 340,
    potenciaHp: 986
  }
];

console.log(convertirRendimientoAutos(autos));