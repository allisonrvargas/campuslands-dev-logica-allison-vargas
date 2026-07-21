# Reto - Soldadura

## Descripción

Este programa clasifica un trabajo de soldadura según la cantidad de horas requeridas para completar el proyecto.

La solución recibe la información del proyecto, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del proyecto** (cadena de texto).
- **Horas de trabajo** requeridas (número entero).

### Ejemplo

```javascript
clasificarTrabajo("Estructura Metálica", 25);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del proyecto.
- Horas de trabajo.
- Clasificación del tipo de trabajo de soldadura.

Si las horas de trabajo son negativas, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    proyecto: "Estructura Metálica",
    horasTrabajo: 25,
    clasificacion: "Proyecto complejo"
}
```

---

## Reglas utilizadas

| Horas de trabajo | Clasificación |
|------------------|---------------|
| 40 o más | Proyecto industrial |
| 20 - 39 | Proyecto complejo |
| 8 - 19 | Proyecto estándar |
| Menos de 8 | Reparación rápida |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarTrabajo("Estructura Metálica", 25);
```

**Salida esperada**

```javascript
{
    proyecto: "Estructura Metálica",
    horasTrabajo: 25,
    clasificacion: "Proyecto complejo"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarTrabajo("Portón Residencial", -5);
```

**Salida esperada**

```javascript
{
    proyecto: "Portón Residencial",
    clasificacion: "Dato inválido",
    mensaje: "Las horas de trabajo no pueden ser negativas."
}
```