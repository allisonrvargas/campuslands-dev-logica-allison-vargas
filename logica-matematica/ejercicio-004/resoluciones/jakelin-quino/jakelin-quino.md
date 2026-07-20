## Analisis

- Entrada: Un arreglo con los kilometrajes de varias motos y un límite máximo permitido.
- Proceso: Identificar el valor máximo dentro del arreglo y compararlo contra el límite.
- Salida: El valor máximo hallado y el estado del inventario.

## Reglas identificadas

1. Se recorre el arreglo comparando cada valor para encontrar el número mayor.
2. Si el valor máximo supera el límite, el estado es "requiere revision de stock".
3. Si no supera el límite, el estado es "stock en rango optimo".

## Pruebas

### Caso normal

Entrada:
kilometrajes: [5000, 12000, 8000]
limiteAceptable: 20000

Resultado esperado:
kilometraje_maximo: 12000
estado: stock en rango optimo

### Caso borde

Entrada:
kilometrajes: [25000, 3000]
limiteAceptable: 20000

Resultado esperado:
kilometraje_maximo: 25000
estado: requiere revision de stock

## Explicacion final

Utilicé una variable 'maximo' inicializada en 0 para ir comparando cada elemento del arreglo. Si un elemento es mayor que el actual 'maximo', este se actualiza. Al finalizar, comparé este valor con el límite usando un 'if' para determinar la acción a seguir en el inventario.