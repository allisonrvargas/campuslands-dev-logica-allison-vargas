# Ejercicio 026 - Búsqueda de elementos

## ¿Cómo pensé el problema?

Primero identifiqué que la entrada sería una lista de autos y el modelo que se desea buscar. Luego definí la regla para recorrer la lista y comprobar si el modelo existe.

## Entradas

- Lista de autos.
- Modelo a buscar.

## Reglas aplicadas

- Recorrer la lista de autos.
- Comparar el modelo buscado con cada elemento.
- Si existe, mostrar la información del auto.
- Si no existe, indicar que no fue encontrado.
- Si la lista está vacía, mostrar un mensaje.

## Salida

Un mensaje indicando si el auto fue encontrado o no.

## Casos de prueba

### Caso normal

Entrada:

```text
Bugatti Chiron
Koenigsegg Jesko
Pagani Huayra

Buscar: Jesko
```

Salida:

```text
Auto encontrado: Jesko - Koenigsegg
```

### Caso borde

Entrada:

```text
[]
```

Salida:

```text
No hay autos registrados.
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```