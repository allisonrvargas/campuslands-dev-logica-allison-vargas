# Plantilla de solucion

## Analisis

- **Entrada:** Una matriz bidimensional (`mallaVertices`) que simula una cuadrícula de coordenadas de profundidad para el renderizado de un objeto en 3D.
- **Proceso:** Verificar que la matriz contenga datos válidos. Después, recorrer cada fila y columna usando ciclos anidados para comprobar si los números de profundidad están dentro de los rangos permitidos.
- **Salida:** Un objeto con el veredicto del renderizado ("Render óptimo" o "Malla corrupta"), el total de fallas encontradas y la ubicación de las coordenadas defectuosas.

## Reglas identificadas

1. **Control de Cuadrícula:** Si la matriz no contiene filas ni columnas para examinar, se cancela el proceso arrojando una alerta por falta de diseño.
2. **Límites de Animación:** Cada coordenada de profundidad debe estar dentro del rango seguro (entre -100 y 100). Cualquier número mayor o menor se considera una deformación del modelo.
3. **Reporte Detallado:** Si se detectan puntos dañados, el sistema no debe ignorarlos, sino registrar su fila y columna exacta para que el animador pueda corregirlos.

## Pruebas

### Caso normal

Entrada:
```javascript
const mallaVertices = [
  [10, 25, -5],
  [40, 0,  15],
  [-8, 50, 30]
];
Resultado esperado:
JSON
{
  "estado": "Render óptimo",
  "motivo": "Todos los vértices de la matriz se encuentran dentro de las coordenadas seguras de animación."
}
Caso borde
Entrada:

JavaScript
const mallaVertices = [
  [10, 25, -5],
  [40, 0,  500],
  [-8, 50, 30]
];
Resultado esperado
JSON
{
  "estado": "Malla corrupta",
  "conteoErrores": 1,
  "detalles": "Se encontraron puntos fuera de los límites de animación en: [Fila 1, Columna 2]."
}
Explicacion final
La solución funciona muy bien porque examina la cuadrícula de animación revisando cuadro por cuadro de forma muy organizada. Al usar dos ciclos juntos (uno para las filas y otro para las columnas), el programa puede mirar cada rincón de la matriz sin que se le escape ningún dato. Gracias a las condiciones simples de máximos y mínimos, descubre al instante cualquier punto salido de los límites y guarda su ubicación exacta, asegurando que el diseño final en 3D no sufra deformaciones antes de renderizar.