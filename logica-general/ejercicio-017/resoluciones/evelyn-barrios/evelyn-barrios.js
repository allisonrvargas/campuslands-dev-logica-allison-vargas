/**
 * EJERCICIO 17: Motor de Decisión para Planos Arquitectónicos
 *
 * Esta función evalúa el estado de un plano y determina la acción a seguir
 * basándose en un conjunto de reglas de negocio predefinidas.
 *
 * @param {object} plano - Objeto con los detalles del plano a evaluar.
 * @param {string[]} plano.items - Un arreglo con los estados de los componentes.
 * @param {string} plano.prioridad - El nivel de urgencia del plano ('alta', 'media', 'baja').
 * @param {string} plano.regla - La directriz de operación a seguir.
 * @returns {object} Un objeto con la `accion` a tomar y el `motivo` que la justifica.
 */
function evaluarPlano(plano) {
  // Desestructuramos la entrada para un acceso más limpio a las propiedades.
  const { items, prioridad, regla } = plano;

  // --- Cláusulas de Guarda (Validaciones tempranas) ---

  // 1. Si la lista de ítems no es válida, detenemos el proceso.
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: "error", motivo: "La lista de ítems del plano es inválida o está vacía." };
  }

  // --- Lógica de Decisión Jerárquica ---

  // 2. Regla más crítica: revisar bloqueos si la prioridad es alta.
  const tieneBloqueos = items.includes("bloqueado");
  if (prioridad === "alta" && regla === "revisar bloqueados primero" && tieneBloqueos) {
    return {
      accion: "revisar bloqueado",
      motivo: "Se detectó un bloqueo crítico con prioridad alta. El flujo debe detenerse.",
    };
  }

  // 3. Siguiente prioridad: atender ítems pendientes.
  const tienePendientes = items.includes("pendiente");
  if (tienePendientes) {
    return {
      accion: "ajustar pendientes",
      motivo: "El plano contiene ítems pendientes que requieren atención antes de continuar.",
    };
  }
  
  // 4. Acción por defecto: si no hay bloqueos ni pendientes, se aprueba.
  return {
    accion: "aprobar para producción",
    motivo: "Todos los ítems del plano están aprobados. Listo para el siguiente paso.",
  };
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Motor de Decisión del Ejercicio 17 ---");

// Prueba 1: Caso de bloqueo crítico (el del enunciado).
const planoConBloqueo = { items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta", regla: "revisar bloqueados primero" };
console.log("Prueba 1 (Bloqueo Crítico):", evaluarPlano(planoConBloqueo));

// Prueba 2: Caso con ítems pendientes, pero sin bloqueos.
const planoConPendientes = { items: ["aprobado", "aprobado", "pendiente"], prioridad: "media", regla: "revisar bloqueados primero" };
console.log("Prueba 2 (Con Pendientes):", evaluarPlano(planoConPendientes));

// Prueba 3: Caso ideal, todo aprobado.
const planoAprobado = { items: ["aprobado", "aprobado"], prioridad: "baja", regla: "revisar bloqueados primero" };
console.log("Prueba 3 (Plano Aprobado):", evaluarPlano(planoAprobado));

// Prueba 4: Caso borde con entrada inválida.
const planoInvalido = { items: [], prioridad: "alta", regla: "revisar bloqueados primero" };
console.log("Prueba 4 (Entrada Inválida):", evaluarPlano(planoInvalido));

console.log("--- Pruebas Finalizadas ---");