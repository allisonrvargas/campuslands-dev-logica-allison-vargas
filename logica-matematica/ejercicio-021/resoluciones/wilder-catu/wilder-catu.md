# Reto - Videojuegos Competitivos

## Descripción

Este programa clasifica a un jugador de videojuegos competitivos según el puntaje obtenido durante una temporada o torneo.

La solución recibe la información del jugador, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del jugador** (cadena de texto).
- **Puntaje obtenido** (número entero).

### Ejemplo

```javascript
clasificarJugador("Fernando Colaj", 1700);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del jugador.
- Puntaje obtenido.
- Clasificación del rango alcanzado.

Si el puntaje es negativo, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    jugador: "Fernando Colaj",
    puntaje: 1700,
    clasificacion: "Rango Oro"
}
```

---

## Reglas utilizadas

| Puntaje | Clasificación |
|----------|---------------|
| 2000 o más | Rango Diamante |
| 1500 - 1999 | Rango Oro |
| 1000 - 1499 | Rango Plata |
| Menos de 1000 | Rango Bronce |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarJugador("Fernando Colaj", 1700);
```

**Salida esperada**

```javascript
{
    jugador: "Fernando Colaj",
    puntaje: 1700,
    clasificacion: "Rango Oro"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarJugador("Carlos Pérez", -50);
```

**Salida esperada**

```javascript
{
    jugador: "Carlos Pérez",
    clasificacion: "Dato inválido",
    mensaje: "El puntaje no puede ser negativo."
}
```