# Plantilla de solucion

## Analisis

- Entrada: Una lista con los pesos en kilos de los peleadores que se inscribieron: [65, 82, 70, 90, 58].

- Proceso: El programa tiene que leer la lista de pesos uno por uno usando un ciclo. Va revisando el peso de cada deportista y, usando un contador, los va organizando y sumando en su categoría correcta: si pesa menos de 70 kg va para "Ligero", y si pesa 70 kg o más va para "Pesado".

- Salida: Un conteo final que nos diga cuántos peleadores quedaron en la categoría de Ligero y cuántos en la de Pesado.

## Reglas identificadas

1. Si el peleador tiene un peso menor estricto a 70 kg, el ciclo lo identifica y lo suma al grupo de categoría "Ligero".

2. Si el peleador pesa 70 kg o muchísimo más, el programa lo manda y lo acumula en el grupo de categoría "Pesado".

3. Si la lista de inscritos nos llega vacía, el programa debe avisar que no hay nadie para organizar en vez de contar cosas que no existen.

## Pruebas

### Caso normal

Entrada: pesosInscritos: [65, 82, 70, 90, 58]

Resultado esperado: 
totalLigeros: 2
totalPesados: 3
mensaje: Lista organizada: salieron 2 de peso ligero y 3 de peso pesado.

### Caso borde

Entrada:
pesosInscritos: []

Resultado esperado:
totalLigeros: 0
totalPesados: 0
mensaje: Error: No hay peleadores inscritos en la lista para organizar.

## Explicacion final

En esta solución el programa usa un ciclo for para ir caminando a través de toda la lista de pesos de kickboxing sin importar qué tan larga sea. Dentro del bucle se colocaron condiciones para separar a los peleadores por peso e ir sumando a nuestros acumuladores. Si por error mandan una lista vacía, la primera condición frena todo y manda un aviso claro en la consola para proteger el sistema.
## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
