# Plantilla de solucion

## Analisis

- Entrada:
  - `kills` (entero): Número de asesinatos logrados por el jugador.
  - `deaths` (entero): Número de veces que el jugador murió.
  - `assists` (entero): Número de asistencias del jugador.
  - `participacion_objetivos` (flotante/porcentaje): Porcentaje de objetivos globales en los que participó el equipo con su ayuda.

- Proceso:
  1. Sumar `kills` y `assists`.
  2. Dividir el resultado entre `deaths` para obtener el KDA. Si `deaths` es igual a 0, se intercepta el flujo para evitar un error matemático (`ZeroDivisionError`) y se define el KDA directamente como la suma de la participación.
  3. Evaluar mediante un condicional lógico si el `kda` es mayor o igual a 4.5 **Y** si la `participacion_objetivos` es mayor o igual a 60%.

- Salida:
  - `kda` (flotante redondeado a 2 decimales).
  - `califica_mvp` (booleano: `True` o `False`).

## Reglas identificadas

1. **Protección de División por Cero:** En matemáticas y programación, no se puede dividir entre 0. Si un jugador competitivo tiene 0 muertes (`deaths == 0`), el algoritmo debe saltarse la división tradicional y asignar el valor acumulado directamente.
2. **Umbral del KDA de Élite:** Para ser considerado al MVP, el KDA calculado debe ser estrictamente igual o superior a 4.5.
3. **Condición de Victoria Colectiva (Conjunción Lógica):** No basta con tener buen KDA; el jugador debe demostrar juego en equipo. El algoritmo exige que ambas condiciones (KDA >= 4.5 AND Objetivos >= 60%) se cumplan simultáneamente mediante el operador lógico `and`.

## Pruebas

### Caso normal

Entrada:
- `kills`: 8
- `deaths`: 2
- `assists`: 6
- `participacion_objetivos`: 65%

Resultado esperado:
- `KDA`: 7.0 *(Cálculo: (8 + 6) / 2 = 14 / 2 = 7)*
- `¿Es MVP?`: `True` *(Cálculo: 7.0 >= 4.5 es Verdadero Y 65 >= 60 es Verdadero)*

### Caso borde

Entrada:
- `kills`: 5
- `deaths`: 0
- `assists`: 5
- `participacion_objetivos`: 55%

Resultado esperado:
- `KDA`: 10.0 *(Cálculo controlado: Evita error, (5 + 5) = 10)*
- `¿Es MVP?`: `False` *(Cálculo: El KDA es alto, pero la participación del 55% no alcanza el 60% requerido. Verdadero Y Falso resulta en Falso)*

## Explicacion final

Esta solución funciona porque separa la aritmética pura de las condiciones de control. Primero, asegura la estabilidad del programa previniendo el error crítico de la división por cero (un escenario muy común en videojuegos cuando un jugador tiene una partida perfecta). Segundo, utiliza una estructura de control condicional basada en el álgebra de Boole (operador and) para garantizar que el resultado final refleje fielmente los dos criterios del negocio competitivo de forma estricta.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.