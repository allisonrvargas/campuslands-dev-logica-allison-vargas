// Logica General 021 - Clasificacion por reglas
// Autor: Stefani Sanchez

const jugadores = [
  { nombre: "Alex", victorias: 10, derrotas: 2, nivel: "alto" },
  { nombre: "Sofia", victorias: 6, derrotas: 5, nivel: "medio" },
  { nombre: "Luis", victorias: 2, derrotas: 8, nivel: "bajo" }
];

function clasificarJugador(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return "No hay jugadores para clasificar.";
  }

  return lista.map(jugador => {
    let categoria;

    if (jugador.victorias >= 8 && jugador.derrotas <= 3) {
      categoria = "Jugador competitivo";
    } else if (jugador.victorias >= 5) {
      categoria = "Jugador intermedio";
    } else {
      categoria = "Jugador en entrenamiento";
    }

    return {
      nombre: jugador.nombre,
      categoria: categoria
    };
  });
}

const resultado = clasificarJugador(jugadores);

console.log("Clasificacion de jugadores:");
console.log(resultado);


// Caso borde
console.log("\nCaso borde:");
console.log(clasificarJugador([]));