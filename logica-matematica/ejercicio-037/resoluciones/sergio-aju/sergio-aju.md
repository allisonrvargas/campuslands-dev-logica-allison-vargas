# Resolución Ejercicio-037 - Ranking Arquitectura 3D

## Autor:

Sergio Ajú

## Pensamiento del problema
Para determinar el ranking, primero calculamos la media (promedio) de todos los proyectos. Esto nos sirve como línea base para categorizar cada proyecto individualmente.

## Reglas aplicadas
1. **Cálculo de media**: Sumatoria de todos los puntajes dividida por la cantidad de proyectos.
2. **Determinación de categoría**: 
   - Si el puntaje es mayor o igual al promedio: "Nivel Avanzado".
   - Si es menor al promedio: "Nivel Estándar".
3. **Métricas extra**: Se identifica el puntaje más alto para resaltar el mejor diseño.

## Cómo ejecutar
1. Asegúrate de tener Node.js instalado.
2. Ejecuta en tu terminal: `node sergio-aju.js`.

## Casos de prueba
- **Caso Normal**: `[85, 92, 78, 60, 95]` -> El promedio es 82. Los proyectos con 85, 92 y 95 califican como "Nivel Avanzado".
- **Caso Borde**: Un solo proyecto `[70]` -> El promedio es 70, por lo que clasifica como "Nivel Avanzado" (es igual al promedio).