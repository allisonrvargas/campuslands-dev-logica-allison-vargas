// Ejercicio 031 - Conteo combinatorio simple (kickboxing)
 
function calcularMediana(numeros) {
  const ordenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);
  if (ordenados.length % 2 === 0) {
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  }
  return ordenados[mitad];
}
 
function clasificar(puntaje) {
  if (puntaje >= 25) return "competitivo";
  if (puntaje >= 15) return "intermedio";
  return "principiante";
}
 
function evaluarKickboxing(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    throw new Error("participantes debe ser un arreglo no vacio");
  }
 
  const base = Math.round(calcularMediana(participantes));
  const puntaje_final = base + bono - penalizacion;
  const clasificacion = clasificar(puntaje_final);
 
  return {
    puntaje_final,
    clasificacion,
    explicacion: "se calculo la mediana de los participantes, se sumo el bono y se resto la penalizacion segun las reglas.",
  };
}
 
// --- Pruebas ---
 
// Caso normal (ejemplo del enunciado)
console.log(evaluarKickboxing([12, 18, 25, 30], 8, 3));
// { puntaje_final: 27, clasificacion: 'competitivo', ... }
 
// Caso borde: un solo participante
console.log(evaluarKickboxing([10], 0, 5));
// mediana=10, puntaje_final=5, clasificacion: 'principiante'
 
module.exports = { evaluarKickboxing, calcularMediana, clasificar };