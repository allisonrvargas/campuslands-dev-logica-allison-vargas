# Ejercicio 007 - Deteccion de inconsistencias

## Analisis

### Entrada

* Un arreglo con canciones.
* Cada cancion tiene un titulo, un artista y una duracion.

### Proceso

Se recorre la playlist revisando cada cancion.

Se verifica que el titulo no este vacio, que el artista exista y que la duracion sea mayor que cero.

Cada error encontrado se guarda en una lista.

### Salida

Un arreglo con las inconsistencias encontradas.

---

## Reglas identificadas

* Toda cancion debe tener titulo.
* Toda cancion debe tener artista.
* La duracion debe ser mayor que cero.
* Si la playlist esta vacia, se informa al usuario.

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

Una playlist con canciones que tienen datos incompletos.

**Resultado esperado**

Se muestra un arreglo con todas las inconsistencias encontradas.

---

### Caso borde

**Entrada**

```javascript
[]
```

**Resultado esperado**

```text
["La playlist esta vacia."]
```

---

## Explicacion final

La solucion funciona porque revisa cada cancion una por una y valida las reglas establecidas. Cuando encuentra un dato incorrecto, lo agrega a una lista de errores para mostrar todas las inconsistencias al finalizar.
