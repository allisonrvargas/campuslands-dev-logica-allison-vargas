# Explicación del código: Clasificación de un Viaje

## 1. Entradas

La función `clasificarViaje(destino, diasViaje)` recibe los siguientes datos:

- **destino:** nombre del lugar al que se realizará el viaje.
- **diasViaje:** cantidad de días que durará el viaje.

---

## 2. Salidas

La función devuelve un objeto con la siguiente información:

- **destino:** nombre del lugar de viaje.
- **diasViaje:** cantidad de días del viaje (si el dato es válido).
- **clasificacion:** tipo de viaje según su duración.
- **mensaje:** aparece únicamente cuando los días de viaje son negativos.

---

## 3. Caso pequeño resuelto manualmente

### Entrada

```text
Destino: Río Dulce
Días de viaje: 3
```

### Proceso

1. Verificar que los días de viaje no sean negativos.
2. Comparar la cantidad de días con los rangos establecidos.
3. Como 3 es mayor o igual que 2 y menor que 5, el viaje se clasifica como **Escapada**.

### Salida

```text
Destino: Río Dulce
Días de viaje: 3
Clasificación: Escapada
```

---

## 4. Pasos de la solución

1. Recibir el destino y la cantidad de días del viaje.
2. Verificar que los días de viaje no sean negativos.
3. Si el dato es inválido, devolver un mensaje de error.
4. Comparar los días de viaje para asignar una clasificación:
   - 10 o más → Vacaciones largas.
   - 5 a 9 → Vacaciones completas.
   - 2 a 4 → Escapada.
   - Menos de 2 → Excursión.
5. Devolver un objeto con el resultado.

---

# 5. Explicación por bloques

## Bloque 1: Definición de la función

```javascript
function clasificarViaje(destino, diasViaje) {
```

Se crea una función que recibe el destino y la duración del viaje en días.

---

## Bloque 2: Validación de datos

```javascript
if (diasViaje < 0) {
    return {
        destino: destino,
        clasificacion: "Dato inválido",
        mensaje: "Los días de viaje no pueden ser negativos."
    };
}
```

Se verifica que la cantidad de días sea válida. Si el valor es negativo, la función devuelve un mensaje de error y finaliza su ejecución.

---

## Bloque 3: Variable de clasificación

```javascript
let clasificacion = "";
```

Se crea una variable donde se almacenará la clasificación del viaje.

---

## Bloque 4: Clasificación del viaje

```javascript
if (diasViaje >= 10) {
    clasificacion = "Vacaciones largas";
} else if (diasViaje >= 5) {
    clasificacion = "Vacaciones completas";
} else if (diasViaje >= 2) {
    clasificacion = "Escapada";
} else {
    clasificacion = "Excursión";
}
```

Se utilizan estructuras `if` y `else if` para asignar una clasificación según la cantidad de días del viaje.

| Días de viaje | Clasificación |
|--------------:|---------------|
| 10 o más | Vacaciones largas |
| 5 a 9 | Vacaciones completas |
| 2 a 4 | Escapada |
| Menos de 2 | Excursión |

---

## Bloque 5: Retorno del resultado

```javascript
return {
    destino: destino,
    diasViaje: diasViaje,
    clasificacion: clasificacion
};
```

Se devuelve un objeto con el destino, la duración del viaje y la clasificación correspondiente.

---

## Bloque 6: Pruebas

El programa realiza dos pruebas para verificar su funcionamiento.

### Prueba normal

```javascript
const prueba1 = clasificarViaje("Antigua Guatemala", 6);
```

**Resultado esperado**

```text
Destino: Antigua Guatemala
Días de viaje: 6
Clasificación: Vacaciones completas
```

---

### Caso borde

```javascript
const prueba2 = clasificarViaje("Lago de Atitlán", 1);
```

**Resultado esperado**

```text
Destino: Lago de Atitlán
Días de viaje: 1
Clasificación: Excursión
```

---

# 6. Implementación

La solución consiste en una función que:

- Recibe el destino y los días del viaje.
- Valida que los días sean un valor correcto.
- Clasifica el viaje mediante estructuras `if` y `else if`.
- Devuelve un objeto con toda la información del viaje.

Esta implementación es simple, fácil de entender y permite modificar los rangos de clasificación de manera sencilla.

---

# 7. Pruebas

## Pruebas del código

| Destino | Días de viaje | Clasificación |
|----------|--------------:|------------------------|
| Antigua Guatemala | 6 | Vacaciones completas |
| Lago de Atitlán | 1 | Excursión |

---

## Caso inventado

### Entrada

```text
Destino: Semuc Champey
Días de viaje: 12
```

### Resultado esperado

```text
Destino: Semuc Champey
Días de viaje: 12
Clasificación: Vacaciones largas
```

---

# Conclusión

El programa clasifica correctamente un viaje según la cantidad de días de duración. Además, valida que el número de días sea un dato válido y devuelve un objeto con la clasificación correspondiente, facilitando la organización de los viajes de acuerdo con su duración.