# Ejercicio 040 - Simulaciones con fórmulas (Comida Urbana)

## Autor:

Sergio Ajú

## Análisis del Problema
El reto consiste en procesar métricas de un negocio de comida urbana mediante una lista de valores numéricos. Se requiere calcular un promedio y ajustar el resultado aplicando bonos y penalizaciones para determinar el nivel de rendimiento operativo.

## Reglas Aplicadas
1. **Promedio:** Se suma el total de los valores y se divide entre la cantidad de participantes (ventas/tiempos), redondeando al entero más cercano.
2. **Cálculo Final:** Se aplica la fórmula: `Puntaje Final = Promedio + Bono - Penalización`.
3. **Clasificación:**
   - **Alto impacto:** Puntaje final ≥ 50.
   - **Eficiente:** 20 ≤ Puntaje final < 50.
   - **En desarrollo:** Puntaje final < 20.



## Cómo revisar la solución
1. Asegúrate de tener instalado **Node.js**.
2. Ubícate en la terminal dentro de esta carpeta.
3. Ejecuta el comando: `node nombre-apellido.js`.

## Casos Probados
- **Caso Normal:** - Entrada: `[12, 18, 25, 30]`, `bono: 8`, `penalización: 3`
  - Resultado: `26` (Clasificación: eficiente).
- **Caso Borde (Lista vacía):** - Entrada: `[]`, `bono: 5`, `penalización: 2`
  - Resultado: `0` (Clasificación: en desarrollo).
  - *Nota: Se incluyó validación para evitar división por cero.*