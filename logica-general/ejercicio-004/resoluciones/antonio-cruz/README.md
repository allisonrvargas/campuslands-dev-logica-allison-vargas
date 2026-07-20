# Ejercicio 004 - Filtros por condiciones

## Analisis

### Entrada

* Un arreglo de motos.
* Cada moto tiene un modelo y un estado.

### Proceso

Se revisa cada moto del inventario.

Si el estado es **disponible**, se agrega al resultado.

Si el arreglo esta vacio, se devuelve un arreglo vacio.

### Salida

Un arreglo con las motos que estan disponibles.

---

## Reglas identificadas

* Solo se muestran las motos con estado **disponible**.
* Las motos vendidas o en mantenimiento no aparecen.
* Si no hay motos, el resultado sera un arreglo vacio.

---

## Como ejecutar

1. Abrir la carpeta del ejercicio.
2. Ejecutar el archivo con:

```bash
node eduardo-cruz.js
```

---

## Casos de prueba

### Caso normal

**Entrada**

```javascript
[
    { modelo: "FXR150", estado: "disponible" },
    { modelo: "FZ25", estado: "mantenimiento" },
    { modelo: "GN125", estado: "disponible" }
]
```

**Resultado esperado**

```text
[
    { modelo: "FXR150", estado: "disponible" },
    { modelo: "GN125", estado: "disponible" }
]
```

---

### Caso borde

**Entrada**

```javascript
[]
```

**Resultado esperado**

```text
[]
```

---

## Explicacion final

La solucion funciona porque revisa cada elemento del inventario y aplica una sola condicion para decidir si la moto debe formar parte del resultado. Tambien valida el caso donde no existen datos para evitar errores.
