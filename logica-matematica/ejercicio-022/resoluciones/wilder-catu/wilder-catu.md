# Reto - Ranking de Fútbol Sala

## Descripción

Este programa clasifica a un equipo de fútbol sala según los puntos obtenidos durante un torneo.

La solución recibe la información del equipo, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del equipo** (cadena de texto).
- **Puntos obtenidos en el torneo** (número entero).

### Ejemplo

```javascript
clasificarEquipo("Leones FC", 24);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del equipo.
- Puntos obtenidos.
- Clasificación en el ranking del torneo.

Si los puntos son negativos, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    equipo: "Leones FC",
    puntos: 24,
    clasificacion: "Zona de clasificación"
}
```

---

## Reglas utilizadas

| Puntos | Clasificación |
|---------|---------------|
| 30 o más | Líder del torneo |
| 20 - 29 | Zona de clasificación |
| 10 - 19 | Media tabla |
| Menos de 10 | Zona de descenso |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarEquipo("Leones FC", 24);
```

**Salida esperada**

```javascript
{
    equipo: "Leones FC",
    puntos: 24,
    clasificacion: "Zona de clasificación"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarEquipo("Tigres FC", -5);
```

**Salida esperada**

```javascript
{
    equipo: "Tigres FC",
    clasificacion: "Dato inválido",
    mensaje: "Los puntos no pueden ser negativos."
}
```