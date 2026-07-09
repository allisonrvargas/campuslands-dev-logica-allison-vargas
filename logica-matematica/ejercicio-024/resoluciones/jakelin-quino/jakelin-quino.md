## Analisis

- Entrada: Un arreglo con los precios de diferentes motocicletas en inventario.
- Proceso: Identificar el valor máximo del arreglo y compararlo contra umbrales definidos para determinar su gama (alta, media o de entrada).
- Salida: El precio máximo encontrado y la clasificación de gama correspondiente.

## Reglas identificadas

1. El máximo se obtiene comparando todos los elementos del arreglo.
2. Si precio > 14000: "gama alta".
3. Si precio está entre 10000 y 14000: "gama media".
4. Si precio < 10000: "gama de entrada".

## Pruebas

### Caso normal

Entrada:
inventarioPrecios: [12000, 8500, 15000, 9200, 11000]

Resultado esperado:
precio_maximo: 15000
rango_clasificacion: gama alta

### Caso borde

Entrada:
inventarioPrecios: [9999, 8000]

Resultado esperado:
precio_maximo: 9999
rango_clasificacion: gama de entrada

## Explicacion final

Utilicé el operador de propagación (`...`) junto con `Math.max()` para extraer el valor más alto del inventario de forma concisa. Luego, mediante una estructura de control `if-else if-else`, clasifiqué el producto según los rangos definidos. Este enfoque asegura que el sistema siempre asigne una categoría, incluso con precios limítrofes.
