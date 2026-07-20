# Plantilla de solucion

## Analisis

- Entrada:
  - `puntos_ganados` (entero): Eventos favorables donde el jugador consolidó el punto partiendo de su propio servicio.
  - `saques_totales` (entero): Eventos totales o espacio muestral que representa la totalidad de saques ejecutados.

- Proceso:
  1. Validar que la variable de eventos totales sea estrictamente mayor a cero para eludir interrupciones por división nula.
  2. Implementar la ecuación matemática de probabilidad elemental: $\text{Probabilidad} = \frac{\text{Casos Favorables}}{\text{Casos Totales}} \times 100$.
  3. Someter la métrica porcentual a un comparador inclusivo de frontera fija para establecer si el rendimiento supera el 60.0%.

- Salida:
  - `probabilidad` (flotante redondeado a 1 decimal).
  - `estatus` (cadena de texto con el veredicto del analista deportivo).
  - `zona_segura` (booleano: `True` o `False`).

## Reglas identificadas

1. **Axioma de Acotación Proporcional:** En la teoría probabilística, los casos de éxito están contenidos de forma estricta dentro del universo total de eventos ($Favorables \le Totales$). Romper este principio invalida el espacio de control del software.
2. **Control de Indeterminación Asistida:** Si la variable del denominador se evalúa en 0, el sistema intercepta el flujo antes de la ejecución aritmética para evitar un colapso crítico de la aplicación.
3. **Frontera de Inclusión de Ventaja:** El umbral táctico de negocio se activa de forma inclusiva a partir del 60.0% ($\ge 60.0$). Un valor idéntico a la frontera clasifica de manera automática dentro del estatus de dominio alto.

## Pruebas

### Caso normal

Entrada:
- `puntos_ganados`: 12
- `saques_totales`: 16

Resultado esperado:
- `Probabilidad calculada`: 75.0% *(Cálculo manual: (12 / 16) * 100 = 0.75 * 100 = 75.0%)*
- `Diagnóstico técnico`: "Dominio Total (Zona de ventaja competitiva alta)"
- `¿Zona segura?`: `True` *(Cálculo lógico: 75.0 >= 60.0 es Verdadero)*

### Caso borde

Entrada:
- `puntos_ganados`: 3
- `saques_totales`: 5

Resultado esperado:
- `Probabilidad calculada`: 60.0% *(Cálculo manual: (3 / 5) * 100 = 0.6 * 100 = 60.0%)*
- `Diagnóstico técnico`: "Dominio Total (Zona de ventaja competitiva alta)"
- `¿Zona segura?`: `True` *(Cálculo lógico: Satisface la condición inclusiva en el límite exacto estipulado por la regla de negocio)*

## Explicacion final

Esta solución funciona debido a que reduce las interacciones del juego a un modelo de frecuencia probabilística empírica controlada. Mediante el uso de bifurcaciones condicionales jerárquicas y restricciones preventivas antes del cómputo aritmético, el script garantiza salidas estables y predecibles. Esto lo convierte en un software resistente a fallas e ideal para los estándares de automatización y entrega de Campuslands.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.