# Organización de Listas - Ping Pong

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Ping Pong.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del jugador.
- Cantidad de puntos obtenidos.
- Cantidad de victorias.

### Ejemplo

```javascript
[
    {
        nombre: "Ana",
        puntos: 320,
        victorias: 12
    },
    {
        nombre: "David",
        puntos: 450,
        victorias: 18
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Un ranking de jugadores.
- Los jugadores organizados de mayor a menor según los puntos obtenidos.
- La posición de cada jugador en la clasificación.

### Ejemplo de salida

```text
=== Ranking de Jugadores de Ping Pong ===

1. Laura | Puntos: 500 | Victorias: 20
2. David | Puntos: 450 | Victorias: 18
3. Sofía | Puntos: 390 | Victorias: 15
4. Ana | Puntos: 320 | Victorias: 12
5. Miguel | Puntos: 280 | Victorias: 10
```

---

## Regla aplicada

La lista se organiza de forma descendente utilizando la cantidad de puntos como criterio principal para determinar el ranking.

---

## Resultado esperado

Obtener una clasificación ordenada de los jugadores de Ping Pong según su desempeño en el torneo, facilitando la identificación de los mejores puntajes.