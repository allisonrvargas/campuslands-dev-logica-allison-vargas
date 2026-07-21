# Explicación del código: Clasificación de Autos Hiperdeportivos

## 1. Entradas

La función `clasificarAuto(modelo, velocidadMaxima)` recibe los siguientes datos:

- **modelo:** nombre o modelo del automóvil.
- **velocidadMaxima:** velocidad máxima que puede alcanzar el vehículo, expresada en kilómetros por hora (km/h).

---

## 2. Salidas

La función devuelve un objeto con la siguiente información:

- **modelo:** nombre del automóvil.
- **velocidadMaxima:** velocidad máxima registrada (si el dato es válido).
- **clasificacion:** categoría asignada según la velocidad.
- **mensaje:** aparece únicamente cuando la velocidad ingresada es negativa.

---

## 3. Caso pequeño resuelto manualmente

### Entrada

```text
Modelo: Ferrari SF90 Stradale
Velocidad máxima: 360 km/h
```

### Proceso

1. Verificar que la velocidad no sea negativa.
2. Comparar la velocidad con los rangos establecidos.
3. Como 360 es mayor o igual que 350 y menor que 400, el automóvil se clasifica como **Premium**.

### Salida

```text
Modelo: Ferrari SF90 Stradale
Velocidad máxima: 360 km/h
Clasificación: Premium
```

---

## 4. Pasos de la solución

1. Recibir el modelo del automóvil y su velocidad máxima.
2. Validar que la velocidad no sea negativa.
3. Si el dato es inválido, devolver un mensaje de error.
4. Comparar la velocidad para determinar la clasificación:
   - 400 km/h o más → Élite
   - 350 a 399 km/h → Premium
   - 300 a 349 km/h → Deportivo
   - Menos de 300 km/h → Estándar
5. Devolver el resultado en un objeto.

---

# 5. Explicación por bloques

## Bloque 1: Definición de la función

```javascript
function clasificarAuto(modelo, velocidadMaxima) {
```

Se crea una función que recibe el modelo del automóvil y su velocidad máxima.

---

## Bloque 2: Validación de datos

```javascript
if (velocidadMaxima < 0) {
    return {
        modelo: modelo,
        clasificacion: "Dato inválido",
        mensaje: "La velocidad no puede ser negativa."
    };
}
```

Se verifica que la velocidad sea un valor válido. Si es negativa, la función devuelve un mensaje de error y termina su ejecución.

---

## Bloque 3: Variable de clasificación

```javascript
let clasificacion = "";
```

Se crea una variable donde se almacenará la clasificación final del automóvil.

---

## Bloque 4: Clasificación del automóvil

```javascript
if (velocidadMaxima >= 400) {
    clasificacion = "Élite";
} else if (velocidadMaxima >= 350) {
    clasificacion = "Premium";
} else if (velocidadMaxima >= 300) {
    clasificacion = "Deportivo";
} else {
    clasificacion = "Estándar";
}
```

Se utilizan condiciones `if` y `else if` para clasificar el automóvil según su velocidad máxima.

| Velocidad máxima | Clasificación |
|-----------------:|---------------|
| 400 km/h o más | Élite |
| 350 a 399 km/h | Premium |
| 300 a 349 km/h | Deportivo |
| Menos de 300 km/h | Estándar |

---

## Bloque 5: Retorno del resultado

```javascript
return {
    modelo: modelo,
    velocidadMaxima: velocidadMaxima,
    clasificacion: clasificacion
};
```

Se devuelve un objeto con el modelo del automóvil, la velocidad máxima y la clasificación obtenida.

---

## Bloque 6: Pruebas

El programa realiza dos pruebas para comprobar su funcionamiento.

### Prueba normal

```javascript
const prueba1 = clasificarAuto("Bugatti Chiron", 420);
```

**Resultado esperado**

```text
Modelo: Bugatti Chiron
Velocidad máxima: 420 km/h
Clasificación: Élite
```

---

### Caso borde

```javascript
const prueba2 = clasificarAuto("Porsche 911 GT3", 300);
```

**Resultado esperado**

```text
Modelo: Porsche 911 GT3
Velocidad máxima: 300 km/h
Clasificación: Deportivo
```

---

# 6. Implementación

La solución consiste en una función que:

- Recibe el modelo del automóvil y su velocidad máxima.
- Valida que la velocidad sea un dato correcto.
- Clasifica el vehículo utilizando estructuras `if` y `else if`.
- Devuelve un objeto con toda la información del automóvil.

Esta implementación es sencilla, eficiente y permite modificar fácilmente los rangos de clasificación si cambian los criterios de evaluación.

---

# 7. Pruebas

## Pruebas del código

| Modelo | Velocidad máxima | Clasificación |
|---------|-----------------:|---------------|
| Bugatti Chiron | 420 km/h | Élite |
| Porsche 911 GT3 | 300 km/h | Deportivo |

---

## Caso inventado

### Entrada

```text
Modelo: Koenigsegg Jesko
Velocidad máxima: 405 km/h
```

### Resultado esperado

```text
Modelo: Koenigsegg Jesko
Velocidad máxima: 405 km/h
Clasificación: Élite
```

---

# Conclusión

El programa clasifica correctamente los autos hiperdeportivos según su velocidad máxima. Además, valida que la velocidad ingresada sea un valor válido y devuelve un objeto con la clasificación correspondiente, facilitando la organización y evaluación de los vehículos.