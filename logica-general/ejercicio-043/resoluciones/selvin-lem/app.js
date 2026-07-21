// toma de decisiones combinada para torneo de esports
function contarPorCategoria(items) {
  const conteos = { bloqueado: 0, pendiente: 0, aprobado: 0 };
  for (const item of items) {
    if (conteos[item] !== undefined) conteos[item]++;
  }
  return conteos;
}

function evaluarCondicionesEspeciales(conteos, prioridad, regla) {
  const { bloqueado, pendiente, aprobado } = conteos;
  return {
    empateRiesgo: bloqueado === pendiente && bloqueado > 0,
    prioridadAlta: prioridad === "alta",
    saturado: bloqueado + pendiente >= aprobado && (bloqueado + pendiente) > 0,
    reglaPideEscalar: typeof regla === "string" && regla.toLowerCase().includes("escalar"),
  };
}

function tomarDecisionCombinada(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { decision: "sin datos", accion: "sin accion", motivo: "no hay items para evaluar." };
  }

  const conteos = contarPorCategoria(items);
  const { bloqueado: totalBloqueados, pendiente: totalPendientes } = conteos;
  const { empateRiesgo, prioridadAlta, saturado, reglaPideEscalar } = evaluarCondicionesEspeciales(conteos, prioridad, regla);

  if (empateRiesgo && prioridadAlta) {
    return { decision: "revision doble urgente", accion: "atender bloqueado y pendiente por igual", motivo: `hay ${totalBloqueados} bloqueados y ${totalPendientes} pendientes en empate, con prioridad alta.` };
  }
  if (saturado && prioridadAlta) {
    return { decision: "escalamiento total", accion: "detener operacion y escalar", motivo: "el lote esta saturado de riesgo y la prioridad es alta." };
  }
  if (saturado) {
    return { decision: "revision extendida", accion: "revisar todo el lote antes de continuar", motivo: "el lote esta saturado de riesgo, pero la prioridad no es alta." };
  }
  if (reglaPideEscalar && totalBloqueados > 0) {
    return { decision: "escalamiento manual", accion: "escalar segun instruccion explicita", motivo: 'la regla menciona "escalar" y hay al menos un bloqueado.' };
  }
  if (totalBloqueados > 0) {
    return { decision: "riesgo controlado", accion: "revisar bloqueado", motivo: "hay bloqueados sin combinaciones especiales." };
  }
  if (totalPendientes > 0) {
    return { decision: "en espera", accion: "monitorear pendiente", motivo: "no hay bloqueados, solo pendientes." };
  }
  return { decision: "sin riesgo", accion: "sin accion", motivo: "todos los items estan aprobados." };
}

// pruebas
console.log(tomarDecisionCombinada(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
console.log(tomarDecisionCombinada([], "alta", "revisar bloqueados primero"));
console.log(tomarDecisionCombinada(["bloqueado", "pendiente", "bloqueado", "aprobado"], "media", "escalar si es necesario"));