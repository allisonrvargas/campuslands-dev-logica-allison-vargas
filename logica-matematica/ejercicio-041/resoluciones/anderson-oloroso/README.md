# Plantilla de solucion

## Analisis

### Entrada

Un arreglo de jugadores con estadísticas competitivas:

Cada jugador contiene:

- `jugador`: nombre del participante.
- `victorias`: partidas ganadas.
- `derrotas`: partidas perdidas.
- `eliminaciones`: cantidad de enemigos derrotados.
- `asistencias`: ayudas realizadas.


### Proceso

1. Validar que los datos sean correctos.
2. Calcular la puntuación del jugador usando una fórmula.
3. Evitar resultados negativos.
4. Clasificar al jugador según sus puntos.
5. Acumular estadísticas generales.


### Salida

El programa entrega:

- puntos obtenidos por jugador.
- rango competitivo.
- cantidad total de puntos.
- comparación entre victorias y derrotas.

---

# Fórmula utilizada

La puntuación competitiva se calcula:

\[
Puntos =
(Victorias \times 100)
+
(Eliminaciones \times 10)
+
(Asistencias \times 5)
-
(Derrotas \times 20)
\]


Ejemplo:

Jugador:

- Victorias: 8
- Derrotas: 2
- Eliminaciones: 50
- Asistencias: 30


Cálculo:

\[
(8 \times 100)
+
(50 \times 10)
+
(30 \times 5)
-
(2 \times 20)
\]


\[
=800+500+150-40
\]


\[
=1410
\]


Resultado:

```text
Rango: Leyenda
```

---

# Reglas de negocio


## 1. Validación de estadísticas

Todos los valores deben cumplir:

\[
Valor \geq 0
\]


Si un dato es negativo:

```text
Datos inválidos
```


---

## 2. Control de puntos mínimos

Si la fórmula genera un valor negativo:

\[
Puntos = 0
\]


---

## 3. Clasificación competitiva


| Puntos | Rango |
|---|---|
| 1000 o más | Leyenda |
| 500 - 999 | Elite |
| 200 - 499 | Competitivo |
| Menos de 200 | Principiante |


---

# Prueba normal

Entrada:

```javascript
[
 {
  jugador:"Shadow",
  victorias:8,
  derrotas:2,
  eliminaciones:50,
  asistencias:30
 }
]
```


Salida esperada:

```javascript
{
 jugador:"Shadow",
 puntos:1410,
 rango:"Leyenda"
}
```


---

# Prueba borde

Entrada:

```javascript
[
 {
  jugador:"JugadorX",
  victorias:0,
  derrotas:10,
  eliminaciones:0,
  asistencias:0
 }
]
```


Cálculo:

\[
0+0+0-200= -200
\]


Como no existen puntos negativos:

```javascript
{
 puntos:0,
 rango:"Principiante"
}
```


---

# Explicación final

La solución representa un sistema de puntuación para videojuegos competitivos. A partir de estadísticas de rendimiento, calcula una puntuación controlada mediante una fórmula matemática y aplica reglas para determinar el nivel del jugador.

El ejercicio practica operaciones aritméticas, validaciones, condicionales, ciclos, acumuladores, funciones y arreglos para construir una simulación de ranking competitivo.