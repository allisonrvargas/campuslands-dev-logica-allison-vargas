# Reto - Arquitectura 3D

## Descripción

Este programa clasifica un proyecto de arquitectura 3D según el área total del diseño.

La solución recibe los datos del proyecto, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del proyecto** (cadena de texto).
- **Área del proyecto** en metros cuadrados (número).

### Ejemplo

```javascript
clasificarProyecto("Centro Comercial", 650);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del proyecto.
- Área del proyecto.
- Clasificación según su tamaño.

Si el área es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    proyecto: "Centro Comercial",
    area: 650,
    clasificacion: "Proyecto grande"
}
```

---

## Reglas utilizadas

| Área (m²) | Clasificación |
|------------|---------------|
| 1000 o más | Mega proyecto |
| 500 - 999 | Proyecto grande |
| 200 - 499 | Proyecto mediano |
| Menos de 200 | Proyecto pequeño |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarProyecto("Centro Comercial", 650);
```

**Salida esperada**

```javascript
{
    proyecto: "Centro Comercial",
    area: 650,
    clasificacion: "Proyecto grande"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarProyecto("Casa Familiar", -50);
```

**Salida esperada**

```javascript
{
    proyecto: "Casa Familiar",
    clasificacion: "Dato inválido",
    mensaje: "El área del proyecto no puede ser negativa."
}
```