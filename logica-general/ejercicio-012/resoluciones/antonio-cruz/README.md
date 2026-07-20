# Ejercicio 012 - Comparacion de opciones

## Analisis

### Entrada

* Dos jugadores.
* Cada jugador tiene un nombre y una cantidad de puntos.

### Proceso

Se comparan los puntos obtenidos por cada jugador.

Si uno tiene mas puntos que el otro, se declara ganador.

Si ambos tienen la misma cantidad, el resultado es un empate.

### Salida

Un mensaje indicando quien gano la partida o si hubo empate.

---

## Reglas identificadas

* Gana el jugador con mas puntos.
* Si ambos tienen los mismos puntos, el resultado es un empate.
* Si faltan datos, no se puede realizar la comparacion.

---

## Como ejecutar

1. Abrir la carpeta del ejercicio.
2. Ejecutar:

```bash
node eduardo-cruz.js
```

---

## Casos de prueba

### Caso normal

**Entrada**

```javascript
compararJugadores(
    { nombre: "Ana", puntos: 9 },
    { nombre: "Sofia", puntos: 11 }
)
```

**Resultado esperado**

```text
Sofia gana la partida.
```

### Caso borde

**Entrada**

```javascript
compararJugadores(
    { nombre: "Pedro", puntos: 10 },
    { nombre: "Juan", puntos: 10 }
)
```

**Resultado esperado**

```text
La partida termina en empate.
```

---

## Explicacion final

La solucion funciona porque compara los puntos de ambos jugadores y aplica una regla sencilla para determinar el resultado. Tambien contempla el caso donde ambos obtienen la misma puntuacion y el caso en que faltan datos para realizar la comparacion.
