# Plantilla de solucion

## Analisis
El problema se diseñó para automatizar el sistema de asignación de rangos o divisiones competitivas para los jugadores de un videojuego basado en su rendimiento estadístico. En lugar de utilizar únicamente el puntaje acumulado, el algoritmo cruza dos variables determinantes: los Puntos de Emparejamiento (*MMR*) y la tasa de victorias (*Win Rate*). Esta combinación asegura que los jugadores no queden estancados en rangos que no corresponden a su nivel de habilidad real y penaliza o premia de manera justa la consistencia en las partidas.

- Entrada: El valor de MMR actual (entero) y la tasa de victorias en porcentaje (flotante entre 0.0 y 100.0).
- Proceso: 
  1. Validar que el MMR y la tasa de victorias no posean valores negativos o incongruentes.
  2. Evaluar de forma jerárquica los rangos numéricos del MMR.
  3. Aplicar un modificador condicional: si el MMR clasifica en una liga pero su tasa de victorias es excepcionalmente alta, el sistema promueve al jugador a una subdivisión de "Élite" dentro de su rango.
- Salida: Un objeto que indica la "Liga" asignada y la "Subdivision" correspondiente del perfil competitivo.

## Reglas identificadas
1. Clasificación por Franjas de MMR:
   - **Plata**: $MMR < 1500$
   - **Oro**: $1500 \leq MMR < 2500$
   - **Diamante**: $MMR \geq 2500$
2. Criterio de Subdivisión por Win Rate:
   - Si la tasa de victorias es estrictamente mayor al 60.0%, el jugador clasifica en la subdivisión `"Élite"`.
   - De lo contrario, se mantiene en la subdivisión `"Estándar"`.
3. Control de Errores en Métricas: Si el MMR es menor a 0 o la tasa de victorias está fuera del rango inclusivo $[0.0, 100.0]$, el sistema frena el emparejamiento devolviendo la liga `"Invalida"` y subdivisión `"Ninguna"`.

## Pruebas

### Caso normal (Oro con alta tasa de victorias)
Entrada: mmr = 1800, winRate = 65.5
Resultado esperado: { "liga": "Oro", "subdivision": "Élite" }

### Caso borde (Métricas exactas de corte)
Entrada: mmr = 1500, winRate = 60.0
Resultado esperado: { "liga": "Oro", "subdivision": "Estándar" }

### Caso de error (Win Rate imposible)
Entrada: mmr = 2800, winRate = 105.0
Resultado esperado: { "liga": "Invalida", "subdivision": "Ninguna" }

## Explicacion final
La solución funciona porque implementa una estructura de control condicional anidada que separa limpiamente la segregación masiva por puntaje técnico de la evaluación de consistencia porcentual por victorias.