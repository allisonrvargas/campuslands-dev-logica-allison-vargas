# Plantilla de solucion: Problema 32

## Analisis
El problema se diseñó para resolver la selección automática de la mejor estrategia o equipamiento (palas de ping-pong) para un jugador en función de las estadísticas de su oponente y las condiciones del torneo. En el tenis de mesa de alta competencia, elegir entre una pala orientada al control (goma rugosa/defensiva) o al ataque (goma lisa/velocidad) puede definir el resultado. El sistema debe comparar las opciones disponibles en el inventario del jugador frente al perfil técnico del rival para determinar la opción óptima, manejando casos de empate o datos insuficientes.

- Entrada: Un objeto que representa el perfil del oponente (con atributos `estilo` ["Atacante" o "Defensivo"] y `velocidadRemate` [entero de 1 a 10]) y una lista de opciones de palas disponibles (cada una con `nombre`, `control` [1 a 10] y `ataque` [1 a 10]).
- Proceso:
  1. Validar que el perfil del oponente contenga datos válidos y la lista de opciones no esté vacía.
  2. Si el oponente es `"Atacante"`, la estrategia ideal es priorizar la pala con el mayor atributo de `control` para contrarrestar los remates.
  3. Si el oponente es `"Defensivo"`, la estrategia exige desgastar su defensa priorizando la pala con el mayor atributo de `ataque`.
  4. En caso de que dos palas tengan el mismo valor en el atributo priorizado, se desempata eligiendo la que tenga el mayor valor en el atributo secundario.
- Salida: Un objeto que contiene el nombre de la pala óptima recomendada y la estrategia sugerida.

## Reglas identificadas
1. Filtro por Perfil de Rival (Priorización):
   - Rival `"Atacante"` $\rightarrow$ Se busca maximizar el valor de `control`.
   - Rival `"Defensivo"` $\rightarrow$ Se busca maximizar el valor de `ataque`.
2. Criterio de Desempate Estricto: Si hay un empate en la estadística prioritaria, se evalúa la estadística secundaria (si se priorizaba control, el desempate es por ataque, y viceversa). Si el empate persiste en ambos atributos, se elige la primera pala encontrada en la lista.
3. Control de Errores: Si el estilo del oponente no es válido o la lista de palas está vacía, el sistema aborta devolviendo la pala `"Ninguna"` y la estrategia `"Indefinida"`.

## Pruebas

### Caso 1: Rival atacante (Prioriza control)
Entrada: oponente = `{"estilo": "Atacante", "velocidadRemate": 8}`, palas = `[{"nombre": "Pala Alpha", "control": 9, "ataque": 6}, {"nombre": "Pala Beta", "control": 7, "ataque": 9}]`
Resultado esperado: { "palaRecomendada": "Pala Alpha", "estrategia": "Contrapeso de Control" }

### Caso 2: Empate en atributo principal (Aplica desempate)
Entrada: oponente = `{"estilo": "Defensivo", "velocidadRemate": 4}`, palas = `[{"nombre": "Striker X", "control": 5, "ataque": 8}, {"nombre": "Striker Y", "control": 7, "ataque": 8}]`
- Ambos tienen ataque 8. Se desempata por mayor control (Striker Y tiene 7 > 5).
Resultado esperado: { "palaRecomendada": "Striker Y", "estrategia": "Ofensiva Total" }

## Explicacion final
La solución funciona porque implementa un algoritmo de selección por ordenamiento condicional dinámico. La propiedad de ordenamiento cambia según el estado del oponente, aislando los criterios de desempate en una única función estructurada.