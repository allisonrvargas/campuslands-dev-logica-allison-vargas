# Explicación del código: Clasificación de Películas de Ciencia Ficción

## 1. Entradas

La función `clasificarPelicula(titulo, duracion)` recibe los siguientes datos:

- **titulo:** nombre de la película de ciencia ficción.
- **duracion:** duración de la película en minutos.

---

## 2. Salidas

La función devuelve un objeto con la siguiente información:

- **titulo:** nombre de la película.
- **duracion:** duración en minutos (si el dato es válido).
- **clasificacion:** categoría asignada según la duración.
- **mensaje:** aparece únicamente cuando la duración es negativa.

---

## 3. Caso pequeño resuelto manualmente

### Entrada

```text
Título: The Matrix
Duración: 136 minutos
```

### Proceso

1. Verificar que la duración no sea negativa.
2. Comparar la duración con los rangos establecidos.
3. Como 136 es mayor o igual que 90 y menor que 150, la película se clasifica como **Estándar**.

### Salida

```text
Título: The Matrix
Duración: 136 minutos
Clasificación: Estándar
```

---

## 4. Pasos de la solución

1. Recibir el título de la película y su duración.
2. Validar que la duración no sea negativa.
3. Si el dato es inválido, devolver un mensaje de error.
4. Comparar la duración para determinar la clasificación:
   - 180 minutos o más → Épica
   - 150 a 179 minutos → Larga
   - 90 a 149 minutos → Estándar
   - Menos de 90 minutos → Corta
5. Devolver el resultado en un objeto.

---

# 5. Explicación por bloques

## Bloque 1: Definición de la función

```javascript
function clasificarPelicula(titulo, duracion) {
```

Se crea una función que recibe el título de la película y su duración en minutos.

---

## Bloque 2: Validación de datos

```javascript
if (duracion < 0) {
    return {
        titulo: titulo,
        clasificacion: "Dato inválido",
        mensaje: "La duración no puede ser negativa."
    };
}
```

Se verifica que la duración sea un valor válido. Si es negativa, la función devuelve un mensaje de error y finaliza su ejecución.

---

## Bloque 3: Variable de clasificación

```javascript
let clasificacion = "";
```

Se crea una variable donde se almacenará la clasificación de la película.

---

## Bloque 4: Clasificación de la película

```javascript
if (duracion >= 180) {
    clasificacion = "Épica";
} else if (duracion >= 150) {
    clasificacion = "Larga";
} else if (duracion >= 90) {
    clasificacion = "Estándar";
} else {
    clasificacion = "Corta";
}
```

Se utilizan estructuras `if` y `else if` para clasificar la película según su duración.

| Duración | Clasificación |
|----------:|---------------|
| 180 minutos o más | Épica |
| 150 a 179 minutos | Larga |
| 90 a 149 minutos | Estándar |
| Menos de 90 minutos | Corta |

---

## Bloque 5: Retorno del resultado

```javascript
return {
    titulo: titulo,
    duracion: duracion,
    clasificacion: clasificacion
};
```

Se devuelve un objeto con el título de la película, la duración y la clasificación obtenida.

---

## Bloque 6: Pruebas

El programa realiza dos pruebas para verificar su funcionamiento.

### Prueba normal

```javascript
const prueba1 = clasificarPelicula("Interstellar", 169);
```

**Resultado esperado**

```text
Título: Interstellar
Duración: 169 minutos
Clasificación: Larga
```

---

### Caso borde

```javascript
const prueba2 = clasificarPelicula("Moon", 90);
```

**Resultado esperado**

```text
Título: Moon
Duración: 90 minutos
Clasificación: Estándar
```

---

# 6. Implementación

La solución consiste en una función que:

- Recibe el título de la película y su duración.
- Valida que la duración sea un dato correcto.
- Clasifica la película utilizando estructuras `if` y `else if`.
- Devuelve un objeto con toda la información de la película.

Esta implementación es simple, clara y permite modificar fácilmente los rangos de clasificación si cambian los criterios de evaluación.

---

# 7. Pruebas

## Pruebas del código

| Película | Duración | Clasificación |
|-----------|----------:|---------------|
| Interstellar | 169 minutos | Larga |
| Moon | 90 minutos | Estándar |

---

## Caso inventado

### Entrada

```text
Título: Dune
Duración: 155 minutos
```

### Resultado esperado

```text
Título: Dune
Duración: 155 minutos
Clasificación: Larga
```

---

# Conclusión

El programa clasifica correctamente las películas de ciencia ficción según su duración. Además, valida que la duración ingresada sea un valor válido y devuelve un objeto con la clasificación correspondiente, lo que facilita organizar las películas por categorías de duración.