# Plantilla de solucion

## Analisis

- Entrada: Un objeto `simulacionPersonaje` con las propiedades `nombre` (texto), `nivelMiedo` (número del 0 al 100), `tieneLinterna` (booleano) y `estadoAmbiente` (texto: "seguro", "alerta", "persecucion").
- Proceso: Evaluar los niveles de estrés y recursos del personaje para determinar su estado de supervivencia actual ante los cambios del entorno de terror.
- Salida: Un objeto que indica el estado definitivo del personaje, la acción de supervivencia inmediata recomendada y el motivo lógico de la simulación.

## Reglas identificadas

1. Regla de Pánico Crítico: Si el `nivelMiedo` alcanza o supera los 80 puntos, o si el `estadoAmbiente` es igual a "persecucion", el personaje entra instantáneamente en estado de "panico", ignorando si tiene herramientas u objetos de defensa.
2. Regla de Ventaja de Supervivencia: Si el `estadoAmbiente` es "alerta" pero el personaje cuenta con herramientas (`tieneLinterna` es verdadero), su estado se estabiliza en "alerta_controlada". Si no tiene linterna, el estado se degrada automáticamente a "vulnerable".

## Pruebas

### Caso normal

Entrada:
simulacionPersonaje: {
  nombre: "Carlos",
  nivelMiedo: 45,
  tieneLinterna: true,
  estadoAmbiente: "alerta"
}

Resultado esperado:
estadoPersonaje: "alerta_controlada"
accionInmediata: "mantener_posicion"
motivo: "El personaje Carlos mantiene el control en un entorno de alerta gracias a contar con una linterna funcional."

### Caso borde

Entrada:
simulacionPersonaje: {
  nombre: "Ana",
  nivelMiedo: 85,
  tieneLinterna: true,
  estadoAmbiente: "seguro"
}

Resultado esperado:
estadoPersonaje: "panico"
accionInmediata: "huir_o_esconderse"
motivo: "El nivel de miedo es critico (mayor o igual a 80). El personaje ha entrado en panico total a pesar de las condiciones externas o herramientas."

## Explicacion final

La solución funciona porque procesa las variables psicológicas del personaje combinadas con las amenazas directas del entorno de terror. El script prioriza los estados de peligro inminente (pánico por persecución o colapso nervioso) sobre los recursos materiales, garantizando que el motor de simulación refleje con realismo las mecánicas clásicas del cine de suspenso y supervivencia.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.