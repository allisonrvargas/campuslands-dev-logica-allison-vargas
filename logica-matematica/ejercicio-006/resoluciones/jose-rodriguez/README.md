# Plantilla de solucion

## Analisis

- Entrada:
    - `velocidad_kmh` (float): Velocidad maxima que alcanza el hiperdeportivo expresada en kilometros por hora.
    - `potencia_cv` (float): Potencia nominal del motor medida en caballos de vapor (unidades metricas continentales).

- Proceso:
    1. Definir las constantes multiplicativas fijas para la conversion de unidades (1km/h ~ 0.621371 mph; 1 CV ` 0.98632 HP).
    2. Multiplicar las variables de entrada por sus respectivos factores numericos para realizar la transposicion de sistemas de medida.
    3. Evaluar mediante una estructura de control condicional simple (`if-else`) si la nueva velocidad calculada en millas por hora superra estrictamente la frontera logica de los 250.0 mph establecidos como record de la pista.

- Salida:
    - `velocidad_mph` (flotante redondeado a 2 decimales).
    - `potencia-hp` (flotante redondeado a 1 decimal).
    - `rompe_record` (booleano: `True` o `False`).

## Reglas identificadas 

1. **Invariabilidad del factor de conversion:** Las tasas de conversion entre sistemas de unidades son constantes fisicas universales directas. Multiplicar o dividir de forma invertida anula por completo la coherencia matematica del resultado.
2. **control de magnitudes fisicas:** El programa valida de forma implicita que los datos no sean negativos, puesto que las magnitudes de rendimiento mecanico no pueden descender de cero en pruebas de aceleracion lineal.
3. **Frontera de rendimiento Extremo:** El sistema ejecuta una regla de decision basada en un umbral determinado en unidades anglosajonas (Velocidad_mph > 250.0). La conversasion matematica debe ser exacta y previa a la evaluacion condicional para evitar un falso veredicto de record en la pista.

## Pruebas

### Caso normal 

Entrada:
- `velocidad_kmh`: 380.0
- `potencia_cv`: 1000.0

Resultado esperado:
- `Velocidad en MPH`: 236.12 *(Cálculo manual: 380 * 0.621371 = 236.12098)*
- `Potencia en HP`: 986.3 *(Cálculo manual: 1000 * 0.98632 = 986.32)*
- `¿Rompe Récord?`: `False` *(Cálculo: 236.12 > 250.0 resulta en Falso)*

### Caso borde

Entrada:
- `velocidad_kmh`: 402.34
- `potencia_cv`: 1500.0

Resultado esperado:
- `Velocidad en MPH`: 250.0 *(Cálculo manual: 402.34 * 0.621371 = 250.003)*
- `Potencia en HP`: 1479.5 *(Cálculo manual: 1500 * 0.98632 = 1479.48)*
- `¿Rompe Récord?`: `True` *(Cálculo: Debido a los decimales de la conversión matemática, el valor supera los 250.0 por un margen mínimo, activando correctamente la alerta de récord en los límites físicos del sistema)*

## Explicacion final 

Esta solucion funciona porque implementa de forma secuencial y ordenada, las reglas de propocionalidad de la fisica y la aritmetica. Al transformar primero el tipo de dato y la unidad de medida a una base homogenea, permite que la regla condicional evalue los limites bajo un mismo estandar numerico. Esto evita errores de escala y garantiza un resultado de control de excepciones robusto y un veredicto matematico transparente.

