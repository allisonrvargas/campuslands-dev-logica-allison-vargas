# Reto - Comida Urbana

## Descripción

Este programa clasifica un pedido de comida urbana según la cantidad de productos solicitados.

La solución recibe los datos del cliente y la cantidad de productos del pedido, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del cliente** (cadena de texto).
- **Cantidad de productos solicitados** (número entero).

### Ejemplo

```javascript
clasificarPedido("Fernando Colaj", 6);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del cliente.
- Cantidad de productos solicitados.
- Clasificación del tipo de pedido.

Si la cantidad de productos es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    cliente: "Fernando Colaj",
    cantidadProductos: 6,
    clasificacion: "Pedido familiar"
}
```

---

## Reglas utilizadas

| Cantidad de productos | Clasificación |
|------------------------|---------------|
| 10 o más | Pedido para evento |
| 5 - 9 | Pedido familiar |
| 2 - 4 | Pedido compartido |
| 1 | Pedido individual |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarPedido("Fernando Colaj", 6);
```

**Salida esperada**

```javascript
{
    cliente: "Fernando Colaj",
    cantidadProductos: 6,
    clasificacion: "Pedido familiar"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarPedido("Carlos Pérez", -2);
```

**Salida esperada**

```javascript
{
    cliente: "Carlos Pérez",
    clasificacion: "Dato inválido",
    mensaje: "La cantidad de productos no puede ser negativa."
}
```