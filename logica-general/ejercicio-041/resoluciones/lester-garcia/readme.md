# Plantilla de solucion

## Analisis

- Entrada:
  - victorias: 18
  - derrotas: 4
  - nivel: 32
  - sancionado: false

- Proceso:
  - Verificar si el jugador tiene una sanción activa.
  - Evaluar la cantidad de victorias obtenidas.
  - Revisar el nivel alcanzado.
  - Clasificar al jugador según las reglas establecidas.

- Salida:
  - clasificacion: Liga Diamante
  - motivo: Cumple el mínimo de victorias y nivel requerido.

## Reglas identificadas

1. Si el jugador está sancionado, no puede ser clasificado.
2. Si tiene al menos 15 victorias y nivel 30 o superior, pertenece a la Liga Diamante.
3. Si tiene al menos 10 victorias y nivel 20 o superior, pertenece a la Liga Oro.
4. En cualquier otro caso, pertenece a la Liga Plata.

## Pruebas

### Caso normal

Entrada:

victorias: 18
derrotas: 4
nivel: 32
sancionado: false

Resultado esperado:

clasificacion: Liga Diamante
motivo: Cumple el mínimo de victorias y nivel requerido.

### Caso borde

Entrada:

victorias: 25
derrotas: 1
nivel: 40
sancionado: true

Resultado esperado:

clasificacion: No clasificado
motivo: El jugador tiene una sanción activa.

## Explicacion final

La solución funciona porque evalúa las condiciones en orden de prioridad. Primero verifica si existe una sanción, ya que este caso invalida cualquier clasificación. Si no hay sanción, compara las victorias y el nivel del jugador para asignar la liga correspondiente, garantizando un resultado claro, consistente y verificable.