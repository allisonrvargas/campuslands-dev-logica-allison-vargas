## Análisis
- **Entrada**: Las coordenadas $(x, y)$ del paracaidista y del punto objetivo.
- **Proceso**: Restar las coordenadas, elevar al cuadrado, sumar y sacar la raíz cuadrada.
- **Salida**: La distancia total en línea recta.

## Reglas aplicadas
- Usar el teorema de Pitágoras: $d = \sqrt{(x2-x1)^2 + (y2-y1)^2}$.

## Pruebas
- **Caso Normal**: Salto en (0,0) a objetivo (3,4) -> Distancia 5.
- **Caso Borde**: Salto en (0,0) a objetivo (0,0) -> Distancia 0.

## Explicación
La distancia es básicamente la hipotenusa de un triángulo. Resto las coordenadas para saber cuánto mide cada lado del triángulo y aplico la raíz cuadrada de la suma de sus cuadrados.