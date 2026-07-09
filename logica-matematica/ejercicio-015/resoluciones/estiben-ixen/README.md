## Analisis

- Entrada: `longitudPx` (distancia del vector de trazado) y `velocidadPxPorSeg` (la tasa de desplazamiento del pincel).
- Proceso: Aplicar la relación física de movimiento rectilíneo uniforme $t = \frac{d}{v}$.
- Salida: El tiempo necesario en segundos para completar la línea.

## Reglas identificadas

1. Relación fundamental: El tiempo es directamente proporcional a la distancia e inversamente proporcional a la velocidad.
2. Validación: La velocidad debe ser un valor positivo distinto de cero para evitar errores matemáticos.
3. Precisión: El resultado se redondea a dos decimales, dado que el software de dibujo procesa el trazo en intervalos discretos.



## Pruebas

### Caso normal

Entrada:
longitudPx: 500, velocidadPxPorSeg: 100

Resultado esperado:
{ tiempoSegundos: "5.00", velocidadAplicada: "100 px/s" }

### Caso borde

Entrada:
longitudPx: 0, velocidadPxPorSeg: 100

Resultado esperado:
{ tiempoSegundos: "0.00", velocidadAplicada: "100 px/s" }

## Explicacion final

En dibujo digital, la suavidad de un trazo depende de cuántos píxeles se renderizan por unidad de tiempo. Al conocer la longitud del camino (el vector) y la velocidad del pincel, podemos predecir con exactitud cuándo terminará de dibujarse una línea, lo cual es vital para procesos de renderizado en tiempo real o animaciones automáticas.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.