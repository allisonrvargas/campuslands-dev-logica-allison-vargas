# Reto - Ping Pong

## Descripción

Este programa clasifica a un jugador de ping pong según la cantidad de puntos obtenidos durante un partido.

La solución recibe los datos del jugador, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del jugador** (cadena de texto).
- **Puntos obtenidos** (número entero).

### Ejemplo

```javascript
clasificarJugador("Fernando Colaj", 18);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del jugador.
- Cantidad de puntos obtenidos.
- Clasificación del desempeño.

Si los puntos son negativos, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    jugador: "Fernando Colaj",
    puntos: 18,
    clasificacion: "Buen desempeño"
}
```

---

## Reglas utilizadas

| Puntos | Clasificación |
|---------|---------------|
| 21 o más | Ganador |
| 15 - 20 | Buen desempeño |
| 10 - 14 | Desempeño regular |
| Menos de 10 | Debe mejorar |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarJugador("Fernando Colaj", 18);
```

**Salida esperada**

```javascript
{
    jugador: "Fernando Colaj",
    puntos: 18,
    clasificacion: "Buen desempeño"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarJugador("Carlos Pérez", -4);
```

**Salida esperada**

```javascript
{
    jugador: "Carlos Pérez",
    clasificacion: "Dato inválido",
    mensaje: "Los puntos no pueden ser negativos."
}
```