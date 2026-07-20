# Plantilla de solucion

## Analisis

- **Entrada:**
  - Una matriz bidimensional (`Array<Array<Number>>`) que representa una escena de animación 3D.
  - Cada posición almacena:
    - `1`: existe un objeto visible.
    - `0`: la posición está vacía.

- **Proceso:**
  - Validar que la matriz no esté vacía.
  - Recorrer cada fila y columna.
  - Contar cuántos objetos activos existen.
  - Contar las posiciones vacías.
  - Registrar las coordenadas donde aparecen objetos activos.

- **Salida:**
  - Un objeto con:
    - Número de filas.
    - Número de columnas.
    - Cantidad de objetos activos.
    - Cantidad de espacios vacíos.
    - Lista de coordenadas donde existen objetos.

## Reglas identificadas

1. La matriz debe contener al menos una fila.

2. Cada posición únicamente puede representar:

- `1` → Objeto activo.
- `0` → Espacio vacío.

3. Se debe recorrer completamente la matriz utilizando ciclos anidados.

4. Cada objeto activo incrementa el contador correspondiente.

5. Cada espacio vacío incrementa el contador de posiciones inactivas.

6. Las coordenadas de cada objeto activo se almacenan como:

```text
(fila, columna)
```

7. El recorrido finaliza cuando todas las filas y columnas han sido evaluadas.

## Pruebas

### Caso normal

Entrada:

```javascript
const escena3D = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 1, 0]
];
```

Resultado esperado:

```javascript
{
  filas: 3,
  columnas: 3,
  objetosActivos: 5,
  objetosInactivos: 4,
  posicionesActivas: [
    { fila: 0, columna: 0 },
    { fila: 0, columna: 2 },
    { fila: 1, columna: 1 },
    { fila: 2, columna: 0 },
    { fila: 2, columna: 1 }
  ]
}
```

### Caso borde

Entrada:

```javascript
const escena3D = [];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "La matriz de la escena está vacía."
}
```

## Explicacion final

La solución simula el análisis de una escena de animación 3D representada mediante una matriz bidimensional. Cada celda indica si existe un objeto visible o un espacio vacío, permitiendo recorrer toda la escena para obtener estadísticas generales.

El algoritmo utiliza ciclos anidados para inspeccionar cada posición de la matriz, contabiliza objetos activos e inactivos y registra las coordenadas de cada elemento visible. Este tipo de recorrido es ampliamente utilizado en motores gráficos, videojuegos y procesamiento de imágenes, donde las escenas suelen representarse mediante matrices.

La implementación hace uso de funciones, arreglos, matrices, ciclos, acumuladores y condicionales, proporcionando una solución organizada, reutilizable y fácil de verificar.