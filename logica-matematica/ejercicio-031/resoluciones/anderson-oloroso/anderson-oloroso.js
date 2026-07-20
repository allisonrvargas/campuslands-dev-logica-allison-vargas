function calcularCombatesKickboxing(luchadores) {
  if (!Array.isArray(luchadores) || luchadores.length < 2) {
    return {
      estado: "Error",
      motivo: "Se necesitan al menos dos luchadores para formar combates."
    };
  }

  let combatesPosibles = 0;
  const parejas = [];

  for (let i = 0; i < luchadores.length; i++) {
    for (let j = i + 1; j < luchadores.length; j++) {
      const luchadorA = luchadores[i];
      const luchadorB = luchadores[j];

      if (
        luchadorA.peso === luchadorB.peso &&
        luchadorA.nivel !== luchadorB.nivel
      ) {
        combatesPosibles++;

        parejas.push({
          competidor1: luchadorA.nombre,
          competidor2: luchadorB.nombre,
          categoriaPeso: luchadorA.peso
        });
      }
    }
  }

  return {
    totalLuchadores: luchadores.length,
    combatesPosibles,
    parejas
  };
}

const luchadores = [
  {
    nombre: "Carlos",
    peso: 70,
    nivel: "Amateur"
  },
  {
    nombre: "Andrea",
    peso: 70,
    nivel: "Profesional"
  },
  {
    nombre: "Miguel",
    peso: 80,
    nivel: "Profesional"
  },
  {
    nombre: "Laura",
    peso: 70,
    nivel: "Semiprofesional"
  }
];

console.log(calcularCombatesKickboxing(luchadores));