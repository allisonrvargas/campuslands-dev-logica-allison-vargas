// ordenamiento de prioridades combinado para taller mecanico
const PESO_BASE = { bloqueado: 0, pendiente: 1, aprobado: 2 };
const PESO_INVERTIDO = { aprobado: 0, pendiente: 1, bloqueado: 2 };

function detectarInversionPorRegla(regla) {
  return typeof regla === "string" && regla.toLowerCase().includes("aprobados primero");
}

function compararConDesempate(a, b, tablaPeso, prioridadAlta) {
  const pesoA = tablaPeso[a.item] ?? 99;
  const pesoB = tablaPeso[b.item] ?? 99;
  if (pesoA !== pesoB) return pesoA - pesoB;
  if (a.item === "bloqueado" && b.item === "bloqueado" && prioridadAlta) {
    return b.indiceOriginal - a.indiceOriginal;
  }
  return a.indiceOriginal - b.indiceOriginal;
}

function ordenarPrioridadesCombinado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { ordenados: [], motivo: "no hay items para ordenar." };
  }

  const reglaPideAprobadosPrimero = detectarInversionPorRegla(regla);
  const prioridadAlta = prioridad === "alta";
  const tablaPeso = reglaPideAprobadosPrimero ? PESO_INVERTIDO : PESO_BASE;

  const conIndice = items.map((item, indiceOriginal) => ({ item, indiceOriginal }));
  conIndice.sort((a, b) => compararConDesempate(a, b, tablaPeso, prioridadAlta));

  let motivo = "la regla prioriza riesgos antes de tareas normales, en caso de empate se conserva el orden original.";
  if (reglaPideAprobadosPrimero) motivo = "la regla invierte el orden base: aprobados primero, bloqueados al final.";
  if (prioridadAlta) motivo += " ademas, entre bloqueados empatados, prioridad alta invierte su orden interno.";

  return { ordenados: conIndice.map((x) => x.item), motivo };
}

// pruebas
console.log(ordenarPrioridadesCombinado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
console.log(ordenarPrioridadesCombinado([], "alta", "revisar bloqueados primero"));
console.log(ordenarPrioridadesCombinado(["bloqueado", "pendiente", "bloqueado"], "alta", "orden por riesgo"));
console.log(ordenarPrioridadesCombinado(["bloqueado", "aprobado", "pendiente"], "media", "aprobados primero en el reporte"));