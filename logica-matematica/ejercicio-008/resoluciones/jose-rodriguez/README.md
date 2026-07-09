# Pantalla de solucion

## Analisis

- Entrada:
    - `nota_critica` (float): Puntuacion promedio asignada por la critica profesional (0 a 100).
    - `notal_publico` (float): Puntuacion promedio asinada por la audiencia general y fanaticos (0 a 100).

- Proceso:
    1. Calcular la diferencia absoltaa (distancia matematica sin importar el signo utilizando `abs()`) entre ambas clasificaciones para evaluar el nivel de dispersion o disparidad.
    2. Implementar una estructura condicional anidada para identificar el patrokn de comportamiento:
    - Si la disparidad es mayor o igual a 25 puntos **Y** la nota de la audiencia es sobresaliente ($\ge$ 80), etiquetar como fenomeno de culto.
    - Si la disparidads es menor o igual a 10 puntos, clasificar como un patron unificado de consenso.
    - Para cualquier otro caso intermedio, registrar como un patron estandar dividido.

- Salida:
    - `diferencia_absoluta` (flotante redondeado a 1 decimal).
    - `categoria` (Cadena de texto con la descripcion del fenomeno de audiencia).
    - `es_patron_consistente` (booleano: `True` o `False`).

## Reglas identificadas

1. **Uso de la magnitud absoluta:** Al analizar patrones de dispersion, la direccion de la resta no debe alterar el resultado ($| a- B|$). Se requiere el valor absoluto para mapear la distancia pura entre los dos nucleos de opinion.
2. **El criterio de la incompresion (Fenomeno de culto):** La regla de negocio dicta que las peliculas disruptivas de ciencia ficcion se caracterizan por una brecha masiva donde los expertos la rechazan pero la audiencia la aclama. Requiere el cumplimiento de ambas condiciones simultaneamente con el operador `and`.
3. **Control de consensualidad:** Una diferencia minima ($\le$ 10 puntos) indica un patron predictivo y escalable, lo que significa que el algoritmo valida la consistencia cuando los dos frentes de entrada se comportan casi de manera identica.

## Prueba 

### Caso normal 

Entrada:
- `nota_critica`: 50.0
- `nota_publico`: 82.0

Resultado esperado:
- `Desviación / Disparidad`: 32.0 puntos *(Cálculo manual: |50.0 - 82.0| = |-32.0| = 32.0)*
- `Clasificación del Patrón`: "Clásico de Culto Lógico (Público la ama, Crítica la incomprendió)"
- `¿Patrón Consistente?`: `False` *(Cálculo: 32.0 $\ge$ 25 es Verdadero Y 82.0 $\ge$ 80 es Verdadero. Activa la alerta de patrón de culto disruptivo)*

### Caso borde

Entrada:
- `nota_critica`: 90.0
- `nota_publico`: 80.0

Resultado esperado:
- `Desviación / Disparidad`: 10.0 puntos *(Cálculo manual: |90.0 - 80.0| = 10.0)*
- `Clasificación del Patrón`: "Consenso General (Patrón unificado de aceptación o rechazo)"
- `¿Patrón Consistente?`: `True` *(Cálculo: No cumple la primera condición, pero al tocar exactamente la frontera de $\le$ 10.0 en la segunda, el sistema lógico valida el consenso entre la crítica y el público)*

## Explicacion final 

Esta solucion funciona debido a que somete dos opiniones cuantitativas independientes a un analisis de proximidad geometrica unidimensional. Al transformar la diferencia en un valor absoluto, el algoritmo mide el "ruido" o desacuerdo de forma estandar. El orden jerarquico de los condicionales permite segregar las nomalias estadisticas (como los clasicos de culto) de las tendencias regularaes con total precision matematica y logica.