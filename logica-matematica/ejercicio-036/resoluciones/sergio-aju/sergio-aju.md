# Resolución Ejercicio-036 - Presupuestos 3D

## Autor:

Sergio Ajú

## Pensamiento del problema
Para este ejercicio, el presupuesto se calcula sumando el costo individual de los servicios de animación y aplicando un descuento porcentual sobre el total acumulado.

## Reglas aplicadas
1. **Sumatoria**: Se suman los precios de todos los servicios contenidos en el arreglo.
2. **Descuento**: Se aplica un porcentaje sobre la suma total: `total = suma - (suma * descuento / 100)`.
3. **Categorización**: Se define el tipo de proyecto basándose en el costo final obtenido.

## Cómo ejecutar
1. Tener instalado Node.js.
2. Ejecutar en la terminal: `node sergio-aju.js`.

## Casos de prueba
- **Caso Normal**: Dos servicios de 300 y 400 con 10% de descuento. Total: 700 - 70 = 630.
- **Caso Borde**: Arreglo vacío con 0% descuento. Total: 0.