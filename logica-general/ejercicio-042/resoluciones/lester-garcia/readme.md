# Plantilla de solucion

## Analisis

- Entrada:
  - nombre: "Leones"
  - partidosJugados: 12
  - victorias: 8
  - empates: 2
  - derrotas: 2

- Proceso:
  - Calcular la suma de victorias, empates y derrotas.
  - Verificar que la cantidad de partidos jugados sea mayor que cero.
  - Comparar la suma de los resultados con los partidos jugados.
  - Emitir un resultado de validación.

- Salida:
  - validacion: Datos válidos
  - motivo: La información del equipo es consistente para el ranking.

## Reglas identificadas

1. La cantidad de partidos jugados debe ser mayor que cero.
2. La suma de victorias, empates y derrotas debe ser igual a los partidos jugados.
3. Si alguna regla no se cumple, los datos son inválidos.
4. Si todas las reglas se cumplen, los datos son válidos.

## Pruebas

### Caso normal

Entrada:

nombre: "Leones"
partidosJugados: 12
victorias: 8
empates: 2
derrotas: 2

Resultado esperado:

validacion: Datos válidos
motivo: La información del equipo es consistente para el ranking.

### Caso borde

Entrada:

nombre: "Leones"
partidosJugados: 10
victorias: 6
empates: 3
derrotas: 2

Resultado esperado:

validacion: Datos inválidos
motivo: La suma de victorias, empates y derrotas no coincide con los partidos jugados.

## Explicacion final

La solución funciona porque verifica la consistencia de los datos antes de utilizarlos en un ranking de fútbol sala. Primero valida que exista al menos un partido registrado y luego comprueba que la suma de victorias, empates y derrotas coincida exactamente con los partidos jugados. De esta manera, solo se aceptan datos correctos y verificables.