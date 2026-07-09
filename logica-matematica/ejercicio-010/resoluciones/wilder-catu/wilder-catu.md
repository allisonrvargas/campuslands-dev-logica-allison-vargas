# Reto - Viajes y Turismo

## Descripción

Este programa clasifica un viaje según la cantidad de días de duración.

La solución recibe la información del destino y la duración del viaje, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Destino del viaje** (cadena de texto).
- **Cantidad de días del viaje** (número entero).

### Ejemplo

```javascript
clasificarViaje("Antigua Guatemala", 7);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Destino del viaje.
- Cantidad de días del viaje.
- Clasificación del tipo de viaje.

Si la cantidad de días es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    destino: "Antigua Guatemala",
    diasViaje: 7,
    clasificacion: "Vacaciones completas"
}
```

---

## Reglas utilizadas

| Días del viaje | Clasificación |
|----------------|---------------|
| 10 o más | Vacaciones largas |
| 5 - 9 | Vacaciones completas |
| 2 - 4 | Escapada |
| 0 - 1 | Excursión |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarViaje("Antigua Guatemala", 7);
```

**Salida esperada**

```javascript
{
    destino: "Antigua Guatemala",
    diasViaje: 7,
    clasificacion: "Vacaciones completas"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarViaje("Lago de Atitlán", -2);
```

**Salida esperada**

```javascript
{
    destino: "Lago de Atitlán",
    clasificacion: "Dato inválido",
    mensaje: "Los días de viaje no pueden ser negativos."
}
```