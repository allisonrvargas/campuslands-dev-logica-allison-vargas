# Plantilla de solucion

## Análisis

### Entrada

Un arreglo de equipos de fútbol sala.

Cada equipo contiene:

- `nombre`: nombre del equipo.
- `partidosJugados`: cantidad de partidos disputados.
- `victorias`: partidos ganados.
- `empates`: partidos igualados.
- `golesFavor`: goles anotados.
- `golesContra`: goles recibidos.


---

## Proceso

1. Validar la información del equipo.
2. Calcular derrotas.
3. Calcular puntos obtenidos.
4. Calcular porcentaje de rendimiento.
5. Calcular diferencia de goles.
6. Clasificar el desempeño del equipo.
7. Ordenar el ranking por puntos.


---

## Salida

El sistema muestra:

- equipos evaluados.
- puntos acumulados.
- posición del ranking.
- porcentaje de rendimiento.
- categoría competitiva.


---

# Fórmulas utilizadas


## 1. Cálculo de derrotas

\[
Derrotas =
PartidosJugados - Victorias - Empates
\]


Ejemplo:

\[
10 - 8 - 1 = 1
\]


---

## 2. Cálculo de puntos

Sistema tradicional:

- Victoria = 3 puntos.
- Empate = 1 punto.
- Derrota = 0 puntos.


\[
Puntos =
(Victorias \times 3)
+
(Empates \times 1)
\]


Ejemplo:

\[
(8 \times 3)+(1 \times 1)
\]

\[
=25
\]


---

## 3. Porcentaje de rendimiento


\[
Rendimiento =
\frac{Puntos}{PartidosJugados \times 3}
\times 100
\]


Ejemplo:

\[
\frac{25}{30}
\times100
\]


\[
=83.33\%
\]


---

## 4. Diferencia de goles


\[
Diferencia =
GolesFavor-GolesContra
\]


---

# Reglas de clasificación


| Condición | Categoría |
|-|-|
| Rendimiento >= 80% y diferencia de goles >= 10 | Campeón |
| Rendimiento >= 60% | Competitivo |
| Rendimiento >= 40% | Regular |
| Menor de 40% | En riesgo |


---

# Caso normal


Entrada:

```javascript
{
 nombre:"Halcones FC",
 partidosJugados:10,
 victorias:8,
 empates:1,
 golesFavor:35,
 golesContra:15
}
```


Proceso:

Puntos:

\[
(8 \times 3)+(1 \times 1)=25
\]


Rendimiento:

\[
25/30*100=83.33\%
\]


Resultado:

```text
Categoría: Campeón
```


---

# Caso borde


Entrada:

```javascript
{
 nombre:"Equipo X",
 partidosJugados:10,
 victorias:0,
 empates:0,
 golesFavor:0,
 golesContra:20
}
```


Cálculo:

\[
Puntos=0
\]


\[
Rendimiento=0\%
\]


Resultado:

```text
Categoría: En riesgo
```


---

# Explicación final

La solución implementa un sistema de ranking para un torneo de fútbol sala. Cada equipo es evaluado mediante puntos, porcentaje de rendimiento y diferencia de goles.

El programa utiliza funciones, arreglos, ciclos, acumuladores y operaciones matemáticas para transformar estadísticas deportivas en una clasificación ordenada.

La lógica permite simular un sistema real de tabla de posiciones donde las reglas de negocio determinan el nivel competitivo de cada equipo.