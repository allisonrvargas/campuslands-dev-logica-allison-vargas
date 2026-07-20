# Ejercicio 039 - Validación Numérica

## Análisis del Problema
El reto consiste en procesar una lista de puntajes de participantes, aplicar ajustes mediante bonos y penalizaciones, y determinar una categoría basada en el resultado final. El objetivo principal es garantizar que la lógica aritmética sea robusta, manejando correctamente tanto los datos de entrada como los casos donde la lista de participantes sea vacía.

## Reglas Aplicadas
1. **Promedio:** Se calcula la suma total de los puntos de los participantes dividida por la cantidad de elementos. El resultado se redondea al entero más cercano.
2. **Cálculo Final:** Se aplica la fórmula: `Puntaje Final = Promedio + Bono - Penalización`.
3. **Clasificación:**
   - **Elite:** Puntaje final ≥ 50.
   - **Competitivo:** 20 ≤ Puntaje final < 50.
   - **Principiante:** Puntaje final < 20.



## Cómo ejecutar la solución
1. Asegúrate de tener instalado **Node.js** (si usas JavaScript) o **Python** (si usas Python).
2. Ubícate en la terminal dentro de la carpeta `resoluciones/tu-nombre/`.
3. Ejecuta el archivo correspondiente:
   - Para JS: `node tu-nombre.js`
   - Para Python: `python tu-nombre.py`

## Casos de Prueba

### 1. Caso Normal (Ejemplo)
- **Entrada:** `participantes: [12, 18, 25, 30]`, `bono: 8`, `penalización: 3`
- **Resultado:** - `puntaje_final: 26`
  - `clasificación: competitivo`

### 2. Caso Borde (Lista vacía)
- **Entrada:** `participantes: []`, `bono: 10`, `penalización: 5`
- **Resultado:** - `puntaje_final: 0`
  - `clasificación: principiante`
  - *Explicación: Se valida que no ocurra una división por cero.*

### 3. Caso Borde (Valores negativos)
- **Entrada:** `participantes: [5, 5]`, `bono: 0`, `penalización: 15`
- **Resultado:** - `puntaje_final: -10`
  - `clasificación: principiante`