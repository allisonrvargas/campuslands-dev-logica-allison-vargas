# Reto - Playlist Musical

## Descripción

Este programa clasifica una canción según su duración para organizar una playlist musical.

La solución recibe la información de la canción, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Título de la canción** (cadena de texto).
- **Duración de la canción** en segundos (número entero).

### Ejemplo

```javascript
clasificarCancion("Blinding Lights", 200);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Título de la canción.
- Duración en segundos.
- Clasificación según su duración.

Si la duración es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    cancion: "Blinding Lights",
    duracionSegundos: 200,
    clasificacion: "Duración media"
}
```

---

## Reglas utilizadas

| Duración (segundos) | Clasificación |
|----------------------|---------------|
| 300 o más | Canción larga |
| 180 - 299 | Duración media |
| 60 - 179 | Canción corta |
| Menos de 60 | Muy corta |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarCancion("Blinding Lights", 200);
```

**Salida esperada**

```javascript
{
    cancion: "Blinding Lights",
    duracionSegundos: 200,
    clasificacion: "Duración media"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarCancion("Canción Desconocida", -15);
```

**Salida esperada**

```javascript
{
    cancion: "Canción Desconocida",
    clasificacion: "Dato inválido",
    mensaje: "La duración de la canción no puede ser negativa."
}
```