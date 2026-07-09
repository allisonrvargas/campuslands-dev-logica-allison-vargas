# Reto - Inventario de Motos

## Descripción

Este programa clasifica el estado del inventario de un modelo de motocicleta según la cantidad de unidades disponibles.

La solución recibe los datos del inventario, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Modelo de la motocicleta** (cadena de texto).
- **Cantidad de unidades disponibles** (número entero).

### Ejemplo

```javascript
clasificarInventario("Yamaha FZ", 15);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Modelo de la motocicleta.
- Cantidad de unidades disponibles.
- Clasificación del inventario.

Si la cantidad es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    modelo: "Yamaha FZ",
    cantidad: 15,
    clasificacion: "Stock medio"
}
```

---

## Reglas utilizadas

| Cantidad de motos | Clasificación |
|-------------------|---------------|
| 20 o más | Stock alto |
| 10 - 19 | Stock medio |
| 1 - 9 | Stock bajo |
| 0 | Sin existencias |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarInventario("Yamaha FZ", 15);
```

**Salida esperada**

```javascript
{
    modelo: "Yamaha FZ",
    cantidad: 15,
    clasificacion: "Stock medio"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarInventario("Honda CB190R", -3);
```

**Salida esperada**

```javascript
{
    modelo: "Honda CB190R",
    clasificacion: "Dato inválido",
    mensaje: "La cantidad de motos no puede ser negativa."
}
```