# Plantilla de solucion

## Analisis

- Entrada:
  - `posicion_x` (flotante): Distancia de desplazamiento horizontal medida en metros desde el eje de la diana.
  - `posicion_y` (flotante): Distancia de desplazamiento vertical medida en metros desde el eje de la diana.

- Proceso:
  1. Mapear el punto de destino ideal en el origen absoluto del plano cartesiano, fijando las variables de control en $X = 0.0$ e $Y = 0.0$.
  2. Implementar la fórmula geométrica de la distancia euclidiana entre dos puntos: elevar cada coordenada individual al cuadrado mediante potenciación, sumar ambos productos intermedios y extraer la raíz cuadrada total utilizando la función `math.sqrt()`.
  3. Evaluar mediante una estructura de control condicional simple (`if-else`) si el radio de distancia lineal calculado es menor o igual al límite restrictivo de 15.0 metros de precisión.

- Salida:
  - `distancia_centro` (flotante redondeado a 2 decimales).
  - `diagnostico` (cadena de texto con la categorización del impacto).
  - `salto_perfecto` (booleano: `True` o `False`).

## Reglas identificadas

1. **Invariabilidad del Teorema Geométrico:** Al elevar las componentes espaciales al cuadrado ($x^2$), se neutralizan por completo los signos negativos del plano de vuelo. Esto garantiza que aterrizar a -10 metros (Oeste) compute matemáticamente con la misma distancia lineal absoluta que aterrizar a +10 metros (Este).
2. **Independencia Vectorial de Entrada:** El programa procesa cualquier par coordinado de números reales del plano, lo que significa que el algoritmo calcula la trayectoria sin importar en cuál de los cuatro cuadrantes geográficos de la zona de salto impacte el paracaidista.
3. **Límite de Inclusión de Radio:** El umbral reglamentario actúa como una frontera circular inclusiva ($Distancia \le 15.0$). Cualquier impacto localizado exactamente sobre la circunferencia límite del radio es validado de forma automática por la regla como una puntuación perfecta.

## Pruebas

### Caso normal

Entrada:
- `posicion_x`: 9.0
- `posicion_y`: 12.0

Resultado esperado:
- `Distancia calculada`: 15.0 metros *(Cálculo manual: $\sqrt{9^2 + 12^2} = \sqrt{81 + 144} = \sqrt{225} = 15.0$)*
- `Veredicto del salto`: "Aterrizaje de Alta Precisión (Puntuación Máxima)"
- `¿Salto perfecto?`: `True` *(Cálculo lógico: 15.0 <= 15.0 es Verdadero, entra en el último centímetro permitido)*

### Caso borde

Entrada:
- `posicion_x`: 0.0
- `posicion_y`: -16.5

Resultado esperado:
- `Distancia calculada`: 16.5 metros *(Cálculo manual: $\sqrt{0^2 + (-16.5)^2} = \sqrt{272.25} = 16.5$)*
- `Veredicto del salto`: "Aterrizaje Fuera del Radio de Precisión Estándar"
- `¿Salto perfecto?`: `False` *(Cálculo lógico: El signo negativo del eje se anula en la potencia. Al evaluar 16.5 <= 15.0 resulta en Falso, desplazando la salida fuera de la certificación)*

## Explicacion final

Esta solución funciona debido a que traduce de forma exacta los principios euclidianos del espacio bidimensional a instrucciones secuenciales de código. El uso de la potenciación nativa y funciones de raíz cuadrada elimina los errores de aproximación por truncamiento decimal. Al estructurar el código con bloques de manejo de excepciones y validaciones geométricas claras, se logra un sistema de telemetría de paracaidismo totalmente blindado y verificable.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.