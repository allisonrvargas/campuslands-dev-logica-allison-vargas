# Plantilla de solución

## Análisis

### Entrada

- Una lista de equipos.
- Cantidad de partidos jugados.
- Cantidad de partidos ganados.

### Proceso

1. Recorrer la lista de equipos.
2. Calcular la proporción entre partidos ganados y partidos jugados.
3. Calcular el porcentaje de victorias.
4. Mostrar los resultados para cada equipo.

### Salida

- Nombre del equipo.
- Partidos jugados.
- Partidos ganados.
- Proporción de victorias.
- Porcentaje de victorias.

---

## Reglas identificadas

1. La cantidad de partidos jugados debe ser mayor que cero.
2. Los partidos ganados no pueden superar los partidos jugados.
3. El porcentaje se calcula mediante:

**Porcentaje = (Partidos ganados ÷ Partidos jugados) × 100**

4. La proporción se representa como:

**Ganados : Partidos jugados**

---

## Pruebas

### Caso normal

**Entrada**

```javascript
{
    nombre: "Tigres FC",
    partidos: 20,
    ganados: 15
}
```

**Cálculo**

```text
Proporción = 15 : 20

Porcentaje = (15 ÷ 20) × 100

Porcentaje = 75%
```

**Resultado esperado**

```text
Equipo: Tigres FC
Partidos jugados: 20
Partidos ganados: 15
Proporción de victorias: 15:20
Porcentaje de victorias: 75.00%
```

---

### Caso borde

**Entrada**

```javascript
{
    nombre: "Equipo Nuevo",
    partidos: 10,
    ganados: 0
}
```

**Cálculo**

```text
Proporción = 0 : 10

Porcentaje = (0 ÷ 10) × 100

Porcentaje = 0%
```

**Resultado esperado**

```text
Equipo: Equipo Nuevo
Partidos jugados: 10
Partidos ganados: 0
Proporción de victorias: 0:10
Porcentaje de victorias: 0.00%
```

> Este es un caso borde porque el equipo no ha ganado ningún partido. El programa debe calcular correctamente una proporción de **0:10** y un porcentaje de victorias de **0%**.

---

## Explicación final

La solución funciona porque aplica dos conceptos matemáticos: **proporciones** y **porcentajes**. Primero representa la relación entre partidos ganados y partidos jugados mediante una proporción. Después calcula el porcentaje de victorias dividiendo los partidos ganados entre el total de partidos y multiplicando el resultado por 100. Esto permite medir el rendimiento de cada equipo de fútbol sala de forma clara y comparable.

---

## Sugerencia

Cuando resuelvas ejercicios de **porcentajes y proporciones**, identifica primero la relación entre las cantidades involucradas. Después expresa esa relación como una proporción y utiliza la fórmula del porcentaje para obtener un valor que facilite la comparación entre diferentes resultados.