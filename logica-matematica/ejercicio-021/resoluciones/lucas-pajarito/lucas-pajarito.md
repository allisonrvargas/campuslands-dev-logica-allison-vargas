# Plantilla de solución

## Análisis

### Entrada

- Una lista de jugadores.
- Cantidad de victorias.
- Cantidad de derrotas.
- Puntos obtenidos por victoria.
- Puntos obtenidos por derrota.

### Proceso

1. Calcular el total de partidas.
2. Calcular el puntaje total.
3. Calcular el promedio de puntos por partida.
4. Mostrar los resultados.

### Salida

- Nombre del jugador.
- Total de partidas.
- Puntaje total.
- Promedio de puntos por partida.

---

## Reglas identificadas

1. Cada victoria otorga **3 puntos**.
2. Cada derrota otorga **0 puntos**.
3. Las partidas jugadas son la suma de victorias y derrotas.
4. El promedio se obtiene dividiendo el puntaje total entre las partidas jugadas.

---

## Pruebas

### Caso normal

**Entrada**

```javascript
{
    nombre: "Carlos",
    victorias: 12,
    derrotas: 3
}
```

**Cálculo**

```text
Partidas = 12 + 3 = 15

Puntos = (12 × 3) + (3 × 0)

Puntos = 36

Promedio = 36 ÷ 15

Promedio = 2.40
```

**Resultado esperado**

```text
Jugador: Carlos
Partidas jugadas: 15
Puntaje total: 36
Promedio por partida: 2.40
```

---

### Caso borde

**Entrada**

```javascript
{
    nombre: "NuevoJugador",
    victorias: 0,
    derrotas: 1
}
```

**Cálculo**

```text
Partidas = 1

Puntos = 0

Promedio = 0 ÷ 1

Promedio = 0
```

**Resultado esperado**

```text
Jugador: NuevoJugador
Partidas jugadas: 1
Puntaje total: 0
Promedio por partida: 0.00
```

> Este es un caso borde porque el jugador no ha conseguido ninguna victoria. El programa debe calcular correctamente el puntaje total y el promedio, mostrando un resultado de **0 puntos por partida**.

---

## Explicación final

La solución funciona porque combina varias operaciones aritméticas en un mismo problema. Primero calcula el número total de partidas, después obtiene el puntaje acumulado utilizando la cantidad de victorias y derrotas, y finalmente calcula el promedio de puntos por partida. Estas operaciones permiten evaluar el rendimiento de cada jugador en un torneo de videojuegos competitivos.

---

## Sugerencia

Cuando resuelvas problemas de **operaciones aritméticas controladas**, identifica todas las operaciones necesarias y ejecútalas en el orden correcto. Divide el problema en pequeños cálculos (sumas, multiplicaciones y divisiones) para obtener resultados claros y fáciles de verificar.