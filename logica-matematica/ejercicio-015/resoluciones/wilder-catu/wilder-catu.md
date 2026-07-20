# Reto - Dibujo Digital

## Descripción

Este programa clasifica un proyecto de dibujo digital según la cantidad de capas utilizadas durante su elaboración.

La solución recibe los datos del proyecto, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del proyecto** (cadena de texto).
- **Cantidad de capas utilizadas** (número entero).

### Ejemplo

```javascript
clasificarDibujo("Paisaje Futurista", 22);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del proyecto.
- Cantidad de capas utilizadas.
- Clasificación del dibujo digital.

Si la cantidad de capas es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    proyecto: "Paisaje Futurista",
    cantidadCapas: 22,
    clasificacion: "Ilustración avanzada"
}
```

---

## Reglas utilizadas

| Cantidad de capas | Clasificación |
|-------------------|---------------|
| 30 o más | Ilustración profesional |
| 20 - 29 | Ilustración avanzada |
| 10 - 19 | Ilustración intermedia |
| Menos de 10 | Boceto digital |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarDibujo("Paisaje Futurista", 22);
```

**Salida esperada**

```javascript
{
    proyecto: "Paisaje Futurista",
    cantidadCapas: 22,
    clasificacion: "Ilustración avanzada"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarDibujo("Concepto Inicial", -3);
```

**Salida esperada**

```javascript
{
    proyecto: "Concepto Inicial",
    clasificacion: "Dato inválido",
    mensaje: "La cantidad de capas no puede ser negativa."
}
```