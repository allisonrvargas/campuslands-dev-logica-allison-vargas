# Reto - Tatuajes

## Descripción

Este programa clasifica un tatuaje según su tamaño.

La solución recibe los datos del cliente y el tamaño del tatuaje, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del cliente** (cadena de texto).
- **Tamaño del tatuaje** en centímetros (número entero).

### Ejemplo

```javascript
clasificarTatuaje("Fernando Colaj", 18);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del cliente.
- Tamaño del tatuaje.
- Clasificación del tatuaje.

Si el tamaño es negativo, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    cliente: "Fernando Colaj",
    tamano: 18,
    clasificacion: "Tatuaje mediano"
}
```

---

## Reglas utilizadas

| Tamaño (cm) | Clasificación |
|-------------|---------------|
| 30 o más | Tatuaje grande |
| 15 - 29 | Tatuaje mediano |
| 5 - 14 | Tatuaje pequeño |
| Menos de 5 | Micro tatuaje |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarTatuaje("Fernando Colaj", 18);
```

**Salida esperada**

```javascript
{
    cliente: "Fernando Colaj",
    tamano: 18,
    clasificacion: "Tatuaje mediano"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarTatuaje("Carlos Pérez", -6);
```

**Salida esperada**

```javascript
{
    cliente: "Carlos Pérez",
    clasificacion: "Dato inválido",
    mensaje: "El tamaño del tatuaje no puede ser negativo."
}
```