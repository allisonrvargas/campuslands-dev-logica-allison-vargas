# Reto - Fórmulas Químicas

## Descripción

Este programa clasifica una fórmula química según la cantidad de elementos químicos diferentes que la componen.

La solución recibe la información del compuesto, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del compuesto químico** (cadena de texto).
- **Cantidad de elementos químicos diferentes** (número entero).

### Ejemplo

```javascript
clasificarFormula("Ácido Sulfúrico", 3);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del compuesto.
- Cantidad de elementos químicos.
- Clasificación de la fórmula química.

Si la cantidad de elementos es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    compuesto: "Ácido Sulfúrico",
    cantidadElementos: 3,
    clasificacion: "Compuesto intermedio"
}
```

---

## Reglas utilizadas

| Cantidad de elementos | Clasificación |
|------------------------|---------------|
| 5 o más | Compuesto complejo |
| 3 - 4 | Compuesto intermedio |
| 2 | Compuesto simple |
| 1 | Elemento químico |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarFormula("Ácido Sulfúrico", 3);
```

**Salida esperada**

```javascript
{
    compuesto: "Ácido Sulfúrico",
    cantidadElementos: 3,
    clasificacion: "Compuesto intermedio"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarFormula("Agua", -1);
```

**Salida esperada**

```javascript
{
    compuesto: "Agua",
    clasificacion: "Dato inválido",
    mensaje: "La cantidad de elementos no puede ser negativa."
}
```