# Plantilla de solucion: Problema 31

## Analisis
El problema consiste en diseñar un sistema automatizado para la organización, ordenamiento y emparejamiento de atletas en un torneo de kickboxing. Para garantizar la seguridad de los competidores y la equidad deportiva, el sistema debe agrupar a los peleadores basándose en sus categorías de peso oficiales y su nivel de experiencia (número de combates previos), descartando registros que no cumplan con el peso mínimo o que tengan incoherencias en su historial.

- Entrada: Una lista de objetos que representan a los kickboxers (cada uno con `nombre` [texto], `pesoKg` [flotante], y `peleasGanadas` [entero]).
- Proceso:
  1. Validar que la lista de atletas no esté vacía.
  2. Filtrar a los atletas que no cumplan con el peso mínimo reglamentario para competir en el torneo Abierto (por ejemplo, menos de $50 \text{ kg}$).
  3. Organizar y ordenar de manera descendente a los atletas aptos según su historial de victorias (`peleasGanadas`) para facilitar la siembra o cabezas de serie del torneo.
- Salida: Una lista ordenada con los kickboxers clasificados o un estado de error si no hay competidores válidos.

## Reglas identificadas
1. Filtro de Peso Mínimo: Un atleta es considerado apto para participar si su peso corporal en kilogramos es mayor o igual a $50.0 \text{ kg}$ ($\text{pesoKg} \geq 50.0$). De lo contrario, queda excluido por seguridad médica.
2. Criterio de Organización (Ordenamiento): La lista final de clasificados debe organizarse de forma descendente utilizando como clave el atributo `peleasGanadas`. En caso de empate en victorias, se prioriza al de menor peso para dar ventaja competitiva al atleta más ligero.
3. Control de Lista Desierta: Si tras aplicar los filtros de peso no queda ningún competidor apto, o si la lista inicial de entrada estaba vacía, el sistema debe retornar un arreglo vacío (`[]`).

## Pruebas

### Caso 1: Organización y ordenamiento estándar
Entrada: atletas = `[{"nombre": "Carlos", "pesoKg": 72.5, "peleasGanadas": 12}, {"nombre": "Luis", "pesoKg": 65.0, "peleasGanadas": 15}, {"nombre": "Andrés", "pesoKg": 48.0, "peleasGanadas": 5}]`
- Andrés queda fuera por peso ($48.0 < 50.0$).
- Luis (15 victorias) va antes que Carlos (12 victorias).
Resultado esperado: `[{"nombre": "Luis", "pesoKg": 65.0, "peleasGanadas": 15}, {"nombre": "Carlos", "pesoKg": 72.5, "peleasGanadas": 12}]`

### Caso 2: Desempate por menor peso
Entrada: atletas = `[{"nombre": "Juan", "pesoKg": 80.0, "peleasGanadas": 10}, {"nombre": "Pedro", "pesoKg": 70.0, "peleasGanadas": 10}]`
- Ambos tienen 10 victorias. Pedro pesa menos ($70.0 < 80.0$), por lo que va primero.
Resultado esperado: `[{"nombre": "Pedro", "pesoKg": 70.0, "peleasGanadas": 10}, {"nombre": "Juan", "pesoKg": 80.0, "peleasGanadas": 10}]`

## Explicacion final
La solución funciona porque aplica un filtro lineal inicial para limpiar la muestra de datos de atletas no aptos y posteriormente invoca un algoritmo de ordenamiento por múltiples llaves (victorias descendentes, peso ascendente), garantizando un cuadro de competencia balanceado.