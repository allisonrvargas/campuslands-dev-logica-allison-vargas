# Plantilla de solución

## Análisis

### Entrada

- Una lista de equipos.
- Nombre del equipo.
- Puntaje obtenido en el torneo.

### Proceso

1. Recorrer la lista de equipos.
2. Sumar todos los puntajes.
3. Calcular el promedio.
4. Ordenar los puntajes de menor a mayor.
5. Calcular la mediana.
6. Mostrar los resultados.

### Salida

- Puntajes de cada equipo.
- Promedio del torneo.
- Mediana de los puntajes.

---

## Reglas identificadas

1. Todos los puntajes deben ser numéricos.
2. El promedio se calcula dividiendo la suma de los puntajes entre la cantidad de equipos.
3. Para calcular la mediana, primero deben ordenarse los puntajes.
4. Si la cantidad de datos es impar, la mediana corresponde al valor central.

---

## Pruebas

### Caso normal

**Entrada**

```javascript
[
    95,
    82,
    88,
    91,
    84
]
```

**Cálculo**

```text
Suma = 95 + 82 + 88 + 91 + 84

Suma = 440

Promedio = 440 ÷ 5

Promedio = 88

Ordenados

82 84 88 91 95

Mediana = 88
```

**Resultado esperado**

```text
Promedio: 88.00

Mediana: 88
```

---

### Caso borde

**Entrada**

```javascript
[
    100
]
```

**Cálculo**

```text
Promedio = 100 ÷ 1

Promedio = 100

Mediana = 100
```

**Resultado esperado**

```text
Promedio: 100.00

Mediana: 100
```

> Este es un caso borde porque únicamente existe un equipo participante. En este escenario, el promedio y la mediana tienen exactamente el mismo valor.

---

## Explicación final

La solución funciona porque aplica dos medidas estadísticas fundamentales: el **promedio** y la **mediana**. El promedio representa el rendimiento general del torneo, mientras que la mediana identifica el valor central de los puntajes una vez ordenados. La combinación de ambas medidas proporciona una visión más completa del desempeño de los equipos participantes.

---

## Sugerencia

Cuando resuelvas ejercicios de **promedios y medianas**, calcula primero el promedio utilizando la suma de todos los datos. Después ordena los valores para obtener la mediana, ya que esta siempre depende de la posición de los datos y no del orden en que fueron registrados.