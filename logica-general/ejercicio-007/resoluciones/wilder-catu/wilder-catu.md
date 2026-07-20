# Explicación del código: Clasificación de Canciones por Duración

## 1. Entradas

La función `clasificarCancion(titulo, duracion)` recibe los siguientes datos:

- **titulo:** nombre de la canción.
- **duracion:** duración de la canción en minutos.

---

## 2. Salidas

La función devuelve un objeto con la siguiente información:

- **titulo:** nombre de la canción.
- **duracion:** duración de la canción (si el dato es válido).
- **clasificacion:** categoría asignada según la duración.
- **mensaje:** aparece únicamente cuando la duración es negativa.

---

## 3. Caso pequeño resuelto manualmente

### Entrada

```text
Título: Imagine
Duración: 4 minutos
```

### Proceso

1. Verificar que la duración no sea negativa.
2. Comparar la duración con los rangos establecidos.
3. Como 4 es mayor o igual que 3 y menor que 5, la canción se clasifica como **Normal**.

### Salida

```text
Título: Imagine
Duración: 4 minutos
Clasificación: Normal
```

---

## 4. Pasos de la solución

1. Recibir el título de la canción y su duración.
2. Validar que la duración no sea negativa.
3. Si el dato es inválido, devolver un mensaje de error.
4. Comparar la duración para determinar la clasificación:
   - 7 minutos o más → Muy larga
   - 5 a 6.99 minutos → Larga
   - 3 a 4.99 minutos → Normal
   - Menos de 3 minutos → Corta
5. Devolver el resultado en un objeto.

---

# 5. Explicación por bloques

## Bloque 1: Definición de la función

```javascript
function clasificarCancion(titulo, duracion) {
```

Se crea una función que recibe el título de la canción y su duración en minutos.

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

Se crea una variable donde se almacenará la clasificación de la canción.

---

## Bloque 4: Clasificación de la canción

```javascript
if (duracion >= 7) {
    clasificacion = "Muy larga";
} else if (duracion >= 5) {
    clasificacion = "Larga";
} else if (duracion >= 3) {
    clasificacion = "Normal";
} else {
    clasificacion = "Corta";
}
```

Se utilizan condiciones `if` y `else if` para clasificar la canción según su duración.

| Duración | Clasificación |
|----------:|---------------|
| 7 minutos o más | Muy larga |
| 5 a 6.99 minutos | Larga |
| 3 a 4.99 minutos | Normal |
| Menos de 3 minutos | Corta |

---

## Bloque 5: Retorno del resultado

```javascript
return {
    titulo: titulo,
    duracion: duracion,
    clasificacion: clasificacion
};
```

Se devuelve un objeto con el título de la canción, su duración y la clasificación obtenida.

---

## Bloque 6: Pruebas

El programa realiza dos pruebas para comprobar su funcionamiento.

### Prueba normal

```javascript
const prueba1 = clasificarCancion("Bohemian Rhapsody", 6);
```

**Resultado esperado**

```text
Título: Bohemian Rhapsody
Duración: 6 minutos
Clasificación: Larga
```

---

### Caso borde

```javascript
const prueba2 = clasificarCancion("Intro", 3);
```

**Resultado esperado**

```text
Título: Intro
Duración: 3 minutos
Clasificación: Normal
```

---

# 6. Implementación

La solución consiste en una función que:

- Recibe el título de la canción y su duración.
- Valida que la duración sea un dato correcto.
- Clasifica la canción mediante estructuras `if` y `else if`.
- Devuelve un objeto con toda la información de la canción.

Esta implementación es sencilla, eficiente y facilita modificar los rangos de clasificación si en el futuro cambian los criterios.

---

# 7. Pruebas

## Pruebas del código

| Título | Duración | Clasificación |
|---------|----------:|---------------|
| Bohemian Rhapsody | 6 minutos | Larga |
| Intro | 3 minutos | Normal |

---

## Caso inventado

### Entrada

```text
Título: Stairway to Heaven
Duración: 8 minutos
```

### Resultado esperado

```text
Título: Stairway to Heaven
Duración: 8 minutos
Clasificación: Muy larga
```

---

# Conclusión

El programa clasifica correctamente las canciones según su duración. Además, valida que la duración ingresada sea un valor válido y devuelve un objeto con la clasificación correspondiente, facilitando la organización de canciones por categorías de tiempo.