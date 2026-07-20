# Plantilla de solucion

## Analisis

- Entrada:
  - inscritos: true
  - jugadores: 5
  - ranking: 12
  - sancionado: false

- Proceso:
  - Verificar si el equipo está inscrito.
  - Comprobar que tenga el mínimo de jugadores.
  - Revisar si posee alguna sanción.
  - Evaluar su posición en el ranking para decidir su participación.

- Salida:
  - decision: Clasifica a la fase final
  - motivo: Cumple todos los requisitos y su ranking está dentro del límite.

## Reglas identificadas

1. El equipo debe estar inscrito en el torneo.
2. Debe contar con al menos 5 jugadores.
3. Un equipo sancionado no puede participar.
4. Si cumple todos los requisitos y su ranking es 16 o mejor, clasifica directamente a la fase final.
5. Si cumple los requisitos pero su ranking es inferior, deberá jugar la fase clasificatoria.

## Pruebas

### Caso normal

Entrada:

inscritos: true
jugadores: 5
ranking: 12
sancionado: false

Resultado esperado:

decision: Clasifica a la fase final
motivo: Cumple todos los requisitos y su ranking está dentro del límite.

### Caso borde

Entrada:

inscritos: true
jugadores: 4
ranking: 8
sancionado: false

Resultado esperado:

decision: Rechazar participación
motivo: El equipo no cuenta con el número mínimo de jugadores.

## Explicacion final

La solución funciona porque evalúa las condiciones en un orden de prioridad. Primero verifica los requisitos obligatorios de participación (inscripción, cantidad de jugadores y sanciones). Solo si estos se cumplen, analiza el ranking para decidir si el equipo clasifica directamente a la fase final o debe disputar la fase clasificatoria. Esto garantiza un resultado consistente, verificable y basado en reglas de negocio.