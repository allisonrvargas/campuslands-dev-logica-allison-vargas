# Ejercicio 024 - Filtros por condiciones

## Temática

Inventario de motos.

## Cómo pensé el problema

Primero identifiqué que cada moto tiene información importante:

- Modelo.
- Disponibilidad.
- Precio.

Después definí las reglas para filtrar únicamente las motos disponibles y cuyo precio sea menor o igual al indicado.

## Reglas aplicadas

- La moto debe estar disponible.
- El precio debe ser menor o igual al precio máximo.
- Si no hay motos disponibles, se devuelve una lista vacía.

## Cómo ejecutar

1. Abrir la terminal.
2. Ir a la carpeta del ejercicio.
3. Ejecutar:

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Precio máximo: 8000.

Resultado:

- Yamaha MT-07.
- KTM Duke 390.

### Caso borde

Lista vacía.

Resultado:

No se encuentran motos disponibles.

## Conclusión

La solución utiliza un filtro basado en condiciones para seleccionar únicamente las motos que cumplen las reglas del inventario.