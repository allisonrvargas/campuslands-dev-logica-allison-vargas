# Clasificación por Reglas - Videojuegos Competitivos

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Videojuegos Competitivos.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

La solución recibe la siguiente información de cada jugador:

- Nombre del jugador.
- Cantidad de puntos obtenidos.

### Ejemplo

```javascript
[
    {
        nombre: "Carlos",
        puntos: 1850
    },
    {
        nombre: "Andrea",
        puntos: 1420
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- El nombre del jugador.
- Los puntos obtenidos.
- El rango asignado según las reglas establecidas.

### Reglas de clasificación

| Puntos | Rango |
|--------:|--------|
| 1800 o más | Diamante |
| 1400 - 1799 | Platino |
| 1000 - 1399 | Oro |
| 600 - 999 | Plata |
| Menos de 600 | Bronce |

### Ejemplo de salida

```text
=== Clasificación de Jugadores Competitivos ===

Carlos | 1850 puntos | Rango: Diamante
Andrea | 1420 puntos | Rango: Platino
Miguel | 980 puntos | Rango: Plata
Sofía | 680 puntos | Rango: Plata
Valeria | 320 puntos | Rango: Bronce
```

---

## Resultado esperado

Clasificar automáticamente a cada jugador de videojuegos competitivos según la cantidad de puntos obtenidos, asignando un rango de acuerdo con las reglas definidas.