# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto con una lista de números enteros que representan las puntuaciones de los `participantes`, un valor entero para el `bono` y un valor entero para la `penalizacion`.
- **Proceso:** Validar que la información no venga vacía. Extraer el puntaje del último competidor de la lista como base de cálculo. Aplicar la ecuación aritmética básica sumando el beneficio y restando la penalización. Finalmente, evaluar si el resultado es igual o superior al umbral establecido de 25 puntos.
- **Salida:** Un objeto con el puntaje final calculado (`puntaje_final`), la etiqueta de nivel obtenido (`clasificacion`) y un mensaje textual que desglosa detalladamente la operación matemática realizada.

## Reglas identificadas

1. **Cálculo Secuencial Aritmético:** El puntaje final se define estrictamente bajo la fórmula: $\text{Puntaje Final} = \text{Puntaje Base} + \text{Bono} - \text{Penalización}$.
2. **Criterio de Categoría:** Si el puntaje final calculado es mayor o igual a 25 unidades, el jugador recibe la clasificación de "competitivo". De lo contrario, se le asigna la categoría "estándar".
3. **Control de Datos Vacíos:** Si el arreglo de puntuaciones no cuenta con elementos válidos, el flujo del programa se frena de inmediato para evitar errores lógicos de desbordamiento o valores nulos.

## Pruebas

### Caso normal

Entrada:
```json
{
  "participantes": [12, 18, 25, 30],
  "bono": 8,
  "penalizacion": 3
}
Resultado esperado:JSON{
  "puntaje_final": 27,
  "clasificacion": "competitivo",
  "explicacion": "Se tomó el puntaje base (22), se sumó el bono (+8) y se restó la penalización (-3)."
}
Caso bordeEntrada:JSON{
  "participantes": [10],
  "bono": 5,
  "penalizacion": 2
}
Resultado esperado:JSON{
  "puntaje_final": 13,
  "clasificacion": "estándar",
  "explicacion": "Se tomó el puntaje base (10), se sumó el bono (+5) y se restó la penalización (-2)."
}
Explicacion final
La solución funciona muy bien porque realiza una suma y una resta directa sobre los puntajes del juego de forma totalmente limpia. El programa toma la puntuación base del jugador, le añade los puntos del bono por su buen desempeño y le descuenta los puntos de la penalización por las faltas cometidas. Al final, revisa si el resultado es igual o mayor a 25 para otorgarle de forma automática su etiqueta de "competitivo" o dejarlo en "estándar", logrando un control de puntajes rápido y sin errores.