# Plantilla de solucion

## Analisis

- Entrada: Un objeto que contiene `titulo`, `duracionMinutos`, `clasificacion`, `calidadTecnica` y `tienePermisoEspecial`.
- Proceso: Ejecutar una serie de filtros condicionales (flujo paso a paso) para determinar si la película puede distribuirse.
- Salida: Un mensaje indicando el estado final (Aprobada o motivo del rechazo).

## Reglas identificadas

1. Duración: Máximo 180 minutos.
2. Clasificación: Si es NC-17, debe tener `tienePermisoEspecial` en true.
3. Calidad: Debe tener una puntuación mínima de 7.

## Pruebas

### Caso normal

Entrada:
{ titulo: "Cyber-City", duracionMinutos: 120, clasificacion: "PG-13", calidadTecnica: 9, tienePermisoEspecial: false }

Resultado esperado:
"Aprobada: Película apta para distribución."

### Caso borde

Entrada:
{ titulo: "Dark-Galaxy", duracionMinutos: 150, clasificacion: "NC-17", calidadTecnica: 8, tienePermisoEspecial: false }

Resultado esperado:
"Rechazada: Requiere permiso especial por clasificación."

## Explicacion final

La solución utiliza una estructura de "guardias" o condiciones tempranas (`early return`). Esto garantiza que el flujo sea lineal y eficiente, deteniendo la evaluación en el momento en que una regla de negocio no se cumple, lo cual facilita la depuración y el mantenimiento del código.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
