# Plantilla de solucion

## Analisis

- Entrada:
  - `inventarioElementos`: Un objeto o diccionario que contiene las existencias disponibles de cada elemento químico en el laboratorio (por ejemplo, las cantidades de Hidrógeno, Oxígeno, Carbono).
  - `compuestoObjetivo`: Una cadena de texto que indica la fórmula del compuesto que se desea sintetizar (por ejemplo, 'H2O', 'CO2').

- Proceso:
  - El algoritmo analiza la fórmula del compuesto objetivo y extrae los átomos requeridos junto con sus respectivas proporciones estequiométricas utilizando un análisis de patrones.
  - Verifica la disponibilidad de cada elemento requerido dentro del stock actual de la bodega del laboratorio.
  - Calcula la cantidad máxima de moléculas o unidades del compuesto químico que se pueden crear antes de agotar el reactivo limitante.
  - Evalúa condiciones críticas de reactividad para alertar sobre posibles riesgos de mezclas inestables.

- Salida:
  - Un objeto o estructura de datos que detalla la factibilidad de la síntesis, la cantidad máxima de compuesto almacenable a producir y el elemento que actúa como reactivo limitante.

## Reglas identificadas

1. **Ley de Proporciones Definitivas:** Cada compuesto requiere una cantidad fija y exacta de átomos de cada elemento constituyente; si falta un solo átomo requerido, la síntesis no se puede completar.
2. **Determinación del Reactivo Limitante:** La capacidad máxima de producción está dictada estrictamente por el elemento que rinda el menor cociente entre la cantidad disponible en bodega y la requerida por la fórmula.
3. **Control de Inestabilidad Térmica:** Si la fórmula involucra elementos altamente reactivos combinados en proporciones específicas sin un agente estabilizador, el sistema genera una alerta de riesgo crítico.

## Pruebas

### Caso normal

Entrada:
- `inventarioElementos`: `{ "H": 10, "O": 4 }`
- `compuestoObjetivo`: `"H2O"`

Resultado esperado:
- `{ sintesisFactible: true, cantidadMaxima: 2, reactivoLimitante: "O" }`

### Caso borde

Entrada:
- `inventarioElementos`: `{ "H": 0, "O": 20 }`
- `compuestoObjetivo`: `"H2O"`

Resultado esperado:
- `{ sintesisFactible: false, cantidadMaxima: 0, reactivoLimitante: "H" }`

## Explicacion final

Escribe aqui por que tu solucion funciona.
Esta solución funciona porque implementa un análisis estequiométrico preciso de forma puramente lógica y matemática, dividiendo la disponibilidad real entre la demanda teórica de la reacción. Al evaluar de manera iterativa todos los componentes críticos del reactivo sin saltarse ningún paso intermedio, el algoritmo asegura que nunca se planifique una producción superior a la que el elemento más escaso permite. Además, las verificaciones al inicio blindan al sistema de arrojar errores matemáticos como divisiones por cero o lecturas de claves inexistentes en los mapas de inventario.
