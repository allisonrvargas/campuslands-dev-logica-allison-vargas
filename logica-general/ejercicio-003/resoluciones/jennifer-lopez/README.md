# Plantilla de solucion

## Analisis

- Entrada: La edad de un jugador que quiere inscribirse (por ejemplo, 15 años).
El nivel o rango del jugador en el juego (por ejemplo, "Plata" o "Pro").

- Proceso: El programa revisa si el jugador cumple con lo necesario para entrar al torneo. Primero revisa la edad, porque si es un torneo para mayores de edad, no lo puede dejar pasar. Después revisa su nivel, para ver en qué categoría del torneo de esports colocarlo.

- Salida: Un mensaje que nos diga la decisión final (por ejemplo, si fue "Aceptado") y en qué categoría quedó o la razón de por qué no pudo entrar.

## Reglas identificadas

1. Para poder entrar al torneo, el jugador tiene que ser mayor o igual a 18 años. Si es menor, se queda afuera automáticamente.

2. Si el jugador es mayor de edad y su nivel es "Pro", el programa lo manda directo a la Liga Superior.

3. Si es mayor de edad pero su nivel es bajo o "Amateur", lo manda a la Liga de Desarrollo para que juegue con gente de su mismo nivel.

## Pruebas

### Caso normal

Entrada:
edad: 20
nivel: "Pro"

Resultado esperado:
decision: Aceptado
motivo: Cumple con la edad y va para la Liga Superior por ser nivel Pro.

### Caso borde

Entrada:
edad: 14
nivel: "Pro"

Resultado esperado:
decision: Rechazado
motivo: Aunque tenga buen nivel, no cumple con la edad minima para el torneo.

## Explicacion final
En esta solución el programa funciona de forma inteligente porque analiza dos cosas antes de tomar una decisión: la edad y el rango. Lo primero que hace es un filtro estricto con la edad; si detecta que es menor de edad, ya no revisara el nivel sino que lo rechazara de una vez. Si pasa el filtro de edad, entonces se pone a leer el nivel para elegir la liga correcta sin equivocarse.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
