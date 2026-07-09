# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de jugadores con:
    - Nombre.
    - Cantidad de victorias.
    - Cantidad de partidos jugados.

- **Proceso:**
  1. Recorrer la lista de jugadores.
  2. Calcular la probabilidad de victoria utilizando la fórmula:
     
     **Probabilidad = Victorias / Partidos jugados**
     
  3. Convertir la probabilidad a porcentaje.
  4. Mostrar los resultados.

- **Salida:**
  - El nombre del jugador.
  - La probabilidad de victoria.
  - El porcentaje de victoria.

---

## Reglas identificadas

1. La cantidad de partidos jugados debe ser mayor que cero.
2. La cantidad de victorias no puede ser mayor que la cantidad de partidos.
3. La probabilidad siempre estará entre **0 y 1**.
4. El porcentaje se obtiene multiplicando la probabilidad por **100**.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "jugador": "Carlos",
    "victorias": 8,
    "partidos": 10
}
```

**Cálculo**

```text
Probabilidad = 8 / 10

Probabilidad = 0.80

Porcentaje = 0.80 × 100

Porcentaje = 80%
```

**Resultado esperado**

```text
Jugador: Carlos
Probabilidad de victoria: 0.80
Porcentaje de victoria: 80.00%
```

---

### Caso borde

**Entrada**

```python
{
    "jugador": "Laura",
    "victorias": 0,
    "partidos": 10
}
```

**Cálculo**

```text
Probabilidad = 0 / 10

Probabilidad = 0
```

**Resultado esperado**

```text
Jugador: Laura
Probabilidad de victoria: 0.00
Porcentaje de victoria: 0.00%
```

> Este es un caso borde porque el jugador no ha obtenido ninguna victoria. La probabilidad de ganar es **0**, pero el cálculo sigue siendo válido y el programa debe mostrar correctamente el resultado.

---

## Explicación final

La solución funciona porque aplica la fórmula de **probabilidad básica**, dividiendo el número de victorias entre el total de partidos jugados. Posteriormente convierte ese valor a porcentaje multiplicándolo por **100**, permitiendo conocer el rendimiento de cada jugador de manera clara y fácil de interpretar.

---

## Sugerencia

Cuando resuelvas problemas de **probabilidad básica**, identifica primero los **casos favorables** y los **casos posibles**. Después divide ambos valores y, si es necesario, multiplica el resultado por **100** para expresarlo como un porcentaje.