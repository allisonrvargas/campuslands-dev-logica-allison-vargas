# Logica General 022 - Validacion de datos

## Autor

Stefani Sanchez

## Descripcion

Este ejercicio valida datos de un ranking de futbol sala verificando que la información de los equipos sea correcta y consistente.

## Entradas

La solucion recibe una lista con:

- Nombre del equipo.
- Cantidad de partidos jugados.
- Cantidad de victorias.
- Cantidad de goles.

## Reglas aplicadas

- Si no hay partidos jugados, los datos son invalidos.
- Si existen valores negativos, los datos son invalidos.
- Si las victorias son mayores que los partidos jugados, los datos son inconsistentes.
- Si cumple las condiciones, los datos son validos.

## Proceso

1. Recibir la lista de equipos.
2. Revisar que existan datos.
3. Validar cada valor.
4. Comparar partidos y victorias.
5. Mostrar el estado de cada equipo.

## Salida

Muestra el nombre del equipo y el resultado de la validacion.

## Casos de prueba

### Caso normal

Entrada:

```javascript
[
 { nombre: "Guerreros FC", partidos: 10, victorias: 8, goles: 25 },
 { nombre: "Titanes FS", partidos: 10, victorias: 5, goles: 15 }
]
```

Salida:

```text
Guerreros FC - Datos validos
Titanes FS - Datos validos
```

### Caso borde

Entrada:

```javascript
[]
```

Salida:

```text
No existen datos para validar.
```

## Como ejecutar

```bash
node stefani-sanchez.js
```