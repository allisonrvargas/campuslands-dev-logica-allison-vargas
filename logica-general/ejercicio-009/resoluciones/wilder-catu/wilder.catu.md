# Explicación del código: Clasificación de Películas de Miedo

## 1. Entradas

La función `clasificarPeliculaMiedo(titulo, duracion)` recibe los siguientes datos:

- **titulo:** nombre de la película de miedo.
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
Título: Scream
Duración: 95 minutos
```

### Proceso

1. Verificar que la duración no sea negativa.
2. Comparar la duración con los rangos establecidos.
3. Como 95 es mayor o igual que 90 y menor que 120, la película se clasifica como **Terror Clásico**.

### Salida

```text
Título: Scream
Duración: 95 minutos
Clasificación: Terror Clásico
```

---

## 4. Pasos de la solución

1. Recibir el título de la película y su duración.
2. Validar que la duración no sea negativa.
3. Si el dato es inválido, devolver un mensaje de error.
4. Comparar la duración para determinar la clasificación:
   - 120 minutos o más → Maratón del Terror
   - 90 a 119 minutos → Terror Clásico
   - 60 a 89 minutos → Terror Corto
   - Menos de 60 minutos → Especial
5. Devolver el resultado en un objeto.

---

# 5. Explicación por bloques

## Bloque 1: Definición de la función

```javascript
function clasificarPeliculaMiedo(titulo, duracion) {
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
if (duracion >= 120) {
    clasificacion = "Maratón del Terror";
} else if (duracion >= 90) {
    clasificacion = "Terror Clásico";
} else if (duracion >= 60) {
    clasificacion = "Terror Corto";
} else {
    clasificacion = "Especial";
}
```

Se utilizan estructuras `if` y `else if` para clasificar la película según su duración.

| Duración | Clasificación |
|----------:|---------------|
| 120 minutos o más | Maratón del Terror |
| 90 a 119 minutos | Terror Clásico |
| 60 a 89 minutos | Terror Corto |
| Menos de 60 minutos | Especial |

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
const prueba1 = clasificarPeliculaMiedo("El Conjuro", 112);
```

**Resultado esperado**

```text
Título: El Conjuro
Duración: 112 minutos
Clasificación: Terror Clásico
```

---

### Caso borde

```javascript
const prueba2 = clasificarPeliculaMiedo("La Bruja", 90);
```

**Resultado esperado**

```text
Título: La Bruja
Duración: 90 minutos
Clasificación: Terror Clásico
```

---

# 6. Implementación

La solución consiste en una función que:

- Recibe el título de la película y su duración.
- Valida que la duración sea un dato correcto.
- Clasifica la película utilizando estructuras `if` y `else if`.
- Devuelve un objeto con toda la información de la película.

Esta implementación es sencilla, clara y permite modificar fácilmente los rangos de clasificación si cambian los criterios establecidos.

---

# 7. Pruebas

## Pruebas del código

| Película | Duración | Clasificación |
|-----------|----------:|----------------------|
| El Conjuro | 112 minutos | Terror Clásico |
| La Bruja | 90 minutos | Terror Clásico |

---

## Caso inventado

### Entrada

```text
Título: It
Duración: 135 minutos
```

### Resultado esperado

```text
Título: It
Duración: 135 minutos
Clasificación: Maratón del Terror
```

---

# Conclusión

El programa clasifica correctamente las películas de miedo según su duración. Además, valida que la duración ingresada sea un valor válido y devuelve un objeto con la clasificación correspondiente, facilitando la organización de las películas en diferentes categorías de duración.