# Resolución Ejercicio-038 - Normalización de Soldadura

## Pensamiento del problema
En soldadura, es vital comparar piezas que pueden haber sido evaluadas con criterios diferentes. La normalización permite comparar el rendimiento relativo de cada prueba.

## Reglas aplicadas
1. **Identificación de límites**: Obtener el puntaje mínimo y máximo del conjunto.
2. **Escalamiento Min-Max**: Aplicar la fórmula `(x - min) / (max - min) * 100` para que el peor resultado sea 0 y el mejor 100.
3. **Manejo de excepciones**: Si todos los valores son iguales (max == min), se asigna 100 para evitar errores matemáticos.

## Cómo ejecutar
1. Abre tu terminal en esta carpeta.
2. Ejecuta: `node sergio-aju.js`.

## Casos de prueba
- **Caso Normal**: `[50, 75, 100]` -> Normalizado a `[0, 50, 100]`.
- **Caso Borde**: `[80, 80, 80]` -> Normalizado a `[100, 100, 100]` (todos tienen la misma calidad).