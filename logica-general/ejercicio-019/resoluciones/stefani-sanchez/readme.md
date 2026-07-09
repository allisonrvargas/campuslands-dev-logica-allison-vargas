# Logica General 019 - Inventarios logicos

## Autor

Stefani Sanchez

## Descripcion

Este ejercicio consiste en revisar un inventario de formulas quimicas y clasificar cada elemento según la cantidad disponible.

## Entradas

Una lista con:

- Nombre de la formula quimica.
- Cantidad disponible.

## Reglas aplicadas

- Si la cantidad es igual a 0, el producto esta agotado.
- Si la cantidad es menor o igual a 5, tiene bajo inventario.
- Si la cantidad es mayor a 5, esta disponible.

## Proceso

1. Recibir la lista de formulas.
2. Revisar la cantidad de cada elemento.
3. Aplicar las reglas de inventario.
4. Mostrar el estado de cada formula.

## Salida esperada

Una lista indicando:

- Formula.
- Cantidad.
- Estado actual.

## Casos de prueba

### Caso normal

Entrada:

```javascript
[
 { formula: "H2O", cantidad: 15 },
 { formula: "CO2", cantidad: 5 },
 { formula: "NaCl", cantidad: 0 }
]
```

Salida:

```text
H2O - Disponible
CO2 - Bajo inventario
NaCl - Agotado
```

### Caso borde

Entrada:

```javascript
[]
```

Salida:

```text
Inventario vacio.
```

## Como ejecutar

```bash
node stefani-sanchez.js
```