# Reto - Películas de Ciencia Ficción

## Descripción

Este programa clasifica una película de ciencia ficción según su duración.

La solución recibe la información de la película, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Título de la película** (cadena de texto).
- **Duración de la película** en minutos (número entero).

### Ejemplo

```javascript
clasificarPelicula("Interstellar", 169);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Título de la película.
- Duración en minutos.
- Clasificación según su duración.

Si la duración es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    pelicula: "Interstellar",
    duracionMinutos: 169,
    clasificacion: "Largometraje"
}
```

---

## Reglas utilizadas

| Duración (minutos) | Clasificación |
|--------------------|---------------|
| 180 o más | Épica |
| 120 - 179 | Largometraje |
| 90 - 119 | Duración estándar |
| Menos de 90 | Cortometraje |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarPelicula("Interstellar", 169);
```

**Salida esperada**

```javascript
{
    pelicula: "Interstellar",
    duracionMinutos: 169,
    clasificacion: "Largometraje"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarPelicula("Proyecto X", -20);
```

**Salida esperada**

```javascript
{
    pelicula: "Proyecto X",
    clasificacion: "Dato inválido",
    mensaje: "La duración de la película no puede ser negativa."
}
```