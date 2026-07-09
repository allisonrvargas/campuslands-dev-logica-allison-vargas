# Plantilla de solucion

## Analisis

- **Entrada:** Dos objetos (`jugadorA` y `jugadorB`) que contienen las propiedades de nombre y la cantidad de puntos acumulados en el set de pingpong.
- **Proceso:** Validar que los puntajes existan y sean números. Luego, realizar una comparación directa entre los puntos de ambos jugadores para identificar cuál es mayor o si son exactamente iguales.
- **Salida:** Un objeto con el veredicto final del partido, el nombre del ganador (si aplica) y un mensaje sencillo explicando la razón del resultado.

## Reglas identificadas

1. **Filtro de Marcador:** Si los datos recibidos están vacíos o no tienen puntajes numéricos, la simulación del partido se detiene de inmediato por falta de información.
2. **Criterio de Victoria:** El jugador que sume la mayor cantidad de puntos se lleva la victoria de la partida.
3. **Resolución de Empates:** Si los dos competidores tienen la misma cantidad de puntos, el sistema debe reportar un estado de empate y solicitar un set extra.

## Pruebas

### Caso normal

Entrada:
```javascript
const jugadorA = { nombre: "Allison Vargas", puntos: 21 };
const jugadorB = { nombre: "Rival Técnico", puntos: 15 };
Resultado esperado:
JSON
{
  "resultado": "Ganador definido",
  "campeon": "Allison Vargas",
  "motivo": "Allison Vargas anotó más puntos en el encuentro con un total de 21."
}
Caso borde
Entrada:

JavaScript
const jugadorA = { nombre: "Allison Vargas", puntos: 20 };
const jugadorB = { nombre: "Rival Técnico", puntos: 20 };
Resultado esperado
JSON
{
  "resultado": "Empate",
  "motivo": "Ambos jugadores tienen el mismo puntaje (20 puntos). Se requiere un set de desempate."
}
Explicacion final
La solución funciona muy bien porque compara directamente los puntos de los dos jugadores usando condiciones simples y ordenadas. Al evaluar primero si alguien metió más puntos, el programa identifica al ganador sin rodeos. Además, incluye una regla especial para detectar cuando quedan iguales, lo que evita que el sistema se confunda en caso de un empate en la mesa de pingpong. Por último, la revisión del inicio asegura que el código no trabaje si faltan los puntajes de los competidores.