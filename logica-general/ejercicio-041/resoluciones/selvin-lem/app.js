// clasificacion por reglas combinadas para videojuegos competitivos
function clasificarPorReglas(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { clasificacion: "sin datos", accion: "sin accion", motivo: "no hay items para clasificar." };
  }

  const totalBloqueados = items.filter((i) => i === "bloqueado").length;
  const hayBloqueado = totalBloqueados > 0;
  const mayoriaBloqueada = totalBloqueados > items.length / 2;
  const prioridadAlta = prioridad === "alta";
  const todosIguales = items.every((i) => i === items[0]);

  if (mayoriaBloqueada && prioridadAlta) {
    return { clasificacion: "critico global", accion: "detener y escalar", motivo: `mas de la mitad de los items (${totalBloqueados}/${items.length}) estan bloqueados y la prioridad es alta.` };
  }
  if (hayBloqueado && prioridadAlta) {
    return { clasificacion: "riesgo puntual alto", accion: "revisar bloqueado con urgencia", motivo: "hay bloqueados sin ser mayoria, pero la prioridad alta exige revision urgente." };
  }
  if (hayBloqueado) {
    return { clasificacion: "riesgo puntual", accion: "revisar bloqueado", motivo: "hay bloqueados en la lista, se revisan sin urgencia extrema." };
  }
  if (todosIguales) {
    if (items[0] === "aprobado") return { clasificacion: "lote limpio", accion: "sin accion", motivo: "todos los items estan aprobados." };
    if (items[0] === "pendiente") return { clasificacion: "lote en espera", accion: "monitorear lote", motivo: "todos los items estan pendientes." };
  }
  return { clasificacion: "mixto sin riesgo", accion: "revisar normal", motivo: "mezcla de estados sin ningun bloqueado presente." };
}

// pruebas
console.log(clasificarPorReglas(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
console.log(clasificarPorReglas([], "alta", "revisar bloqueados primero"));
console.log(clasificarPorReglas(["bloqueado", "bloqueado", "pendiente"], "alta", "escalar riesgos"));
console.log(clasificarPorReglas(["pendiente", "pendiente"], "media", "lote homogeneo"));