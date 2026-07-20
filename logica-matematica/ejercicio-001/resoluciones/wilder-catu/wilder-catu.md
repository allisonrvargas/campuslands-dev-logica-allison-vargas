# Reto - Videojuegos Competitivos

## Descripción

Este programa clasifica a un jugador de videojuegos competitivos según la cantidad de puntos obtenidos.

La solución recibe la información del jugador, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del jugador** (cadena de texto).
- **Puntos obtenidos** (número entero).

Ejemplo:

```javascript
clasificarJugador("Fernando", 1750);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del jugador.
- Cantidad de puntos.
- Clasificación obtenida.

Si los puntos son negativos, devuelve un mensaje indicando que el dato es inválido.

Ejemplo de salida:

```javascript
{
    jugador: "Fernando",
    puntos: 1750,
    clasificacion: "Oro"
}
```

---

## Reglas utilizadas

| Puntos | Clasificación |
|---------|---------------|
| 2000 o más | Diamante |
| 1500 - 1999 | Oro |
| 1000 - 1499 | Plata |
| Menos de 1000 | Bronce |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

Entrada:

```javascript
clasificarJugador("Fernando", 1750);
```

Salida esperada:

```javascript
{
    jugador: "Fernando",
    puntos: 1750,
    clasificacion: "Oro"
}
```

---

### Prueba 2 (Caso límite)

Entrada:

```javascript
clasificarJugador("Carlos", -50);
```

Salida esperada:

```javascript
{
    jugador: "Carlos",
    clasificacion: "Dato inválido",
    mensaje: "Los puntos no pueden ser negativos."
}
```