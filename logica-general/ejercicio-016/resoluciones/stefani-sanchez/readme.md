# Solucion ejercicio 016 - Matrices simples

## Como pense el problema

El problema consiste en recorrer una matriz que representa una escena de animación 3D. Se visitan todos los elementos fila por fila y se almacenan en una lista.

## Entradas

- Una matriz con los elementos de la escena.

## Reglas aplicadas

1. La matriz debe contener datos.
2. Se recorren todas las filas y columnas.
3. Cada elemento encontrado se agrega al resultado.
4. Si la matriz está vacía, se muestra un mensaje.

## Salidas

- Lista con todos los elementos de la escena.
- Mensaje cuando la matriz está vacía.

## Como ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Resultado esperado:

```text
[
  "Camara",
  "Luz",
  "Personaje",
  "Arbol",
  "Casa",
  "Auto",
  "Cielo",
  "Montaña",
  "Rio"
]
```

### Caso borde

Resultado esperado:

```text
La escena esta vacia.
```