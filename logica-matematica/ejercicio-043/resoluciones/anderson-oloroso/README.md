# Plantilla de solucion

## Análisis

### Entrada

Un arreglo de jugadores de un torneo de esports.

Cada jugador contiene:

- `nombre`: identificación del jugador.
- `partidas`: cantidad de partidas jugadas.
- `kills`: eliminaciones realizadas.
- `asistencias`: ayudas realizadas.
- `puntosExtra`: bonificaciones obtenidas.


---

## Proceso

1. Validar los datos de cada jugador.
2. Calcular una puntuación promedio individual.
3. Guardar todas las puntuaciones.
4. Calcular promedio general del torneo.
5. Ordenar puntuaciones para obtener la mediana.
6. Identificar al jugador con mejor rendimiento.


---

## Salida

El sistema entrega:

- jugadores evaluados.
- partidas analizadas.
- promedio general.
- mediana del torneo.
- jugador destacado.
- estadísticas individuales.


---

# Fórmula de puntuación


Cada jugador obtiene:

\[
Puntuacion =
\frac{
(Kills \times 10)
+
(Asistencias \times 5)
+
PuntosExtra
}
{Partidas}
\]


Ejemplo:


Jugador:

- Kills: 80
- Asistencias: 40
- Puntos extra: 50
- Partidas: 10


Cálculo:


\[
\frac{
(80 \times 10)
+
(40 \times 5)
+
50
}{10}
\]


\[
=
\frac{800+200+50}{10}
\]


\[
=105
\]


---

# Cálculo del promedio general


\[
Promedio =
\frac{
Suma\ de\ puntuaciones
}
{
Cantidad\ de\ jugadores
}
\]


---

# Cálculo de mediana


Primero se ordenan los valores:


Ejemplo:

```text
65, 75, 105
```


Como existen tres valores:

```text
Mediana = valor central
```


Resultado:

```text
75
```


Si existen valores pares:


```text
Mediana =
(valor central 1 + valor central 2) / 2
```


---

# Reglas de validación


Un jugador es válido si:


\[
Partidas > 0
\]


\[
Kills \geq 0
\]


\[
Asistencias \geq 0
\]


\[
PuntosExtra \geq 0
\]


Si no cumple:

```text
Datos inválidos
```


---

# Caso normal


Entrada:

```javascript
{
 nombre:"CyberWolf",
 partidas:10,
 kills:80,
 asistencias:40,
 puntosExtra:50
}
```


Resultado:


```text
Puntuación:
105
```


---

# Caso borde


Entrada:

```javascript
{
 nombre:"JugadorNuevo",
 partidas:0,
 kills:10,
 asistencias:5,
 puntosExtra:2
}
```


Resultado:

```text
Datos inválidos
```


---

# Explicación final

La solución simula un sistema de análisis estadístico para un torneo de esports. Cada jugador recibe una puntuación basada en su desempeño, luego se calculan medidas estadísticas como promedio y mediana.

El programa aplica funciones, arreglos, ciclos, acumuladores y cálculos numéricos para transformar datos de jugadores en información útil para un ranking competitivo.