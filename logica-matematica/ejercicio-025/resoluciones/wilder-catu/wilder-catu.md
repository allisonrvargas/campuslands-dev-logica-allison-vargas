# Reto - Taller Mecánico

## Descripción

Este programa clasifica la prioridad de reparación de un vehículo según los días que lleva en espera dentro del taller mecánico.

La solución recibe la información del cliente, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del cliente** (cadena de texto).
- **Cantidad de días de espera del vehículo** (número entero).

### Ejemplo

```javascript
clasificarReparacion("Fernando Colaj", 10);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del cliente.
- Días de espera del vehículo.
- Nivel de prioridad de reparación.

Si los días de espera son negativos, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    cliente: "Fernando Colaj",
    diasEspera: 10,
    clasificacion: "Prioridad media"
}
```

---

## Reglas utilizadas

| Días de espera | Clasificación |
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
    diasEspera: 10,
    clasificacion: "Prioridad media"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarReparacion("Carlos Pérez", -2);
```

**Salida esperada**

```javascript
{
    cliente: "Carlos Pérez",
    clasificacion: "Dato inválido",
    mensaje: "Los días de espera no pueden ser negativos."
}
```