# Reto - Kickboxing

## Descripción

Este programa clasifica a un peleador de kickboxing según la cantidad de puntos obtenidos en una competencia.

La solución recibe los datos del peleador, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del peleador** (cadena de texto).
- **Puntos obtenidos** (número entero).

### Ejemplo

```javascript
clasificarPeleador("Fernando Colaj", 82);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del peleador.
- Puntos obtenidos.
- Clasificación alcanzada.

Si los puntos son negativos, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    peleador: "Fernando Colaj",
    puntos: 82,
    clasificacion: "Finalista"
}
```

---

## Reglas utilizadas

| Puntos | Clasificación |
|---------|---------------|
| 90 o más | Campeón |
| 75 - 89 | Finalista |
| 60 - 74 | Competidor |
| Menos de 60 | En entrenamiento |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarPeleador("Fernando Colaj", 82);
```

**Salida esperada**

```javascript
{
    peleador: "Fernando Colaj",
    puntos: 82,
    clasificacion: "Finalista"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarPeleador("Carlos Pérez", -8);
```

**Salida esperada**

```javascript
{
    peleador: "Carlos Pérez",
    clasificacion: "Dato inválido",
    mensaje: "Los puntos no pueden ser negativos."
}
```