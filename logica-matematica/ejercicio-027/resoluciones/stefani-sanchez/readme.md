# Ejercicio 027 - Secuencias numéricas

## ¿Cómo pensé el problema?

Analicé que la entrada consiste en un número inicial y la cantidad de números que debe tener la secuencia. Después utilicé un ciclo para generar los valores consecutivos.

## Entradas

- Número inicial.
- Cantidad de elementos de la secuencia.

## Reglas aplicadas

- La secuencia inicia en el número indicado.
- Cada número aumenta en una unidad.
- Si la cantidad es menor o igual a cero, se muestra un mensaje de error.

## Salida

Una secuencia numérica generada de forma consecutiva.

## Casos de prueba

### Caso normal

Entrada:

```text
Inicio: 5
Cantidad: 6
```

Salida:

```text
[5, 6, 7, 8, 9, 10]
```

### Caso borde

Entrada:

```text
Inicio: 10
Cantidad: 0
```

Salida:

```text
La cantidad debe ser mayor que cero.
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```