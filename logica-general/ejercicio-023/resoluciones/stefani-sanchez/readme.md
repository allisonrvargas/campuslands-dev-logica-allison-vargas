# Ejercicio 023 - Toma de decisiones

## Tematica

Torneo de esports

## Descripcion del problema

Se necesita crear una solucion que permita clasificar jugadores de un torneo de esports usando diferentes reglas de decision.

La solucion recibe datos del jugador y analiza sus estadisticas para determinar su categoria dentro del torneo.

## Como pense el problema

Primero identifique los datos importantes del jugador:

- Cantidad de victorias.
- Nivel del jugador.
- Conducta dentro del torneo.
- Experiencia competitiva.

Luego estableci reglas para tomar una decision:

1. Un jugador con muchas victorias, alto nivel y buena conducta pertenece a la categoria Elite.
2. Un jugador con experiencia media y buena conducta pertenece a la categoria Competitivo.
3. Un jugador con mala conducta queda restringido.
4. Los jugadores que no cumplen las condiciones anteriores quedan como Principiantes.

## Reglas aplicadas

| Condiciones | Resultado |
|------------|-----------|
| Victorias >= 10, nivel >= 20 y conducta buena | Jugador Elite |
| Victorias >= 5, nivel >= 10 y conducta buena | Jugador Competitivo |
| Conducta mala | Jugador Restringido |
| Cualquier otro caso | Jugador Principiante |

## Como ejecutar la solucion

1. Tener instalado Node.js.
2. Abrir una terminal en la carpeta del ejercicio.
3. Ejecutar:

```bash
node stefani-sanchez.js