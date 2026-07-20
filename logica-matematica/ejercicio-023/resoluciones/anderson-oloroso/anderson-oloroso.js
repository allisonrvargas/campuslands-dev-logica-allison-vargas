function analizarRendimientoEsports(jugadores) {
  if (!Array.isArray(jugadores) || jugadores.length === 0) {
    return {
      estado: "Error",
      motivo: "Debe existir al menos un jugador registrado."
    };
  }

  let sumaPuntajes = 0;
  const puntajes = [];

  for (const jugador of jugadores) {
    const { nombre, puntaje } = jugador;

    if (puntaje < 0) {
      return {
        estado: "Error",
        motivo: "Los puntajes no pueden ser negativos."
      };
    }

    sumaPuntajes += puntaje;
    puntajes.push(puntaje);
  }

  const promedio = Number(
    (sumaPuntajes / puntajes.length).toFixed(2)
  );

  puntajes.sort((a, b) => a - b);

  let mediana;

  if (puntajes.length % 2 === 0) {
    const mitad = puntajes.length / 2;
    mediana = Number(
      (
        (puntajes[mitad - 1] + puntajes[mitad]) / 2
      ).toFixed(2)
    );
  } else {
    mediana = puntajes[Math.floor(puntajes.length / 2)];
  }

  let rendimiento;

  if (promedio >= 90 && mediana >= 90) {
    rendimiento = "Nivel Profesional";
  } else if (promedio >= 75 && mediana >= 75) {
    rendimiento = "Nivel Competitivo";
  } else if (promedio >= 60) {
    rendimiento = "Nivel Intermedio";
  } else {
    rendimiento = "Nivel Inicial";
  }

  return {
    jugadoresEvaluados: jugadores.length,
    promedio,
    mediana,
    rendimiento
  };
}

const jugadores = [
  { nombre: "Nova", puntaje: 92 },
  { nombre: "Shadow", puntaje: 88 },
  { nombre: "Blaze", puntaje: 95 },
  { nombre: "Echo", puntaje: 85 }
];

console.log(analizarRendimientoEsports(jugadores));