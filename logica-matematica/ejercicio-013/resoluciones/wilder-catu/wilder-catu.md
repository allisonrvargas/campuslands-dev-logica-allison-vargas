# Reto - Paracaidismo

## Descripción

Este programa clasifica un salto de paracaidismo según la altura desde la que se realiza.

La solución recibe los datos del participante, aplica reglas de clasificación y devuelve un resultado verificable.

---

## 1. Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 2. Entradas

La solución recibe los siguientes datos:

- **Nombre del participante** (cadena de texto).
- **Altura del salto** en metros (número entero).

### Ejemplo

```javascript
clasificarSalto("Fernando Colaj", 3200);
```

---

## 3. Salidas

La solución devuelve un objeto con la siguiente información:

- Nombre del participante.
- Altura del salto en metros.
- Clasificación del tipo de salto.

Si la altura es negativa, devuelve un mensaje indicando que el dato es inválido.

### Ejemplo de salida

```javascript
{
    participante: "Fernando Colaj",
    alturaSalto: 3200,
    clasificacion: "Salto de gran altura"
}
```

---

## Reglas utilizadas

| Altura del salto (m) | Clasificación |
|-----------------------|---------------|
| 4000 o más | Salto extremo |
| 3000 - 3999 | Salto de gran altura |
| 1500 - 2999 | Salto recreativo |
| Menos de 1500 | Salto de entrenamiento |
| Menor que 0 | Dato inválido |

---

## Pruebas

### Prueba 1 (Caso normal)

**Entrada**

```javascript
clasificarSalto("Fernando Colaj", 3200);
```

**Salida esperada**

```javascript
{
    participante: "Fernando Colaj",
    alturaSalto: 3200,
    clasificacion: "Salto de gran altura"
}
```

---

### Prueba 2 (Caso límite)

**Entrada**

```javascript
clasificarSalto("Carlos Pérez", -500);
```

**Salida esperada**

```javascript
{
    participante: "Carlos Pérez",
    clasificacion: "Dato inválido",
    mensaje: "La altura del salto no puede ser negativa."
}
```