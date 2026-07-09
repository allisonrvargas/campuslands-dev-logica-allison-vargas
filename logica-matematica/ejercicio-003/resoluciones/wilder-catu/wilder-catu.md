# Reto - Torneo de eSports

## Descripción

Este programa clasifica a un equipo participante en un torneo de eSports según la cantidad de victorias obtenidas.

La solución recibe la información del equipo, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del equipo** (cadena de texto).
- **Cantidad de victorias** (número entero).

### Ejemplo

```javascript
clasificarEquipo("Dragons Gaming", 12);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del equipo.
- Cantidad de victorias.
- Clasificación obtenida en el torneo.

Si el número de victorias es negativo, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    equipo: "Dragons Gaming",
    victorias: 12,
    clasificacion: "Playoffs"
}
```

---

## Reglas utilizadas

| Victorias | Clasificación |
|------------|---------------|
| 15 o más | Campeón |
| 10 - 14 | Playoffs |
| 5 - 9 | Fase de grupos |
| Menos de 5 | Eliminado |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarEquipo("Dragons Gaming", 12);
```

**Salida esperada**

```javascript
{
    equipo: "Dragons Gaming",
    victorias: 12,
    clasificacion: "Playoffs"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarEquipo("Phoenix Team", -2);
```

**Salida esperada**

```javascript
{
    equipo: "Phoenix Team",
    clasificacion: "Dato inválido",
    mensaje: "Las victorias no pueden ser negativas."
}
```