// Logica General 022 - Validacion de datos
// Autor: Stefani Sanchez

const equipos = [
  { nombre: "Guerreros FC", partidos: 10, victorias: 8, goles: 25 },
  { nombre: "Titanes FS", partidos: 10, victorias: 5, goles: 15 },
  { nombre: "Rayo Azul", partidos: 0, victorias: 0, goles: 0 }
];

function validarRanking(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return "No existen datos para validar.";
  }

  return lista.map(equipo => {
    let estado;

    if (
      equipo.partidos <= 0 ||
      equipo.victorias < 0 ||
      equipo.goles < 0
    ) {
      estado = "Datos invalidos";
    } else if (equipo.victorias > equipo.partidos) {
      estado = "Datos inconsistentes";
    } else {
      estado = "Datos validos";
    }

    return {
      equipo: equipo.nombre,
      estado: estado
    };
  });
}

const resultado = validarRanking(equipos);

console.log("Validacion del ranking:");
console.log(resultado);


// Caso borde
console.log("\nCaso borde:");
console.log(validarRanking([]));