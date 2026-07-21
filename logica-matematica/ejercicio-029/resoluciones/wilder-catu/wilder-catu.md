# Reto Campuslands - Películas de Miedo

## Temática usada

Películas de miedo.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable utilizando JavaScript.

---

## 1. Descripción

El programa recibe información de varias películas de miedo y las clasifica según su duración.

Reglas de clasificación:

- 120 minutos o más → Película muy larga.
- Entre 100 y 119 minutos → Película estándar.
- Menos de 100 minutos → Película corta.
- Duración negativa → Dato inválido.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Título de la película.
- Duración de la película (en minutos).

Ejemplo:

```javascript
{
    titulo: "El Conjuro",
    duracion: 112
}
```

---

## 3. Identifica las salidas

La solución entrega un objeto con:

- Título de la película.
- Duración.
- Clasificación obtenida.

Ejemplo:

```javascript
{
    titulo: "El Conjuro",
    duracion: 112,
    clasificacion: "Película estándar"
}
```

---

## Casos de prueba

### Caso normal

Entrada

```javascript
clasificarPelicula("Insidious", 103);
```

Salida esperada

```javascript
{
    titulo: "Insidious",
    duracion: 103,
    clasificacion: "Película estándar"
}
```

---

### Caso extremo

Entrada

```javascript
clasificarPelicula("Película Desconocida", -15);
```

Salida esperada

```javascript
{
    titulo: "Película Desconocida",
    clasificacion: "Dato inválido",
    mensaje: "La duración no puede ser negativa."
}
```