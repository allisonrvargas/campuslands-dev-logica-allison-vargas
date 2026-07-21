# Operaciones Aritméticas Controladas - Campuslands

## Descripción
Este programa calcula el rendimiento promedio de un grupo de jugadores de e-sports, ajustando el resultado con bonos y penalizaciones del torneo, y clasificando al equipo según su desempeño final.

## Análisis
- **Entrada:** Arreglo `participantes` (ints), `bono` (int), `penalización` (int).
- **Proceso:** 1. Validar que la lista no esté vacía.
  2. Calcular el promedio aritmético.
  3. Aplicar bonos y penalizaciones.
  4. Determinar la categoría mediante rangos.
- **Salida:** Objeto con el puntaje final calculado y la clasificación resultante.

## Reglas Aplicadas
1. **Promedio:** Sumatoria total dividida por la cantidad de elementos.
2. **Clasificación:** - [0 - 14]: Novato.
   - [15 - 30]: Competitivo.
   - [31+]: Profesional.

## Ejecución
El script está diseñado en Python. Para ejecutarlo:
`python nombre-apellido.py`

## Casos Probados
1. **Normal:** `[12, 18, 25, 30]` con bono 8 y penalización 3 -> Resultado 25.75 (Competitivo).
2. **Borde (Lista vacía):** `[]` con bono 5 y penalización 2 -> Resultado 3 (Novato).