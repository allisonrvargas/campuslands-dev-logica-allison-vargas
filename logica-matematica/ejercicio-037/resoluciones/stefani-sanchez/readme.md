# Ejercicio 037 - Estadísticas de Ranking

## ¿Cómo pensé el problema?

Primero recorrí la lista de puntajes para obtener la suma, el valor mayor y el menor. Después calculé el promedio y clasifiqué el resultado según el rendimiento obtenido.

---

## Reglas aplicadas

- La lista de puntajes no puede estar vacía.
- Se calcula:
  - Promedio.
  - Puntaje mayor.
  - Puntaje menor.
- Clasificación:
  - Promedio mayor o igual a 90 → Excelente.
  - Promedio entre 70 y 89.99 → Competitivo.
  - Promedio menor a 70 → En desarrollo.

---

## ¿Cómo ejecutar?

1. Abrir una terminal.
2. Entrar a la carpeta del ejercicio.
3. Ejecutar:

```bash
node stefani-sanchez.js
```

---

## Casos probados

### Caso normal

Entrada:

```
[92, 85, 88, 95, 90]
```

Salida:

- Promedio: 90
- Mayor: 95
- Menor: 85
- Clasificación: Excelente

### Caso borde

Entrada:

```
[]
```

Salida:

Mensaje de error indicando que la lista está vacía.

---

## Explicación

La solución utiliza un recorrido del arreglo para calcular estadísticas básicas del ranking y clasifica el rendimiento de acuerdo con el promedio obtenido.