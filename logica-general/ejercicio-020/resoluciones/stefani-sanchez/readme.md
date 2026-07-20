# Logica General 020 - Estrategias de seleccion

## Autor

Stefani Sanchez

## Descripcion

Este ejercicio selecciona la mejor opcion de comida urbana tomando en cuenta un presupuesto y la popularidad de cada producto.

## Entradas

La solucion recibe:

- Lista de comidas disponibles.
- Nombre de la comida.
- Precio.
- Nivel de popularidad.
- Presupuesto disponible.

## Reglas aplicadas

- Solo participan comidas que no superen el presupuesto.
- Si existen varias opciones, se selecciona la de mayor popularidad.
- Si no hay opciones disponibles, se muestra un mensaje.

## Proceso

1. Revisar que exista una lista de comidas.
2. Filtrar comidas según el presupuesto.
3. Ordenar las opciones por popularidad.
4. Seleccionar la mejor alternativa.
5. Mostrar el resultado.

## Salida

La salida muestra la comida recomendada según las reglas.

## Casos de prueba

### Caso normal

Entrada:

```javascript
presupuesto = 30
```

Datos:

```javascript
[
 { nombre: "Hamburguesa", precio: 35, popularidad: 8 },
 { nombre: "Tacos", precio: 20, popularidad: 9 },
 { nombre: "Hot Dog", precio: 15, popularidad: 6 }
]
```

Salida:

```text
Tacos
```

### Caso borde

Entrada:

```javascript
[]
```

Salida:

```text
No hay comidas disponibles.
```

## Como ejecutar

```bash
node stefani-sanchez.js
```