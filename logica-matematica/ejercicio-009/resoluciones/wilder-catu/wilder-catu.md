# Reto - Película de Miedo

## Descripción

Este programa clasifica una película de miedo según su duración.

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
clasificarPelicula("El Conjuro", 112);
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
    pelicula: "El Conjuro",
    duracion: 112,
    clasificacion: "Terror estándar"
}
```

---

## Reglas utilizadas

| Duración (minutos) | Clasificación |
|--------------------|---------------|
| 150 o más | Terror épico |
| 120 - 149 | Largometraje de terror |
| 90 - 119 | Terror estándar |
| Menos de 90 | Cortometraje de terror |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarPelicula("El Conjuro", 112);
```

**Salida esperada**

```javascript
{
    pelicula: "El Conjuro",
    duracion: 112,
    clasificacion: "Terror estándar"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarPelicula("La Maldición", -10);
```

**Salida esperada**

```javascript
{
    pelicula: "La Maldición",
    clasificacion: "Dato inválido",
    mensaje: "La duración no puede ser negativa."
}
```