# Reto - Animación 3D

## Descripción

Este programa clasifica un proyecto de animación 3D según la cantidad de fotogramas utilizados.

La solución recibe la información del proyecto, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del proyecto** (cadena de texto).
- **Cantidad de fotogramas** (número entero).

### Ejemplo

```javascript
clasificarAnimacion("Robot del Futuro", 3500);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del proyecto.
- Cantidad de fotogramas.
- Clasificación de la animación.

Si la cantidad de fotogramas es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    proyecto: "Robot del Futuro",
    fotogramas: 3500,
    clasificacion: "Animación profesional"
}
```

---

## Reglas utilizadas

| Cantidad de fotogramas | Clasificación |
|-------------------------|---------------|
| 5000 o más | Animación cinematográfica |
| 3000 - 4999 | Animación profesional |
| 1000 - 2999 | Animación intermedia |
| Menos de 1000 | Animación básica |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarAnimacion("Robot del Futuro", 3500);
```

**Salida esperada**

```javascript
{
    proyecto: "Robot del Futuro",
    fotogramas: 3500,
    clasificacion: "Animación profesional"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarAnimacion("Escena Inicial", -250);
```

**Salida esperada**

```javascript
{
    proyecto: "Escena Inicial",
    clasificacion: "Dato inválido",
    mensaje: "La cantidad de fotogramas no puede ser negativa."
}
```