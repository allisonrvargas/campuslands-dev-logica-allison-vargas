# Logica General 021 - Clasificacion por reglas

## Autor

Stefani Sanchez

## Descripcion

Este ejercicio clasifica jugadores de videojuegos competitivos utilizando reglas basadas en victorias y derrotas.

## Entradas

La solucion recibe una lista de jugadores con:

- Nombre.
- Cantidad de victorias.
- Cantidad de derrotas.
- Nivel actual.

## Reglas aplicadas

- Si tiene 8 o mas victorias y máximo 3 derrotas:
  - Clasifica como jugador competitivo.

- Si tiene 5 o mas victorias:
  - Clasifica como jugador intermedio.

- Si no cumple las condiciones anteriores:
  - Clasifica como jugador en entrenamiento.

## Proceso

1. Revisar que existan jugadores.
2. Analizar victorias y derrotas.
3. Aplicar las reglas de clasificación.
4. Generar la categoría final.

## Salida

Muestra el nombre del jugador y su clasificación.

## Casos de prueba

### Caso normal

Entrada:

```javascript
[
 { nombre: "Alex", victorias: 10, derrotas: 2 },
 { nombre: "Sofia", victorias: 6, derrotas: 5 },
 { nombre: "Luis", victorias: 2, derrotas: 8 }
]
```

Salida:

```text
Alex - Jugador competitivo
Sofia - Jugador intermedio
Luis - Jugador en entrenamiento
```

### Caso borde

Entrada:

```javascript
[]
```

Salida:

```text
No hay jugadores para clasificar.
```

## Como ejecutar

```bash
node stefani-sanchez.js
```