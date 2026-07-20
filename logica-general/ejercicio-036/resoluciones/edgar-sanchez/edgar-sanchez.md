# Plantilla de solucion

## Analisis

- **Entrada:** 
  - Una lista de listas (matriz bidimensional) que representa los puntos clave o coordenadas de un objeto en el espacio de animación 3D.
- **Proceso:** 
  1. Validar que la matriz no esté vacía y que sea cuadrada (mismo número de filas y columnas).
  2. Recorrer los elementos de la matriz mediante dos bucles anidados.
  3. Comparar cada elemento de la posición `[i][j]` con su reflejo en la posición `[j][i]`.
- **Salida:** 
  - Un valor booleano: `True` si la configuración de animación es perfectamente simétrica, o `False` si existe alguna discrepancia o si la estructura no es válida.

## Reglas identificadas

1. **Condición de Cuadrícula Cuadrada:** Un reflejo simétrico en animación 3D solo puede existir si el espacio de la matriz posee dimensiones idénticas ($N \times N$).
2. **Optimización de Espejo:** No es necesario revisar toda la matriz; comparar los elementos por encima de la diagonal principal (`j > i`) contra sus contrapartes inferiores ahorra la mitad del tiempo de cómputo.
3. **Fallo Inmediato:** En el momento en que un solo par de datos `[i][j]` y `[j][i]` no coincida, el algoritmo debe detenerse inmediatamente y retornar falso para optimizar recursos.

## Pruebas

### Caso normal

Entrada:
```python
[
    [1, 2, 3],
    [2, 5, 4],
    [3, 4, 9]
]