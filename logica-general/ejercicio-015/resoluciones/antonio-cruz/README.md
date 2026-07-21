# Ejercicio 015 - Reglas de negocio

## Analisis

### Entrada

* Un objeto con la informacion de un dibujo digital.
* Se recibe la resolucion, el formato y si el contenido es original.

### Proceso

Se aplican las reglas de la plataforma en el orden establecido.

Si alguna regla no se cumple, el dibujo no puede publicarse.

Si todas las reglas son correctas, la publicacion es aprobada.

### Salida

Un mensaje indicando si el dibujo puede publicarse o la regla que no se cumplio.

---

## Reglas identificadas

* La resolucion minima es de 300 dpi.
* El formato permitido es png.
* El dibujo debe ser original.
* Si todas las reglas se cumplen, la publicacion es aprobada.

---

## Como ejecutar

1. Abrir la carpeta del ejercicio.
2. Ejecutar:

```bash
node eduardo-cruz.js
```

---

## Casos de prueba

### Caso normal

**Entrada**

```javascript
{
    titulo: "Ilustracion",
    resolucion: 300,
    formato: "png",
    contenidoOriginal: true
}
```

**Resultado esperado**

```text
El dibujo puede publicarse.
```

### Caso borde

**Entrada**

```javascript
{
    titulo: "Boceto",
    resolucion: 150,
    formato: "jpg",
    contenidoOriginal: true
}
```

**Resultado esperado**

```text
El dibujo no cumple la resolucion minima.
```

---

## Explicacion final

La solucion funciona porque aplica las reglas de la plataforma una por una. Cada validacion representa una regla de negocio y determina si el dibujo puede publicarse o debe rechazarse.
