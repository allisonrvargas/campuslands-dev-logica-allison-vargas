# Reto - Autos Hiperdeportivos

## Descripción

Este programa clasifica un automóvil según su velocidad máxima para determinar su categoría dentro de los autos de alto rendimiento.

La solución recibe la información del vehículo, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Modelo del automóvil** (cadena de texto).
- **Velocidad máxima** en kilómetros por hora (número entero).

### Ejemplo

```javascript
clasificarAuto("Bugatti Chiron Super Sport", 440);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Modelo del automóvil.
- Velocidad máxima.
- Clasificación del vehículo.

Si la velocidad máxima es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    modelo: "Bugatti Chiron Super Sport",
    velocidadMaxima: 440,
    clasificacion: "Hiperdeportivo"
}
```

---

## Reglas utilizadas

| Velocidad máxima (km/h) | Clasificación |
|--------------------------|---------------|
| 400 o más | Hiperdeportivo |
| 350 - 399 | Superdeportivo |
| 300 - 349 | Deportivo |
| Menos de 300 | Alto rendimiento |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarAuto("Bugatti Chiron Super Sport", 440);
```

**Salida esperada**

```javascript
{
    modelo: "Bugatti Chiron Super Sport",
    velocidadMaxima: 440,
    clasificacion: "Hiperdeportivo"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarAuto("Koenigsegg Jesko", -10);
```

**Salida esperada**

```javascript
{
    modelo: "Koenigsegg Jesko",
    clasificacion: "Dato inválido",
    mensaje: "La velocidad máxima no puede ser negativa."
}
```