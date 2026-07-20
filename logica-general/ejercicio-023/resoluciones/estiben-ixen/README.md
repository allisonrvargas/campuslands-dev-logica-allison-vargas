## Analisis

- Entrada: Un objeto con `puntuacion` (número), `estadoServidor` (string) y `erroresCriticos` (número).
- Proceso: Aplicar condicionales en orden de severidad para determinar el estado de la partida.
- Salida: Un mensaje que indica la acción o estado actual de la partida.

## Reglas identificadas

1. Si el servidor no está activo, la partida debe pausarse.
2. Si existen errores críticos, la partida debe cancelarse inmediatamente.
3. Si la puntuación es igual o superior a 1000, se declara victoria.
4. Si ninguna condición anterior se cumple, la partida continúa.

## Pruebas

### Caso normal

Entrada:
{ puntuacion: 1200, estadoServidor: "activo", erroresCriticos: 0 }

Resultado esperado:
"Victoria declarada: objetivo alcanzado."

### Caso borde

Entrada:
{ puntuacion: 500, estadoServidor: "activo", erroresCriticos: 2 }

Resultado esperado:
"Partida cancelada: integridad de datos comprometida."

## Explicacion final

La solución utiliza una estructura de control secuencial donde la jerarquía de las reglas es fundamental. Se prioriza el estado del servidor y la integridad de los datos (errores) antes que el progreso de la puntuación, garantizando que el torneo sea justo y estable.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
EOF