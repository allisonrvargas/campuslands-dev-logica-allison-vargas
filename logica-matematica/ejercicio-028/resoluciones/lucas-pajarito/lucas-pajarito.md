# Plantilla de solución

## Análisis

### Entrada

- Una lista de películas.
- Nombre de la película.
- Puntuación obtenida.

### Proceso

1. Recorrer la lista de películas.
2. Calcular la diferencia entre puntuaciones consecutivas.
3. Comparar todas las diferencias.
4. Determinar si existe un patrón constante.
5. Mostrar los resultados.

### Salida

- Nombre de la película.
- Puntuación.
- Incremento detectado.
- Resultado del análisis.

---

## Reglas identificadas

1. Deben existir al menos dos películas para realizar el análisis.
2. El patrón existe cuando la diferencia entre puntuaciones consecutivas permanece constante.
3. Las puntuaciones son valores numéricos.
4. Si alguna diferencia cambia, el patrón deja de cumplirse.

---

## Pruebas

### Caso normal

**Entrada**

```javascript
[
8.5,
8.7,
8.9,
9.1,
9.3
]
```

**Cálculo**

```text
8.7 - 8.5 = 0.2

8.9 - 8.7 = 0.2

9.1 - 8.9 = 0.2

9.3 - 9.1 = 0.2
```

**Resultado esperado**

```text
Incremento detectado: 0.2

Existe un patrón constante de puntuación.
```

---

### Caso borde

**Entrada**

```javascript
[
9.0
]
```

**Cálculo**

```text
Solo existe una película.

No es posible calcular diferencias consecutivas.
```

**Resultado esperado**

```text
No hay suficientes películas para analizar el patrón.
```

> Este es un caso borde porque únicamente existe una película en la lista. Al no contar con una segunda puntuación para comparar, el programa no puede determinar si existe un patrón de puntuación.

---

## Explicación final

La solución funciona porque compara las diferencias entre las puntuaciones de películas consecutivas. Si todas las diferencias son iguales, significa que existe un **patrón de puntuación constante**. Este tipo de análisis permite identificar tendencias y comportamientos repetitivos dentro de un conjunto de datos numéricos.

---

## Sugerencia

Cuando trabajes con **patrones de puntuación**, calcula primero la diferencia entre los dos primeros valores y utilízala como referencia. Luego compara las diferencias restantes para verificar si el patrón se mantiene constante en toda la secuencia.