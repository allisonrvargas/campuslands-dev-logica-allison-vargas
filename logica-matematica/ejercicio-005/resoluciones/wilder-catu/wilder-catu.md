# Reto - Taller Mecánico

## Descripción

Este programa clasifica la prioridad de atención de un vehículo en un taller mecánico según la cantidad de días que lleva en espera.

La solución recibe los datos del cliente, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del cliente** (cadena de texto).
- **Días que el vehículo lleva en espera** (número entero).

### Ejemplo

```javascript
clasificarReparacion("Fernando Colaj", 10);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del cliente.
- Días de espera.
- Nivel de prioridad de atención.

Si los días de espera son negativos, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    cliente: "Fernando Colaj",
    diasEnEspera: 10,
    clasificacion: "Prioridad media"
}
```

---

## Reglas utilizadas

| Días en espera | Clasificación |
|----------------|---------------|
| 15 o más | Prioridad alta |
| 8 - 14 | Prioridad media |
| 1 - 7 | Prioridad baja |
| 0 | Ingreso reciente |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarReparacion("Fernando Colaj", 10);
```

**Salida esperada**

```javascript
{
    cliente: "Fernando Colaj",
    diasEnEspera: 10,
    clasificacion: "Prioridad media"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarReparacion("Carlos Pérez", -4);
```

**Salida esperada**

```javascript
{
    cliente: "Carlos Pérez",
    clasificacion: "Dato inválido",
    mensaje: "Los días de espera no pueden ser negativos."
}
```