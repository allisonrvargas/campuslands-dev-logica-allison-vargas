# Plantilla de solución

## Análisis

### Entrada

- Una lista de canciones.
- Nombre de la canción.
- Cantidad de reproducciones.

### Proceso

1. Recorrer la lista de canciones.
2. Calcular la diferencia entre las reproducciones consecutivas.
3. Verificar si la diferencia permanece constante.
4. Determinar si la secuencia es aritmética.
5. Mostrar los resultados.

### Salida

- Nombre de la canción.
- Número de reproducciones.
- Incremento entre canciones.
- Resultado del análisis de la secuencia.

---

## Reglas identificadas

1. Deben existir al menos dos canciones para analizar la secuencia.
2. Una secuencia aritmética posee una diferencia constante entre elementos consecutivos.
3. Si todas las diferencias son iguales, la secuencia es aritmética.
4. Si alguna diferencia cambia, la secuencia deja de ser aritmética.

---

## Pruebas

### Caso normal

**Entrada**

```javascript
[
120,
135,
150,
165,
180
]
```

**Cálculo**

```text
135 - 120 = 15

150 - 135 = 15

165 - 150 = 15

180 - 165 = 15
```

**Resultado esperado**

```text
Incremento entre canciones: 15

La secuencia es aritmética.
```

---

### Caso borde

**Entrada**

```javascript
[
200
]
```

**Cálculo**

```text
Solo existe un elemento.

No es posible calcular diferencias consecutivas.
```

**Resultado esperado**

```text
No hay suficientes canciones para analizar la secuencia.
```

> Este es un caso borde porque la lista contiene únicamente una canción. Al no existir un segundo elemento, no es posible calcular diferencias ni determinar si la secuencia es aritmética.

---

## Explicación final

La solución funciona porque analiza las reproducciones de las canciones como una **secuencia numérica**. Primero calcula la diferencia entre los dos primeros valores y luego compara esa diferencia con las restantes. Si todas las diferencias coinciden, la secuencia se considera aritmética; de lo contrario, se identifica que la secuencia no sigue un patrón constante.

---

## Sugerencia

Cuando trabajes con **secuencias numéricas**, comienza calculando la diferencia entre los primeros elementos y verifica si se mantiene constante durante todo el recorrido. Este procedimiento permite identificar fácilmente patrones aritméticos y detectar cualquier variación en la secuencia.